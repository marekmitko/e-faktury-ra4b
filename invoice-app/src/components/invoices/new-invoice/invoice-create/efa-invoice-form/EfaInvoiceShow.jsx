import React from 'react';
import { Grid } from '@mui/material';
import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField, WrapperField } from 'react-admin';

const InvoiceShow = () => (
    <Show component="div">
        <SimpleShowLayout>
            <Grid container spacing={2} columns={16}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> 
                <Grid item xs={16}>
                    <TextField source="invoice_no" />
                    <DateField source="created_at" />
                    <DateField source="payment_due" />
                </Grid>
                <Grid item xs={8}>
                    <WrapperField label="Wystawca" >
                        <TextField source="user_company" />
                            {" "} <br/>
                        <TextField source="user_firstname" />{" "}<TextField source="user_lastname" />
                    </WrapperField>
                </Grid>
                <Grid item xs={8}>
                    <WrapperField label="PRZEDSTAWICIEL" >
                        <BooleanField source="mva" /> {" "}  
                        <DateField source="org_nr" />
                    </WrapperField>
                    <WrapperField label="Nabywca" >
                        <DateField source="firstname" />
                        <DateField source="lastname" />
                    </WrapperField>
                </Grid>
                <ReferenceField source="buyer_id" reference="buyers" />

                <DateField source="comments" />
                <DateField source="postmail" />
                <DateField source="inv_email" />
                <BooleanField source="invoiceEHF" />
                <TextField source="id" />
        </Grid>
            </SimpleShowLayout>
    </Show>
);

export default InvoiceShow;