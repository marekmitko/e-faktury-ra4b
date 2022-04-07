import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, EmailField } from 'react-admin';
import { customerFilters } from "./customerFilters";






export const CustomerList = (props) => (
    <List filters={customerFilters} {...props} >
        <Datagrid>
            <TextField source="company" />
            <TextField source="fullname" label="Customer Name" />
            <EmailField source="email" />
            <TextField source="address.street" label="address" />
            {/* <TextField source="MVA" /> */}
            <TextField source="telephoneNumber" />
            <TextField source="phone" />
            <EditButton />
        </Datagrid>
    </List>
);

// export const CustomerList = () => (
//     <List filters={postFilters}>
//         <Datagrid>
//             <ReferenceField source="userId" reference="users">
//                 <TextField source="name" />
//             </ReferenceField>
//             <TextField source="id" />
//             <TextField source="title" />
//             <TextField source="body" />
//             <EditButton />
//         </Datagrid>
//     </List>
// );