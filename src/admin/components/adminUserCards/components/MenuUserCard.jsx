import { useContext } from "react";
import { GeneralContext } from "../../../../App";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MenuUserCard( props ) {
    const { anchorElUser, setAnchorElUser, setUserMomentByAdmin, setLoader, setAllUsers, allUsers, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar } = useContext(GeneralContext);
    const navigate = useNavigate();

    const showAllThisUserMoments = (emaila, firstNamee) => {
        setUserMomentByAdmin({
            email: emaila,
            firstName: firstNamee,
        });
        navigate('/user-moments-by-id');
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

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
        <>
            <Menu
                sx={{ mt: '45px', width: '210px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <div onClick={() => showAllThisUserMoments(props.userData.email, props.userData.firstName)}>
                    <MenuItem 
                        onClick={handleCloseUserMenu}
                        className='rowSideMenuUserCardBox'
                    >
                        <Typography 
                            textAlign="center"
                            className='titleNenuSideName'
                        >
                            All User Cards
                        </Typography>
                    </MenuItem>
                </div>
                <div onClick={() => { removeUser(props.userData.id) }}>
                    <MenuItem 
                        onClick={handleCloseUserMenu}
                        className='rowSideMenuUserCardBox'
                    >
                        <Typography 
                            textAlign="center"
                            className='titleNenuSideName'
                        >
                                Delete User
                        </Typography>
                    </MenuItem>
                </div>
            </Menu>
        </>
    );
}