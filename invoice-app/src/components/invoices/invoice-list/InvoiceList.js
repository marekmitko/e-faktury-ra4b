import * as React from "react";
import { WrapperField, Datagrid, EditButton, List, Pagination, ListBase, TextField, DateField, DeleteButton, ListToolbar } from "react-admin";
// import { InvoiceSidebarFilters } from './InvoiceSidebarFilters';
import { Stack } from "@mui/material";
import { InvoiceClientFilters } from "./filters/InvoiceClientFilters";
import  ListToolbarTest  from "./filters/FiltersButton";
import { TopTestListToolbar } from "./InvoiceListToolbar";



const InvoiceList = (props) => (
    <ListBase     >
        {/* <ListToolbarTest /> */}
        <TopTestListToolbar />
    {/* <List {...props} aside={ <InvoiceSidebarFilters /> }> */}
        <Datagrid>
            <TextField label="NR" source="id" />
            <TextField label="NABYWCA" source="company" />
            <WrapperField label="PRZEDSTAWICIEL" sortBy="fullname.surname">
                <TextField source="fullname.surname" />
                {" "}
                <TextField source="fullname.forename" />
            </WrapperField>
            <DateField label="DATA WYSTAWIENIA" source="published_at" />
            <DateField label="TERMIN PŁATNOŚCI"source="dataTwoAdd14" />
            {/* <TextField label="NALEŻNOŚĆ" source="amount_payment" /> */}
            <TextField label="NALEŻNOŚĆ" source="sales_list.sum_item_tax" />
            {/* <TextField source="payment" />
            <DateField source="payment_date" /> */}
            <Stack direction="row" alignItems="center"  width="50%" >
                <EditButton   label="" basePath='/issuedInvoices_list' />
                <DeleteButton label="" basePath='/issuedInvoices_list' />
            </Stack >
        </Datagrid>
        <Pagination />
    </ListBase>
);

export default InvoiceList;