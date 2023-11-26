import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { GeneralContext } from '../../App';
import DarkMode from '../DarkMode';
import NavbarSearch from './components/NavbarSearch';
import NavbarMenuSide from './components/navbarMenuSide/NavbarMenuSide';
import NavbarMobile from './components/navbarMobile/NavbarMobile';
import SearchMobile from './components/SearchMobile';
import NavbarMenuMain from './components/navbarMenuMain/NavbarMenuMain';
import NavbarBottomLine from './components/NavbarBottomLine';

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [navbarBottomLine, setNavbarBottomLine] = useState(true);
    const { SearchInput, setSearchInput, user, setUser, setLoader, userRoleType, setUserRoleType, snackbar, setFirsTimeUser, thisPage, setDarkMode, darkMode, sORm, setProfilePage, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    return (
        <GeneralContext.Provider value={{ setAnchorElNav, setSearchInput, userRoleType, user, setUser, setLoader, setUserRoleType, snackbar, setFirsTimeUser, setDarkMode, darkMode, SearchInput, thisPage, anchorElNav, anchorElUser, setAnchorElUser, setNavbarBottomLine, sORm, setProfilePage, navbarBottomLine, openNavbarMenuSide, setOpenNavbarMenuSide }}>
            <div className='navbarContainer'>
                <AppBar className={openNavbarMenuSide ? 'navbarMain rightSideOpenMenu' : 'navbarMain'}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <div className='leftSide'>
                                <NavbarMobile />
                                <NavbarMenuMain />
                            </div>
                            <div className='rightSide'>
                                <NavbarSearch />
                                <NavbarMenuSide />
                                <DarkMode />
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
                <SearchMobile />
                <NavbarBottomLine />
            </div>
        </GeneralContext.Provider>
    );
}
