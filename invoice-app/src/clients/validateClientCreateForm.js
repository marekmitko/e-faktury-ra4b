import * as React from 'react';
import {
    Create,
    DateInput,
    SimpleForm,
    TextInput,
    useTranslate,
    PasswordInput,
    email,
    regex,
    number,
    minValue
} from 'react-admin';

// const zipcode_regex = /^\d{5}(?:[-\s]\d{4})?$/; //00-000
const zipcode_regex = /^\d{4}$/; //0000

export const validateClientCreateForm = (values) => {
    const errors = {};
    if (!values.company)    errors.company = 'myroot.validation.required_field'; 
    if (!values.address)    errors.address = 'myroot.validation.required_field';
    if (!values.place)      errors.place = 'myroot.validation.required_field';
    if (!values.zip_code)   errors.zip_code = 'myroot.validation.required_field';
    if (values.zip_code) {
        const error = regex(zipcode_regex, 'myroot.validation.zipcode_regex')(values.zip_code);
        if(error)   errors.zip_code = 'myroot.validation.zipcode_regex';
    }
    if (!values.email)  errors.email = 'myroot.validation.required_field';
    if (values.email) {
        const error = email()(values.email);
        if (error)  errors.email = 'myroot.validation.email_regex';
    }
   //Om? Do sprawdzenia nie może być minValue(0) bo nie wiejdzie np. 0001513 
    // if(values.org_nr && number() )  {
    //     const error = minValue(0)(values.org_nr);
    //     if (error)  errors.org_nr = 'myroot.validation.num_org_minValue';
    // }
    if(values.mva){
        if(!values.org_nr)  errors.org_nr = 'myroot.validation.mva_num_org';
    }
    if (values.password && values.password !== values.confirm_password) {
        errors.confirm_password =
            'resources.customers.errors.password_mismatch';
    }
    return errors;
};