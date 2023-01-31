import * as React from 'react';
import { InvoiceFormLayout } from '../invoice-form/InvoiceFormLayout';
import { AdditionalBox } from '../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox';
import SpanningSalesTable from '../invoice-form/subcomponents/sales-table/SpanningSalesTable';
import { InvoiceCreateToolbar } from './subcomponents/InvoiceCreateToolbar';
import {  SimpleForm,  useResourceContext} from 'react-admin';
import { defaultValueForm }  from './defaultValuesInvoice';






// ResourceContextProvider  
// const MyComponent = () => (
//     <ResourceContextProvider value="comments">
//         <ResourceName /> {/* renders 'comments' */}
//         ...
//     </ResourceContextProvider>
// );



const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

// <Resource
//     name="users"
//     list={UserList}
//     recordRepresentation={(record) => `${record.first_name} ${record.last_name}`}
// />



// const defaultValue = defaultValueForm;

export const InvoiceForm = (props) => {

console.log("defaultValueForm", defaultValueForm);


    return(
        <SimpleForm  
            defaultValues={defaultValueForm} 
            toolbar={<InvoiceCreateToolbar />} >
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