import * as React from 'react';
import { Toolbar, CreateButton, SaveButton, Datagrid, DateField, TextField, Create, DateInput, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import { InvoiceFormLayout } from './InvoiceFormLayout';
import { PostEdit } from '../TestGroupFormContext';
import { Stack } from '@mui/material';
import LatLngInput from '../special-buttons/LatLngInput';
import SpanningSalesTable from './subcomponents/sales-table/SpanningSalesTable';
import { JoySalesTable } from './subcomponents/sales-table/joy-sales-table/JoySalesTable';
// import { PostShow } from '../show-test/PostShow';
import { columns } from './subcomponents/sales-table/joy-sales-table/accessoryJoySalesTable';
import { invoiceItems } from './subcomponents/sales-table/joy-sales-table/db_invoiceItem';
const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}


const postDefaultValue = () => ({ created_at: new Date(), nb_views: 0 });


// https://marmelab.com/react-admin/EditTutorial.html

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
        <InvoiceFormLayout {...props} >
        <JoySalesTable
            columns={columns}
            data= {invoiceItems}
        />
        <>
        <SpanningSalesTable />  
        <div>
        <hr />
        {/* <Label for="tag">Local Address</Label>
                <Controller
                  name="tag"
                  control={methods.control}
                  as={
                    <Table1
                      name="tag"
                      ref={methods.register}
                      columns={columns}
                      data={localAddress}
                      methods={methods}
                    />
                  }
                  />
                <br /> */}
                {/* Simulate model window open and assume it retuens an object */}
                {/* <Button onClick={addLocalAddress}>Add Address</Button>{" "}
                <Button onClick={removeLocalAddress}>Remove Address</Button> */}
        </div>
        
        </>


        </InvoiceFormLayout>     
        
    </SimpleForm>
)