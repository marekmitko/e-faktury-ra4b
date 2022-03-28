import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    TextInput,
} from 'react-admin';
// import { filtersToClientList } from "./filtersToClientList";

// reCSS ClientListIcon  
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export const IconToClientList = SupervisorAccountIcon;

// const filtersToClientList = [
//     <TextInput source="q" label="Search" resource='dbclientlist' alwaysOn />,
//     <TextInput label="NAZWA FIRMY" source="company"   />
// ];


const filtersToClientList = [
    <TextInput source="q" label="Search" alwaysOn />,
    <TextInput label="Company" source="company"   />
];
const ClientList = ( ) => (
        <List filters={filtersToClientList}  >
            <Datagrid>
                <TextField label="NAZWA FIRMY" source="company" />
                <TextField label="PRZEDSTAWICIEL" source="fullname" />
                <EmailField label="EMAIL" source="email" />
                <TextField label="ADRES" source="address.street" />
                <TextField label="MVA" source="MVA" />
                <TextField label="TELEFON" source="telephoneNumber" />
                <EditButton label="" basePath='/dbclientlist' />
                <DeleteButton label="" basePath='/dbclientlist' />
            </Datagrid>
        </List>
);


export default ClientList;

