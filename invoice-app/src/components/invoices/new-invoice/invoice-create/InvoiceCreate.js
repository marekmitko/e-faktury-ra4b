import * as React from "react";
import { autocompleteClasses, Card , Grid} from "@mui/material";
import {    Create,   SimpleForm,   TextInput  } from 'react-admin';
import { SellerCard } from "./invoice-form/subcomponents/personal-cards/seller/SellerCard";
import { BuyerCard } from "./invoice-form/subcomponents/personal-cards/buyer/BuyerCard";

import { BuyerCard3 } from "./invoice-form/subcomponents/personal-cards/buyer/BuyerCard3";
import Header from "./invoice-form/subcomponents/invoice-headers";
import { InvoiceForm } from "./invoice-form/InvoiceForm";
import { TestGroupFormContext } from "./TestGroupFormContext";
import { TestGroupTabbedForm } from "./TestGroupTabbedForm";

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151
// const ProfileEdit = ({ staticContext, ...props }) => {

const TESTInvoiceCreate = (props) =>  (
    <>
    <Create redirect="list" component="div" {...props}>
        <InvoiceForm {...props} />

    </Create>
        <TestGroupTabbedForm />
    <TestGroupFormContext />
    <hr /> <center> BIN </center> <hr/>
    <Grid container>
        <Grid item xs={12}   sm={6} >
            <BuyerCard3 />
        </Grid>
    </Grid>
    </>
);

export default TESTInvoiceCreate;