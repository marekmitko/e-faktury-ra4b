
import { Grid } from '@mui/joy';
import { DateInput, Edit, SaveButton, EditButton, ReferenceInput, SimpleForm, TextInput, TextField, FunctionField, useRecordContext, useTranslate, useResourceContext } from 'react-admin';
import { DownloadActionButton } from '../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/DownloadActionButton';
import { CancelActionButton } from '../../../../reusable-components/button/call-action/CancelActionButton';
import { ArchiveActionButton } from '../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/PurringActionButton';
import { SpecialSubmitActionButton } from '../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/SpecialSubmitActionButton';
import { ErrorSpecialSubmitActionButton } from '../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/ErrorSpecialSubmitActionButton';
import InvoiceToolbarMobileAction from './components/InvoiceToolbarMobileAction';
import InvoiceSubtoolbarAction from './components/InvoiceSubtoolbarAction';
import SectionHeader from '../../new-invoice/invoice-create/efa-invoice-form/invoices-list/invoice-show/components/SectionHeader';
import SaleInfoTableShow from '../../../../reusable-components/show-element/SaleInfoTableShow';
import { Box } from '@mui/material';
import SaleCostTableShow from '../../../../reusable-components/show-element/SaleCostTableShow';
import SaleItemsTableShow from '../../../../reusable-components/show-element/SaleItemsTableShow';
import MyCustomRangeDatePicker from '../../new-invoice/invoice-create/components/header-data-group/MyCustomRangeDatePicker';

const Separator = () => <Box pt="1em" />;

export const EditSimpleList = () => {
    // const record = useRecordContext();
    const translate = useTranslate();
    const resource = useResourceContext();
    // if (!record) return null;
    return(
    <Edit  actions={<InvoiceToolbarMobileAction />} >
    <SimpleForm toolbar={<InvoiceSubtoolbarAction />}> 
        {/* <Grid>
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
        </Grid> */}
        <Grid spacing={2}   
        container
  direction="row"  >
        <Grid item sx={6}>


        <TextInput source="payment_amount" />
        </Grid>

        <Grid item sx={6}>
        <TextInput source="date_payment" />
        </Grid>
        <MyCustomRangeDatePicker 
            labelStart="data wystawienia"
            labelEnd="termin płatności"
        /> 
        </Grid>
        <Separator />
        <Separator />
  {/* <EditButton /> */}
        {/* <SaveButton /> */}
        <Separator />
                <SectionHeader name="section_buyer"/>
        <tr >
            <td style={{ width: '200px' }} >

                <TextField source='buyer_company' />   
            </td>
            {/* <td style={{ width: '50px' }}>  </td> */}
           
            <td>
            
                <TextField source='buyer_address' />   
            </td>

        </tr>
        <tr >
            <td style={{ minWidth: '200px' }}>
                <TextField source='buyer_org_nr' />
            </td>
            {/* <td style={{ width: '50px' }}>  </td>*/} 
            <td>

                <FunctionField
                    render={record => `${record.buyer_zip_code} ${record.buyer_place}`}
                        /> 
            </td>
        </tr>
           
            <Grid item xs={6}>
               </Grid>
                    <Separator />
                    <SaleItemsTableShow />
                    <Separator />
                    <Separator />
                    <SaleCostTableShow />
                    <Separator />
                    <Separator />
                    <SaleInfoTableShow />
        </SimpleForm>
      
    </Edit>
);
    };
