import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../../App';
import EditToMomentInputForFrom from './components/EditToMomentInputForFrom';
import EditToMomentForm from './components/EditToMomentForm';
import { editToMomentRequirements } from '../../user/components/allFormsData/AllFormsDataEditToMoment';
import { formDataEditMoment } from '../../user/components/allFormsData/AllFormsDataEditToMoment';

export default function EditToMoment() {
    const { setLoader, snackbar, sORm, user } = useContext(GeneralContext);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const [formData, setFormData] = useState({ ...formDataEditMoment });
    const navigate = useNavigate();

    useEffect(() => {
        setLoader(true);

        fetch(`https://api.shipap.co.il/cards/${id}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setLoader(false);
            const filterAndAssignDefaults = (data) => {
                const obj = {};
                editToMomentRequirements.forEach((key) => {
                    if (data[key.name] !== undefined) {
                        obj[key.name] = data[key.name];
                    } else {
                        obj[key.name] = '';
                    }
                });
                return obj;
            };
            setLoader(false);
            const filteredFormData = filterAndAssignDefaults(data);
            setFormData(filteredFormData);
        })
        .catch(err => {
            navigate(`/`);
            window.location.reload();
            snackbar(err.message);
        });
    }, []);

    return (
        <GeneralContext.Provider value={{ setLoader, snackbar, isFormValid, formData, user, setFormData, errors, setErrors, setIsFormValid, sORm }}>
            <div>
                <h1>Update Moment</h1>
                <EditToMomentForm id={id}>
                    <EditToMomentInputForFrom />
                </EditToMomentForm>
            </div>
        </GeneralContext.Provider>
    );
}