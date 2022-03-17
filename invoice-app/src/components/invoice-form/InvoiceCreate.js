import { Card } from "@mui/material";
import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { ShowSellerCard } from "./subcomponents/ShowSellerCard";

export const InvoiceCreate = (props) => (
    <Create {...props}>
        <ShowSellerCard />
    <div>
        <SimpleForm variant="outlined">
            <TextInput source="id" disabled />
            <TextInput source="company" />
            <TextInput source="fullname" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="MVA" label="MVA" />
            <TextInput source="telephoneNumber" />
        <TextInput source="phone" />
        
        <Card >
            <p> list </p>
            </Card>
        </SimpleForm>
</div>
    </Create>
);