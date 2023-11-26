import HandleSubmitLogin from './components/HandleSubmitLogin';
import HandleSubmitSignup from './components/HandleSubmitSignup';
import HandleSubmitAccount from './components/HandleSubmitAccount';
import HandleSubmitEdit from './components/HandleSubmitEdit';
import HandleSubmitAddMoment from './components/HandleSubmitAddMoment';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../App';

export default function FormContainerHandleSubmit(props) {
    const { isFormValid, setLoader, setUser, snackbar, user, formData, setFormData, setIsFormValid, errors, setErrors, setUserRoleType } = useContext(GeneralContext);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, setUser, setUserRoleType }}>
            {
                props.handleSubmit === "login" ?
                    <HandleSubmitLogin>
                        {props.children}
                    </HandleSubmitLogin> :
                    props.handleSubmit === "signUp" ?
                        <HandleSubmitSignup>
                            {props.children}
                        </HandleSubmitSignup> :
                        props.handleSubmit === "account" ?
                            <HandleSubmitAccount>
                                {props.children}
                            </HandleSubmitAccount> :
                            props.handleSubmit === "editToMoment" ?
                                <HandleSubmitEdit id={props.id}>
                                    {props.children}
                                </HandleSubmitEdit> :
                                props.handleSubmit === "addMoment" ?
                                    <HandleSubmitAddMoment>
                                        {props.children}
                                    </HandleSubmitAddMoment> : ''
            }
        </GeneralContext.Provider>
    );
}
