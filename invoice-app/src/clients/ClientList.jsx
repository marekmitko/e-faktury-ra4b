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
    TextInput,
    DeleteWithConfirmButton,
    InfiniteList
} from 'react-admin';
import { Stack   } from "@mui/material";

// reCSS ClientListIcon  
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Box } from '@mui/joy';
import { CancelActionButton } from '../reusable-components/button/call-action/CancelActionButton';
import { EditActionButton } from '../reusable-components/button/call-action/EditActionButton';
import { RecordDelateActionButton } from '../reusable-components/button/call-action/RecordDelateActionButton';
import { DeleteWithConfirmActionButton } from '../reusable-components/button/confirm-action/DeleteWithConfirmActionButton';
import { EfaDeleteActionButton } from '../reusable-components/button/confirm-action/EfaDeleteActionButton';
import { ActionWithConfirmButton } from '../reusable-components/button/confirm-action/ActionWithConfirmButton';
import  EfaEditButton  from '../reusable-components/button/EfaEditButton';
import ListBulkActionButtons from '../reusable-components/button/bulk-action/ListBulkActionButtonBox';
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
        // <InfiniteList 
        <List 
        // filters={UserListFilter} {...props}  
        sx={{            
            '& .MuiPaper-root': {
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
            },
            '& .RaDatagrid-table': {
                flexWrap: 'nowrap!important',
            },
        }}
        >
            <Datagrid
                bulkActionButtons={<ListBulkActionButtons />}
                sx={{
                    

                    '& .MuiTableHead-root .RaDatagrid-headerCell': {
                        padding: { sx: '5px', md: '5px'  },
                        backgroundColor: 'neutral.100', 
                        borderBottom: '2px solid gold',
                        borderColor: 'neutral.700',
                        '&:first-child': {
                            pl: 2,
                            borderTopLeftRadius: '20px',
                            // borderTopRightRadius: '200px',
                        },
                        '&:last-child': {
                            pl: 2,
                            borderTopRightRadius: '20px',
                            // borderTopRightRadius: '200px',
                        }
                    },
                    '& .RaDatagrid-root .RaDatagrid-tbody.MuiTableBody-root ':{
                        // backgroundColor: 'blue',
                        flexWrap: 'nowrap' 
                    },
                    '& .RaDatagrid-rowCell': { 
                        padding: { sx: '5px', md: '5px'  },
                    },
                    '& .column-company': {
                        // maxWidth: { sx: '50px', md: '100px'  },
                        maxWidth: '75px',
                        // // backgroundColor: 'pink',
                        // // display: 'flex',
                        // flexWrap: 'nowrap',
                        // // wordBreak: 'break-all',
                        // textOverflow: 'ellipsis',
                        // overflow: 'hidden',
                        // whiteSpace: 'nowrap',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        '& .MuiTypography-root': {
                            // backgroundColor: 'pink',
                            // display: 'flex',
                            // flexWrap: 'nowrap',
                            // wordBreak: 'break-all',
                            // textOverflow: 'ellipsis [...]',
                            // maxHeight: '38.8px',
                            // maxWidth: '50px',
                            overflow: 'hidden',
                            display: 'inline-block',
                            // margin: '0 5px 0 5px',
                            // textAlign: 'center',
                            // textDecoration: 'none',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',

                        }
                    },
                    '& .column-org_nr': {
                        // maxWidth: { sx: '50px', md: '100px'  },
                        maxWidth: '90px',
                        minWidth: '70px',
                        // // backgroundColor: 'pink',
                        // // display: 'flex',
                        // flexWrap: 'nowrap',
                        // // wordBreak: 'break-all',
                        // textOverflow: 'ellipsis',
                        // overflow: 'hidden',
                        // whiteSpace: 'nowrap',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        '& .MuiTypography-root': {
                            // backgroundColor: 'pink',
                            // display: 'flex',
                            // flexWrap: 'nowrap',
                            // wordBreak: 'break-all',
                            // textOverflow: 'ellipsis [...]',
                            // maxHeight: '38.8px',
                            // maxWidth: '50px',
                            overflow: 'hidden',
                            display: 'inline-block',
                            // margin: '0 5px 0 5px',
                            // textAlign: 'center',
                            // textDecoration: 'none',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',

                        }
                    },
                    '& .column-email': {
                        display: { xs: 'none', md: 'none',  lg: 'table-cell' },
                    },
                    '& .column-phone': {
                        display: { xs: 'none', md: 'table-cell',  lg: 'table-cell' },
                    },
                }}

            >
                <TextField source="company" />
                <TextField  source="org_nr" />
                {/* <WrapperField label="myroot.fullname" sortBy="fullname.surname">
                    <TextField source="fullname.surname" />
                    {" "}
                    <TextField source="fullname.forename" />
                </WrapperField> */}
                <TextField  source="phone" />
                <EmailField source="email" />
                <tr label="Operacje" style={{ textAlign: 'center' }}>
                {/* <td> <EditActionButton />   </td> */}
                <td><EfaEditButton /></td>
                <td>
                    <EfaDeleteActionButton />
                </td>
                </tr>
            </Datagrid>
        </List>
    );
};

export default ClientList;

