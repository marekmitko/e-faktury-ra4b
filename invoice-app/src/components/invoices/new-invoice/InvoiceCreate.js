import * as React from "react";
import { autocompleteClasses, Card , Grid} from "@mui/material";
import {    Create,   SimpleForm,   TextInput  } from 'react-admin';
import { SellerCard } from "./personal-cards/seller/SellerCard";
import { BuyerCard } from "./personal-cards/buyer/BuyerCard";

import { BuyerCard3 } from "./personal-cards/buyer/BuyerCard3";

const InvoiceCreate = (props) =>  (
    <Create redirect="list" component="div" {...props}>
        <SimpleForm >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
                <Grid item xs={12} >
                    <Card>
                        <p> data </p>
                    </Card>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <SellerCard />
                </Grid>
                <Grid item xs={12}   sm={6} >
                    <BuyerCard />
                </Grid>
                <Grid item xs={12} >
                    <Card>
                        <p> list </p>
                    </Card>
                </Grid>
            </Grid>
        </SimpleForm>
                <hr /> <center> BIN </center> <hr/>
                <Grid container>
                    <Grid item xs={12}   sm={6} >
                        <BuyerCard3 />
                    </Grid>
                </Grid>
    </Create>
);

export default InvoiceCreate;