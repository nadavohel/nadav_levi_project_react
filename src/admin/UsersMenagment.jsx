import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";
import DisplayMoment from "../components/displayMoment/DisplayMoment";
import AdminTable from "./components/adminTable/AdminTable";
import AdminAccordion from "./components/adminAccordion/AdminAccordion";
import { useNavigate } from "react-router-dom";
import AdminUserCards from "./components/adminUserCards/AdminUserCards";

export default function UsersMenagment() {
    const { setThisPage, setLoader, setSearchInput, setUserMomentByAdmin, displayMomentStatus, setDisplayMomentStatus, SearchInput, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar } = useContext(GeneralContext);
    const [allUsers, setAllUsers] = useState([]);
    const [changeBusinessRefresh, setChangeBusinessRefresh] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setThisPage('User management');
        setSearchInput('');
        setDisplayMomentStatus('Table');
        setLoader(true);

        fetch(`https://api.shipap.co.il/admin/clients?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setAllUsers(data.filter(s => s.id != 373));
            setLoader(false);
        })
        .catch(err => {
            navigate(`/`);
            window.location.reload();
            snackbar(err.message);
        });
    }, []);

    useEffect(() => {
        setLoader(true);

        fetch(`https://api.shipap.co.il/admin/clients?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setAllUsers(data.filter(s => s.id != 373));
            setLoader(false);
        })
        .catch(err => {
            navigate(`/`);
            window.location.reload();
            snackbar(err.message);
        });
    }, [changeBusinessRefresh]);

    return (
        <GeneralContext.Provider value={{ allUsers, setAllUsers, displayMomentStatus, setDisplayMomentStatus, setUserMomentByAdmin, displayMomentStatus, setDisplayMomentStatus, setLoader, SearchInput, changeBusinessRefresh, setChangeBusinessRefresh, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar }}>
            <h1>UsersMenagment</h1>
            <DisplayMoment />
            <div className='usersMenagment'>
                {
                    displayMomentStatus === 'Table' ?
                    <AdminTable /> :
                    displayMomentStatus === 'Cards' ?
                    <AdminUserCards /> : <AdminAccordion />
                }
            </div>
        </GeneralContext.Provider>
    )
}