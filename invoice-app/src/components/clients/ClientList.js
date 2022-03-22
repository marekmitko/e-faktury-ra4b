import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
} from 'react-admin';

// reCSS ClientListIcon  
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export const IconToClientList = SupervisorAccountIcon;

// import ClientCreate from './ClientCreate';
// export const ClientCreate = ClientCreate;
// import ClientEdit from './ClientEdit';
// export const ClientEdit = ClientEdit;

const ClientList = (props) => {
    return (
        <List {...props}>
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
};

export default ClientList;

