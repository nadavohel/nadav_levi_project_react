import Box from '@mui/material/Box';
import NavbarMenuMainPagesLink from './components/NavbarMenuMainPagesLink';

export default function NavbarMenuMain() {

    return (
        <div className='navbarMenuMain'>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <NavbarMenuMainPagesLink />
            </Box>
        </div>
    );
}