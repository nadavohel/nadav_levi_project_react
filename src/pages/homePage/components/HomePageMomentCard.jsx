import MomentCard from "../../../components/momentCard/MomentCard";

export default function HomePageMomentCard( props ) {

    return (
        <>
            <div className="centerGrid">
                <div className="containerWelcomeMoment">
                    {props.moment.map(a =>
                        <div key={a.id}>
                            <MomentCard thisCard={a} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}