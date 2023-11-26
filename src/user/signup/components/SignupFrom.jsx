import FormContainer from "../../components/FormContainer/FormContainer";

export default function SignupFrom({ children }) {

    return (
        <FormContainer
            buttonValue={"SignUp"}
            linkTo={"/login"}
            linkEnd={"Need To login"}
            handleSubmit={"signUp"}
        >
            {children}
        </FormContainer>
    );
}