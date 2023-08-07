import * as React from "react";
import { WrapperField, SearchInput, SimpleList, AutocompleteInput, ReferenceField, TextInput, ReferenceInput, ReferenceManyField, SelectInput, Datagrid, EditButton, List, Pagination, ListBase, TextField, DateField, DeleteButton, ListToolbar, DateInput } from "react-admin";
// import { InvoiceSidebarFilters } from './InvoiceSidebarFilters';
import { Stack, Divider, useMediaQuery } from "@mui/material";
import  ListToolbarTest  from "./invoice-filters/filters-bar-items/FiltersButton";
import { TopTestListToolbar } from "./InvoiceListToolbar";
import { InvoiceListActions } from "./InvoiceListActions";
import { SelectSourceInput } from "./invoice-filters/filters-bar-items/SelectSourceInput";
import { CommentCreate } from "./invoice-filters/filters-bar-items/ReferenceInputTEST";
import JoyDualInput from "./subcomponents/JoyDualInput"; 

{/* <DateInput source="dataTwoAdd14_gte" label="Released after" />, */}


// *see https://mui.com/material-ui/react-divider/#vertical-divider 
// TODO https://mui.com/material-ui/react-divider/#vertical-divider





// TODO Zajebiste zacznij od tego 
// https://marmelab.com/react-admin/ReferenceInput.html












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

const InvoiceList = (props) => {
    const isSmall = useMediaQuery('(max-width:899px)');

    return(
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.buyer_company}
                    secondaryText={record => `Kwota: ${record.payment_amount}`}
                    tertiaryText={record => new Date(record.date_payment).toLocaleDateString()}
                    linkType="edit"
                />) 
                :
                (
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="buyer_company" />
            <DateField source="date_submit" />
            <DateField source="date_payment" />
            <DateField source="payment_amount" />
            <TextField source="buyer_org_nr" />
            {/* <WrapperField label="Kwota i data wpłaty"  >
                <TextField source="firstname" />
                    {" "}
                <TextField source="lastname" />
            </WrapperField> */}
            <WrapperField label="Kwota wpłaty | Data wpłaty"  >
                <JoyDualInput source="date_paid" />
            </WrapperField>
            {/* <TextField source="paid_amount" />
            <TextField source="paid" />
            <TextField source="buyer_mva" />
            <TextField source="buyer_mva" />
            <TextField source="buyer_email" />
            <TextField source="buyer_phone" />
            <TextField source="date_paid" />
            <TextField source="efaktury_invoice" /> */}
            <ReferenceField source="project_id" reference="projects" />
        </Datagrid>
        )}
    </List>
);
};


    
    // <List  
    //     sort={{ field: 'id', order: 'DESC' }}
    //     perPage="25"
    //     actions={<InvoiceListActions {...props} />}
    //     // actions={<CommentCreate {...props} />}
    //     {...props}


export default InvoiceList;