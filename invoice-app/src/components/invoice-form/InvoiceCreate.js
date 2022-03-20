import { Card , Grid} from "@mui/material";
import {Box} from '@mui/material';
import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { SellerCard } from "./personal-cards/seller/SellerCard";
import { BuyerCard } from "./personal-cards/buyer/BuyerCard";
// import { ShowSellerCard } from "./personal-cards/seller/ShowSellerCard";



export const InvoiceCreate = (props) =>  (
    <Create component="div" {...props}>
        <SimpleForm >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
            <Grid item xs={12}  sm={6}>
                <SellerCard />
            </Grid>
            <Grid item xs={12}   sm={6} >
                <BuyerCard />
            </Grid>
        <Grid item xs={12} >

        <Card >
            <p> list </p>
            </Card>
            </Grid>
 
        </Grid>
        </SimpleForm>
    </Create>
);