import Grid from '@mui/material/Grid';
import InputForFrom from '../../../user/components/InputForFrom';
import { addMomentRequirements, schemaAddMoment } from '../../../user/components/allFormsData/AllFormsDataAddMoment';

export default function AddMomentInputForFrom() {

    return (
        <>
            {
                addMomentRequirements.filter(s => !s.initialOnly).map(s =>
                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                        {
                            <InputForFrom
                                user={s}
                                schema={schemaAddMoment}
                                addMoment={true}
                            />
                        }
                    </Grid>
                )
            }
        </>
    );
}