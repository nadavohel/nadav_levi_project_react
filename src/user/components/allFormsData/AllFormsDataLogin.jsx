import Joi from "joi";

export const loginRequirements = [
    { name: 'email', type: 'email', label: 'Email', required: true, block: true },
    { name: 'password', type: 'password', label: 'Password', required: true, block: true },
];

export const schemaLogin = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string()
        .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_*]).{8,32}$/)
        .required()
        .messages({
            "string.pattern.base": "Password must meet the specified criteria",
            "any.required": "Password is required",
        }),
});

export const formDataLogin = {
    email: '',
    password: '',
};