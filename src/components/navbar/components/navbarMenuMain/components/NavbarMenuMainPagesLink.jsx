import { useContext } from 'react';
import { Link, useResolvedPath } from 'react-router-dom';
import { GeneralContext } from '../../../../../App';
import { Button } from '@mui/material';
import { checkPermissions, pages } from '../../RoleTypes';

export default function NavbarMenuMainPagesLink() {
    const { setSearchInput, userRoleType, setAnchorElNav, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);
    const path = useResolvedPath().pathname;

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        clearSearchInput();
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };
    const clearSearchInput = () => {
        setSearchInput('');
    };

    return (
        <div className='flexMainNavbar'>
            {pages.filter(p => !p.permissions || checkPermissions(p.permissions, userRoleType)).map(p => (
                <Link key={p.route} to={p.route} style={{ textDecoration: 'none', color: 'white' }}>
                    <Button
                        className={
                            p.route === path ?
                                'navbarButton navbarButtonActive' :
                                'navbarButton'
                        }
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block',
                        }}
                    >
                        <div className='titlePageName'>
                            {p.title}
                        </div>
                    </Button>
                </Link>
            ))}
        </div>
    );
}