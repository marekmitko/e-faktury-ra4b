import { TableBody, TableRow, TableCell} from "@mui/material";
import { useFieldArray, useWatch, Controller} from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { NumberInput } from "react-admin";
import {SelectItemSalesType, SelectTaxSalesItem } from "./item-inputs/SelectorsCells";
import { ItemNameTextInput, PriceNumberInput, QuantityNumberInput } from "./item-inputs/InputsCells";
import { IsolateReRenderCell, IsolateReRenderGrossPrice, IsolateReRenderGrossValue, IsolateReRenderNetValue} from "./item-outputs/IsolateReRenderCells";

//formatting functions
// function ccyFormat(num) {
//     const  result = `${num.toFixed(2)}`;
//     return result;
// }



let renderCount = 0;

export default function SalesTableList({ control, register, setValue, getValues, defaultValuesSalesItem }) {
    
    const { fields, append, remove } = useFieldArray({   // all props  prepend, swap, move, insert        
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "salesTableList" // unique name for your Field Array
    });

    console.log("salesTableList", fields );

    renderCount++;
    return(
        <>
        <TableBody>
            {fields.map((item, index) => { 
                return(
                    <TableRow key={item.id}>
                        <TableCell align="center" sx={{ maxWidth: 15,  pr:0  }} >{index+1}</TableCell>
                        <ItemNameTextInput name={`salesTableList.${index}.itemName`} control={control} />
                        <SelectItemSalesType name={`salesTableList.${index}.type`} control={control} />
                        <QuantityNumberInput name={`salesTableList.${index}.qty`} control={control} defaultValue={item.qty}/>
                        <PriceNumberInput name={`salesTableList.${index}.netPrice`} control={control} />
                        <SelectTaxSalesItem name={`salesTableList.${index}.taxValue`} control={control} />
                        {/* <TableCell align="right"> {"test"}      */}
                        {/* {`${(item.grossPrice).toFixed(2)}`} */}
                          {/* </TableCell> */}
                        <IsolateReRenderGrossPrice control={control} nameItemRow={`salesTableList.${index}`} />
                        <IsolateReRenderNetValue control={control} nameItemRow={`salesTableList.${index}`} />
                        <IsolateReRenderGrossValue control={control} nameItemRow={`salesTableList.${index}`} />
                        <TableCell align="right">
                            <button type="button" onClick={() => remove(index)}> X </button>
                        </TableCell>
                    </TableRow>
                )}
            )}
        </TableBody>
        <TableRow><TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}}> 
            <div><input type="button" value="+ADD" onClick={() => append(defaultValuesSalesItem)}    />
            <hr/>
            <span className="counter">Render Count: {renderCount}</span>
            </div>
        </TableCell></TableRow>
        </>
    );
}
