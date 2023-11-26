import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../App';

export default function HandleSubmitAccount({ children }) {
    const navigate = useNavigate();
    const { setLoader, snackbar, user, formData } = useContext(GeneralContext);

    const accountHandleSubmit = (ev) => {
        ev.preventDefault();
        const obj = { ...formData, business: user.business };
        setLoader(true);

        fetch(`https://api.shipap.co.il/clients/update?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
        .then(() => {
            navigate('/');
            setLoader(false);
        })
        .catch(err => snackbar(err.message))
        .finally(() => {
            window.location.reload(false);
            snackbar(`${user.fullName}'s details have been successfully updated`);
        });
    };

    return (
        <Box
            component="form"
            className='fromContainer'
            onSubmit={accountHandleSubmit}
            noValidate sx={{ mt: 1 }}
        >
            {children}
        </Box>
    );
}