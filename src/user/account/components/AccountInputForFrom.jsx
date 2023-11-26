import Grid from '@mui/material/Grid';
import InputForFrom from '../../components/InputForFrom';
import { accountRequirements, schemaAccount } from '../../components/allFormsData/AllFormsDataAccount';

export default function AccountInputForFrom() {

    return (
        <>
            {
                accountRequirements.filter(s => !s.initialOnly).map(s =>
                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                        {
                            <InputForFrom
                                user={s}
                                schema={schemaAccount}
                                AddMoment={false}
                            />
                        }
                    </Grid>
                )
            }
        </>
    );
}