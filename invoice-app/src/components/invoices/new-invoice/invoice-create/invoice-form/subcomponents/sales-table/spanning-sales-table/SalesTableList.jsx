import { TableBody, TableRow, TableCell, Grid} from "@mui/material";
import { useFieldArray, useWatch, Controller} from "react-hook-form";
import { TextField, Select, MenuItem, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { NumberInput } from "react-admin";
import {SelectItemSalesType, SelectTaxSalesItem } from "./sales-item-cells/SelectorsCells";
import { ItemNameTextInput, PriceNumberInput, QuantityNumberInput } from "./sales-item-cells/InputsCells";
import { IsolateReRenderCell, IsolateReRenderGrossPrice, IsolateReRenderGrossValue, IsolateReRenderNetValue, ItemRowOutputCells} from "./sales-item-cells/IsolateReRenderCells";
import AddIcon from '@mui/icons-material/Add';
//formatting functions
// function ccyFormat(num) {
//     const  result = `${num.toFixed(2)}`;
//     return result;
// }



let renderCount = 0;

export default function SalesTableList({ disabled, record, control, register, setValue, getValues, defaultValuesSalesItem }) {
    
    const { fields, append, remove } = useFieldArray({   // all props  prepend, swap, move, insert        
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "salesTableList" // unique name for your Field Array
    });

    // console.log("salesTableList", fields );
    console.log("!!!!!disabled", disabled );

    renderCount++;
    return(
        <>
        {/* <tr>

        <td>
            <label>view 1</label>
            <td>{record.myComponent}</td>
        </td>
        <td>
            <label>input 2</label>
            <input name="input2" ref={register} readOnly={disabled} /> 
        </td>
        </tr> */}
        <TableBody>
            {fields.map((item, index) => { 
                return(
                    <>
                    <TableRow hover={true} key={item.id}>
                        <Grid container spacing={1} 
                            justifyContent="center"
                            
                            // alignItems="center" 
                            >
                            <Grid item xs="auto" >
                                <TableCell align="center" sx={{ maxWidth: 25,  pr:0  }} >{index+1}</TableCell>
                            </Grid>
                            <Grid item xs="auto">
                                <ItemNameTextInput name={`salesTableList.${index}.itemName`}    control={control} />
                            </Grid>
                            <Grid item xs="auto" >
                                <SelectItemSalesType name={`salesTableList.${index}.type`}      control={control} />
                            </Grid>
                            <Grid item xs={0.75}>
                                <QuantityNumberInput name={`salesTableList.${index}.qty`}       control={control} defaultValue={item.qty}/>
                            </Grid>
            {/* SWITCHING PRICE */}
                            <Grid item xs={1.5} >
                                <PriceNumberInput name={`salesTableList.${index}.netPrice`}     control={control} />
                            </Grid>
            {/* END ==> SWITCHING PRICE */}
                            <Grid item xs={1} >
                                <SelectTaxSalesItem name={`salesTableList.${index}.taxValue`}   control={control} />
                            </Grid>
                            <ItemRowOutputCells sxItem={1} nameSalesItem={`salesTableList.${index}`}     control={control} />
                            <Grid item xs={1} >
                                <TableCell align="right">
                                    {/* <Button size="small" color="error" onClick={() => remove(index)} > */}
                                        <IconButton  color="error"   aria-label="delete" size="small"
                                            onClick={() => remove(index)} 
                                            >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    {/* </Button> */}
                                </TableCell>
                            </Grid>
                        </Grid>
                        <br/>
                    </TableRow>
                
                </>
                )}
            )}
        </TableBody>
        <TableRow><TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}}> 
            <div>
            <Button onClick={() => append(defaultValuesSalesItem)} variant="contained" size="small" >
               <AddIcon/>
            </Button>
                {/* // <input type="button" value="+ADD" onClick={() => append(defaultValuesSalesItem)}    /> */}
            <br /> <span className="counter">Render Count: {renderCount}</span>
            </div>
        </TableCell></TableRow>
        </>
    );
}
