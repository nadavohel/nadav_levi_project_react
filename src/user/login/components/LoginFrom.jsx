import FormContainer from "../../components/FormContainer/FormContainer";

export default function LoginFrom({ children }) {

    return (
        <FormContainer
            buttonValue={"Login"}
            linkTo={"/signup"}
            linkEnd={"Need To Sign Up"}
            handleSubmit={"login"}
        >
            {children}
        </FormContainer>
    );
}