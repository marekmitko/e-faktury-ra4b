import * as React from 'react';
import {   Typography } from '@mui/material';
import { ReferenceField, TextField, useRecordContext, useResourceContext, useTranslate } from 'react-admin';


const InvoiceHeader = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    const resource = useResourceContext();

    if (!record) return null;
    return(
        <div>
        <Typography variant="h5" fontWeight='500' align="left"  sx={{ mb: -0.25}}  >
            {translate(`resources.${resource}.show.header.invoice`)}
        </Typography> 
        <Typography sxvariant="h6" fontWeight='500' align="left"   gutterBottom>
            {translate(`resources.${resource}.show.header.prefix_no`)}
            {record.id ? ` ${record.id}` : ""}
        </Typography> 
        </div>
    )
}; 
//Q? To jest chyba błąd bo nie przekazuje proopsów 
export default React.memo(InvoiceHeader);