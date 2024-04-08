// import list from "./invoice-list/InvoiceList";
import show from "./new-invoice/invoice-create/efa-invoice-form/EfaInvoiceShow";
// import create from "./new-invoice/invoice-create/efa-invoice-form/xInvoiceCreate";
import create from "./new-invoice/invoice-create/efa-invoice-form/InvoiceCreateV6";
// import edit from "./ClientEdit";
import IconToInvoiceCreate from "@mui/icons-material/PostAdd";
import IconToInvoiceList from "@mui/icons-material/FindInPage";
import InvoiceList from "./new-invoice/invoice-create/efa-invoice-form/invoices-list/InvoiceList";

export default {
    list: InvoiceList,
    create,
    // edit,
    show,
    icon: IconToInvoiceList,
    iconCreate: IconToInvoiceCreate,
};

// const resource = {
//     list: VisitorList,
//     create: VisitorCreate,
//     edit: VisitorEdit,
//     icon: VisitorIcon,
// };
// export default resource;
