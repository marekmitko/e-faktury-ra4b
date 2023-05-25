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
import { Box } from '@mui/joy';
export const IconToClientList = SupervisorAccountIcon;


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

// const UserListFilter = [
//     <TextInput 
//         label="Company" source="company" 
//         // defaultValue="Hello, World!" 
//         alwaysOn 
//     />,
//     <ReferenceInput  alwaysOn 
//         source="company" 
//         reference='dbclientlist'
//         filter={{ company: true }}
//         // enableGetChoices={({ q }) => q.length >= 2}

//     >
//         <AutocompleteInput filterToQuery={search => ({ company: search })} />
//     </ReferenceInput>
// ]

const ClientList = (props) => {
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
                <Stack  direction="row" alignItems="center"  sx={{  display: 'flex', p: 0 }} width="25%" label="" >
                    <EditButton size='small'  sx={{ ml: -5, p: 0 }} label="" basePath='/buyersEfaktury' />
                    <DeleteButton  sx={{ mx: -4, p: 0}} label="" basePath='/buyersEfaktury' />
                </Stack >
            </Datagrid>
        </List>
    );
};

export default ClientList;

