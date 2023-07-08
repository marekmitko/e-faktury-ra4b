import * as React from 'react';
import { useTranslate, useRecordContext, TextField } from 'react-admin';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const LinkToRelatedBuyerCompany = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    return record ? (
        <Button
            color="primary"
            component={Link}
            to={{
                pathname: '/issuedInvoices_list',
                search: `filter=${JSON.stringify({ buyer_id: record.buyer_id })}`,
            }}
        >
        
        </Button>
    ) : null;
};


export const LinkToRelated= (props) => {
    const record = useRecordContext();
    // const translate = useTranslate();
    return record ? (
        <Button
            size="small"
            variant="text"
            color="primary"
            component={Link}
            sx={{ textTransform: 'capitalize' }}
            to={{
                pathname: '/issuedInvoices_list',
                search: `filter=${JSON.stringify({ buyer_id: record.buyer_id })}`,
            }}
        >
        <TextField { ...props } />
        </Button>
    ) : null;
};