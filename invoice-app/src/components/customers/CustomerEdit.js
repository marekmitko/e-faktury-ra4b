import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { CustomerTitle } from "./CustomerTitle";

// Odpowiednikiem <List>     jest    <Edit>
// odpowiednikiem   <Datagird> jest    <SimpleForm>

export const CustomerEdit = (props) => (
    <Edit title={<CustomerTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="company" />
            <TextInput source="fullname" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="MVA" />
            <TextInput source="telephoneNumber" />
        </SimpleForm>
    </Edit>
);