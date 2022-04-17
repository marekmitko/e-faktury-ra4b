import * as React from "react";
import list from "./invoice-list/InvoiceList";
import create from "./invoice-create/InvoiceCreate";
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