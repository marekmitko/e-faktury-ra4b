import { useState, useEffect, useMemo} from "react";
import {InputAdornment, IconButton, FormControl, InputLabel, Autocomplete, MenuItem, Select, Chip, Stack, TextField, Divider} from "@mui/material";
import { amber } from "@mui/material/colors";
import { useTranslate } from "react-admin";


// function SelectItemOption({field, ...props}) {
function SelectItemOption({field, options, isError, label, variant, variantLabel, defaultValue, sx,...props}) {
    const translate = useTranslate();
    
    // https://stackoverflow.com/questions/66722593/how-to-set-defaultvalue-after-some-delay-on-react-select-with-react-hook-form
    // useEffect(() => {
    //     setTimeout(() => {
    //     setValue("country", "India");
    //     }, 2000);
    // }, [setValue]);

    // const saveData = (form_data) => {
    //     console.log("form_data", form_data);
    // };
    
    console.log("selected:", field.value)
    return (
    <FormControl  {...props} sx={ sx }  >
        <InputLabel variant={ variantLabel ? variantLabel : "standard"}  id="demo-simple-select-autowidth-label">
            {translate(label)}
        </InputLabel>
        <Select
            required
            color="success"
            error={isError ? false : true}
            defaultValue={defaultValue ? `${defaultValue}` : null}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={field.value}
            label={label}
            onChange={field.onChange}
            variant={ variant ? variant : "standard"}
            autoWidth
        > 
            {(options.length) ? 
                (options.map(({id, name, value}, index) => {
                    if(index==0) return (<MenuItem disabled key={`${id}_idx${index}`} value={value}><em>{name}</em></MenuItem>)
                    return(
                        <MenuItem key={`${id}_idx${index}`} value={value}>
                            {name}
                        </MenuItem>)})
                ) : null
            }
        </Select>
    </FormControl>
    );
}

export default SelectItemOption;