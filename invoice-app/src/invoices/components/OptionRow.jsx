import { memo } from 'react';
import * as React from 'react';
// import { DateField, NumberField, ReferenceField, ReferenceFieldProps } from 'react-admin';
import { Box, SxProps, Typography } from '@mui/material';
import { useRecordContext, NumberField, NumberFieldProps } from 'react-admin';
import { DownloadActionButton } from '../../components/invoices/new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/DownloadActionButton';
import { PurringActionButton } from '../../components/invoices/new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/PurringActionButton';
import { CancelActionButton } from '../../reusable-components/button/call-action/CancelActionButton';
import { SpecialSubmitActionButton } from '../../components/invoices/new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/SpecialSubmitActionButton';
import { ErrorSpecialSubmitActionButton } from '../../components/invoices/new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/ErrorSpecialSubmitActionButton';

// import { FieldProps, useRecordContext } from 'react-admin';


const OptionRow = (  ) => {




const record = useRecordContext();

if(!record) return null;
return(

    
                
            <tr label="Operacje" style={{ textAlign: 'center' }}>
                <td>
                <DownloadActionButton />
            </td>
            <td>   <CancelActionButton />  </td>
            <td>
            <PurringActionButton
            // executed
            />
            </td>
            <td>
            <SpecialSubmitActionButton />
            </td>
            <td>
            <ErrorSpecialSubmitActionButton />
            </td>
            </tr>
    );

};

export default OptionRow;