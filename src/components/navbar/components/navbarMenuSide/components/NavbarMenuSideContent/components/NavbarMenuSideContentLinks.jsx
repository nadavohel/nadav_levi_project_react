import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link, useResolvedPath } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../../App';
import { checkPermissions, settings } from '../../../../RoleTypes';

export default function NavbarMenuSideContentLinks() {
    const path = useResolvedPath().pathname;
    const { userRoleType, setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
        <div>
            {settings.filter(s => !s.permissions || checkPermissions(s.permissions, userRoleType)).map(s => (
                <div
                    className='rowSideMenuNavbarBox'
                    key={s.route}
                >
                    <Link
                        to={s.route}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
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
