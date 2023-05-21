import * as React from 'react';
import { useEffect, useState, useCallback, Fragment } from "react";
//Om NewImport 
import { Tabs, TabList, TabPanel, ListDivider, Typography} from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';


import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";

import { Button, CssBaseline, Container, Card, Grid, CardContent, Box, CardHeader, useMediaQuery} from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller, useWatch} from "react-hook-form";
import { InvoiceCreateToolbar } from './desktop/subcomponents/InvoiceCreateToolbar';
import {  SimpleForm, useTranslate, RecordContextProvider,  Create, useResourceContext, useDataProvider, useCreateController, useGetOne, useUpdate, Title, useCreate, useRecordContext, useNotify, ArrayInput, TextInput, Form, NumberInput, Confirm, SaveButton, FormGroupsProvider, useAugmentedForm, TextField, Datagrid, List, useGetList, TitlePortal, Count, FunctionField } from 'react-admin';
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../../db/fnInvoiceForm';
import { user_db }  from './bin2/defaultValuesInvoice';
import InvoiceShowModal, { InvoiceShowModal2 } from "../invoice-confirm-modal/efa-invoice-show/InvoiceShowModal";
import { ConfirmButton } from "../invoice-confirm-modal/efa-invoice-show/ConfirmButton";
import { set } from "lodash";
import { onSubmitModal } from "./onSubmitModal";
import { ConfirmCreateButton } from "../invoice-confirm-modal/ConfirmCreateButton";
import InvoiceConfirmModalV3 from "../invoice-confirm-modal/components/InvoiceConfirmModalV3";
import { productOptions } from "../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import Header from './desktop/invoice-ehf-box/invoice-headers';
import SellerIcon from "@mui/icons-material/Store";
import SellerCardShow from "./personal-cards/NewSellerCardShow";
import { CancelCreationButton } from '../components/invoice-confirm-modal/components/button/CancelCreationButton';
import { CreateInvoiceButton } from '../components/invoice-confirm-modal/components/button/CreateInvoiceButton';
import BuyerReferenceCard from '../components/personal-cards/BuyerReferenceCard';
import InvoiceCreationFormToolbar from '../components/toolbar/InvoiceCreationFormToolbar';
import InvoiceConfirmModalV5 from '../components/invoice-confirm-modal/components/InvoiceConfirmModalV5';
import CreateInvoiceFormPageTitle from '../components/invoice-form-title/CreateInvoiceFormPageTitle';
import { StyledTableCellClasses } from './components/new-sales-table/components/sales-table-header/components/styledHeaderCellClasses';
import { SalesTableV5 } from '../components/efaV5/SalesTableV5';
import { AdditionalTableV5 } from '../components/efaV5/AdditionalTableV5';
import { JoyInputField, MobileInputNumber } from '../components/efaV5/sales-form-iterator/sales-item/mobile-view/components/MobileInputNumber';
import JoySelectinputField from '../components/efaV5/sales-form-iterator/sales-item/mobile-view/components/input/JoySelectinputField';
import {EndJoyInputPriceFormat, JoySelectinputPriceFormat, RaJoySelectinputPriceFormat } from '../components/efaV5/sales-form-iterator/sales-item/mobile-view/components/input/JoySelectinputPriceFormat';
import { MQ_isMedium } from './components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles';
import { RaJoyPriceInput } from '../components/efaV5/sales-form-iterator/sales-item/mobile-view/components/joy/RaJoyPriceInput';
import { RaMuiPriceInput } from '../components/efaV5/sales-form-iterator/sales-item/mobile-view/components/mui/RaMuiPriceInput';
import DatePickerGroup from '../components/header-data-group/DatePickerGroup';
import HeaderDateGroup from '../components/header-data-group';
import InvoiceHeader from '../components/efaV5/view/InvoiceHeader';
import MobiInvoiceHeader from '../components/efaV5/mobile-view/MobiInvoiceHeader';
import CardWithIcon from './personal-cards/CardWithIcon';
import NbNewOrders from './personal-cards/NbNewOrders';
import NewCardWithIcon from './personal-cards/NewCardWithIcon.jsx';
import SellNewCardWithIcon from './personal-cards/SellNewCardWithIcon';
import CompanyCardWithIcon from './personal-cards/efa-V5-company-card/DefaultCompanyCard';
import BuyerCompanyCard from './personal-cards/efa-V5-company-card/BuyerDefaultCompanyCard';
import SellerCompanyCard from './personal-cards/efa-V5-company-card/BuyerCompanyCard copy';



const Separator = () => <Box pt="0.5em" />;


//  componet show

// https://codesandbox.io/s/react-hook-form-watch-v7-forked-exlflc
// https://codesandbox.io/s/pedantic-bartik-8wb3mj
function getInvoiceId() {
    return 'fv-xxx/xx/xx/xx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*9|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(9);
    });
}   

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

const buyersResourcePath = 'buyersEfaktury';
const userResourcePath= 'data_user';

const InvoiceCreateV5L2 = (props) => { 
    const invoiceId = getInvoiceId();
    const navigate = useNavigate();
    const notify = useNotify(); 
    // const create = useCreate();
    const {user_company} = user_db;
    const buyerOrderNo = invoiceId;
    const record = { user_db, user_ref: user_company, choice_product_list: productOptions  };

    // { handleSubmit, reset, control } 
    const methods = useForm({ 
        defaultValues: { 
            preInvoiceId: invoiceId,
            buyer_id: "", 
            payment_form: false,
            ehf: 0, 
            // buyer_ref: "ass", 
            buyer_order_no: buyerOrderNo,
            comments:"", 
            postmail: 0,  
            inv_email: 0,
            user_ref: user_db.user_company,
            ...user_db,
            products: [{
                product_name:             "",         
                product_count:            1,          
                product_price_brutto:     "",        
                product_price_netto:      "",         
                product_vat:              125,         
                product_type:             ""      
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



    const onSubmit2 = onSubmitModal({create, methods, navigate, notify});
    const db_seller = { street: user_db.user_address, companyName: user_db.user_company, mva: user_db.user_org_nr, city: user_db.user_place, zipCode: user_db.user_zip_code, country: user_db.user_country, phoneNumber: user_db.user_phone, email: user_db.user_email};
    const translate = useTranslate();
    const isMedium = useMediaQuery(`${MQ_isMedium}`);
    const is500PX= useMediaQuery('(max-width:500px)');

    // console.log('is500px', is500px );
    
// {/* Test DataDisplay to ConfirmModal  */}
// Om2 ta funkcja jest do sprawdzenia 
const { form, formHandleSubmit } = useAugmentedForm(props)

// {/* Modal PreInvoice - Confirm  confirm issuing an invoice  */}
const [confirmIsOpen, setConfirmIsOpen] = useState(false);
// const log = () => console.log("log()");
// const handleCancelInvoiceCreation = useCallback(() => { //todo //*edu Sprawidzić jak działa useCallback() 
//     log();
//     setConfirmIsOpen(false);
// }, [log]);



const [showPreviewDialog, setShowPreviewDialog] = useState(false);
// const postId = useWatch({ name: 'post_id' });

const handleShowClick = useCallback(
    event => {
        event.preventDefault();
        setShowPreviewDialog(true);
    },
    [setShowPreviewDialog]
);

const handleCloseShow = useCallback(() => {
    setShowPreviewDialog(false);
}, [setShowPreviewDialog]);


const onSubmitTEST = ( data ) => console.info("1️⃣👍🏻Submit onSubmitTEST", data);

const tabs = [
    { id: 'ordered', name: 'ordered' },
    { id: 'delivered', name: 'delivered' },
    { id: 'cancelled', name: 'cancelled' },
];

// {/* END ConfirmInvoiceModal */}
// const isMedium = useMediaQuery(`${MQ_isMedium}`);
const isHidden = useMediaQuery(`${MQ_isMedium}`);
    return(
        <>
            {/* <DataUserList /> // toDo zobacz bo sie generuje fajny AddButton -> zobacz w InvoiceCreateV2  */} 
                {/* // toDo to się może akurat jeszcze przydać - dobrze zrobiona tabelka  */}
                {/* <SpanningSalesTable /> */}

            {/* <Create   redirect="show"  component="div"  {...props} > */}
            <CreateInvoiceFormPageTitle />
            <RecordContextProvider value={record}>
                <FormProvider {...methods}>
                    <FormGroupsProvider  {...form} >
                        <form  onSubmit={methods.handleSubmit(onSubmitTEST)}  id="new-invoice-form"    style={{ width: '100%' }}   >
                        {/* <form onSubmit={save} record={data}> */}
                            {/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}    /> */}
                            {/* <CssBaseline /> */}
    {/* //Om */}
                            {/* <Container fixed //maxWidth="sm" 
                                component="main" sx={{ width: '100%'}}> */}
                            <Fragment>
                                <Tabs
                                    size={isMedium ? 'sm' : 'lg'}
                                    aria-label="Pricing plan"
                                    defaultValue={0}
                                    sx={(theme) => ({
                                        // width: 343,
                                        '--Tabs-gap': '0px',
                                        borderRadius: 2,
                                        boxShadow: 'sm',
                                        overflow: 'auto',
                                        border: `1px solid ${theme.vars.palette.divider}`,
                                        // borderRadius: '15px',
                                        // backgroundColor: 'background.paper'
                                        backgroundColor: 'transparent'
                                    })}
                                >
                                    <TabList
                                        sx={{
                                        '--ListItem-radius': '0px',
                                        borderRadius: 0,
                                        [`& .${tabClasses.root}`]: {
                                            fontWeight: 'lg',
                                            flex: 1,
                                            // bgcolor: 'background.body',
                                            bgcolor: 'transparent',
                                            position: 'relative',
                                            [`&.${tabClasses.selected}`]: {
                                            color: 'primary.500',
                                            },
                                            [`&.${tabClasses.selected}:before`]: {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            bottom: -1,
                                            width: '100%',
                                            height: 2,
                                            // bgcolor: 'primary.400',
                                            bgcolor: 'transparent',
                                            },
                                            [`&.${tabClasses.focusVisible}`]: {
                                            outlineOffset: '-3px',
                                            },
                                        },
                                        }}
                                    >
                                        { is500PX ? 
                                            (<MobiInvoiceHeader invoiceId={invoiceId} /> )
                                            : 
                                            (<InvoiceHeader invoiceId={invoiceId} />)
                                        }
                                            </TabList>
                                        {/* <ListDivider /> */}
                                            {/* <TabPanel value={0} sx={{ p: 3 }}>
                                                <Typography level="inherit">
                                                Get started with the industry-standard React UI library, MIT-licensed.
                                                </Typography>
                                            </TabPanel>
                                            <TabPanel value={1} sx={{ p: 3 }}>
                                                <Typography level="inherit">
                                                Best for professional developers building enterprise or data-rich
                                                </Typography>
                                            </TabPanel>
                                            <TabPanel value={2} sx={{ p: 3 }}>
                                                <Typography level="inherit">
                                                The most advanced features for data-rich applications, as well as the
                                                </Typography>
                                            </TabPanel> */}
                                    </Tabs>
                                    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row' }}} >
                                        {/* <SellerCardShow bgcolor="neutral.50"  icon={<SellerIcon />}     dataPersonal={db_seller} />
                                        <BuyerReferenceCard resourcePath={buyersResourcePath} /> */}
                                        <Separator />
                                        {/* <SellerCompanyCard  dataPersonal={db_seller} /> */}
                                        <Separator />
                                        <BuyerCompanyCard resourcePath={buyersResourcePath}  />
                                        <Separator />
                                    </Box>
                                 
                                    {/* <NbNewOrders /> */}
                                    {/* <NewCardWithIcon /> */}
                                    {/* <CompanyCardWithIcon  resourcePath={buyersResourcePath}  /> */}
                                    {/* <SellNewCardWithIcon  resourcePath={buyersResourcePath}  /> */}
                                    <SalesTableV5 />
                                    <AdditionalTableV5 />
                                        </Fragment>
                            {/* </Container> */}
{/* //Om */}
                            <Container maxWidth="xl" component="main">

                                <Grid container spacing={1} justifyContent='center' alignItems="flex-end">
                                    { !isHidden && 
                                    <>
                                    <Grid  item xs={12}  sm={12}  md={12}   // key={tier.title}
                                    >
                                            <Header  /> 
                                    </Grid>
                                    <Grid  item xs={12}  sm={12}  md={12}     > 
                                        <RaJoyPriceInput
                                            source="product_price_MuiTESTyy"  
                                            sx={{ gridArea: 'name', width: "100%", 
                                            // visibility: entryPriceIsGross ? 'hidden' : 'visible',
                                            // display: entryPriceIsGross ? 'hidden' : '' 
                                            }}
                                            label="myroot.form.label.inputbox_itemrow.netItem" 
                                        />
                                    </Grid>
                                    {/* <Grid  item xs={12}  sm={12}  md={12}     > 
                                        <RaJoyPriceInput
                                            source="product_price_JoyTEST2" 
                                            label="myroot.form.label.inputbox_itemrow.netItem" 
                                        />
                                    </Grid> */}
                                    <Grid  item xs={12}  sm={12}  md={12}   // key={tier.title}
                                    >

                                        <RaMuiPriceInput source="product_price_MuiTEST2" label="cena brutto"  />
                                         <MobileInputNumber
                                        source="numTestInput"  
                                        // sx={{ gridArea: 'name', width: "100%", 
                                        // // visibility: entryPriceIsGross ? 'visible' : 'hidden',
                                        // // display: entryPriceIsGross ? '' : 'hidden'      
                                        // }}
                                        label="test" 
                                    />
                                        <hr />
                                        <RaJoySelectinputPriceFormat 
                                            source="InputPriceTest2" 
                                            label="test2"
                                            // error  textHelper
                                            />
                                    </Grid>
                                    </>
                                    }
                                </Grid>
                            </Container>
                            {/* validation             ....                .....  //toDo Warunki  */}
                            {/* {fields.length > 0 && !disableClear && !disableRemove && ( */}
                                <div style={{ margin: 'auto', padding: 0 }} // className={SalesFormIteratorClasses.clear}
                                >
                            {/* {!disabled && !(disableAdd && (disableClear || disableRemove)) && ( */}
                                <Box>
                                    {/* {fields.length > 0 && !disableClear && !disableRemove && ( */}
                                        <Box sx={{ 
                                            pt: 2,
                                            px: { xs: 4, sm: 8, md: 10, lg: 10 }, alignItems: 'flex-end' }} // className={SalesFormIteratorClasses.clear}
                                        >
                                            <InvoiceCreationFormToolbar >
                                                {/* <hr/> */}
                                                <InvoiceConfirmModalV5 methods={methods} //setOpen={setOpen} open={open}
                                                    onChange={(data) => {
                                                        // tutaj mógłbym poprosić o invoiceId z serwera
                                                        console.info("🟢🟢🟢ModalInput Change", data);
                                                    }}
                                            />
                                        </InvoiceCreationFormToolbar> 
                                            </Box>
                                        {/* )} */}
                                    </Box>
                                        {/* )} */}
                                </div>
                            {/* //*edu   <input   value="createItem"     style={{ backgroundColor: "white", color: "blue" }}      type="submit"    /> */}
                        </form>
                    </FormGroupsProvider>
                </FormProvider>
            </RecordContextProvider>
        </>
    );
};

export default InvoiceCreateV5L2;