import Box from '@mui/material/Box';
import NavbarMobileMenuContent from './components/navbarMobileMenuContent/NavbarMobileMenuContent';
import NavbarMobileMenu from './components/NavbarMobileMenu';
import NavbarMobileLogo from './components/NavbarMobileLogo';

export default function NavbarMobile() {

    return (
        <div className='navbarMobile'>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <NavbarMobileLogo />
                <NavbarMobileMenu>
                    <NavbarMobileMenuContent />
                </NavbarMobileMenu>
            </Box>
        </div>
    );
}