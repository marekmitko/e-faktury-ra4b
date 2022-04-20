import * as React from "react";
import { WrapperField, TextInput, ReferenceInput, SelectInput, Datagrid, EditButton, List, Pagination, ListBase, TextField, DateField, DeleteButton, ListToolbar, DateInput } from "react-admin";
// import { InvoiceSidebarFilters } from './InvoiceSidebarFilters';
import { Stack, Divider } from "@mui/material";
import { InvoiceClientFilters } from "./filters/InvoiceClientFilters";
import  ListToolbarTest  from "./filters/FiltersButton";
import { TopTestListToolbar } from "./InvoiceListToolbar";
import { InvoiceListActions } from "./actions-list/InvoiceListActions";

{/* <DateInput source="dataTwoAdd14_gte" label="Released after" />, */}


// *see https://mui.com/material-ui/react-divider/#vertical-divider 
// TODO https://mui.com/material-ui/react-divider/#vertical-divider

const SelectCompany = () => (
    <ReferenceInput source="company" label="company" reference="issuedInvoices_list"  >
        <SelectInput optionText="company" alwaysOn />,
    </ReferenceInput>
);

// *see Released before vs  published_at
const invoiceFilters = [
    <DateInput source="published_at_gte" label="Released after "  alwaysOn  />,
    <DateInput source="published_at_lte" label="Released before"  alwaysOn />,
    <Divider orientation="vertical"  alwaysOn />,
    <DateInput source="dataTwoAdd14_gte" label="data due after "  alwaysOn  />,
    <DateInput source="dataTwoAdd14_lte" label="data due before"  alwaysOn />,
];
// cLog fafs
// cLog 
// tip 
// note 
// </>
// cd/ 
const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="company" source="company" 
        // defaultValue="Hello, World!"
    />,
];


const InvoiceList = (props) => (
    <List    
        filters={postFilters} 
        actions={<InvoiceListActions />}
    > 
    {/* <ListBase   filters={invoiceFilters}  > */}
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
    {/* </ListBase> */}
    </List >
);

export default InvoiceList;