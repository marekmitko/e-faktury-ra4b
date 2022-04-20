import * as React from 'react';
import { Toolbar, CreateButton, SaveButton, Datagrid, DateField, TextField, Create, DateInput, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import { InvoiceFormLayout } from './InvoiceFormLayout';
import { PostEdit } from '../TestGroupFormContext';
import { Stack } from '@mui/material';
import LatLngInput from '../special-buttons/LatLngInput';
// import { PostShow } from '../show-test/PostShow';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}


const postDefaultValue = () => ({ created_at: new Date(), nb_views: 0 });

const InvoiceCreateToolbar = props => (
    <Toolbar {...props}>
        <Stack direction="row" spacing={2} width="100%" alignItems="center" justifyContent="flex-start">
            <SaveButton />
            <SaveButton
                label="dbclientlist.action.save_and_notify"
                transform={data => ({ ...data, notify: true })}
                type="button"
            />
            <CreateButton
                // label="dbclientlist.action.save_and_notify"
                transform={data => ({ ...data, notify: true })}
                type="button"
                resource='dbclientlist/create'
            />
        </Stack>
    </Toolbar>
);




export const InvoiceForm = (props) => (
    <SimpleForm   toolbar={<InvoiceCreateToolbar />} >
        <InvoiceFormLayout {...props} />     
        
    </SimpleForm>
)