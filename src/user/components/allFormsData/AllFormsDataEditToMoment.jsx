import Joi from "joi";

export const editToMomentRequirements = [
    { name: 'title', type: 'text', label: 'Title', required: true, block: true },
    { name: 'description', type: 'text', label: 'Description', required: true, block: true },
    { name: 'subtitle', type: 'text', label: 'Subtitle', required: true, block: true },
    { name: 'phone', type: 'tel', label: 'Phone', required: true, block: true },
    { name: 'email', type: 'email', label: 'Email', required: true, block: true },
    { name: 'web', type: 'text', label: 'Web', required: true, block: true },
    { name: 'imgUrl', type: 'text', label: 'Img Url', required: true, block: true },
    { name: 'imgAlt', type: 'text', label: 'Img Alt', required: true, block: true },
    { name: 'state', type: 'text', label: 'State', required: true, block: false },
    { name: 'country', type: 'text', label: 'Country', required: true, block: false },
    { name: 'city', type: 'text', label: 'City', required: true, block: false },
    { name: 'street', type: 'text', label: 'Street', required: true, block: false },
    { name: 'houseNumber', type: 'number', label: 'House Number', required: true, block: false },
    { name: 'zip', type: 'String', label: 'Zip', required: true, block: false },
];

export const editToMomentschema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).required(),
    subtitle: Joi.string().min(3).required(),
    phone: Joi.string().min(10).max(15).required(),
    email: Joi.string().email({ tlds: false }).required(),
    web: Joi.string().required(),
    imgUrl: Joi.string().required(),
    imgAlt: Joi.string().required(),
    state: Joi.string().min(3).max(50).required(),
    country: Joi.string().min(3).max(50).required(),
    city: Joi.string().min(3).max(100).required(),
    street: Joi.string().min(3).max(20).required(),
    houseNumber: Joi.string().min(1).max(10).required(),
    zip: Joi.string().min(5).max(10).required(),
});

export const formDataEditMoment = {
    title: '',
    description: '',
    subtitle: '',
    phone: '',
    email: '',
    web: '',
    imgUrl: '',
    imgAlt: '',
    state: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    zip: '',
};