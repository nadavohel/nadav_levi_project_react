import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function LinkGoBackToPage (props) {

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Link 
                    className='linkEndGoBackTo' 
                    to={props.linkTo}
                >
                    <p>{props.linkEnd}</p>
                </Link>
            </Grid>
        </Grid>
    );
}