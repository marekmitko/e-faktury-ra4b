import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    WrapperField,
    EmailField,
    EditButton,
    DeleteButton,
    ReferenceInput,
    AutocompleteInput,
    TextInput
} from 'react-admin';
import { Stack   } from "@mui/material";

// reCSS ClientListIcon  
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export const IconToClientList = SupervisorAccountIcon;

// import ClientCreate from './ClientCreate';
// export const ClientCreate = ClientCreate;
// import ClientEdit from './ClientEdit';
// export const ClientEdit = ClientEdit;

const UserListFilter = [
    <TextInput 
        source="company" 
        defaultValue="Hello, World!" 
        alwaysOn 
    />,
    <ReferenceInput  alwaysOn 
        source="company" 
        reference='dbclientlist'
        filter={{ company: true }}
        // enableGetChoices={({ q }) => q.length >= 2}

    >
        <AutocompleteInput filterToQuery={search => ({ company: search })} />
    </ReferenceInput>
]

const EfaClientList = (props) => {
    return (
        <List 
        // filters={UserListFilter} {...props}  
        >
            <Datagrid>
                <TextField source="company" />
                <TextField  source="org_nr" />
                {/* <WrapperField label="myroot.fullname" sortBy="fullname.surname">
                    <TextField source="fullname.surname" />
                    {" "}
                    <TextField source="fullname.forename" />
                </WrapperField> */}
                <TextField  source="phone" />
                <EmailField source="email" />
                <TextField  source="address" />
                <Stack direction="row" alignItems="center"  width="50%" >
                    <EditButton   label="" basePath='/buyersEfaktury' />
                    <DeleteButton label="" basePath='/buyersEfaktury' />
                </Stack >
            </Datagrid>
        </List>
    );
};

export default EfaClientList;



// export const BuyersefakturyList = () => (
//     <List>
//         <Datagrid rowClick="edit">
//             <TextField source="id" />
//             <ReferenceField source="buyer_id" reference="buyers" />
//             <ReferenceField source="user_id" reference="users" />
//             <TextField source="kunde_nr" />
//             <TextField source="company" />
//             <TextField source="address" />
//             <TextField source="place" />
//             <TextField source="org_nr" />
//             <TextField source="mva" />
//             <EmailField source="email" />
//             <TextField source="phone" />
//             <DateField source="fax" />
//             <TextField source="main_kunde_nr" />
//             <DateField source="lang" />
//             <TextField source="debt" />
//             <TextField source="remainder" />
//             <TextField source="inkasso" />
//             <TextField source="is_company" />
//             <TextField source="forename" />
//             <TextField source="surname" />
//             <NumberField source="zip_code" />
//         </Datagrid>
//     </List>
// );
