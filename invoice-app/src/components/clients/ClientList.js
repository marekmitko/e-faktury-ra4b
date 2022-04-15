import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    WrapperField,
    EmailField,
    EditButton,
    DeleteButton,
} from 'react-admin';
import { Stack } from "@mui/material";

// reCSS ClientListIcon  
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export const IconToClientList = SupervisorAccountIcon;

// import ClientCreate from './ClientCreate';
// export const ClientCreate = ClientCreate;
// import ClientEdit from './ClientEdit';
// export const ClientEdit = ClientEdit;

const ClientList = (props) => {
    return (
        <List {...props} >
            <Datagrid>
                <TextField label="NAZWA FIRMY" source="company" />
                <WrapperField label="PRZEDSTAWICIEL" sortBy="fullname.surname">
                    <TextField source="fullname.surname" />
                    {" "}
                    <TextField source="fullname.forename" />
                </WrapperField>
                <EmailField label="EMAIL" source="contact.email" />
                <TextField label="ADRES" source="address.street" />
                <TextField label="MVA" source="orgId.orgNumber" />
                <TextField label="TELEFON" source="contact.phoneNumber" />
                <Stack direction="row" alignItems="center"  width="50%" >
                    <EditButton   label="" basePath='/dbclientlist' />
                    <DeleteButton label="" basePath='/dbclientlist' />
                </Stack >
            </Datagrid>
        </List>
    );
};

export default ClientList;

