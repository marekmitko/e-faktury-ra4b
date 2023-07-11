import * as React from 'react';
import {   Typography } from '@mui/material';
import { ReferenceField, TextField, useRecordContext, useResourceContext, useTranslate } from 'react-admin';


const SectionHeader = ({ name }) => {
    const record = useRecordContext();
    const translate = useTranslate();
    const resource = useResourceContext();
    const title = name ? `resources.${resource}.show.header.${name}` : "" ;

    if (!record ) return null;
    return(
        <Typography variant="h6" fontWeight='500' align="left"   >
            {/* {translate(`resources.${resource}.{show}.header.`)} */}
            { name ? translate(title) : '' }
        </Typography> 
    )
}; 

export default React.memo(SectionHeader);