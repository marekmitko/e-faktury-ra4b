import { Card, Grid } from '@mui/material';
import React from 'react';
import { Datagrid, DateField, TextField, Create, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import Header from './subcomponents/invoice-headers';
import { SellerCard } from './subcomponents/personal-cards/seller/SellerCard'
import { BuyerCard } from './subcomponents/personal-cards/buyer/BuyerCard'

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-detail-simpleshowlayout--several-columns
// 
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-forms-simpleform--basic
export const InvoiceFormLayout = (props) => ( 
    <>
    {/* <ResourceContext.Provider value="books">
        <RecordContextProvider value={record}> */}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
                <Grid item xs={12} >
                    <Header />
                </Grid>
                {/* <Grid item xs={12} md={6} sm={6}> */}
                <Grid item xs={12} sm={6}>
                    <SellerCard />
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <BuyerCard selectSourceName="company" />
                </Grid>
                <Grid item xs={12} >
                    <Card>
                        <p> list </p>
                    </Card>
                </Grid>
            </Grid>
    {/* </RecordContextProvider>
    </ResourceContext.Provider>*/}
    </>
)