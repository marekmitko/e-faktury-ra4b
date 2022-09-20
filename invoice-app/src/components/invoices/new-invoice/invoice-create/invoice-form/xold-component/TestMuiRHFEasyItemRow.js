import {TextField} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
/>  */}


{/* How use render props 

render - jest to props od Controller i działa w oparciu o render props react js 
    to funkcja renderująca zawierająca 3 keys
    field -> zawiera m.in. value, onChange
    fieldState
    formState 


*/}


export const TestMuiInput = () => {
    const { control } = useForm();
    return(
        <div>
            <Controller
                name="textValue"
                control={control} 
                render={({ field: {onChange, value} })=> {
                    console.log('txtValue', value)
                    return(
                        <TextField 
                            //https://mui.com/material-ui/react-text-field/#integration-with-3rd-party-input-libraries
                            // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                            onChange={onChange}
                            value={value}
                            label="Text Value"
                        />
                    );}
                } 
            />
            <Controller
                name="raMyNumber"
                control={control}
                render={({ field }) => {
                    console.log('raMyNumber', field.value)
                    return(
                        <NumberInput label="raMyNumber" {...field} />
                    );}
                }
            />
        </div>
    );
};




// toDO
// inputProps -> 
  //https://mui.com/material-ui/react-text-field/#integration-with-3rd-party-input-libraries
     // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 