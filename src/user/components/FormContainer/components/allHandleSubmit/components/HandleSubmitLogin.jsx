import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../App';
import { RoleTypes } from '../../../../../../components/navbar/components/RoleTypes';

export default function HandleSubmitLogin({ children }) {
    const navigate = useNavigate();
    const { setUser, setLoader, snackbar, setUserRoleType, formData } = useContext(GeneralContext);

    const loginHandleSubmit = (ev) => {
        ev.preventDefault();
        const obj = { ...formData };
        setLoader(true);

        fetch(`https://api.shipap.co.il/clients/login?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
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
        .then(data => {
            setUser(data);
            setUserRoleType(RoleTypes.user);

            if (data.business) {
                setUserRoleType(RoleTypes.business);
            } else if (data.admin) {
                setUserRoleType(RoleTypes.admin);
            }
            navigate('/');
            snackbar(data.fullName + ' successfully LogIn');
        })
        .catch(err => snackbar(err.message))
        .finally(() => {
            navigate('/');
            setLoader(false)
        });
    };

    return (
        <Box
            component="form"
            className='fromContainer'
            onSubmit={loginHandleSubmit}
            noValidate sx={{ mt: 1 }}
        >
            {children}
        </Box>
    );
}