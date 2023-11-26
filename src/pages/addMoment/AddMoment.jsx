import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../../App';
import AddMomentInputForFrom from './components/AddMomentInputForFrom';
import AddMomentFrom from './components/AddMomentFrom';
import { formDataAddMoment } from '../../user/components/allFormsData/AllFormsDataAddMoment';

export default function AddMoment() {
    const { setLoader, setThisPage, snackbar, user, setUser, setUserRoleType, sORm } = useContext(GeneralContext);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({...formDataAddMoment});

    useEffect(() => {
        if (user) {
            setFormData({ ...formData, email: user.email || "" })
        }
    }, [user]);

    useEffect(() => {
        setThisPage('');
    }, []);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, setUser, setUserRoleType, sORm }}>
            <h1>Add New Moment</h1>
            <AddMomentFrom>
                <AddMomentInputForFrom />
            </AddMomentFrom>
        </GeneralContext.Provider>
    );
}