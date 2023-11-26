import { useContext } from 'react';
import { GeneralContext } from '../../../App';
import FormContainer from "../../components/FormContainer/FormContainer";

export default function AccountFrom({ children }) {
    const { user } = useContext(GeneralContext);

    return (
        <>
            {
                user ?
                    <FormContainer
                        buttonValue={"Save Account"}
                        linkTo={"/"}
                        linkEnd={"Come Back Later"}
                        handleSubmit={"account"}
                    >
                        {children}
                    </FormContainer> : ''
            }
        </>
    );
}