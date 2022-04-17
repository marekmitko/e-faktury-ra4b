import * as React from 'react';
import { Title, SimpleForm, TextInput, ReferenceInput, Edit, useResourceContext, ResourceContextProvider, SelectInput } from 'react-admin';

import { Card, CardContent } from '@mui/material';
import { MyProfileCardWrapper } from '../../../../custom/users/MyProfileCardWrapper';


// import ClientCreate from '../../clients/ClientCreate';
// import { Aside } from '../invoice-form/Aside';


export const MyProfileEdit = props => (
    <Edit 
        id="user_123" 
        resource="data_user"
        basePath="/user_123"
        redirect="/"
        title="My profile"
        {...props}
    >
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextInput source="nickname" />
            <TextInput source="company" />
            <TextInput source="fullName" />
            <TextInput source="fullname.forename" />
            {/* <ReferenceInput source="address_id" reference="addresses"><SelectInput optionText="id" /></ReferenceInput> */}
            <TextInput source="address.id" />
            <TextInput source="email" />
            <TextInput source="contact.email" />
            {/* <ReferenceInput source="orgId" reference="orgs"><SelectInput optionText="id" /></ReferenceInput> */}
        </SimpleForm>
    </Edit>
);