import { useEffect } from "react";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import { TestGroupTabbedForm } from "../TestGroupTabbedForm";
import { CommentCreate } from "../../../invoice-list/invoice-filters/filters-bar-items/ReferenceInputTEST";
import { InvoiceFormLayout } from '../invoice-form/InvoiceFormLayout';
import { AdditionalBox } from '../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox';
import SpanningSalesTable from '../invoice-form/subcomponents/sales-table/SpanningSalesTable';
import { InvoiceCreateToolbar } from './subcomponents/InvoiceCreateToolbar';
import {  SimpleForm,  Create, useResourceContext, useDataProvider, useCreateController, useGetOne, useUpdate, Title, useCreate, useRecordContext } from 'react-admin';
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../../db/fnInvoiceForm';
import { user_db }  from './defaultValuesInvoice';
import InvoiceShowModal from "./efa-invoice-show/InvoiceShowModal";

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
    const navigate = useNavigate();
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
            postmail: false,  
            inv_email: false,
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
        const myTest_dataProvider = useDataProvider();


        const currentBuyerId= methods.getValues('buyer_id');

            useEffect(() => {
                myTest_dataProvider.getOne('buyersEfaktury', { id: currentBuyerId })
                    .then(({ data }) => {
                        console.log("test_dbClient", data);
                        // setUser(data);
                        // setLoading(false);
                    })
                    .catch(error => {
                        console.log("ERROR: ", error );
                        // setError(error);
                        // setLoading(false);
                    })
            }, []);

            // if (loading) return <Loading />;
            // if (error) return <Error />;
            // if (!user) return null;








    const onSubmit = (data) => { 




        const currentDataForm = methods.getValues();
        const currentBuyerId= methods.getValues('buyer_id');
        console.log('getValues: ', currentDataForm );
        console.log('getBuyerId: ', currentBuyerId );
        
        




        const productsArr = transformArrayProducts(data.products);
        data.products = productsArr;
        const prefix_buyer = createPrefixObjectKeys("buyer_");
        const db_buyer = prefix_buyer(data.dbBuyers);
        console.log("dbBuyerNetwork", db_buyer);
        data.dbBuyers = ""
        data = {...data, ...db_buyer};


        // PRZEKSZTAŁĆ NA TO => https://marmelab.com/react-admin/useGetOne.html //*edu
        // to jest to co teraz robie   =>  https://marmelab.com/react-admin/useDataProvider.html
        const { data: clientDBtest } = myTest_dataProvider.getOne('buyersEfaktury', { id: `${currentBuyerId}` }).then(({ data }) => {
            console.log("test_dbClient", data);
            console.log("0000", clientDBtest);
            // setUser(data);
            // setLoading(false);
        });




        console.log('_________clientDBtest: ', clientDBtest );
        

        // const dataClient = () => useGetOne(
            
        //     'buyersEfaktury', { id: `${currentBuyerId}`}
        // );



        create(
            "issuedInvoices_list",
            {  data },
            { onSuccess: () => {
                    // const invoice_id = 
                    // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                    // const refcord = useRecordContext();

                    console.log("DATA!!!!:", data);
                    navigate('/issuedInvoices_list');
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
                    <InvoiceFormLayout titleForm={<ResourceName />} >
                        <SpanningSalesTable />
                    </InvoiceFormLayout>  
                    {/* <AdditionalBox /> */}
                    <br/>
            <span>
            <Button type="submit" >
                Wystaw
            </Button>
            <InvoiceShowModal>
                <hr/>
                <Button type="submit" >
                    Wystaw
                </Button>
            </InvoiceShowModal>
                {/* <InvoiceCreateToolbar /> */}
            </span>

        </form>
    </FormProvider>
        {/* </Create> */}
    {/* <TestGroupTabbedForm /> */}
    </>
);
};

export default InvoiceCreate;