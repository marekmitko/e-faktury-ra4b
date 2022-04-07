import * as React from "react";
import { Datagrid, EditButton, List, TextField, DateField, DeleteButton } from "react-admin";

const InvoiceList = props => (
    <List {...props}>
        <Datagrid>
            <TextField label="NR" source="id" />
            <TextField label="NABYWCA" source="myCompany" />
            <DateField label="DATA WYSTAWIENIA" source="published_at" />
            <DateField label="TERMIN PŁATNOŚCI"source="dataTwoAdd14" />
            {/* <TextField label="NALEŻNOŚĆ" source="amount_payment" /> */}
            <TextField label="NALEŻNOŚĆ" source="sales_list.sum_item_tax" />
            <TextField source="payment" />
            <DateField source="payment_date" />
            <EditButton label="EDYTUJ" basePath='/issuedInvoices_list' />
            <DeleteButton label="USUŃ" basePath='/issuedInvoices_list' />
        </Datagrid>
    </List>
);

export default InvoiceList;