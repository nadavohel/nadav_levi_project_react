import Joi from "joi";

export const accountRequirements = [
    { name: 'firstName', type: 'text', label: 'First Name', required: true, block: true },
    { name: 'middleName', type: 'text', label: 'Middle Name', required: false, block: false },
    { name: 'lastName', type: 'text', label: 'Last Name', required: true, block: false },
    { name: 'email', type: 'email', label: 'Email', required: true, block: true },
    { name: 'imgUrl', type: 'text', label: 'Image Url', required: true, block: true },
    { name: 'imgAlt', type: 'text', label: 'Image Alt', required: true, block: true },
    { name: 'phone', type: 'text', label: 'Phone', required: false, block: false },
    { name: 'country', type: 'text', label: 'Country', required: false, block: false },
    { name: 'city', type: 'text', label: 'City', required: false, block: false },
    { name: 'street', type: 'text', label: 'Street', required: false, block: false },
    { name: 'houseNumber', type: 'number', label: 'House Number', required: false, block: false },
    { name: 'zip', type: 'number', label: 'Zip', required: false, block: false },
];

export const schemaAccount = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    middleName: Joi.string().min(0).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(10).max(15).required(),
    email: Joi.string().email({ tlds: false }).required(),
    imgUrl: Joi.string().min(10).required(),
    imgAlt: Joi.string().min(3).required(),
    state: Joi.string().required(),
    country: Joi.string().min(3).max(50).required(),
    city: Joi.string().min(3).max(50).required(),
    street: Joi.string().min(3).max(100).required(),
    houseNumber: Joi.string().min(1).max(20).required(),
    zip: Joi.string().min(5).max(10).required(),
});

export const formDataAccount = {
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    imgUrl: '',
    imgAlt: '',
    state: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    zip: '',
    business: '',
};