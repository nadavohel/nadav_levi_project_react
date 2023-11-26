import Grid from '@mui/material/Grid';
import InputForFrom from '../../components/InputForFrom';
import { schemaSignup, signupRequirements } from '../../components/allFormsData/AllFormsDataSignup';

export default function SignupInputForFrom() {

    return (
        <>
            {
                signupRequirements.filter(s => !s.initialOnly).map(s =>
                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                        {
                            <InputForFrom
                                user={s}
                                schema={schemaSignup}
                                AddMoment={false}
                            />
                        }
                    </Grid>
                )
            }
        </>
    );
}