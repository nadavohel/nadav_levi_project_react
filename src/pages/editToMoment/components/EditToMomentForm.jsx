
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormContainer from '../../../user/components/FormContainer/FormContainer';

const defaultTheme = createTheme();

export default function EditToMomentForm( props ) {

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <FormContainer
                    buttonValue={"Update Moment"}
                    linkTo={"/my-moments"}
                    linkEnd={"Update Moment Later"}
                    handleSubmit={"editToMoment"}
                    id={props.id}
                >
                    {props.children}
                </FormContainer>
            </ThemeProvider>
        </div>
    );
} 