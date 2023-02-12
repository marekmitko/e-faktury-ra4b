import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import { TestGroupTabbedForm } from "./mix-component/TestGroupTabbedForm";
import { CommentCreate } from "../../invoice-list/invoice-filters/filters-bar-items/ReferenceInputTEST";
import { InvoiceFormLayout } from './invoice-form/InvoiceFormLayout';
import SpanningSalesTable from './invoice-form/subcomponents/sales-table/SpanningSalesTable';
import { InvoiceCreateToolbar } from './efa-invoice-form/subcomponents/InvoiceCreateToolbar';
import {  SimpleForm, RecordContextProvider,  Create, useResourceContext, useDataProvider, useCreateController, useGetOne, useUpdate, Title, useCreate, useRecordContext } from 'react-admin';
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../db/fnInvoiceForm';
import { user_db }  from './efa-invoice-form/defaultValuesInvoice';
import InvoiceShowModal, { InvoiceShowModal2 } from "./efa-invoice-form/efa-invoice-show/InvoiceShowModal";
import { ConfirmButton } from "./efa-invoice-form/efa-invoice-show/ConfirmButton";
import { set } from "lodash";
import { onSubmitModal } from "./onSubmitModal";

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151


const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

const InvoiceCreate = (props) => {
    
    const navigate = useNavigate();
   
    const {user_company} = user_db;
    const record = { user_db, user_ref: user_company };

    // { handleSubmit, reset, control } 
    const methods = useForm({ 
        defaultValues: { 
            buyer_id: "", 
            ehf: 0, 
            buyer_ref: "", 
            buyer_order_no: "",
            comments:"", 
            postmail: false,  
            inv_email: false,
            user_ref: user_db.user_company,
            ...user_db,
            products: [{
                _0_product_name:             "",         
                _0_product_count:            1,          
                _0_product_price_brutto:     "",        
                _0_product_price_netto:      "",         
                _0_product_name_selected:    "",         
                _0_product_vat:              125,         
                _0_product_type:             ""      
            } ]
        }
    });
        const [create, { isLoading, error }] = useCreate();
        const myDataProvider = useDataProvider();


        const currentBuyerId= methods.getValues('buyer_id');
        //*edu - OMÓWIĆ Z OLKIEM 
            // useEffect(() => {
            //     myTest_dataProvider.getOne('buyersEfaktury', { id: currentBuyerId })
            //         .then(({ data }) => {
            //             console.log("test_dbClient", data);
            //             // setUser(data);
            //             // setLoading(false);
            //         })
            //         .catch(error => {
            //             console.log("ERROR: ", error );
            //             // setError(error);
            //             // setLoading(false);
            //         })
            // }, []);

            // if (loading) return <Loading />;
            // if (error) return <Error />;
            // if (!user) return null;

 
            //   const onSubmit = async (data) => {
            //     await sleep(2000);
            //     if (data.username === "bill") {
            //       alert(JSON.stringify(data));
            //     } else {
            //       alert("There is an error");
            //     }
            //   };
            
            //   console.log(errors);

           






    const onSubmit =  (data) => { 
        // https://react-hook-form.com/api/useform
        // const output = {
        //     ...data,
        //     others: "others"
        //   }
        const currentDataForm = methods.getValues();
        const currentBuyerId= methods.getValues('buyer_id');
        
        const productsArr = transformArrayProducts(data.products);
        data.products = productsArr;

        const prefix_buyer = createPrefixObjectKeys("buyer_");
        const db_buyer = prefix_buyer(data.dbBuyers);
        data.dbBuyers = ""
        data = {...data, ...db_buyer};
        console.log("fullDATA:", data);
        

        // PRZEKSZTAŁĆ NA TO => https://marmelab.com/react-admin/useGetOne.html //*edu
        // to jest to co teraz robie   =>  https://marmelab.com/react-admin/useDataProvider.html
        // https://marmelab.com/react-admin/useGetOne.html //*edu sprawdić to!!!


        const { data: db_buyerId } = myDataProvider.getOne('buyersEfaktury', { id: `${currentBuyerId}` }).then(({ data }) => {
            console.log("test_dbClient", data);
            // setUser(data);
            // setLoading(false);
        });

        create(
            "issuedInvoices_list",
            {  data },
            { onSuccess: () => {
                    // const invoice_id = 
                    // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                    // const refcord = useRecordContext
                    navigate('/issuedInvoices_list');
                } }
        );
    };


    // if (error) { return <p>ERROR</p>; }
    // return <button disabled={isLoading} onClick={() =>{} }>Like</button>;

    // if (isLoading) return null;
    const [open, setOpen] =  useState(false);


const onSubmit2 = onSubmitModal(methods, record);

    return(
    <>
    {/* <Create 
        redirect="show"
        component="div"  {...props} > */}
        <RecordContextProvider value={record}>
            <FormProvider {...methods}>
                {/* <form onSubmit={save} record={data}> */}
                <form onSubmit={methods.handleSubmit(onSubmit2)} >
                    <InvoiceFormLayout titleForm={<ResourceName />} >
                        <SpanningSalesTable />
                    </InvoiceFormLayout>  
                    <br/>
            <span>
            <InvoiceShowModal  
                create={create} open={open} setOpen={setOpen} navigate={navigate}
            >
                <ConfirmButton /> 
            </InvoiceShowModal>
                {/* <InvoiceCreateToolbar /> */}
            </span>

                <Button type="submit" >
                    Wystaw
                </Button> 
        </form>
    </FormProvider>
        {/* </Create> */}
    {/* <TestGroupTabbedForm /> */}
    </RecordContextProvider>
    </>
);
};

export default InvoiceCreate;