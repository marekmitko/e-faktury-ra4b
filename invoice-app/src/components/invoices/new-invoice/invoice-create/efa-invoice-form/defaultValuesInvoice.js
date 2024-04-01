import { createPrefixObjectKeys } from "../../../../../db/fnInvoiceForm";

// note user_konto_nr: 15032603596 kunde_nr: 271
const user = {
    id: "user_123",
    company: "Efremtid sp. zoo",
    firstname: "Aleksander",
    lastname: "Mariański",
    address: "Widawska 128d",
    place: "Wrocław",
    zip_code: "50345",
    email: "aleksander@marianski.com",
    mva: 1,
    foretaksregistret: 0,
    org_nr: 13446789,
    phone: " 123 456 789",
    account_number: "27 1140 2004 0000 3002 0135 5387",
};

//* createDefalutValues */
// *edu Dopytać o id ????????
// const invoiceDefaultValues = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 });
const date_payment = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
const invoiceDefaultValues = () => ({
    invoice_id: null,
    date_submit: new Date(),
    date_create: new Date(),
    date_payment: date_payment,
});
// invoiceDefaultValues.date_create = invoiceDefaultValues.date_submit;
// invoiceDefaultValues.date_payment =  invoiceDefaultValues.date_submit.getTime()+(14*24*60*60*1000);

const prefixObjectUser = createPrefixObjectKeys("user_");
export const user_db = prefixObjectUser(user);

//* setDefalutValues */
export const defaultValueInvoice = {
    buyer_id: null,
    ehf: 0,
    buyer_ref: null,
    // / "user_ref": user_db.user_company.value,
    buyer_order_no: "",
    comments: "",
    postmail: 0,
    inv_email: 0,
    product: [
        {
            _0_product_name: "",
            _0_product_count: "",
            _0_product_price_brutto: "",
            _0_product_price_netto: "",
            _0_product_name_selected: "",
            _0_product_vat: "",
            _0_product_type: "",
        },
    ],
};

export const product = {
    _0_product_name: "",
    _0_product_count: "",
    _0_product_price_brutto: "",
    _0_product_price_netto: "",
    _0_product_name_selected: "",
    _0_product_vat: "",
    _0_product_type: "",
};

// export const defaultValueForm = () => ({ ...user_db, ...invoiceDefaultValues, ...otherDefaultValues });
