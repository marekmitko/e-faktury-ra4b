import * as React from "react";
import { Card, TextField, Button, Stack, MenuItem } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import { TestGroupTabbedForm } from "../TestGroupTabbedForm";
import { CommentCreate } from "../../../invoice-list/invoice-filters/filters-bar-items/ReferenceInputTEST";
import { InvoiceFormLayout } from '../invoice-form/InvoiceFormLayout';
import { AdditionalBox } from '../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox';
import SpanningSalesTable from '../invoice-form/subcomponents/sales-table/SpanningSalesTable';
import { InvoiceCreateToolbar } from './subcomponents/InvoiceCreateToolbar';
import {  SimpleForm,  Create, useResourceContext, useCreateController, useGetOne, useUpdate, Title, useCreate } from 'react-admin';
import { transformArrayProducts } from '../../../../../db/fnInvoiceForm';
// import { defaultValueInvoice, product }  from './defaultValuesInvoice';

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151


const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

// <Resource
//     name="users"
//     list={UserList}
//     recordRepresentation={(record) => `${record.first_name} ${record.last_name}`}
// />

// const defaultValueForm = {...defaultValueInvoice};

// *edu info 
// https://codesandbox.io/s/react-hook-form-usefieldarray-defaultvalues-forked-qhd7wb?file=/src/index.js:477-587


const InvoiceCreate = (props) => {
    
    // https://codesandbox.io/s/react-hook-form-usefieldarray-defaultvalues-forked-422tgi?file=/src/index.js:691-698       vs.  sprawdzić to https://marmelab.com/react-admin/SimpleForm.html
    // const { register, handleSubmit } = methods;
    

    // const { id } = useParams();
    // const { handleSubmit, reset, control } = useForm();
    // const { isLoading } = useGetOne(
    //     "books",
    //     { id },
    //     { onSuccess: (data) => reset(data) }
    // );
    // const [update, { isLoading: isSubmitting }] = useUpdate();
    // const navigate = useNavigate();
    // const onSubmit = (data) => {
    //     update(
    //         "books",
    //         { id, data },
    //         { onSuccess: () => { navigate('/books'); } }
    //     );
    // };
    // if (isLoading) return null;
        

    // { handleSubmit, reset, control } 
    const methods = useForm({ 
        defaultValues: { 
            buyer_id: "", 
            ehf: 0, 
            buyer_ref: "", 
            user_ref: "", 
            buyer_order_no: "",
            comments:"", 
            postmail: 0,  
            inv_email: 0,
            products: [{
                _0_product_name:             "",         
                _0_product_count:            "",          
                _0_product_price_brutto:     "",          
                _0_product_price_netto:      "",          
                _0_product_name_selected:    "",         
                _0_product_vat:              "",         
                _0_product_type:             ""      
            } ]
        }
    });
    // const onSubmit = data => console.log(data);
    // const { save } = useCreateController({ resource: 'issuedInvoices_list' });
    // <SimpleForm onSubmit={save} record={{}} >  
    //  <SimpleForm record={data} onSubmit={onSubmit}>

    // { data: {Object}, meta: {Object} }

    // const record = useRecordContext();
    // const like = { postId: record.id };
    // const [create, { isLoading, error }] = useCreate();
    // const handleClick = () => {
    //     create('likes', { data: like })
    // }
    const { handleSubmit, reset, control } = useForm();


    const [create, { isLoading, error }] = useCreate();

    const onSubmit = (data) => { 
        const productsArr = transformArrayProducts(data.products);
        data.products = productsArr;
        create(
            "issuedInvoices_list",
            {  data },
            { onSuccess: () => {
                    // navigate('/issuedInvoices_list');
                    console.log('dataTest', data, 'dataArr', data.products,);
                } }
        );
    };
    // if (error) { return <p>ERROR</p>; }
    // return <button disabled={isLoading} onClick={() =>{} }>Like</button>;

    // if (isLoading) return null;

    return(
    <>
    {/* <Create 
        redirect="show"
        component="div"  {...props} > */}
            <FormProvider {...methods}>
                {/* <form onSubmit={save} record={data}> */}
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <InvoiceFormLayout titleForm={<ResourceName />} /  >  
                    <SpanningSalesTable />


















                    {/* <SimpleForm  
                        // defaultValues={defaultValueInvoice} 
                        toolbar={<InvoiceCreateToolbar />} >
                            
                        <InvoiceFormLayout titleForm={<ResourceName />}   > */}
                        
                
                    {/* <AdditionalBox /> */}
                    <br/>
          
                <>
                <div>
          
                </div>
                
                </>


            {/* </InvoiceFormLayout>   */}


            
            {/* </SimpleForm> */}
            {/* <input type="submit" value="DB TEST" />  */}
            <span>
            <Button type="submit" >
              Save
            </Button>
                <InvoiceCreateToolbar />
            </span>

        </form>
    </FormProvider>
        {/* </Create> */}
    {/* <TestGroupTabbedForm /> */}
    </>
);
};

export default InvoiceCreate;