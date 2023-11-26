import Grid from '@mui/material/Grid';
import PremiumAccount from '../../PremiumAccount';

export default function FormContainerPremium( props ) {

    return (
        <Grid container spacing={2}>
            {props.children}
            {
                props.handleSubmit === "signUp" ?
                    <PremiumAccount /> : ''
            }
        </Grid>
    );
}