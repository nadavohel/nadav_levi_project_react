import { useContext } from 'react';
import Box from '@mui/material/Box';
import { GeneralContext } from '../../../../App';
import NavbarMenuSideMenu from './components/NavbarMenuSideMenu';
import NavbarMenuSideLogo from './components/NavbarMenuSideLogo';
import NavbarMenuSideContent from './components/NavbarMenuSideContent/NavbarMenuSideContent';

export default function NavbarMenuSide() {
    const { user } = useContext(GeneralContext);

    return (
        <div className='navbarMenuSide'>
            {
                user.id ?
                    <Box sx={{ flexGrow: 0 }}>
                        <NavbarMenuSideLogo />
                        <NavbarMenuSideMenu>
                            <NavbarMenuSideContent />
                        </NavbarMenuSideMenu>
                    </Box> : ''
            }
        </div>
    );
}
