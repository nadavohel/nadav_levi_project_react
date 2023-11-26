import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../App';

export default function HandleSubmitSignup({ children }) {
    const navigate = useNavigate();
    const { setLoader, snackbar, formData } = useContext(GeneralContext);

    const signupHandleSubmit = ev => {
        const premiumChecked = document.getElementById("premium").checked;
        ev.preventDefault();
        const obj = { ...formData, business: premiumChecked };
        setLoader(true);
        fetch(`https://api.shipap.co.il/clients/signup?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(() => {
            navigate('/login');
            snackbar(`User successfully created`);
        })
        .catch(err => snackbar(err.message))
        .finally(() => setLoader(false));
    };

    return (
        <Box
            component="form"
            className='fromContainer'
            onSubmit={signupHandleSubmit}
            noValidate sx={{ mt: 1 }}
        >
            {children}
        </Box>
    );
}