import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    ReferenceInput,
    AutocompleteInput,
    TextInput,
    InfiniteList,
    SearchInput,
    useTranslate

} from 'react-admin';
import { Stack, Chip   } from "@mui/material";

// reCSS ClientListIcon  
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { EfaDeleteActionButton } from '../reusable-components/button/confirm-action/EfaDeleteActionButton';
import  EfaEditButton  from '../reusable-components/button/EfaEditButton';
import ListBulkActionButtons from '../reusable-components/button/bulk-action/ListBulkActionButtonBox';
export const IconToClientList = SupervisorAccountIcon;


const QuickFilter = ({
    label  } ) => {
    const translate = useTranslate()
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};




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

const buyerFilters = [
    <SearchInput source="q" alwaysOn />
];



const ClientList = (props) => {


    return (
        <InfiniteList 
        // filters={buyerFilters}
        // sort={{ field: 'company', order: 'DESC' }}
        // <List 
        // filters={UserListFilter} 
        // {...props}  
        sx={{   
            '& .RaList-main': { borderRadius: '15px',  pt: 0, mt: 0,  maxWidth: '900px' },  
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
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        '& .MuiTypography-root': {
                            overflow: 'hidden',
                            display: 'inline-block',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',

                        }
                    },
                    '& .column-org_nr': {
                        maxWidth: '90px',
                        minWidth: '70px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        '& .MuiTypography-root': {
                            overflow: 'hidden',
                            display: 'inline-block',
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
                    '& .column-action ': {
                        width: '50px',
                        padding: 0,
                        paddingLeft: '8px'
                    },
                }}

            >
                <TextField source="company" />
                <TextField  source="org_nr" />
                <TextField  source="phone" />
                <EmailField source="email" />
                <tr source="action" label="" style={{ textAlign: 'center' }}>
                <td><EfaEditButton /></td>
                <td>
                    <EfaDeleteActionButton />
                </td>
                </tr>
            </Datagrid>
        {/* </List> */}
        </InfiniteList>
    );
};

export default ClientList;

