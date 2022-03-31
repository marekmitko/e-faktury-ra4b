import * as React from 'react';
import { SimpleForm, DateField, TextInput, Create, ReferenceInput, Edit, useResourceContext, ResourceContextProvider, SelectInput } from 'react-admin';

import ClientCreate from '../clients/ClientCreate';
import { Aside } from '../invoice-form/Aside';


export const EditMyProfile = props => (
    < >
    <Edit aside={<Aside />} {...props}>
    <ClientCreate />
        <SimpleForm>
        
            <TextInput source="id" />
            <TextInput source="nickname" />
            <TextInput source="company" />
            <TextInput source="fullName" />
            <TextInput source="fullname.forename" />
            <ReferenceInput source="address_id" reference="addresses"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="address.id" />
            <TextInput source="email" />
            <TextInput source="contact.email" />
            <ReferenceInput source="orgId" reference="orgs"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
    </>
);