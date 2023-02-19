import * as React from "react";
import list from "./invoice-list/InvoiceList";
import show from "./new-invoice/invoice-create/efa-invoice-form/EfaInvoiceShow";
import create from "./new-invoice/invoice-create/efa-invoice-form/InvoiceCreate";
// import edit from "./ClientEdit";
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';
import IconToInvoiceList from '@mui/icons-material/FindInPage'

export default {
    list,
    create,
    // edit,
    show,
    icon: IconToInvoiceList,
    iconCreate: IconToInvoiceCreate,
};