import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../../App';
import LoginInputForFrom from './components/LoginInputForFrom';
import LoginFrom from './components/LoginFrom';
import { formDataLogin } from '../components/allFormsData/AllFormsDataLogin';

export default function Login() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const { setUser, setLoader, setUserRoleType, snackbar, setThisPage, user, sORm } = useContext(GeneralContext);
    const [formData, setFormData] = useState({...formDataLogin});

    useEffect(() => {
        setThisPage('Login');
    }, []);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, setUser, setUserRoleType, sORm }}>
            <>
                <h1>Login</h1>
                <LoginFrom>
                    <LoginInputForFrom />
                </LoginFrom>
            </>
        </GeneralContext.Provider>
    );
}