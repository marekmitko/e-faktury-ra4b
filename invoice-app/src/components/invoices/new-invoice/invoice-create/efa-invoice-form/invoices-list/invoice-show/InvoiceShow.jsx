import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { FunctionField, ReferenceField, TextField, useRecordContext, useResourceContext, useTranslate } from 'react-admin';

import Basket from '../components/orders/Basket';
import DateSuperscription from './components/DateSuperscription';
import InvoiceHeader from './components/InvoiceHeader';
import SectionHeader from './components/SectionHeader';
import { SalesTableInfoShow } from '../../../invoice-confirm-modal/components/subcomponents/SalesTableInfoShow';
import SaleItemsTableShow from '../../../../../../../reusable-components/show-element/SaleItemsTableShow';
import SaleCostTableShow from '../../../../../../../reusable-components/show-element/SaleCostTableShow';
import SaleInfoTableShow from '../../../../../../../reusable-components/show-element/SaleInfoTableShow';
import InvoiceNoteBoxShow from '../../../../../../../reusable-components/show-element/InvoiceNoteBoxShow';

const Separator = () => <Box pt="1em" />;

const InvoiceShow = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    const resource = useResourceContext();
    if (!record) return null;
    return (
        <Card sx={{ width: 600, margin: 'auto' }}>
                    <Separator />
            <CardContent>
                <Grid container spacing={2}  justifyContent="flex-end" >
                    <DateSuperscription />
                </Grid>
                <Separator />
                <Grid container spacing={2}  justifyContent="center" >
                    <InvoiceHeader />
                </Grid>
                <Separator />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <SectionHeader name="section_seller"/>
                        <TextField source='user_company' />  <br/>
                        <TextField source='user_address' /> <br/>
                        <FunctionField 
                            render={record => ` ${record.user_zip_code ? record.user_zip_code + " ": ""} ${record.user_place}`}
                        /><br/>
                        <TextField source='user_org_nr' />
                    </Grid>
                    <Grid item xs={6}>
                        <SectionHeader name="section_buyer"/>
                        <TextField source='buyer_company' />  <br/>
                        <TextField source='buyer_address' /> <br/>
                        <FunctionField 
                            render={record => ` ${record.buyer_zip_code ? record.buyer_zip_code + " ": ""} ${record.buyer_place}`}
                        /><br/>
                        <TextField source='buyer_org_nr' />
                    </Grid>
                </Grid>
                <Separator />
            
                        { record?.products ? <SaleItemsTableShow   /> : "" }
                <Separator />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <SaleInfoTableShow />
                    </Grid>
                    <Grid item xs={6}>
                        {/* <SectionHeader name="payment_summary"/> */}
                        <SaleCostTableShow />
                    </Grid>
                </Grid>
                {record?.comments && (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <InvoiceNoteBoxShow />
                        </Grid>
                        <Grid item xs={6}>
                            {/* <SectionHeader name="payment_summary"/> */}
                        </Grid>
                    </Grid>
                    )
                }
                <Separator />
                
                <Separator />
                <Separator />
                <Separator />

                <Grid container spacing={2} >
                <Grid item xs={6}>
                    <TextField source='user_firstname' /> { " "}
                    <TextField source='user_lastname' />
                    <FunctionField 
                        render={record => ` coś tam...`}
                    />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const CustomerField = () => {
    const record = useRecordContext();
    return record ? (
        <Typography>
            {record.first_name} {record.last_name}
            <br />
            {record.address}
            <br />
            {record.city}, {record.zipcode}
        </Typography>
    ) : null;
};

export default InvoiceShow;