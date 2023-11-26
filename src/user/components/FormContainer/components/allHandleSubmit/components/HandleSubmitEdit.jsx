import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../App';
import { editToMomentRequirements } from '../../../../allFormsData/AllFormsDataEditToMoment';

export default function HandleSubmitEdit(props) {
    const navigate = useNavigate();
    const { setLoader, snackbar } = useContext(GeneralContext);

    const editToMomentHandleSubmit = ev => {
        ev.preventDefault();
        const obj = {};
        const elements = ev.target.elements;
        editToMomentRequirements.forEach(s => {
            obj[s.name] = elements[s.name].value;
        });
        setLoader(true);
        fetch(`https://api.shipap.co.il/business/cards/${props.id}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
        .then(() => {
            navigate('/my-moments');
            snackbar(`The moment successfully updated`);
        })
        .catch(err => snackbar(err.message))
        .finally(() => {
            setLoader(false)
        });
    };

    return (
        <Box
            component="form"
            className='fromContainer'
            onSubmit={editToMomentHandleSubmit}
            noValidate sx={{ mt: 1 }}
        >
            {props.children}
        </Box>
    );
}