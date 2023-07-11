import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    DateInput,
    BulkDeleteButton,
    NumberInput,
    SimpleList,
} from 'react-admin';

import FullNameField from './components/visitors/FullNameField';
import AddressField from './components/visitors/AddressField';
import InvoiceShow from './invoice-show/InvoiceShow';
import { PrintActionButton } from './components/call-action-buttons/PrintActionButton';
import { ArchiveActionButton } from './components/call-action-buttons/ArchiveActionButton';
import { IncreaseLikeActionButton } from './components/call-action-buttons/InckreaseLikeActionButton';
import { DownloadActionButton } from './components/call-action-buttons/DownloadActionButton';
import { CancelActionButton } from './components/call-action-buttons/CancelActionButton';
import { SpecialSubmitActionButton } from './components/call-action-buttons/SpecialSubmitActionButton';
import { RowActionToolbar } from './components/RowActionToolbar';
import { ErrorSpecialSubmitActionButton } from './components/call-action-buttons/ErrorSpecialSubmitActionButton';
import { pink } from '@mui/material/colors';
import ResetViewsButton from './components/visitors/ResetViewsButton';
import { InvoiceListFilterSidebar } from './components/InvoiceListFilterSidebar';
import { LinkToRelated, LinkToRelatedBuyerCompany } from './components/filters-sidebar/invoiceListFilters';
import ListBulkActionButtons from '../../../../../../reusable-components/button/bulk-action/ListBulkActionButtonBox';
import { useMediaQuery } from '@mui/material';
import SalesTableHeader from '../components/new-sales-table/components/sales-table-header/SalesTableHeader';
import { Box, Typography } from '@mui/joy';
import ListActionToolbar from '../../../../../../reusable-components/button/ListActionToolbar';
import EditNoteIcon from '@mui/icons-material/EditNote';

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

//Om? Co ma być na liście faktur
// kontrachent data wystawienia kwota  no faktury







const InvoiceBulkActionButtons = () => (
    <>
        <ResetViewsButton label="Reset Views" />
        {/* default bulk delete action */}
        <BulkDeleteButton />
    </>
);





const listFilters = [
    <DateInput size="small" source="date_submit_gte" alwaysOn />,
    <DateInput source="date_submit_lte" alwaysOn />,
    <NumberInput source="payment_amount_gte" alwaysOn sx={{  mb: '4px' }} />,
    <NumberInput source="payment_amount_lte" alwaysOn  sx={{ mb: '4px' }} />
];

const rowStyle = (record, index) => ({
    backgroundColor: record.paid_amount >= 500 ? '#efe' : 'white',
});

const InvoiceList = () => { 
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('md'));
    return(
    <List  aside={isSmall ? "" : <InvoiceListFilterSidebar />}
        sx={{maxWidth: '1400px',  
            '& .MuiPaper-root': {
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
            },
        }}
        filters={listFilters}
        perPage={25}
        sort={{ field: 'id', order: 'desc' }}
        actions={<ListActionToolbar />}
    >
       {isSmall ? 
       (
        <>
        <Box sx={{ px: 2, mb: 0, py: 1,  display: 'flex', flexDirection: 'row',  justifyContent: 'space-between',
                                    backgroundColor: 'neutral.100', 
                                    borderBottom: '2px solid',
                                    borderColor: 'neutral.700',
                                    borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px',
                                    
    }}>
            <Typography fontWeight='500' >
                Nabywca faktury
            </Typography>
            <Typography fontWeight='500'>
                Numer faktury
            </Typography>
        </Box>
            <SimpleList
            sx={{ mt: -0.75, '& .MuiListItemIcon-root': { ml: -.75, mr: -2.5 } }}
            leftIcon={() => <EditNoteIcon  />}
            // leftAvatar={() => <EditNoteIcon />}
            primaryText={record => record.buyer_company}
            tertiaryText={record =>  `nr: ${record.id}` }
            secondaryText={record => (
                <>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    
                <div>{`kwota: ${record.payment_amount}`}</div>
                <div>{`wystawiono: ${new Date(record.date_submit).toLocaleDateString()}` }</div>
                </div>
                </>
            )
        }
        linkType={record => record.canEdit ? "show" : "edit"}   
        />        
           
            </>
        ):
        ( 
       <Datagrid
            bulkActionButtons={<ListBulkActionButtons />}
            rowClick="expand"
            expand={<InvoiceShow />}
            // rowStyle={rowStyle} 
            sx={{
                    
            //    '& thead.RaDatagrid-headerRow': {
            //     borderTopLeftRadius: '50px',
            //     borderTopRightRadius: '50px',
            //    },


                '& .MuiTableHead-root .RaDatagrid-headerRow': {
                    backgroundColor: 'neutral.100', 
                    borderBottom: '2px solid #0d47a1',
                    borderTopLeftRadius: '50px',
                    borderTopRightRadius: '50px',
                    '&:first-child': {
                        ml: -1,
                        borderTopLeftRadius: '20px',
                        // borderTopRightRadius: '200px',
                    },
                    '&:last-child': {
                        ml: -1,
                        borderTopRightRadius: '20px',
                    }
                },
                '& .MuiTableHead-root .RaDatagrid-headerCell': {
                    padding: { sx: '5px', md: '5px'  },
                    backgroundColor: 'transparent', 
                    borderBottom: '2px solid',
                    borderColor: 'neutrald.700',
                    '&:first-child': {
                        ml: -1,
                        borderTopLeftRadius: '20px',
                        // borderTopRightRadius: '200px',
                    },
                    '&:last-child': {
                        ml: -1,
                        borderTopRightRadius: '20px',
                    },

                },
                '& .RaDatagrid-rowCell': { 
                    padding: { sx: '5px', md: '5px'  },
                },
                '& .MuiTableCell-root.MuiTableCell-paddingCheckbox': { 
                    padding: { sx: '5px', md: '5px'  },
                    textAlign: 'center'
                },
                '& .column-id': {
                    
                    display: { xs: 'none', md: 'none',  lg: 'table-cell' },
                },
                '& .column-date_submit': {
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
            <LinkToRelated source="buyer_company" />
            <DateField source="date_submit" />
            <DateField source="date_payment" />
            <NumberField source="payment_amount" />
         
            {/* //Om? to jest dobrze? */}
           
            <NumberField source="paid_amount" />
            <DateField source="date_paid" />

            <tr label="Operacje" style={{ textAlign: 'center' }}>
                <td>
                    <DownloadActionButton />
                </td>
                <td>   <CancelActionButton />  </td>
                <td>
            <ArchiveActionButton />
                </td>
                <td>
            <SpecialSubmitActionButton />
                </td>
                <td>
            <ErrorSpecialSubmitActionButton />
                </td>
            </tr>
            {/* <RowActionToolbar /> */}
            {/* <NumberField source="total_ex_taxes" />
            <NumberField source="delivery_fees" />
            <NumberField source="delivery_fees" />
            <NumberField source="taxes" />
            <NumberField source="total" /> */}
        </Datagrid>
       )
       }
    </List>
);
};

export default InvoiceList;