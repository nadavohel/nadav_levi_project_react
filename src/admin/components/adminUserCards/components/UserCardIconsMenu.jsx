import { useContext } from "react";
import { GeneralContext } from "../../../../App";
import { CardActions, IconButton, Tooltip } from "@mui/material";
import { RiClipboardFill } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function UserCardIconsMenu( props ) {
    const { setUserMomentByAdmin, setLoader, setAllUsers, allUsers, snackbar } = useContext(GeneralContext);
    const navigate = useNavigate();

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

    const showAllThisUserMoments = (emaila, firstNamee) => {
        setUserMomentByAdmin({
            email: emaila,
            firstName: firstNamee,
        });
        navigate('/user-moments-by-id');
    };

    return (
        <>
            <CardActions disableSpacing className="userCardIconsMenuContainer">
                <div
                    onClick={() =>
                        showAllThisUserMoments(props.userData.email, props.userData.firstName)
                    }
                >
                    <Tooltip title="All User Cards">
                        <IconButton aria-label="share">
                            <RiClipboardFill style={{ fontSize: '28px' }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <Tooltip
                    title="Delete User"
                    onClick={() => { removeUser(props.userData.id) }}
                >
                    <IconButton aria-label="share">
                        <TiUserDelete style={{ fontSize: '28px' }} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </>
    );
}