import { createContext, useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/navbar/Navbar';
import Router from './Router';
import Snackbar from './components/Snackbar';
import Footer from './components/footer/Footer';
import MyProfile from './components/myProfile/MyProfile';
import { RoleTypes } from './components/navbar/components/RoleTypes';
import { useNavigate } from 'react-router-dom';

export const GeneralContext = createContext();
function App() {
    const [user, setUser] = useState({
        email: '',
    });
    const [loader, setLoader] = useState(true);
    const [userRoleType, setUserRoleType] = useState(RoleTypes.none);
    const [SearchInput, setSearchInput] = useState('');
    const [thisPage, setThisPage] = useState('home');
    const [snackbarText, setSnackbarText] = useState('');
    const [darkMode, setDarkMode] = useState();
    const [profilePage, setProfilePage] = useState(false);
    const [sORm, setSORm] = useState(''); 
    const [fotterTooltipBox, setFotterTooltipBox] = useState(false);
    const [displayMomentStatus, setDisplayMomentStatus] = useState('card');
    const [firsTimeUser, setFirsTimeUser] = useState(true);
    const [popUpChatch, setPopUpChatch] = useState(true);
    const [openNavbarMenuSide, setOpenNavbarMenuSide] = useState(false);
    const [userMomentByAdmin, setUserMomentByAdmin] = useState({
        email: '',
        userName: '',
    });
    const [deleteRefresh, setDeleteRefresh] = useState(true);
    const navigate = useNavigate();

    const snackbar = text => {
        setSnackbarText(text);
        setTimeout(() => setSnackbarText(''), 4 * 1000);
    }

    useEffect(() => {
        if (darkMode) {
            setSORm('Sun');
        } else {
            setSORm('Moon');
        }
    }, [darkMode]);

    useEffect(() => {
            document.documentElement.className = `html${sORm}`;
    }, [sORm]);

    useEffect(() => {
        document.body.id = 'bodyId';
        if (darkMode) {
            setSORm('Sun');
        } else {
            setSORm('Moon');
        }
        document.title = "moment of socer"
        fetch(`https://api.shipap.co.il/clients/login`, {
            credentials: 'include',
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(data => {
            setUser(data);
            setUserRoleType(RoleTypes.user);

            if (data.business) {
                setUserRoleType(RoleTypes.business);
            } else if (data.admin) {
                setUserRoleType(RoleTypes.admin);
            }

            snackbar(data.fullName + ' LogIn');
        })
        .catch(err => {
            setUserRoleType(RoleTypes.none);
            navigate(`/`);
            snackbar(err.message);
        })
        .finally(() => {
            setLoader(false)
        });
    }, []);

    return (
        <main id='bodyId'>
            < GeneralContext.Provider value={{ SearchInput, setSearchInput, user, setUser, setLoader, userRoleType, setUserRoleType, thisPage, setThisPage, snackbar, setDarkMode, darkMode, firsTimeUser, setFirsTimeUser, userMomentByAdmin, setUserMomentByAdmin, displayMomentStatus, setDisplayMomentStatus, deleteRefresh, setDeleteRefresh, setFotterTooltipBox, sORm, fotterTooltipBox, profilePage, setProfilePage, openNavbarMenuSide, setOpenNavbarMenuSide, popUpChatch, setPopUpChatch }}>
                <div className={`mainContainer${sORm} mainContainer`} id='mainId'>
                    <div className='bodyBox'>
                        <div className='navBarBackground'></div>
                        <Navbar />
                        <MyProfile />
                        <Router />
                        <div className='footerSpace'></div>
                    </div>
                    <div className='scroolBar'></div>
                </div>
                <Footer />
                {loader && <Loader />}
                {snackbarText && <Snackbar text={snackbarText} />}
            </GeneralContext.Provider>
        </main>
    );
}

export default App;