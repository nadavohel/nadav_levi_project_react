import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { GeneralContext } from "../../App";
import imgMoment from "../../images/alternaiveImageMoment/Slide2.jpg";

export default function MomentPage() {
    const { setLoader, snackbar } = useContext(GeneralContext);
    const [cardIdPage, setCardIdPage] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards/${id}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setCardIdPage(data);
            setLoader(false);
        })
        .catch(err => snackbar(err.message));
    }, []);

    return (
        <>
            <div className="momentPageContainer">
                <h1>{cardIdPage.title}</h1>
                <p>{cardIdPage.userName}</p>
                <p>{cardIdPage.createdTime}</p>
                <p>{cardIdPage.subtitle}</p>
                <img
                    alt={cardIdPage.imgAlt}
                    src={cardIdPage.imgUrl}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = imgMoment;
                    }}
                />
                <p className='description'>{cardIdPage.description}</p>
                <p>{cardIdPage.phone}</p>
                <p>{cardIdPage.email}</p>
                <a href={cardIdPage.web}>
                    <p>{cardIdPage.web}</p>
                </a>
                <p>{cardIdPage.country}</p>
                <p>{cardIdPage.street} {cardIdPage.houseNumber}, {cardIdPage.city}</p>
                <p>{cardIdPage.zip}</p>
                <Link className='linkEndGoBackTo' to={'/moments'}>
                    <p>Go Back To Moments</p>
                </Link>
            </div>
        </>
    )
}
