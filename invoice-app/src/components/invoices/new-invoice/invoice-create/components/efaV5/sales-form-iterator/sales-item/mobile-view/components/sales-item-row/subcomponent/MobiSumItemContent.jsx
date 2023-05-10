import * as React from "react";
import Table from "@mui/joy/Table";
import { useSimpleFormIteratorItem, useSimpleFormIterator, useTranslate } from "react-admin";
import { CellLabel, CostCell, TotalLabel } from "./subcomponent/TotalCostCell";
// import { formatCurrency, getTotalPrice, getTotalTax } from "./logic/getCostResult ";
import { useFormContext, useWatch } from "react-hook-form";
// import { nameSalesIteratorForm } from "../../../mobile/spanning-sales-table/mobile-form-iterator/MobiForm";
import { CardContent, Card,  Typography, AspectRatio, Box, Chip, Button} from "@mui/joy";
import { Paper } from "@mui/material";
import { borderRadius } from "@mui/system";
import { formatCurrency } from "../../../../../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ";



const locale = {
    en: "en-US",
    pl: "pl"}
const currency = {
    pl: "PLN"
};
export default function MobiSumItemContent(props) {
    const { currencySymbol, sxCSS, firstlineItemSum, secondlineItemSum } = props;
    const currency = currencySymbol ? currencySymbol : "";
    const translate = useTranslate(); 
    // const { control } = useFormContext();

    // let totalGross = 125;
    // let totalNet = 100;
    // let totalTax = 25;

    return (
        <Box 
            variant="plain"
            size="sm"
            sx={{
                p: .75
            }}
            >
                <CardContent sx={{  p: 0, m: 0 ,
                        flexBasis:  'initial' ,
                        bgcolor: 'background.level1', 
                        opacity: .75,
                        borderRadius: 1.5,
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTop: '2px solid',
                        borderColor: 'neutral.300'

                    }} 
                >
                    {/* //Om aria-label="table with ellipsis texts" //note czy mi to jest potrzebne?  */}
                <Table  noWrap   sx={{ mx: "auto", }}   // width: 100, 
                >
                    <tbody>
                        <tr>
                            <CellLabel>{translate('myroot.form.mobile.itemCard.itemNetSum')}</CellLabel>
                            <CostCell fontWeight="400" >
                                {firstlineItemSum}
                                {/* {formatCurrency(firstlineItemSum)}{` ${currency}`} */}
                            </CostCell> 
                        </tr>
                        <tr>
                            <CellLabel>{translate('myroot.form.mobile.itemCard.itemGrossSum')}</CellLabel>
                            <CostCell fontWeight="400" >
                                {secondlineItemSum}
                                {/* {formatCurrency(secondlineItemSum) }{` ${currency}`} */}
                            </CostCell> 
                        </tr>
                    </tbody>
                </Table>
                </CardContent>
          
        </Box>
    );
}
