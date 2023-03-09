import React from "react";
import { useWatch } from "react-hook-form";
import TableCell from '@mui/material/TableCell';

// https://codesandbox.io/s/invoice-app-strona-logowania-forked-56e597?file=/src/Components/Invoice/Invoice.js:6287-6301
const locale = {
    en: "en-US",
    pl: "pl"}
const currency = {
    pl: "PLN"
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat( locale.pl, {
        style: "currency",
        currency:  currency.pl,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
};



export const getTotalPrice = (results, namePrice) => {
    let totalSum = 0;

    for(const key in results) {
        let count = parseFloat(results[key]["product_count"]);
        let price = parseFloat(results[key][`${namePrice}`]);
        if(!isNaN(price) && (!isNaN(count) )) // omówić przpadek 3e312
            totalSum += (price * count );  
    }
    return totalSum;
}

export function getTotalGross(results){
    let totalSum = 0;

    for(const key in results) {
        // statingGrossPrice?
        if(results[key][`_${key}_product_count`] && results[key][`_${key}_product_price_brutto`])
            totalSum += (results[key][`_${key}_product_price_brutto`] * results[key][`_${key}_product_count`]);
    }

    return (totalSum);
}
// *see DOPRACOWAĆ Z OLKIEM - total tax total sum total net  |!!!!

// export const SalesTotalSum = ({ control, nameSalesList }) => {
//     const results = useWatch({ control, name: `${nameSalesList}` });

//     let totalSumNet = setTotalSumNetValue(results);
//     let totalSum = setTotalSum(results)
//     // {/* <TableCell align="right" >{(totalSum && totalSumNet) ? `${(totalSum-totalSumNet).toFixed(2)} PLN` : ""}</TableCell> */}
//     return (
//         <>
//             <TableCell align="right" >{`${!isNaN(totalSumNet.toFixed(2)) ? totalSumNet.toFixed(2) : ""} PLN`}</TableCell>
//             <TableCell align="right" >{`${!isNaN((totalSum-totalSumNet).toFixed(2)) ? (totalSum-totalSumNet).toFixed(2) : "" } PLN`}</TableCell>
//             <TableCell align="right" >{`${!isNaN(totalSum.toFixed(2))? totalSum.toFixed(2) : "" } PLN`}</TableCell>
//         </>
//     );
// };















// export const calcTaxAmount = (c) => {
//     return c * (taxRate / 100);
// };

// export const calcLineItemsTotal = () => {
//     return lineItems.reduce(
//     (prev, cur) => prev + cur.quantity * cur.price,
//     0
//     );
// };

// export const calcTaxTotal = () => {
//     return calcLineItemsTotal() * (taxRate / 100);
// };

// export const calcGrandTotal = () => {
//     return calcLineItemsTotal() + calcTaxTotal();
// };