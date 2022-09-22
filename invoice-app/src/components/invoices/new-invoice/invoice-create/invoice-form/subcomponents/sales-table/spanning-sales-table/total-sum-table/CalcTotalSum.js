import React from "react";
import { useWatch, setValue } from "react-hook-form";
import TableCell from '@mui/material/TableCell';

function setTotalSumNetValue(salesArr){
    let totalSum = 0;
    for(let index = 0; index < salesArr.length; index++) {
        totalSum += (salesArr[index].netPrice * salesArr[index].qty);
    }
    return totalSum;
}
function setTotalSum(salesArr){
    let totalSum = 0;
    for(let index = 0; index < salesArr.length; index++) {
        totalSum += ((+salesArr[index].taxValue * salesArr[index].netPrice)/100 * salesArr[index].qty);
    }
    return totalSum;
}
// *see DOPRACOWAĆ Z OLKIEM - total tax total sum total net  |!!!!

export const SalesTotalSum = ({ control, setValue, nameSalesList }) => {
    const results = useWatch({ control, name: nameSalesList });

    let totalSumNet = setTotalSumNetValue(results);
    let totalSum = setTotalSum(results)
    return (
        <>
            <TableCell align="right" >{`${totalSumNet.toFixed(2)} PLN`}</TableCell>
            <TableCell align="right" >{`${(totalSum-totalSumNet).toFixed(2)} PLN`}</TableCell>
            <TableCell align="right" >{`${totalSum.toFixed(2)} PLN`}</TableCell>
        </>
    );
};

// { a ? <dsad> :  </dsad> }
//OLD

function totalCal(results) {
        let totalValue = 0;
        console.log("allkey", results)
        for (const key in results) {
            console.log("key", key);
            for (const value in results[key]) {
                if (typeof results[key][value] === "string") {
                    const output = parseInt(results[key][value], 10);
                    totalValue = totalValue + (Number.isNaN(output) ? 0 : output);
                } else {
                    totalValue = totalValue + totalCal(results[key][value], totalValue);
                }
            }
        }
    
        return totalValue;
    }
    
export const CalcMultiplication = ({control, setValue, nameInput}) => {
        const results = useWatch({ control, name: `${nameInput}` });
        const output = [];
    
        console.log('CalMLP', results);
        return(<p>sum cost: {output}</p>)
    }