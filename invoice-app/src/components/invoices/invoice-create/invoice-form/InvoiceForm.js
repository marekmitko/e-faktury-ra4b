import * as React from 'react';
import { Datagrid, DateField, TextField, Create, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import { InvoiceFormLayout } from './InvoiceFormLayout';
// import { PostShow } from '../show-test/PostShow';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

export const InvoiceForm = (props) => (
    <SimpleForm {...props} >
        <InvoiceFormLayout {...props} />     
    </SimpleForm>
)