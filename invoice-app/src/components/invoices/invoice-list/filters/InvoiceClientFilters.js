import React from 'react';
import { ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

export const InvoiceClientFilters = [
    <SelectInput optionText="company" alwaysOn />
];

// export const InvoiceClientFilters = [
//     <SelectInput optionText="company" alwaysOn />,
//     <ReferenceInput source="company" label="company" reference="issuedInvoices_list">
//         <SelectInput optionText="company" alwaysOn />
//     </ReferenceInput>
// ];