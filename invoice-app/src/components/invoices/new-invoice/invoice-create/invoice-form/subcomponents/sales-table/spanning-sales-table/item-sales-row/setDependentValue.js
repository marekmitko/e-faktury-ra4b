import { useEffect, useMemo } from "react"; 
import { useWatch, setValue } from "react-hook-form";



export function SetDependentValue (entryPriceIsGross,  itemPrice, itemTax, setValue, control, nameInputItem, nameOfDependentInput )  {
    // const [taxValueInput, netPriceInput, qty, value] = useWatch({
    // control,
    // name: ["taxValueInput", "netPriceInput", "qty", "value"]
    // });

    // // const prevValue = usePrevious(value);
    // console.log("netPriceInput:", netPriceInput);

    // console.log(
    // "dataItemGrosInput:",
    // ...[taxValueInput, netPriceInput, qty, value]
    // );

    const newDependentValue = useMemo(() => {
        // if (!isNaN(parseFloat((+itemPrice))) || !isNaN(parseFloat((itemTax)))) 
        //     return null;
        if (!entryPriceIsGross) //setGrossPriceItem
            return (parseFloat(+itemPrice) * (+itemTax)) / 100;
        if (entryPriceIsGross) //setNetPriceItem
            return (parseFloat(itemPrice) / (+itemTax)) * 100 ;
        }, [+itemPrice, itemTax]);

    return newDependentValue;
}


    // useEffect(() => {
    //     if (
    //     !isNaN(!parseFloat(newDependentValue))
    //         //  && value === prevValue
    //     ) {
    //     setValue("netPriceInput", netPriceInput);
    //     }
    //     // }, [ grossPriceInput, taxValueInput]);
    // }, [itemPrice, taxValueInput]);

    






//     // (showGP = (NP * (100 + TR)) / 100) * qty;

//     const grossPriceInput = useMemo(() => {
//     if (netPriceInput)
//         return ((+netPriceInput * (100 + +taxValueInput)) / 100) * qty;
//     else return ((+startPrice * (100 + +taxValueInput)) / 100) * qty;
//     }, [taxValueInput, netPriceInput, qty]);




//     useEffect(() => {
//     if (
//         !isNaN(!parseFloat(grossPriceInput))
//         //  && value === prevValue
//     ) {
//         setValue("grossPriceInput", grossPriceInput);
//     }
//     // }, [ netPriceInput, taxValueInput]);
//     }, [netPriceInput, taxValueInput]);

//     return (
//     <div>
//         <span>Gross Price: </span>
//         <input {...register("grossPriceInput")} />
//     </div>
//     );
// };
