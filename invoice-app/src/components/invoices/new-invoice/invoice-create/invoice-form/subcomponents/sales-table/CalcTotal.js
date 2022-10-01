import React from "react";
import { useWatch } from "react-hook-form";












export function setGrossPriceItem(netPriceItem, taxValue){
    return (netPriceItem*taxValue)/100;
}
export function setNetPriceItem(grossPriceInput, taxValue){
    return (+grossPriceInput / (+taxValue)) * 100 ;
}









function totalCal(results) {
    let totalValue = 0;

    for (const key in results) {
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

export const Calc = ({ control, setValue }) => {
    const results = useWatch({ control, name: "test" });
    const output = totalCal(results);

    console.log("RESULT", results);

    setValue("total", output);

    return <p>total sum: {output}</p>;
};



export const CalcMultiplication = ({control, setValue, nameInput}) => {
    const results = useWatch({ control, name: `${nameInput}` });
    const output = [];

    console.log('CalMLP', results);
    return(<p>sum cost: {output}</p>)
}