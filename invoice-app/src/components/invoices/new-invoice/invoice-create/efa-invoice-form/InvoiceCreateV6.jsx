import * as React from "react";
import "../../../../../style/styleInvoiceInfoModal.css";
import "./styles/styleInvoiceCreate.css";
import { useEffect, useState, useCallback } from "react";
import { G_Path } from "../../../../../constant";
//Om NewImport
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import SellerIcon from "@mui/icons-material/Store";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { Card, Box, useMediaQuery, Container } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm, FormProvider } from "react-hook-form";
import { InvoiceCreateToolbar } from "./desktop/subcomponents/InvoiceCreateToolbar";
import {
    useTranslate,
    RecordContextProvider,
    useResourceContext,
    useDataProvider,
    useCreate,
    useNotify,
    FormGroupsProvider,
    useAugmentedForm,
    ArrayInput,
    SimpleFormIterator,
    TextInput,
    NumberInput,
} from "react-admin";

import {
    transformArrayProducts,
    createPrefixObjectKeys,
} from "../../../../../db/fnInvoiceForm";
import { user_db } from "./defaultValuesInvoice";
import InvoiceShowModal, {
    InvoiceShowModal2,
} from "../invoice-confirm-modal/efa-invoice-show/InvoiceShowModal";
import { ConfirmButton } from "../invoice-confirm-modal/efa-invoice-show/ConfirmButton";
import { set } from "lodash";
import dayjs from "dayjs";
import { onSubmitModal } from "./function/onSubmitModal";
// import { ConfirmCreateButton } from "../invoice-confirm-modal/ConfirmCreateButton";
import InvoiceConfirmModalV3 from "../invoice-confirm-modal/components/InvoiceConfirmModalV3";
import { productOptions } from "../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import Header from "./desktop/invoice-ehf-box/invoice-headers";
import InvoiceCreationFormToolbar from "../components/toolbar/InvoiceCreationFormToolbar";
import InvoiceConfirmModalV5 from "../components/invoice-confirm-modal/components/InvoiceConfirmModalV5";
import CreateInvoiceFormPageTitle from "../components/invoice-form-title/CreateInvoiceFormPageTitle";
import { AdditionalTableV5 } from "../components/efaV5/AdditionalTableV5";
import { MQ_isMedium } from "./components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import { RaJoyPriceInput } from "../components/efaV5/sales-form-iterator/sales-item/mobile-view/components/joy/RaJoyPriceInput";
import InvoiceHeader from "../components/efaV5/view/InvoiceHeader";
import MobiInvoiceHeader from "../components/efaV5/mobile-view/MobiInvoiceHeader";
import ClientCompanyCard from "./personal-cards/efa-V5-company-card/components/ClientCompanyCard";
import SellerCompanyCard from "./personal-cards/efa-V5-company-card/components/SellerCompanyCard";
import { SalesTableFormIterator } from "../components/efaV5/sales-form-iterator/sales-table/NewSalesTableFormIterator";
import { SalesInfoTableV6 } from "../components/efaV5/SalesInfoTableV6";
import MyCustomRangeDatePicker from "../components/header-data-group/MyCustomRangeDatePicker";
import DateToString from "./function/fnDateFormatOutputs";
import { CustomerAutoInput } from "../../../invoice-create/components/CustomerAutoInput";
import { PersonalCardWrapper } from "../../../../../reusable-components/wrapper/PersonalCardWrapper";
import SellerFeatcherCard from "./personal-cards/card-profile/SellerFeatcherCard";
import { CustomerAutoInputCard } from "../../../invoice-create/components/CustomerAutoInputCard";
import { CustomerFullCard } from "../../../invoice-create/components/CustomerFullCard";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }));
const styledCardActivated = {
    // width: 343,
    "--Tabs-gap": "0px",
    borderRadius: 2,
    boxShadow: "none",
    overflow: "auto",

    backgroundColor: "transparent",
};
const Separator = () => <Box pt="0.5em" />;

//  componet show

// https://codesandbox.io/s/react-hook-form-watch-v7-forked-exlflc
// https://codesandbox.io/s/pedantic-bartik-8wb3mj
function getInvoiceId() {
    return "fv-xxx/xx/xx/xx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 9) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(9);
    });
}
const dv_dateOfCreation = new Date();
const dv_dateSubmit = dayjs();
const dv_datePayment = dv_dateSubmit.add(7, "day");

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
};
const buyersResourcePath = "buyersEfaktury";
const userResourcePath = "data_user";

const InvoiceCreateV6 = (props) => {
    // const { children, id, className, noValidate = false } = props;
    // const record = useRecordContext(props);
    // const resource = useResourceContext(props);
    // const { form, formHandleSubmit } = useAugmentedForm(props);

    // const { id } = props;
    // console.log("ID💨💨", props.id);

    const invoiceId = getInvoiceId();
    const navigate = useNavigate();
    const notify = useNotify();
    // const create = useCreate();
    const { user_company } = user_db;
    const buyerOrderNo = invoiceId;
    const record = {
        user_db,
        user_ref: user_company,
        choice_product_list: productOptions,
    };
    // { handleSubmit, reset, control }
    const methods = useForm({
        defaultValues: {
            date_of_creation: dv_dateOfCreation,
            date_of_sending: null,
            date_submit: dv_dateSubmit,
            date_payment: dv_datePayment,
            preInvoiceId: invoiceId,
            buyer_id: null,
            payment_form: false,
            ehf: 0,
            // buyer_ref: "ass",
            buyer_order_no: buyerOrderNo,
            comments: "",
            postmail: 0,
            inv_email: 0,
            user_ref: user_db.user_company,
            ...user_db,
            products: [
                {
                    product_name: null,
                    product_count: 1,
                    product_price_brutto: null,
                    product_price_netto: null,
                    product_vat: null,
                    product_type: null,
                },
            ],
        },
    });

    const [create, { isLoading, error }] = useCreate();
    const myDataProvider = useDataProvider();
    const currentBuyerId = methods.getValues("buyer_id");
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

    const db_seller = {
        street: user_db.user_address,
        companyName: user_db.user_company,
        mva: user_db.user_org_nr,
        city: user_db.user_place,
        zipCode: user_db.user_zip_code,
        country: user_db.user_country,
        phoneNumber: user_db.user_phone,
        email: user_db.user_email,
        account_number: user_db.account_number,
        noBank: user_db.noBank,
        user_id: user_db.id,
    };
    const translate = useTranslate();
    const isMedium = useMediaQuery(`${MQ_isMedium}`);
    const is900PX = useMediaQuery("(max-width:900px)");
    // {/* Test DataDisplay to ConfirmModal  */}
    // Om2 ta funkcja jest do sprawdzenia
    const { form, formHandleSubmit } = useAugmentedForm(props);

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
        (event) => {
            event.preventDefault();
            setShowPreviewDialog(true);
        },
        [setShowPreviewDialog]
    );

    const handleCloseShow = useCallback(() => {
        setShowPreviewDialog(false);
    }, [setShowPreviewDialog]);

    const onSubmitTEST = (data) =>
        console.info("1️⃣👍🏻Submit onSubmitTEST", data);

    const tabs = [
        { id: "ordered", name: "wszystkie" },
        { id: "delivered", name: "do zapłaty" },
        { id: "cancelled", name: "opłacone" },
    ];

    // {/* END ConfirmInvoiceModal */}
    // const isMedium = useMediaQuery(`${MQ_isMedium}`);
    const isHidden = useMediaQuery(`${MQ_isMedium}`);

    return (
        <>
            {/* <DataUserList /> // toDo zobacz bo sie generuje fajny AddButton -> zobacz w InvoiceCreateV2  */}
            {/* // toDo to się może akurat jeszcze przydać - dobrze zrobiona tabelka  */}
            {/* <SpanningSalesTable /> */}
            {/* <Create   redirect="show"  component="div"  {...props} > */}
            <CreateInvoiceFormPageTitle />
            <RecordContextProvider value={record}>
                <FormProvider {...methods}>
                    <FormGroupsProvider {...form}>
                        <form
                            onSubmit={methods.handleSubmit(onSubmitTEST)}
                            id="new-invoice-form"
                            // id={id}
                            style={{ width: "100%" }}
                            // record={data}
                        >
                            {/* <form onSubmit={save} record={data}> */}
                            {/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}    /> */}
                            {/* <CssBaseline /> */}
                            {/* //Om */}
                            {/* <Container fixed //maxWidth="sm" 
                                component="main" sx={{ width: '100%'}}> */}

                            <Container maxWidth="xl" sx={{ py: "48px" }}>
                                <Box sx={{ width: "100%" }}>
                                    <Grid2
                                        container
                                        columnSpacing={1}
                                        rowSpacing={1}
                                    >
                                        {" "}
                                        <Grid2 xs={12}>
                                            <Grid2
                                                xs={12}
                                                sm={12}
                                                md={6}
                                                lg={6}
                                                xl={6}
                                            >
                                                <Card
                                                    className="parsonal-card wrapper"
                                                    sx={(theme) => ({
                                                        // ...styledCardActivated,
                                                        // border: `1px solid ${theme.vars.palette.divider}`,
                                                    })}
                                                >
                                                    <MobiInvoiceHeader
                                                        invoiceId={invoiceId}
                                                    />
                                                </Card>
                                            </Grid2>
                                        </Grid2>
                                        <Grid2 xs={12} sm={12} md={6}>
                                            <SellerFeatcherCard />
                                        </Grid2>
                                        <Grid2 xs={12} sm={12} md={6}>
                                            <CustomerFullCard
                                                source="buyer_id"
                                                helperText={false}
                                            />
                                        </Grid2>
                                    </Grid2>
                                </Box>
                                <Separator />

                                <SalesTableFormIterator />
                                <SalesInfoTableV6 />
                                <AdditionalTableV5 />

                                <div
                                    style={{ margin: "auto", padding: 0 }} // className={SalesFormIteratorClasses.clear}
                                >
                                    <Box>
                                        <Box
                                            sx={{
                                                pt: 2,
                                                mb: 9,
                                                alignItems: "flex-end",
                                            }}
                                        >
                                            <InvoiceCreationFormToolbar>
                                                <InvoiceConfirmModalV5
                                                    methods={methods} //setOpen={setOpen} open={open}
                                                    onChange={(data) => {
                                                        // tutaj mógłbym poprosić o invoiceId z serwera
                                                        console.info(
                                                            "🟢🟢🟢ModalInput Change",
                                                            data
                                                        );
                                                    }}
                                                />
                                            </InvoiceCreationFormToolbar>
                                        </Box>
                                        {/* )} */}
                                    </Box>
                                    {/* )} */}
                                </div>
                            </Container>
                        </form>
                    </FormGroupsProvider>
                </FormProvider>
            </RecordContextProvider>
        </>
    );
};

export default InvoiceCreateV6;
