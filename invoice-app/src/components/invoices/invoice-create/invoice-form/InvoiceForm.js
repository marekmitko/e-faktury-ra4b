import * as React from 'react';
import { Datagrid, DateField, TextField, Create, DateInput, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import { InvoiceFormLayout } from './InvoiceFormLayout';
import { PostEdit } from '../TestGroupFormContext';
// import { PostShow } from '../show-test/PostShow';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}


const postDefaultValue = () => ({ created_at: new Date(), nb_views: 0 });


export const InvoiceForm = (props) => (
    <SimpleForm   >
        <InvoiceFormLayout {...props} />     
    </SimpleForm>
)