import { TableCell, Grid } from "@mui/material";
import React from "react";
import { useWatch } from "react-hook-form";


// *see SPRAWDZIĆ Z OLKIEM - inny warunek by nie byo 0.00 Brakuje znaku w grossPrice |!!!!
//  lina 30 dlaczego nie działało tak ->    if(!qty && !netPrice) return "";
// auxiliary function create item sales data 
function setNetPrice(taxValue, grossPrice) {
    let netPrice = null;
    if(!(grossPrice && taxValue)) return "";
    
    netPrice = (+taxValue / +grossPrice)/100;
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
export function ItemRowOutputCells({control, nameSalesItem, sxItem, startGgrossPrice}){
    const itemDatabase = useWatch({ control, name: nameSalesItem });
    let grossPrice; 

    if(!startGgrossPrice) grossPrice = setGrossPrice(itemDatabase.taxValue, itemDatabase.netPrice)
    
    let netValue = setNetValue(itemDatabase.qty, itemDatabase.netPrice)
    let grossValue = +itemDatabase.qty * grossPrice;
    
 
    let calnetPrice

    if(startGgrossPrice)

    if(startGgrossPrice)
    calnetPrice = setNetPrice((itemDatabase.qty, itemDatabase.grossPrice));

    // if(startGgrossPrice)


    // if(!startGgrossPrice)
    return (


        !startGgrossPrice ? (<>
            {/* <Grid item xs={sxItem}>
                <TableCell align="right">{grossPrice? grossPrice.toFixed(2) : ""}</TableCell> 
            </Grid> */}
            <Grid item xs={sxItem}>
                <TableCell align="right">{netValue? netValue.toFixed(2) : ""}</TableCell> 
            </Grid>
            <Grid item xs={sxItem}>
                <TableCell align="right">{grossValue? grossValue.toFixed(2) : ""}</TableCell> 
            </Grid>
        </>) :  (<>
                {/* <Grid item xs={sxItem}>
                    <TableCell align="right">{grossPrice? grossPrice.toFixed(2) : ""}</TableCell> 
                </Grid>  */}
                {/* <Grid item xs={sxItem}>
                    <TableCell align="right">{netValue? netValue.toFixed(2) : ""}</TableCell> 
                </Grid> */}
                <Grid item xs={sxItem}>
                    <TableCell align="right">{calnetPrice? calnetPrice.toFixed(2) : ""}</TableCell> 
                </Grid>
                </>)
    
    );
}


    // let calnetPrice

    // if(startGgrossPrice)
    // calnetPrice = setNetPrice((itemDatabase.qty, itemDatabase.grossPrice));
    
    // if(startGgrossPrice)
    // return (
    //     <>
    //         {/* <Grid item xs={sxItem}>
    //             <TableCell align="right">{grossPrice? grossPrice.toFixed(2) : ""}</TableCell> 
    //         </Grid> */}
    //         <Grid item xs={sxItem}>
    //             <TableCell align="right">{netValue? netValue.toFixed(2) : ""}</TableCell> 
    //         </Grid>
    //         <Grid item xs={sxItem}>
    //             <TableCell align="right">{calnetPrice? calnetPrice.toFixed(2) : ""}</TableCell> 
    //         </Grid>
    //     </>
    // );






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

