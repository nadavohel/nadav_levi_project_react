import { FormControlLabel, Grid, Switch } from "@mui/material";

export default function PremiumAccount() {
    
    return (
        <Grid item xs={12} sm={12} sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <FormControlLabel
                control={
                    <Switch
                        color="primary"
                        name="premium"
                        id='premium'
                    />
                }
                label={"Premium Account?"}
                labelPlacement="start"
            />
        </Grid>
    );
}

