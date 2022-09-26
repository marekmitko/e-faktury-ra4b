import { useEffect, useState } from "react";
import useForm, { FormContext, useFormContext, useWatch } from "react-hook-form";
import { TableCell, Grid } from "@mui/material"; ;


// *see SPRAWDZIĆ Z OLKIEM - inny warunek by nie byo 0.00 Brakuje znaku w grossPrice |!!!!
//  lina 30 dlaczego nie działało tak ->    if(!qty && !netPrice) return "";
// auxiliary function create item sales data 
function setNetPrice(taxValue, grossPrice) {
    let netPrice = null;
    if(!(grossPrice && taxValue)) return "";
    
    netPrice = ((+taxValue-100)/100 * +grossPrice);
    return  netPrice
}
function setGrossPrice(taxValue, netPrice) {
    let grossPrice = null;
    if(!(netPrice && taxValue)) return "";
    
    grossPrice = (+taxValue * +netPrice)/100;
    return  grossPrice
}
function setNetValue(qty, netPrice) {
    let netValue = null;
    if(!(qty && netPrice)) return "";
    
    netValue = (+qty * +netPrice);
    return  netValue
}


// outputCellsPart
export function SpecialOutputToNetInput  ({control, nameSalesItem, sxItem, startGgrossPrice}){
    const itemDatabase = useWatch({ control, name: nameSalesItem });
    let grossPrice; 
    if(!startGgrossPrice) grossPrice = setGrossPrice(itemDatabase.taxValue, itemDatabase.netPrice)
    let netValue = setNetValue(itemDatabase.qty, itemDatabase.netPrice)
    let grossValue = +itemDatabase.qty * grossPrice;
    let calnetPrice

    if(startGgrossPrice)
    calnetPrice = setNetPrice((itemDatabase.qty, itemDatabase.grossPrice));


    return (
        // !startGgrossPrice ? (
            <>
                <Grid item xs={sxItem}>
                    <TableCell align="right">{netValue? netValue.toFixed(2) : ""}</TableCell> 
                </Grid>
                <Grid item xs={sxItem}>
                    <TableCell align="right">{grossValue? grossValue.toFixed(2) : ""}</TableCell> 
                </Grid>
            </>
            // ) :  (<div>"test:" </div>)
    );
}










// outputCellsPart
export function SpecialOutputToGrossInput  ({control, nameSalesItem, sxItem, startGgrossPrice}){
    const itemDatabase = useWatch({ control, name: nameSalesItem });
    let grossValue = +itemDatabase.qty * +itemDatabase.grossPrice;
    
    // if (GP && TR) return (showNP = (GP / (100 + TR)) * 100) * qty;
    // else if (price && TR) return (showNP = (price / (100 + TR)) * 100) * qty;
    // else return (dataItem.GP = "podaj dane");

    // let netTest = (itemDatabase.grossPrice -(setNetPrice(itemDatabase.taxValue, itemDatabase.grossPrice )))*+itemDatabase.qty;

    let showNetPrice = (grossValue / itemDatabase.taxValue) *100;

    // netValue = (itemDatabase.taxValue/100)* (+itemDatabase.grossPrice );  
console.log("itemDatabase:",itemDatabase)
    return(
            <>
                <Grid item xs={sxItem}>
                    <TableCell align="right">{showNetPrice ?  showNetPrice.toFixed(2) : "test" }</TableCell> 
                </Grid>
                <Grid item xs={sxItem}>
                    <TableCell align="right">{grossValue? grossValue.toFixed(2) : ""}</TableCell> 
                </Grid>
            </>
    );
}




//  Old -> bin 

export function IsolateReRenderCell({ control, nameItemRow, } ) {
    const outputDataItem = useWatch({ control, name: nameItemRow });
    let sumItem = +outputDataItem[0] * +outputDataItem[1];
    return (sumItem);
}
export function IsolateReRenderNetValue({ control, nameItemRow, nameQty, namePrice } ) {
    const outputDataItem = useWatch({ control, name: nameItemRow });
    const resultPrice =  +outputDataItem.qty * +outputDataItem.netPrice
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

