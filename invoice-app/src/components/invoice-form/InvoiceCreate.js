import { autocompleteClasses, Card , Grid} from "@mui/material";
import {Box} from '@mui/material';
import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { SellerCard } from "./personal-cards/seller/SellerCard";
import { BuyerCard } from "./personal-cards/buyer/BuyerCard";
import InvoiceBuyerForm from "./personal-cards/buyer/TestBuyerCard";
// import { ShowSellerCard } from "./personal-cards/seller/ShowSellerCard";
import {PersonalDataCard} from "../../custom/PersonalDataCard"


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
            <Grid item xs={12}   sm={6} >
                <PersonalDataCard  variant="outlined"  headerTitle="Nabywca">
                    <InvoiceBuyerForm />
                </PersonalDataCard>
            </Grid>
        </Grid>
        <Grid item xs={12} >

        <Card>
            <p> list </p>
            </Card>
            </Grid>
 
        </Grid>
        </SimpleForm>
    </Create>
);