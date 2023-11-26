
import Grid from '@mui/material/Grid';
import InputForFrom from '../../../user/components/InputForFrom';
import { editToMomentRequirements, editToMomentschema } from '../../../user/components/allFormsData/AllFormsDataEditToMoment';

export default function EditToMomentInputForFrom() {

    return (
        <>
            {
                editToMomentRequirements.map(s =>
                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                        {
                            <InputForFrom
                                user={s}
                                schema={editToMomentschema}
                                AddMoment={false}
                            />
                        }
                    </Grid>
                )
            }
        </>
    );
}