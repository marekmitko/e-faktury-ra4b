import * as React from 'react';
import { Toolbar, Resource, CreateButton, SaveButton, Datagrid, DateField, TextField, Create, DateInput, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import { InvoiceFormLayout } from '../invoice-form/InvoiceFormLayout';
import { PostEdit } from '../TestGroupFormContext';
import { Stack } from '@mui/material';
import LatLngInput from '../special-buttons/LatLngInput';
import SpanningSalesTable from '../invoice-form/subcomponents/sales-table/SpanningSalesTable';
import { JoySalesTable } from '../invoice-form/subcomponents/sales-table/joy-sales-table/JoySalesTable';
// import { PostShow } from '../show-test/PostShow';
import { columns } from '../invoice-form/subcomponents/sales-table/joy-sales-table/accessoryJoySalesTable';
import { invoiceItems } from '../invoice-form/subcomponents/sales-table/joy-sales-table/db_invoiceItem';
import JoyOptionbox from '../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/JoyOptionbox';
import AdditionalOptions from '../invoice-form/subcomponents/invoice-additional-options';
import { AdditionalBox } from '../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox';
import CheckboxText from '../invoice-form/checkbox-group-options/CheckboxTest';
import { useForm, FormProvider, useFormContext, useFormState } from "react-hook-form";
import { InvoiceCreateToolbar } from './subcomponents/InvoiceCreateToolbar';
import { ShowTestInvoice } from './efa-invoice-show/ShowTestInvoice';
import { createPrefixObjectKeys } from '../../../../../db/transform/fnInvoiceForm';


const user = {
    "id": "user_123",
    "user_company": "Efremtid sp. zoo",
    "user_firstname": "Aleksander",
    "user_lastname": "Mariański",
    "user_street": "Widawska 128d",
    "user_place": "Wrocław",
    "user_zip_code": 44140,
    "user_email": "aleksander@marianski.com",
};

{/* DefalutValues */}

const prefixObjectUser = createPrefixObjectKeys('user_');
const db_user = prefixObjectUser(user);
// *edu Dopytać o id ????????
// const invoiceDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
const invoiceDefaultValue = () => ({ created_at: new Date(), nb_views: 0 });

const defaultValueForm = () => ({ ...db_user, ...invoiceDefaultValue });












const MyComponent = () => (
    <ResourceContextProvider value="comments">
        <ResourceName /> {/* renders 'comments' */}
        ...
    </ResourceContextProvider>
);



const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

// <Resource
//     name="users"
//     list={UserList}
//     recordRepresentation={(record) => `${record.first_name} ${record.last_name}`}
// />





export const InvoiceForm = (props) => {




    return(
        <SimpleForm   defaultValues={defaultValueForm} toolbar={<InvoiceCreateToolbar />} >
            <InvoiceFormLayout titleForm={<ResourceName />}   >
                <SpanningSalesTable /> 
            
                <AdditionalBox />
                <br/>
                {/* <CheckboxText /> */}
                {/* <JoyOptionbox /> */}
                {/* <AdditionalOptions/> */}
                
            {/* <JoySalesTable
                columns={columns}
                data= {invoiceItems}
                /> */}
            <>
            <div>
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
    );
};