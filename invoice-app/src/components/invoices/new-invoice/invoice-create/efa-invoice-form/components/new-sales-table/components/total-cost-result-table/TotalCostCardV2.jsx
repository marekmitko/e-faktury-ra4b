import * as React from "react";
import Table from "@mui/joy/Table";
import { useTranslate } from "react-admin";
import { CellLabel, CostCell, TotalLabel } from "./subcomponent/TotalCostCell";
import { formatCurrency, getTotalPrice, getTotalTax } from "./logic/getCostResult ";
import { useFormContext, useWatch } from "react-hook-form";
import { nameSalesIteratorForm } from "../../../mobile/spanning-sales-table/mobile-form-iterator/MobiForm";
import { CardContent, Card,  Typography, AspectRatio, Box, Chip} from "@mui/joy";
import { Paper } from "@mui/material";
import { borderRadius } from "@mui/system";



const locale = {
    en: "en-US",
    pl: "pl"}
const currency = {
    pl: "PLN"
};

export default function TotalCostCardV2(props) {
    const { currencySymbol, sxCSS } = props;
    const currency = currencySymbol ? currencySymbol : "";
    const translate = useTranslate(); 
    const { control } = useFormContext();
    const results = useWatch({ control, name: `${nameSalesIteratorForm}` });

    let totalGross = getTotalPrice(results, "product_price_brutto");
    let totalNet = getTotalPrice(results, "product_price_netto");
    let totalTax = getTotalTax(results );

    return (
        <Card
            variant="plain"
            size="sm"
            sx={ sxCSS }
            >
                <CardContent sx={{  p: 0, m: 0 ,
                        flexBasis:  'initial' ,
                        bgcolor: 'background.level1', 
                        borderRadius: 1.5,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0

                    }} 
                >
                <Table  // aria-label="table with ellipsis texts" //note czy mi to jest potrzebne? 
                    noWrap hoverRow      // stripe="odd"
                    sx={{ mx: "auto", }}   // width: 100, 
                >
                    <tbody>
                        <tr>
                            <CellLabel>{translate('myroot.form.label.header_totalResultTable.totalNetCost')}</CellLabel>
                            <CostCell>{formatCurrency(totalNet)}{` ${currency}`}</CostCell>
                        </tr>
                        <tr>
                            <CellLabel>{translate('myroot.form.label.header_totalResultTable.totalTaxCost')}</CellLabel>
                            <CostCell>{formatCurrency(totalTax) }{` ${currency}`}</CostCell>
                        </tr>
                    </tbody>
                </Table>
                </CardContent>
            <Box  color="neutral" sx={{ ml: 'auto', mr: 0, wordBreak: 'break-all', display: 'flex', flexDirection: 'column', typography: {sm: 'h5', xs: 'body2'}, borderTop: '2px solid', borderColor: 'neutral.300'}}>
                <Typography    color="primary" level="inherit" textColor="primary.900"  
                    sx={{ m: 0.5, typography: {sm: 'h6', xs: 'body1', md: 'h5' } , width: '100%',  
                        wordBreak: 'break-all', }} 
                >
                    <TotalLabel  level="h6" fontWeight="400" textColor="neutral.600" sx={{ mr: 1, 
                            typography: {sm: 'body1', xs: "body2", md: 'h6' }  }}  
                    >
                        {translate('myroot.form.label.header_totalResultTable.totalCost')}{": "}
                    </TotalLabel>
                        <b> {formatCurrency(totalGross)}{` ${currency}`}</b>
                </Typography>
            </Box>
        </Card>
    );
}
