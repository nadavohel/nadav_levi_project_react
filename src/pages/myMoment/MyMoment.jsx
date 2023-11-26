import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../App";
import MyMomentsMomentCard from "./components/MyMomentsMomentCard";
import MyMomentsLinkButton from "./components/MyMomentsLinkButton";
import { useNavigate } from "react-router-dom";

export default function MyMoment() {
    const { setLoader, setSearchInput, setThisPage, deleteRefresh, snackbar } = useContext(GeneralContext);
    const [allCards, setAllMyCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setThisPage('My Moments');
        setSearchInput('');
        setLoader(true);

        fetch(`https://api.shipap.co.il/business/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setAllMyCards(data);
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
        fetch(`https://api.shipap.co.il/business/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setAllMyCards(data);
            setLoader(false);
        })
        .catch(err => {
            navigate(`/`);
            window.location.reload();
            snackbar(err.message);
        });
    }, [deleteRefresh]);

    return (
        <>
            <h1>My Moment..</h1>
            <MyMomentsLinkButton />
            <MyMomentsMomentCard moment={allCards} />
        </>
    );
}