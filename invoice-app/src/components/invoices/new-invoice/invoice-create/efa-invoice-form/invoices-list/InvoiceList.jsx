import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    DateInput,
} from 'react-admin';

import FullNameField from './components/visitors/FullNameField';
import AddressField from './components/visitors/AddressField';
import InvoiceShow from './components/InvoiceShow';
import { PrintActionButton } from './components/call-action-buttons/PrintActionButton';
import { ArchiveActionButton } from './components/call-action-buttons/ArchiveActionButton';
import { IncreaseLikeActionButton } from './components/call-action-buttons/InckreaseLikeActionButton';
import { DownloadActionButton } from './components/call-action-buttons/DownloadActionButton';
import { CancelActionButton } from './components/call-action-buttons/CancelActionButton';
import { SpecialSubmitActionButton } from './components/call-action-buttons/SpecialSubmitActionButton';

//Om? Omówić baze danych dla InvoiceList 
//**  / {/*
{/* 
    "id": "7699",
    "invoice_id": "7699",
    "faktura_nr": "10",



    //Om? Co z tym 
    payment_amount 
    paid_amount 
*/}  















const listFilters = [
    <DateInput source="date_gte" alwaysOn />,
    <DateInput source="date_lte" alwaysOn />,
];

const InvoiceList = () => (
    <List
        filters={listFilters}
        perPage={25}
        sort={{ field: 'date', order: 'desc' }}
    >
        <Datagrid
            rowClick="expand"
            expand={<InvoiceShow />}
            sx={{
                '& .column-customer_id': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-total_ex_taxes': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-delivery_fees': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-taxes': {
                    display: { xs: 'none', md: 'table-cell' },
                },
            }}
        >
           
            <TextField source="id" />
            <TextField source="buyer_company" />
            <DateField source="date_submit" />
            <DateField source="date_payment" />
            <NumberField source="payment_amount" />
            {/* <ReferenceField source="customer_id" reference="customers">
                <FullNameField />
            </ReferenceField> */}
            {/* <ReferenceField
                source="customer_id"
                reference="customers"
                link={false}
                label="resources.invoices.fields.address"
                >
                <AddressField />
                
            </ReferenceField> */}
            {/* //Om? to jest dobrze? */}
            <NumberField source="paid_amount" />
            <DateField source="date_paid" />
            <ReferenceField source="command_id" reference="commands"  label="Input"   > 
                <TextField source="reference"  label="Operacje"  />
            </ReferenceField>
            <tr label="Operacje" style={{ textAlign: 'center' }}>
                <td>
                    <DownloadActionButton />
                </td>
                <td>   <CancelActionButton />  </td>
                {/* <td>   <PrintActionButton />  </td> */}
                <td>
            <ArchiveActionButton />
                </td>
                {/* <td>  <IncreaseLikeActionButton />  </td> */}
                <td>
            <SpecialSubmitActionButton />
                </td>
            </tr>
            {/* <NumberField source="total_ex_taxes" />
            <NumberField source="delivery_fees" />
            <NumberField source="delivery_fees" />
            <NumberField source="taxes" />
            <NumberField source="total" /> */}
        </Datagrid>
    </List>
);

export default InvoiceList;