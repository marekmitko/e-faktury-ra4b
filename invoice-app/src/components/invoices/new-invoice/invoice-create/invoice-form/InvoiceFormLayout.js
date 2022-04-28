import { Card, Grid } from '@mui/material';
import React from 'react';
import { Datagrid, DateField, TextField, Create, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
import Header from './subcomponents/invoice-headers';
import { SellerCard } from './subcomponents/personal-cards/seller/SellerCard'
import { BuyerCard } from './subcomponents/personal-cards/buyer/BuyerCard'
import LatLngInput from '../special-buttons/LatLngInput';
import SexInput from '../special-buttons/SexInput';
import { BuyerPartInvoiceForm } from './subcomponents/personal-cards/buyer/subform/BuyerPartInvoiceForm';

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
                {/* <Grid item xs={12}  sm={6}>
                    <BuyerCard selectSourceName="company" />
                </Grid> */}
                <Grid item xs={12}  sm={6}>
                    <BuyerPartInvoiceForm />
                </Grid>
                <Grid item xs={12} >
                    <Card>
                        <p> list </p>
                        <hr />
                    </Card>
                </Grid>
            </Grid>
            {/* //*see https://marmelab.com/react-admin/Inputs.html#the-useinput-hook */}
            <LatLngInput source="lang" onChange={() => console.log("latlng")} onBlur={() => console.log("blure")} />
            <SexInput source="sex" />
    {/* </RecordContextProvider>
    </ResourceContext.Provider>*/}
    </>
)