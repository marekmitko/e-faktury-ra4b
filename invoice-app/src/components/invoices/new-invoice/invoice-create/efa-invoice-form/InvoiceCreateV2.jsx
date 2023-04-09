import { useEffect, useState } from "react";
import { Button, CssBaseline, Container, Card, Grid, CardContent, Typography, Box, CardHeader, useMediaQuery} from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import { InvoiceFormLayout } from '../invoice-form/InvoiceFormLayout';
import SpanningSalesTable from '../invoice-form/subcomponents/sales-table/SpanningSalesTable';
import { InvoiceCreateToolbar } from './desktop/subcomponents/InvoiceCreateToolbar';
import {  SimpleForm, useTranslate, RecordContextProvider,  Create, useResourceContext, useDataProvider, useCreateController, useGetOne, useUpdate, Title, useCreate, useRecordContext, useNotify, ArrayInput, TextInput, Form, NumberInput } from 'react-admin';
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../../db/fnInvoiceForm';
import { user_db }  from './defaultValuesInvoice';
import InvoiceShowModal, { InvoiceShowModal2 } from "../invoice-confirm-modal/efa-invoice-show/InvoiceShowModal";
import { ConfirmButton } from "../invoice-confirm-modal/efa-invoice-show/ConfirmButton";
import { set } from "lodash";
import { onSubmitModal } from "./onSubmitModal";
import { ConfirmCreateButton } from "../invoice-confirm-modal/ConfirmCreateButton";
import InvoiceConfirmModal from "../invoice-confirm-modal/components/InvoiceConfirmModal";
import SelectOrInputText from "../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/input-box-component/select-combo-input/bin/MySelectOrInput";
import { productOptions } from "../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import Header from './desktop/invoice-ehf-box/invoice-headers';
import { tiers } from "./onTestDb";
import ClientCard from "./personal-cards/bin/ClientCard";
import PersonalCardShow from "./personal-cards/show/PersonalCardShow";
import SellerIcon from "@mui/icons-material/Store";
import SellerCardShow from "./personal-cards/SellerCardShow";
import BuyerCardShowForm from "./personal-cards/show/buyer-invoice-form/BuyerCardShowForm";
import EfaBuyerAutoInput from "./personal-cards/EfaBuyerAutoInput";
import  { MQ_isSmall }   from "../../../../../config/GLOBAL_CONFIG_CONST"; 
import { SalesFormIterator } from "./components/new-sales-table/components/sales-form-iterator/SalesFormIterator";
import { SalesTableV2 } from "../components/SalesTableV2";
import AdditionalBox from "../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox";
import PaymentBoxV2 from "../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/PaymentBoxV2";
// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151


const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

const InvoiceCreateV2 = (props) => { 
    const navigate = useNavigate();
    const notify = useNotify();
    // const create = useCreate();

    const {user_company} = user_db;
    const record = { user_db, user_ref: user_company, choice_product_list: productOptions  };
    console.log("RECORD:", record);
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

        create(
            "issuedInvoices_list",
            {  data },
            { onSuccess: () => {
                    // const invoice_id = 
                    // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                    // const record = useRecordContext
                    navigate('/issuedInvoices_list');
                } }
        );
    };

    // if (error) { return <p>ERROR</p>; }
    // return <button disabled={isLoading} onClick={() =>{} }>Like</button>;
    
    // if (isLoading) return null;
    const [open, setOpen] =  useState(false);

    const onSubmit2 = onSubmitModal({create, methods, navigate, notify});
    const db_seller = { street: user_db.user_address, companyName: user_db.user_company, mva: user_db.user_org_nr, city: user_db.user_place, zipCode: user_db.user_zip_code, country: user_db.user_country, phoneNumber: user_db.user_phone, email: user_db.user_email};
    const translate = useTranslate();
    const isSmall = useMediaQuery(`${MQ_isSmall}`);

    return(
    <>
    {/* <Create 
        redirect="show"
    component="div"  {...props} > */}

        <RecordContextProvider value={record}>
            <FormProvider {...methods}>
                <form   id="new-invoice-form" onSubmit={methods.handleSubmit(onSubmit2)} >
                {/* <form   id="new-invoice-form" onSubmit={() => setOpen(true) && methods.handleSubmit(onSubmit2)} > */}
                {/* <form onSubmit={save} record={data}> */}
                    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}    />
                    <CssBaseline />
                    <Container maxWidth="xl" component="main">
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid  item xs={12}  sm={12}  md={12}   // key={tier.title}
                            >
                                    <Header titleForm={<ResourceName />}/> 
                            </Grid>

                            <Grid  item xs={12}  sm={12}  md={6}   // key={tier.title}
                                    // sx={{minWidth: '1000px', minHeight: '500px', display: 'flex'}}
                                >
                                <SellerCardShow bgcolor="neutral.100"  icon={<SellerIcon />}     dataPersonal={db_seller} />
                            </Grid>
                            <Grid   item xs={12}   sm={12}  md={6}   // key={tier.title}
                            >
                                <BuyerCardShowForm dataPersonal={db_seller} />
                            </Grid>
                            <Grid   item xs={12}    sm={12}  md={12}    >
                                <SalesTableV2 />
                                {/* <SpanningSalesTable  isSmall={isSmall} /> */}
                            </Grid>
                            {/* <Grid   item xs={12}    sm={12}  md={12}    >
                                <AdditionalBox />
                            </Grid> */}
                        </Grid>
                    </Container>
                    {/* <InvoiceFormLayout titleForm={<ResourceName />} >
                        <SpanningSalesTable />
                    </InvoiceFormLayout>   */}
                    <Button type="button" >
                        Wystaw - Submit
                    </Button> 
                <InvoiceConfirmModal methods={methods} setOpen={setOpen} open={open}/>
                </form>
                </FormProvider>
    </RecordContextProvider>
    </>
);
};

export default InvoiceCreateV2;