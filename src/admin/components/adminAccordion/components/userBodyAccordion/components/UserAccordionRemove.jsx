import { useContext } from "react";
import { GeneralContext } from "../../../../../../App";
import { Button, Tooltip } from "@mui/material";

export default function UserAccordionRemove( props ) {
    const { allUsers, setAllUsers, setLoader, snackbar } = useContext(GeneralContext);

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
        <div className="centerTypography">
            <Tooltip
                title='Delete User'
                className='iconFotterHover'
                placement="top"
            >
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ width: '100px', height: '36px' }}
                    onClick={() => removeUser(props.userData.id)}
                >
                    <div className="remove" >❌</div>
                </Button>
            </Tooltip>
        </div>
    );
}