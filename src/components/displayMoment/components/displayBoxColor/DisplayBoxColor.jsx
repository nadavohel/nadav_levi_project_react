import { useContext } from "react";
import { GeneralContext } from "../../../../App";

export default function DisplayBoxColor(props) {
    const { setDisplayMomentStatus } = useContext(GeneralContext);
    const changeToCards = (() => {
        setDisplayMomentStatus('Cards');
    })
    const changeToTable = (() => {
        setDisplayMomentStatus('Table');
    })
    const changeToAccordion = (() => {
        setDisplayMomentStatus('Accordion');
    })

    return (
        <div
            onClick={
                props.name === 'cards' ? changeToCards :
                    props.name === 'table' ? changeToTable : changeToAccordion
            }
            className="selected"
            id={
                props.name === 'cards' ? "leftradio" :
                    props.name === 'table' ? "middleradio" : "rightradio"
            }
        >
        </div>
    );
}