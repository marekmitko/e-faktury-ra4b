






import React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
// import "./styles.css";

export default function FruitOptionCheckbox( ) {
        const { watch, control } = useFormContext( );

        // console.log("methods:", methods);
        
        const fruitOptions = [
        {
            label: "🍏",
            value: "apple"
        },
        {
            label: "🍊",
            value: "orange"
        },
        {
            label: "Wyślij pocztą🍌",
            value: "banana"
        }
    ];
    
    const fruitOpt = watch("fruits", [] );
    console.log(fruitOpt);
        // const onSubmit = (values) => {
        // console.log("Selected values", values.fruits);
        // };
    
        return (
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 20, paddingTop: 4
            }}
            // onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Prześlij dokument</FormLabel>
            <FormGroup>
                <Controller
                    name="fruits"
                    defaultValue={[]}
                    control={ control }
                    render={({ field }) =>  (
                        <>
                        {fruitOptions.map((fruitOption) => (
                            <FormControlLabel
                            key={fruitOption.value}
                            label={fruitOption.label}
                            control={
                                <Checkbox
                                value={fruitOption.value}
                                // For some reason codesandbox doesn't support `field.value.includes(...)`
                                checked={field.value.some(
                                // checked={field.value.includes(
                                    (existingValue) => existingValue === fruitOption.value
                                )}
                                onChange={(event, checked) => {
                                    if (checked) {
                                    field.onChange([
                                        ...field.value,
                                        event.target.value
                                    ]);
                                    } else {
                                    field.onChange(
                                        field.value.filter(
                                        (value) => value !== event.target.value
                                        )
                                    );
                                    }
                                }}
                                />
                            }
                            />
                        ))}
                        </>
                    ) }
                />
            </FormGroup>
            </FormControl>
    
            <Button variant="contained" 
            // type="submit"
            >
            Submit
            </Button>
        </div>
        );
    }
    