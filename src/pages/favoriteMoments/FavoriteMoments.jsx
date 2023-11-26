import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../App";
import FavoriteMomentsMomentCard from "./components/FavoriteMomentsMomentCard";
import { useNavigate } from "react-router-dom";

export default function FavoriteMoments() {
    const { setLoader, setThisPage, setSearchInput, deleteRefresh, snackbar } = useContext(GeneralContext);
    const [allCards, setFavCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setThisPage('Favorite');
        setSearchInput('');
        setLoader(true);

        fetch(`https://api.shipap.co.il/cards/favorite?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setFavCards(data);
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
        fetch(`https://api.shipap.co.il/cards/favorite?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setFavCards(data);
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
            <h1>My Favorite Moments!</h1>
            <FavoriteMomentsMomentCard moment={allCards} />
        </>
    )
}
