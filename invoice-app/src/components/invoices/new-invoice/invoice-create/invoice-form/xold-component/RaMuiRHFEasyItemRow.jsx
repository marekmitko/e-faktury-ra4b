import {TextField} from "@mui/material";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { render } from "react-dom";
import { NumberInput } from "react-admin";

{/*

Kontrolej bazujący na Render Props 
https://reactjs.org/docs/render-props.html


    <Controller
        control={control}
        name="test"
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
        }) => ( WHATEVER_INPUT_WE_WANT )}
    />  
*/}
let childRender = 0;

function NumberInputWatched({ control, valuePrice, valueQty }) {
    useWatch({
        control,
        name: [`${valuePrice}`, `${valueQty}`] // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    });
    childRender++;
    return (
        <>
            <p>child render count: {childRender}</p>
        </>
    );
}


export const RaMuiRHFEasyItemRow = ({namePrice, nameQty, control}) => {
    // const { control } = useForm(); 
    const itemDetails = useWatch({ control, name: [`${namePrice}`, `${nameQty}`] });
    console.log('itemDetails', itemDetails);
    let totalCost = itemDetails[0]*itemDetails[1];
    return(
        <div>
            <Controller
                name={`${namePrice}`}
                control={control}
                render={({ field }) => {
                    console.log('Price', field.value)
                    return(
                        <NumberInput label="Price" {...field} />
                    );}
                }
            />
            <Controller
                name={`${nameQty}`}
                control={control}
                render={({ field }) => {
                    console.log('qty item', field.value)
                    return(
                        <NumberInput label="Quantity" {...field} />
                        );}
                    }
            />
            <span>
                <center>Total Cost: {totalCost}</center>
            </span>
            <hr />
            {/* <NumberInputWatched control={control} /> */}
            {/* <div>{"dasdasd"}</div> */}
        </div>
    );
};




// toDO
// inputProps -> 
  //https://mui.com/material-ui/react-text-field/#integration-with-3rd-party-input-libraries
     // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 