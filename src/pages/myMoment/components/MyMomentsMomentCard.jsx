import { useContext } from "react";
import { GeneralContext } from "../../../App";
import MomentCard from "../../../components/momentCard/MomentCard";

export default function MyMomentsMomentCard( props ) {
    const { SearchInput } = useContext(GeneralContext);

    return (
        <>
            {
                <div className='centerGrid'>
                    <div className='containerWelcomeMoment'>
                        {
                            props.moment.filter(
                                s => `${s.title.toLowerCase()} ${s.subtitle.toLowerCase()}`
                            .includes(SearchInput.toLowerCase())
                            ).map(a =>
                                <div key={a.id}>
                                    <MomentCard thisCard={a} />
                                </div>)
                        }
                    </div>
                </div>
            }
        </>
    );
}