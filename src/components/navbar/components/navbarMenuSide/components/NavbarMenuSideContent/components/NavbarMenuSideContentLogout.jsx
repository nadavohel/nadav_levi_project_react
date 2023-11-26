import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../../App';
import { RoleTypes } from '../../../../RoleTypes';

export default function NavbarMenuSideContentLogout() {
    const navigate = useNavigate();
    const { user, setUser, setLoader, setUserRoleType, snackbar, setFirsTimeUser, setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    const logout = () => {
        setLoader(true);
        setFirsTimeUser(true);
        fetch(`https://api.shipap.co.il/clients/logout`, {
            credentials: 'include',
        })
        .then(() => {
            setUser();
            setUserRoleType(RoleTypes.none);
            setLoader(false);
            setUser({
                email: '',
            });
            navigate('/');
            snackbar(`${user.fullName} is logout`);
        })
        .catch(err => snackbar(err.message));
        handleCloseUserMenu();
    }

    return (
        <div className='rowSideMenuNavbarBox'>
            <MenuItem
                onClick={logout}
                className='rowSideMenuNavbar'
            >
                <Typography textAlign="center">
                    <span className='titleNenuSideName'>
                        Logout
                    </span>
                </Typography>
            </MenuItem>
        </div>
    );
}
