import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LinkButton( props ) {

    return (
        <Link className={props.className} 
            to={props.goTo} 
            style={{ textDecoration: 'none', margin: 0, width: props.width }}
        >
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: props.width}}
                className='linkButton'
            >
                {props.children}
            </Button>
        </Link>
    )
}