import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../App";
import HomePagePreface from "./components/HomePagePreface";
import HomePageLinkButtonSignUp from "./components/HomePageLinkButtonSignUp";
import HomePageMomentCard from "./components/HomePageMomentCard";
import HomePageGalleryContainer from "./components/HomePageGalleryContainer";

export default function HomePage() {
    const { setThisPage, user, setLoader, snackbar, firsTimeUser, setFirsTimeUser, deleteRefresh, sORm } = useContext(GeneralContext);
    const [newCards, setNewCards] = useState([]);

    useEffect(() => {
        setThisPage('Home');
        setLoader(true);

        if ((user) && (firsTimeUser)) {
            snackbar(`${user.fullName} has successfully logged in`);
            setFirsTimeUser(false);
        }

        fetch(`https://api.shipap.co.il/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setNewCards(data.slice(0, 3));
            setLoader(false);
        })
        .catch(err => snackbar(err.message));
    }, []);

    useEffect(() => {

        setLoader(true);
        fetch(`https://api.shipap.co.il/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setNewCards(data.slice(0, 3));
            setLoader(false);
        })
        .catch(err => snackbar(err.message));
    }, [deleteRefresh]);

    return (
        <>
            <h1>Moment of Soccer</h1>
            <h3>the Best moments from football from all over the world!</h3>
            <HomePagePreface />
            <HomePageLinkButtonSignUp />
            <HomePageMomentCard moment={newCards} />
            <HomePageGalleryContainer />
            <HomePageLinkButtonSignUp />
        </>
    );
}