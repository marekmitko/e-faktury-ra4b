import * as React from 'react';
import {   Typography } from '@mui/material';
import { ReferenceField, TextField, useRecordContext } from 'react-admin';


const DateSuperscription = (props) => {
    const record = useRecordContext();
    if (!record) return null;
    const date = new Date(record.date_submit).toLocaleDateString()
    return(
        <Typography variant="body1"  align="right" {...props} >
            {date}
        </Typography>
    )
}; 

export default React.memo(DateSuperscription);