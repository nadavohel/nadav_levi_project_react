import Grid from '@mui/material/Grid';
import InputForFrom from '../../components/InputForFrom';
import { loginRequirements, schemaLogin } from '../../components/allFormsData/AllFormsDataLogin';

export default function LoginInputForFrom() {

    return (
        <>
            {
                loginRequirements.filter(s => !s.initialOnly).map(s =>
                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                        {
                            <InputForFrom
                                user={s}
                                schema={schemaLogin}
                                AddMoment={false}
                            />
                        }
                    </Grid>
                )
            }
        </>
    );
}