import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../../App';
import SignupInputForFrom from './components/SignupInputForFrom';
import SignupFrom from './components/SignupFrom';
import { formDataSignup } from '../components/allFormsData/AllFormsDataSignup';

export default function Signup() {
    const { setLoader, snackbar, setThisPage, user, setUser, setUserRoleType, sORm } = useContext(GeneralContext);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState({...formDataSignup});

    useEffect(() => {
        setThisPage('Signup');
    }, []);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, setUser, setUserRoleType, sORm }}>
            <div>
                <h1>SignUp</h1>
                <SignupFrom>
                    <SignupInputForFrom />
                </SignupFrom>
            </div>
        </GeneralContext.Provider>
    );
}