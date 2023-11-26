import { useContext } from 'react';
import { GeneralContext } from '../../../App';
import FormContainerSubmit from './components/FormContainerSubmit';
import FormContainerPremium from './components/FormContainerPremium';
import LinkGoBackToPage from './components/LinkGoBackToPage';
import FormContainerBox from './components/FormContainerBox';
import FormContainerHandleSubmit from './components/allHandleSubmit/FormContainerHandleSubmit';

export default function FormContainer(props) {
    const { isFormValid, setLoader, snackbar, user, formData, setFormData, setIsFormValid, errors, setErrors, setUser, setUserRoleType } = useContext(GeneralContext);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, setUser, setUserRoleType }}>
            <FormContainerBox>
                <FormContainerHandleSubmit 
                    handleSubmit={props.handleSubmit}
                    id={props.id}
                >
                    <FormContainerPremium
                        handleSubmit={props.handleSubmit}
                    >
                        {props.children}
                    </FormContainerPremium>
                    <FormContainerSubmit>
                        {props.buttonValue}
                    </FormContainerSubmit>
                    <LinkGoBackToPage
                        linkTo={props.linkTo}
                        linkEnd={props.linkEnd}
                    />
                </FormContainerHandleSubmit>
            </FormContainerBox>
        </GeneralContext.Provider>
    );
}
