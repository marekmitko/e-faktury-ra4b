import * as React from "react";
import Table from "@mui/joy/Table";
import { useTranslate } from "react-admin";
import { CellLabel, CostCell, TotalLabel, TotalCell } from "./subcomponent/TotalCostCell";
import { formatCurrency, getTotalPrice } from "./logic/getCostResult ";
import { useFormContext, useWatch } from "react-hook-form";
import { nameSalesIteratorForm } from "../../../mobile/spanning-sales-table/mobile-form-iterator/MobiForm";


const locale = {
    en: "en-US",
    pl: "pl"}
const currency = {
    pl: "PLN"
};

export default function TotalCostTable(props) {
    const { currencySymbol } = props;
    const currency = currencySymbol ? currencySymbol : "";
    const translate = useTranslate(); 

    const { control } = useFormContext();
    const results = useWatch({ control, name: `${nameSalesIteratorForm}` });


    let totalGross = getTotalPrice(results, "product_price_brutto");
    let totalNet = getTotalPrice(results, "product_price_netto");
    // let totalTax = getTotalPrice(results, "product_vat")/100;


    return (
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
                    <CostCell>{formatCurrency(totalGross - totalNet) }{` ${currency}`}</CostCell>
                </tr>
                <tr    >
                    <TotalLabel >{translate('myroot.form.label.header_totalResultTable.totalCost')}</TotalLabel>
                    <TotalCell>{formatCurrency(totalGross)}{` ${currency}`}</TotalCell>
                </tr>
            </tbody>
        </Table>
    );
}

{/* <td>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar src="/static/images/avatar/1.jpg" />
        <Box sx={{ minWidth: 0 }}>
            <Typography noWrap fontWeight="lg">
            Morty D Ardiousdellois Addami
            </Typography>
            <Typography noWrap level="body2" >
            Writer, Youtuber
            </Typography>
        </Box>
    </Box>
</td> */}