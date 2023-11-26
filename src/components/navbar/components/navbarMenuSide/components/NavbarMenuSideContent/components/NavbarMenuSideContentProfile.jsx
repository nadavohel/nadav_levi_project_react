import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../../App';

export default function NavbarMenuSideContentProfile() {
    const { setAnchorElUser, setProfilePage, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    const openProfile = (() => {
        setProfilePage(true);
        handleCloseUserMenu();
    });

    return (
        <div className='rowSideMenuNavbarBox'>
            <MenuItem
                onClick={openProfile}
                className='rowSideMenuNavbar'
            >
                <Typography textAlign="center">
                    <span className='titleNenuSideName'>Profile</span>
                </Typography>
            </MenuItem>
        </div>
    );
}
