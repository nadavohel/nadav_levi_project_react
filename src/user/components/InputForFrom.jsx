import { TextField } from "@mui/material";
import { useContext } from "react";
import { GeneralContext } from "../../App";
import { colorMoonA, colorMoonB, colorMoonC, colorMoonD, colorMoonE, colorSunA, colorSunB, colorSunC, colorSunD, colorSunE } from "../../components/StyleSheet";

export default function InputForFrom( props ) {
    const { user, formData, setFormData, errors, setErrors, setIsFormValid, sORm } = useContext(GeneralContext);

    const handleChange = (ev) => {
        if (props.addMoment) {
            setFormData({ ...formData, email: user.email || "" })
        }
        const { name, value } = ev.target;
        const obj = { ...formData, [name]: value };
        setFormData(obj);

        const validate = props.schema.validate(obj, { abortEarly: false });
        const tempErrors = { ...errors };
        delete tempErrors[name];

        if (validate.error) {
            const item = validate.error.details.find(e => e.context.key == name);

            if (item) {
                tempErrors[name] = item.message;
            }
        }

        setIsFormValid(!validate.error);
        setErrors(tempErrors);
    };
    return (
        <div className='inputContainer'>
            <TextField
                className="textField"
                InputLabelProps={{ className: 'textFieldLabel'}}
                error={Boolean(errors[props.user.name])}
                helperText={errors[props.user.name]}
                margin="normal"
                required={props.user.required}
                fullWidth
                id={props.user.name}
                label={props.user.label}
                name={props.user.name}
                type={props.user.type}
                autoComplete={props.user.name}
                onChange={handleChange}
                value={formData[props.user.name]}
                color="success"
            /> 
        </div> 
    );
}

