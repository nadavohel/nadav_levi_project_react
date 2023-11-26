import { useContext } from 'react';
import Menu from '@mui/material/Menu';
import { GeneralContext } from '../../../../../App';

export default function NavbarMobileMenu({ children }) {
    const { setSearchInput, anchorElNav, setAnchorElNav, setNavbarBottomLine, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        clearSearchInput();
        setNavbarBottomLine(true);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    const clearSearchInput = () => {
        setSearchInput('');
    };

    return (
        <Menu
            sx={{ mt: '45px', overflow: 'visible' }}
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
        >
            <div>{children}</div>
        </Menu>
    );
}