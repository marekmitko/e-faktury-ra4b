import React from "react";
import list from "./InvoiceList";
import create from "./new-invoice-form/InvoiceCreate";
// import edit from "./ClientEdit";
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';
import IconToInvoiceList from '@mui/icons-material/FindInPage'

export default {
    list,
    create,
    // edit,
    icon: IconToInvoiceList,
    iconCreate: IconToInvoiceCreate,
};