import { Card , Grid} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { SellerCard } from "./personal-cards/seller/SellerCard";
import { BuyerCard } from "./personal-cards/buyer/BuyerCard";
// import { ShowSellerCard } from "./personal-cards/seller/ShowSellerCard";

export const InvoiceCreate = (props) => (
    <Create {...props} component="div">
        {/* <Box component="div" sx={{ p: 2, border: '1px dashed grey' }}> */}
        <Grid container spacing={1} sx={{   border: '1px dashed grey' }}>
            <Grid item xs={6} 
            // md={6}
            >
                <SellerCard />
            </Grid>
            <Grid item xs={6} 
            // md={6}
            >
                <BuyerCard />
            </Grid>
        </Grid>
        {/* </Box> */}
            {/* <ShowSellerCard /> */}
            
    <div>
        <SimpleForm variant="outlined">
            <TextInput source="id" disabled />
            <TextInput source="company" />
            <TextInput source="fullname" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="MVA" label="MVA" />
            <TextInput source="telephoneNumber" />
        <TextInput source="phone" />
        
        <Card >
            <p> list </p>
            </Card>
        </SimpleForm>
</div>
    </Create>
);