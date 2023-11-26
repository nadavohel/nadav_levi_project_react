import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { GeneralContext } from '../../../../../App';

export default function NavbarMobileLogo() {
    const { setAnchorElNav, setNavbarBottomLine, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        setNavbarBottomLine(false);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
    );
}