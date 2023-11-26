import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link, useResolvedPath } from 'react-router-dom';
import { checkPermissions, pages } from '../../../../RoleTypes';
import { GeneralContext } from '../../../../../../../App';

export default function LinkPagesOnMenuNavbarMobile() {
    const path = useResolvedPath().pathname;
    const { setSearchInput, userRoleType, setAnchorElNav, setNavbarBottomLine, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

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
        <div>
            {pages.filter(s => !s.permissions || checkPermissions(s.permissions, userRoleType)).map(s => (
                <div
                    className='rowSideMenuNavbarBox'
                    key={s.route}
                >
                    <Link
                        to={s.route}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography
                                textAlign="center"
                                className={
                                    s.route === path ?
                                        'rowSideMenuNavbarActive' :
                                        'rowSideMenuNavbar'
                                }
                            >
                                <span className='titleNenuSideName'>
                                    {s.title}
                                </span>
                            </Typography>
                        </MenuItem>
                    </Link>
                </div>
            ))}
        </div>
    );
}
