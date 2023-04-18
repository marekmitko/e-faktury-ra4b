import * as React from "react";
import Stack from "@mui/system/Stack";
import FocusTrap from "@mui/base/FocusTrap";
import Input from "@mui/joy/Input";
import { Box, Grid, ListDivider, Typography } from "@mui/joy";
import IssuerEhfInput from "./components/IssuerEhfInput";
import BuyerEhfInput from "./components/BuyerEhfInput";
import OrderEhfInput from "./components/OrderIEhfInput";
import { Divider } from "@mui/material";


    
export default function EhfInvoiceInputGroup(props) {
    return (
        <>
            {/* <Stack spacing={1} sx={{ p: 1, mt: 1,   }}> */}
            <Box sx={{ p: 1, mt: 1,   }} >
                <ListDivider />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <OrderEhfInput startLabel="Numer zamówienia:" placeholder="123" />
                </Grid>
                <Grid item xs={12} >
                    <IssuerEhfInput  placeholder="Aleksander Mariański" />
                </Grid>
                <Grid item xs={12}  >
                    <BuyerEhfInput placeholder="Jan Kowalski"  />
                </Grid>
            </Grid>
            </Box>
        </>
    );
    }
