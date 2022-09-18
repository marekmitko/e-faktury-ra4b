import { Card, Grid } from '@mui/material';
import {useRef, useState } from 'react';
import { Datagrid, DateField, TextField, Create, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider, ReferenceInput } from 'react-admin';
import Header from './subcomponents/invoice-headers';
import { SellerCard } from './subcomponents/personal-cards/seller/SellerCard';
import { BuyerCard } from './subcomponents/personal-cards/buyer/BuyerCard';
import ClientCard from './subcomponents/personal-cards/client/ClientCard';
import MyInputNumberRef from './subcomponents/sales-table/SalesItemRow';
import { initial } from 'lodash';
import { useEffect } from 'react';
import RHFEasyItemRow from './subcomponents/sales-table/old-component/RHFEasyItemRow';
import MYEasyItemRow from './subcomponents/sales-table/old-component/MYEasyItemRow';
import MuiRHFEasyItemRow from './subcomponents/sales-table/old-component/MuiRHFEasyItemRow';
import { TestMuiInput } from './subcomponents/sales-table/old-component/TestMuiRHFEasyItemRow';
import { RaMuiRHFEasyItemRow } from './subcomponents/sales-table/old-component/RaMuiRHFEasyItemRow';

import SalesTable from './subcomponents/sales-table/SalesTable';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-detail-simpleshowlayout--several-columns
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-forms-simpleform--basic

// Grid Layout Invoice Form -> przeniesiono  <Grid item xs={12} sm={6}> in PersonalDataCard.js -> wrapper SellerCard ClientCard 


export const InvoiceFormLayout = (props) => {
   

    return( 
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
            <Header />
            <SellerCard />
            <ClientCard />  
            <Grid item xs={12} ><hr /></Grid>
            <Grid item xs={12} >
                <Card>
                    <SalesTable />
                    <hr />  <hr />
                    <div>
                        <RHFEasyItemRow />
                        <MYEasyItemRow />
                        {/* <MuiRHFEasyItemRow />
                        <TestMuiInput /> */}
                        <hr />
                        <RaMuiRHFEasyItemRow />

                    </div>
                    <p> list </p>
                    <hr />
                </Card>
            </Grid>
        </Grid>
    ) ; 
};