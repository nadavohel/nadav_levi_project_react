import FormContainer from "../../../user/components/FormContainer/FormContainer";

export default function AddMomentFrom({children}) {

    return (
        <div>
            <FormContainer
                buttonValue={"Upload Moment"}
                linkTo={"/my-moments"}
                linkEnd={"added moment later"}
                handleSubmit={"addMoment"}
            >
                {children}
            </FormContainer>
        </div>
    );
}
