import { Tooltip } from '@mui/material';
import DisplayBoxColor from "./displayBoxColor/DisplayBoxColor";

export default function DisplayBox( props ) {

    return (
        <Tooltip title={
            props.name === 'cards' ? "Display on Cards" :
            props.name === 'table' ? "Display on Table" : "Display on Accordion" 
        }>
            <div>
                <label className="displayMomentContainer">
                    <input
                        type="radio"
                        name="my-radio-button"
                    />
                    <DisplayBoxColor name={props.name} />
                </label>
            </div>
        </Tooltip>
    );
}