import { useEffect, useMemo, useRef } from "react";
import { TableBody, TableRow, TableCell, Grid} from "@mui/material";
import { useForm, useFieldArray, useWatch, Controller} from "react-hook-form";
import { TextField, Select, MenuItem, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { NumberInput } from "react-admin";
import {SelectItemSalesType, SelectTaxSalesItem } from "./sales-item-cells/SelectorsCells";
import { ItemNameTextInput, PriceNumberInput, QuantityNumberInput } from "./sales-item-cells/InputsCells";
import { IsolateReRenderCell, IsolateReRenderGrossPrice, IsolateReRenderGrossValue, IsolateReRenderNetValue, ItemRowOutputCells} from "./sales-item-cells/IsolateReRenderCells";
import AddIcon from '@mui/icons-material/Add';
import { RefNumberInputTEST } from "./conditional-rerender/PriceInputRef";
import DependentInputsPrice from "./conditional-rerender/DependentInpunts";
import { TogglePrice } from "./sales-table-panel/TogglePrice";
import { SpecialOutputToGrossInput, SpecialOutputToNetInput } from "./special-cells-price/SpecialOutputPrice";

let renderCount = 0;

export default function SalesTableList({ 
    disabled, record, control, register, setValue, getValues, defaultValuesSalesItem, toggelPrice,
    fields, append, remove, 
    }) {
    
        
        
        renderCount++;
        
        // Istnieje pięć punktów przerwania siatki: xs, sm, md, lg i xl.
        return(
            <>
        <TableBody>
            {fields.map((item, index) => { 
            
            // control net price or gross price 
            const NetPriceInput = () => (
                <PriceNumberInput name={`salesTableList.${index}.netPrice`}  labelName="Net Price"   control={control} 
                    defaultValue={getValues(`salesTableList.${index}.netPrice`)}
            />);
            const GrossPriceInput = () => (
                <PriceNumberInput name={`salesTableList.${index}.grossPrice`} labelName="Gross Price"  control={control} 
                    defaultValue={getValues(`salesTableList.${index}.grossPrice`)}
            />);

                return(
                    <>
                    {/* <tr>
                    <RefNumberInputTEST name={`salesTableList.${index}.TestRef`}  labelName="TestRef"   control={control}/>
                    </tr> */}
                    <TableRow hover={true} key={item.id}>
                        <Grid container spacing={1} 
                            justifyContent="center"
                            alignItems="center" 
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
                            <Grid item xs="auto" >
                                <SelectTaxSalesItem name={`salesTableList.${index}.taxValue`}   control={control} />
                            </Grid>
            {/* SWITCHING PRICE */}
                            <Grid item xs={1.5} >
                                {toggelPrice.checkedOption  ? (<GrossPriceInput />) : (<NetPriceInput />)}
                            </Grid>
                            {/* <DependentInputsPrice toggelPrice={toggelPrice} index={index} control={control} /> */}
            {/* END ==> SWITCHING PRICE */}
            {/* //*see opracowa to z getValue i setValue */}

                            {toggelPrice.checkedOption  
                                ? (<SpecialOutputToGrossInput 
                                    control={control} nameSalesItem={`salesTableList.${index}`} 
                                    sxItem={1}  
                                    />)
                                : (<SpecialOutputToNetInput 
                                    control={control} nameSalesItem={`salesTableList.${index}`} 
                                    sxItem={1}  
                                />)
                            }
                                {/* <ItemRowOutputCells control={control} nameSalesItem={`salesTableList.${index}`} sxItem={1} startGgrossPrice={toggelPrice.checkedOption} /> */}
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
