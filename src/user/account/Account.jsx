import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../../App';
import AccountFrom from './components/AccountFrom';
import AccountInputForFrom from './components/AccountInputForFrom';
import { formDataAccount } from '../components/allFormsData/AllFormsDataAccount';

export default function Account() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const { user, setLoader, setThisPage, snackbar, sORm } = useContext(GeneralContext);
    const [formData, setFormData] = useState({...formDataAccount});

    useEffect(() => {
        setThisPage('Account');
    }, []);

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || "",
                middleName: user.middleName || "",
                lastName: user.lastName || "",
                phone: user.phone || "",
                email: user.email || "",
                imgUrl: user.imgUrl || "",
                imgAlt: user.imgAlt || "",
                state: user.state || "",
                country: user.country || "",
                city: user.city || "",
                street: user.street || "",
                houseNumber: String(user.houseNumber) || "",
                zip: String(user.zip) || "",
            })
        }
    }, [user]);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, sORm }}>
            <>
                <h1>Account Update Details</h1>
                    <AccountFrom>
                        <AccountInputForFrom />
                    </AccountFrom>
            </>
        </GeneralContext.Provider>
    );
}