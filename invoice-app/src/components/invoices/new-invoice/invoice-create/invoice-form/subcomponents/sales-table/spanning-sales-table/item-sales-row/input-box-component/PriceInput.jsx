import { useState, useEffect, useMemo} from "react";
import {InputAdornment, FormControl, InputLabel, Autocomplete, MenuItem, Select, Chip, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";





export const PriceInput = ({ objController, iconStart, iconEnd, InputProps, ...props }) => {
    return (
        <TextField 
            {...props}
            variant="standard"
            size="small"
            type="number"
            InputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]',
                ...InputProps,
                startAdornment: iconStart ? (
                    <InputAdornment    position="start">{iconStart}</InputAdornment>
                ) : null,
                endAdornment: iconEnd ? (
                    <InputAdornment    position="end">{iconEnd}</InputAdornment>
                ) : null
            }}

            onChange={ event => {
                var value = event.target.value.replace(/[^0-9\,\.]/ig,'');
                value = value.replace(/[,]/gi,'.');
                objController.field.onChange(value);
                // console.log('valuePrice', value);
                }
            } // send value to hook form 
            onBlur={objController.field.onBlur} // notify when input is touched/blur
            value={objController.field.value} // input value
            name={objController.field.name} // send down the input name
            inputRef={objController.field.ref} // send input ref, so we can focus on input when error appear
        
        />
    );
};



