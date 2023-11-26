import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../App';

export default function HandleSubmitAddMoment({ children }) {
    const navigate = useNavigate();
    const { setLoader, snackbar, formData } = useContext(GeneralContext);

    const addMomentHandleSubmit = ev => {
        ev.preventDefault();
        const obj = { ...formData };
        setLoader(true);

        fetch(`https://api.shipap.co.il/business/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
        .then(res => res.json())
        .then(() => {
            navigate('/my-moments');
            snackbar(`The moment successfully added`);
        })
        .catch(err => snackbar(err.message))
        .finally(() => setLoader(false));
    };

    return (
        <Box
            component="form"
            className='fromContainer'
            onSubmit={addMomentHandleSubmit}
            noValidate sx={{ mt: 1 }}
        >
            {children}
        </Box>
    );
}