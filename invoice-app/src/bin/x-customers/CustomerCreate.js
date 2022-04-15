import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const CustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            <TextInput source="company" />
            <TextInput source="fullname" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="MVA" label="MVA" />
            <TextInput source="telephoneNumber" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);