import { TableBody, TableRow, TableCell} from "@mui/material";
import { useFieldArray, useWatch, Controller} from "react-hook-form";
import { TextField, Select, MenuItem, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { NumberInput } from "react-admin";
import {SelectItemSalesType, SelectTaxSalesItem } from "./sales-item-cells/SelectorsCells";
import { ItemNameTextInput, PriceNumberInput, QuantityNumberInput } from "./sales-item-cells/InputsCells";
import { IsolateReRenderCell, IsolateReRenderGrossPrice, IsolateReRenderGrossValue, IsolateReRenderNetValue, ItemRowOutputCells} from "./sales-item-cells/IsolateReRenderCells";

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
                        <ItemNameTextInput name={`salesTableList.${index}.itemName`}    control={control} />
                        <SelectItemSalesType name={`salesTableList.${index}.type`}      control={control} />
                        <QuantityNumberInput name={`salesTableList.${index}.qty`}       control={control} defaultValue={item.qty}/>
                        <PriceNumberInput name={`salesTableList.${index}.netPrice`}     control={control} />
                        <SelectTaxSalesItem name={`salesTableList.${index}.taxValue`}   control={control} />
                        <ItemRowOutputCells nameSalesItem={`salesTableList.${index}`}     control={control} />
                        <TableCell align="right">
                            {/* <Button size="small" color="error" onClick={() => remove(index)} > */}
                                <IconButton  color="error"   aria-label="delete" size="small"
                                    onClick={() => remove(index)} 
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            {/* </Button> */}
                        </TableCell>
                    </TableRow>
                )}
            )}
        </TableBody>
        <TableRow><TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}}> 
            <div>
            <Button onClick={() => append(defaultValuesSalesItem)} variant="contained" size="small" >
                ADD
            </Button>
                {/* // <input type="button" value="+ADD" onClick={() => append(defaultValuesSalesItem)}    /> */}
            <span className="counter">Render Count: {renderCount}</span>
            </div>
        </TableCell></TableRow>
        </>
    );
}
