

import { TableCell } from "@mui/material";
import React from "react";
import { useWatch } from "react-hook-form";

export function IsolateReRenderCell({ control, nameItemRow, } ) {
    const outputDataItem = useWatch({ control, name: nameItemRow });



    console.log("ARR!nameItemRow", outputDataItem);
    console.log("netPrice!nameItemRow", outputDataItem.netPrice);
    // if(nameInputVat){let sumItem = +outputDataItem[0] * +outputDataItem[1];
    
    
    let sumItem = +outputDataItem[0] * +outputDataItem[1];
        return (sumItem);
    
}
export function IsolateReRenderNetValue({ control, nameItemRow, nameQty, namePrice } ) {
    const outputDataItem = useWatch({ control, name: nameItemRow });

    const resultPrice =  +outputDataItem.qty * +outputDataItem.netPrice

    console.log("ARR!nameItemRow", outputDataItem);
    console.log("netPrice!nameItemRow", outputDataItem.netPrice);
    // if(nameInputVat){let sumItem = +outputDataItem[0] * +outputDataItem[1];
    
    
    // let sumItem = +outputDataItem[0] * +outputDataItem[1];
        return  (<TableCell align="right">  {resultPrice.toFixed(2)}   </TableCell>);
    
}


export function IsolateReRenderGrossPrice({ control, nameItemRow } ) {
    const outputDataItem = useWatch({ control, name: nameItemRow });
    const resultGross =  (+outputDataItem.netPrice * +outputDataItem.taxValue)/100;

    return  (<TableCell align="right">  {resultGross.toFixed(2)}   </TableCell>);
}

export function IsolateReRenderGrossValue({ control, nameItemRow } ) {
    const outputDataItem = useWatch({ control, name: nameItemRow });
    const resultGrossValue =  (+outputDataItem.netPrice * +outputDataItem.taxValue )/100 *outputDataItem.qty;

    return  (<TableCell align="right">  {resultGrossValue.toFixed(2)}   </TableCell>);
}