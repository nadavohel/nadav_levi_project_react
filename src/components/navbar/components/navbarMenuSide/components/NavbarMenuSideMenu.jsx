import { useContext } from 'react';
import Menu from '@mui/material/Menu';
import { GeneralContext } from '../../../../../App';

export default function NavbarMenuSideMenu({ children }) {
    const { anchorElUser, setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
        <div className='navbarMenuSideMenu'>
            <Menu
                sx={{ mt: '45px', width: '400px', overflow: 'visible' }}
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
                <div>{children}</div>
            </Menu>
        </div>

    );
}
