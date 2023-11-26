import { useContext } from "react";
import { GeneralContext } from "../../../../App";
import { Button } from "@mui/material"

export default function UserTableRemove( props ) {
    const { setLoader, setAllUsers, allUsers, snackbar } = useContext(GeneralContext);

    const removeUser = ((ev) => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/admin/clients/${ev}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(() => {
            setLoader(false);
            setAllUsers(allUsers.filter(s => s.id != 373).filter(s => s.id != ev));
            snackbar(`The user removed`);
        })
        .catch(err => snackbar(err.message));
    });

    return (
        <td>
            <Button
                fullWidth
                variant="contained"
                sx={{ width: '100px', height: '36px' }}
                onClick={() => removeUser(props.userData.id)}
                className='linkButton'
            >
                <div className="remove">❌</div>
            </Button>
        </td>
    );
}