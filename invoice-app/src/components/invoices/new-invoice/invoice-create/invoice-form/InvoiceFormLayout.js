import { Card, Grid } from '@mui/material';
import React from 'react';
import { Datagrid, DateField, TextField, Create, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider, ReferenceInput } from 'react-admin';
import Header from './subcomponents/invoice-headers';
import { SellerCard } from './subcomponents/personal-cards/seller/SellerCard';
import { BuyerCard } from './subcomponents/personal-cards/buyer/BuyerCard';
import ClientCard from './subcomponents/personal-cards/client/ClientCard';
import SalesTable from './subcomponents/sales-table/SalesTable';
import MyInputNumberRef from './subcomponents/sales-table/SalesItemRow';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-detail-simpleshowlayout--several-columns
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-forms-simpleform--basic

// Grid Layout Invoice Form -> przeniesiono  <Grid item xs={12} sm={6}> in PersonalDataCard.js -> wrapper SellerCard ClientCard 


export const InvoiceFormLayout = (props) => 
    ( 
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
                <Header />
                <SellerCard />
                <ClientCard />  
                <Grid item xs={12} ><hr /></Grid>
                <Grid item xs={12} >
                    <Card>
                        <SalesTable />
                        <p> list </p>
                        <hr />
                    </Card>
                </Grid>
            </Grid>
        </>
    ) ; 