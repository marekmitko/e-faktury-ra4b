import React from "react";
import { Calc } from "../subcomponents/sales-table/CalcTotal";
import { useFieldArray, useWatch, Controller} from "react-hook-form";
import NestedArray from "./SalesListIterator";
import { IsolateReRender } from "../subcomponents/sales-table/sales-item-row/IsolateReRenderOutput";
// import { TextInput } from "react-admin";
import { TextField, Select, MenuItem } from "@mui/material"
import { NumberInput } from "react-admin"
import { RaMuiRHFEasyItemRow } from "./RaMuiRHFEasyItemRow";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues}) {

    const { 
        fields, 
        append, 
        remove } = useFieldArray({          
        // all props  prepend, swap, move, insert
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "test" // unique name for your Field Array
    });
    
    renderCount++;
    // const watchTest = useWatch({
    //     control,
    //     name: "test",
    // });
    // console.log("watchTest", watchTest)
    return (
        <>
            <tbody>
                {fields.map((item, index) => {
                    let itemNo = index+1;
                    return (
                        <>
                        <tr key={item.id} 
                        // {...register(`test.${index}.id`)}
                        >  {/* // automatically generates a unique identifier named id which is used for key prop. */}
                            <td style={{width: '5px !important', padding: 0 }}>{itemNo}</td>
                            <td>
                                <Controller
                                    name={`test.${index}.nameItem`}
                                    render={({field}) => ( 
                                            <TextField  size="small" variant="outlined" 
                                                label="Item name" 
                                            {...field}   /> 
                                        )}
                                    control={control}
                                    // defaultValue={item.nameItem}
                                />
                            </td>
                            <td>
                                <Controller
                                    name={`test.${index}.type`}
                                    render={({ field }) => (
                                        <Select size="small" variant="outlined"  {...field}>
                                            <MenuItem value={'Usługi'}>Usługi</MenuItem>
                                            <MenuItem value={'Towar'}>Towar</MenuItem>
                                            <MenuItem value={'Wynajem'}>Wynajem</MenuItem>
                                            <MenuItem value={'Prowizja'}>Prowizja</MenuItem>
                                            <MenuItem value={'Sprzedaż'}>Sprzedaż</MenuItem>
                                            <MenuItem value={'Sprzedaż 0% MVA'}>Sprzedaż 0% MVA</MenuItem>
                                            <MenuItem value={"Zwolniona z MVA"}>Zwolniona z MVA</MenuItem>
                                        </Select>
                                    )}
                                    control={control}
                                />
                            </td>
                            <td>
                                <Controller
                                    name={`test.${index}.qty`}
                                    render={({field}) => ( 
                                            <NumberInput  size="small" variant="outlined" 
                                                label="Quantity" 
                                            {...field}   helperText={false}/> 
                                        )}
                                    control={control}
                                    defaultValue={item.qty}
                                />
                            </td>
                            <td>
                                <Controller
                                    name={`test.${index}.net_price`}
                                    render={({field}) => ( 
                                            <NumberInput  size="small" variant="outlined" 
                                                label="Net Price" 
                                            {...field}   helperText={false}/> 
                                        )}
                                    control={control}
                                    // defaultValue={item.qty}
                                />
                            </td>
                            <td>
                                <Controller
                                        name={`test.${index}.vat`}
                                        render={({ field }) => (
                                            <Select  size="small" variant="outlined"  {...field}>
                                                <MenuItem value={125}>25%</MenuItem>
                                                <MenuItem value={115}>15%</MenuItem>
                                                <MenuItem value={112}>12%</MenuItem>
                                                <MenuItem value={106}>6%</MenuItem>
                                                <MenuItem value={100}>0</MenuItem>
                                            </Select>
                                        )}
                                        
                                        control={control}
                                    />
                            </td>
                            <td>
                                <IsolateReRender control={control} 
                                    nameInputPrice={`test.${index}.net_price`}
                                    nameInputQty={`test.${index}.qty`}
                                />
                            </td>
                                <IsolateReRender control={control} 
                                    nameInputPrice={`test.${index}.net_price`}
                                    nameInputQty={`test.${index}.qty`}
                                />
                            <td>
                            </td>
                            <td> 
                                <button type="button" onClick={() => remove(index)}> Delete </button>
                            </td>
                        </tr>
                            {/* <span>
                                <NestedArray nestIndex={index} {...{ control, register }} />
                            </span> */}
                            </>
                    );
                })}
            </tbody>

            <tr>
            
            <input type="button" 
                onClick={() => { 
                    append({ nameItem: "", type: ""});

                    }
                } 
            value="+ ADD" />
            </tr>
            <Calc control={control} setValue={setValue} />
            <span className="counter">Render Count: {renderCount}</span>
        </>
    );
}
