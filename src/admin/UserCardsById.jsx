import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";
import MomentCard from '../components/momentCard/MomentCard';


export default function UserCardsById() {
    const { setLoader, SearchInput, setSearchInput, setThisPage, userMomentByAdmin, deleteRefresh, snackbar } = useContext(GeneralContext);
    const [allidCards, setAllIdCards] = useState([]);

    useEffect(() => {
        setThisPage('UserCardsById');
        setSearchInput('');
        setLoader(true);

        fetch(`https://api.shipap.co.il/cards?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setAllIdCards(data);
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
            setAllIdCards(data);
            setLoader(false);
        })
        .catch(err => snackbar(err.message));
    }, [deleteRefresh]);

    return (
        <>
            <h1>All {userMomentByAdmin.firstName} Moment</h1>
            <div className='centerGrid'>
                <div className='containerMomentCard'>
                    {
                        allidCards.filter(
                            (moment) => userMomentByAdmin.email === moment.email
                        ).filter(
                            s => `${s.title.toLowerCase()} ${s.subtitle.toLowerCase()}`
                        .includes(SearchInput.toLowerCase())
                        ).map(a =>
                            <div key={a.id}>
                                <MomentCard thisCard={a} />
                            </div>)
                    }
                </div>
            </div>
        </>
    );
}