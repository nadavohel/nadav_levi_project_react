import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../../../../../../../App';
import { RoleTypes } from '../../../../RoleTypes';

export default function LogOutOnMenuNavbarMobile() {
    const navigate = useNavigate();
    const { setSearchInput, setAnchorElNav, setNavbarBottomLine, setUser, user, setLoader, setFirsTimeUser, setUserRoleType, snackbar, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        clearSearchInput();
        setNavbarBottomLine(true);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    const clearSearchInput = () => {
        setSearchInput('');
    };

    const logout = () => {
        const name = user.fullName;
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
            snackbar(`${name} is logout`);
        })
        .catch(err => snackbar(err.message));
        handleCloseNavMenu();
    }

    return (
        <div className='rowSideMenuNavbarBox' >
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