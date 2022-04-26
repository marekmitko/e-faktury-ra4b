import * as React from "react";
import { WrapperField, SearchInput, AutocompleteInput, ReferenceField, TextInput, ReferenceInput, ReferenceManyField, SelectInput, Datagrid, EditButton, List, Pagination, ListBase, TextField, DateField, DeleteButton, ListToolbar, DateInput } from "react-admin";
// import { InvoiceSidebarFilters } from './InvoiceSidebarFilters';
import { Stack, Divider } from "@mui/material";
import  ListToolbarTest  from "./invoice-filters/filters-bar-items/FiltersButton";
import { TopTestListToolbar } from "./InvoiceListToolbar";
import { InvoiceListActions } from "./InvoiceListActions";
import { SelectSourceInput } from "./invoice-filters/filters-bar-items/SelectSourceInput";
import { CommentCreate } from "./invoice-filters/filters-bar-items/ReferenceInputTEST";

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
    <DateInput source="published_at_gte" label="Released after " size="small" alwaysOn  />,
    <DateInput source="published_at_lte" label="Released before" size="small" alwaysOn />,
    <Divider orientation="vertical"  alwaysOn />,
    <DateInput source="dataTwoAdd14_gte" label="data due after " size="small" alwaysOn  />,
    <DateInput source="dataTwoAdd14_lte" label="data due before" size="small" alwaysOn />,
    <TextInput label="Search" source="q" size="small" alwaysOn resettable />,
    ];
// cLog fafs
// cLog 
// tip 
// note 
// </>
// cd/ 
const postFilters = [
    <SelectSourceInput selectChoices="company" label="Company Name" />
];


const userTestfilters = [
    <ReferenceInput
        source="company"
        reference="issuedInvoices_list"
        perPage='50000'
        alwaysOn
    >
        <AutocompleteInput 
            label="User" 
            // validate={[required()]}
            fullWidth
            optionText="company"
            alwaysOn
            filterToQuery={search => ({ company: search })} 
            // className="myCustomClass"
            // formClassName="myCustomFormClass"
            // helperText="Custom helper text"
        />
    </ReferenceInput>
];

    // filter={{ id: true }}  
    // actions={<InvoiceListActions />}

// tip tutaj te propsy są konieczne => https://marmelab.com/react-admin/FilteringTutorial.html#the-filter-buttonform-combo

const InvoiceList = (props) => (
    <List  
        sort={{ field: 'id', order: 'DESC' }}
        perPage="25"
        actions={<InvoiceListActions {...props} />}
        // actions={<CommentCreate {...props} />}
        {...props}

    > 
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
        {/* <Pagination /> */}
    {/* </ListBase> */}
    </List >
);

export default InvoiceList;