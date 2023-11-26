import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function UserHeaderAccordion( props ) {

    return (
        <div className='UserHeaderAccordion'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                    <div className="nameAccordion">
                        {props.userData.firstName} {props.userData.middleName} {props.userData.lastName}
                    </div>
            </AccordionSummary>
        </div>
    );
}