import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../App";
import CordionGallery from "../../components/cordionGallery/CordionGallery";
import MomentsLinkButton from "./components/MomentsLinkButton";
import MomentsMomentCard from "./components/MomentsMomentCard";

export default function Moments() {
    const { setLoader, setThisPage, setSearchInput, deleteRefresh, snackbar } = useContext(GeneralContext);
    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        setThisPage('Moments');
        setSearchInput('');
        setLoader(true);

        fetch(`https://api.shipap.co.il/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setAllCards(data);
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
            setAllCards(data);
            setLoader(false);
        })
        .catch(err => snackbar(err.message));
    }, [deleteRefresh]);

    return (
        <>
            <h1>Our beautiful moments...!</h1>
            <CordionGallery />
            <MomentsLinkButton />
            <MomentsMomentCard moment={allCards} />
        </>
    )
}