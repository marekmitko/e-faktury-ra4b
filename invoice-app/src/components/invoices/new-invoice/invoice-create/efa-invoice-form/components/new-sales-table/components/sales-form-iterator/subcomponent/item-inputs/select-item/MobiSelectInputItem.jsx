import { useState, useEffect, useMemo} from "react";
import {  FormControl, InputLabel, Autocomplete, MenuItem, Select, InputAdornment, } from "@mui/material";
import { useTranslate, useInput } from "react-admin";
import { Box } from "@mui/joy";
import { width } from "@mui/system";
import AccountCircle from '@mui/icons-material/AccountCircle';

// function SelectItemOption({field, ...props}) {
export function MobiSelectInputItem({ options, label, variantLabel, variant, defaultValue, sx,...props}) {
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
  

    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useInput(props);

    // label={ typeItem.field.value ? "myroot.form.label.inputbox_itemrow.typeItem" : "Wprowadź typ"} 
    // sx={{ minWidth: 100 }} defaultValue="placeholder" options={typeOptions}  


    return (
        <Box sx={sx}>

        <FormControl sx={{ width: '100%'}} {...props} size="small"  >
            {/* <InputLabel variant={ variant ? variant : "standard"}  id="demo-simple-select-autowidth-label">
                {translate(label)}
            </InputLabel> */}
            <Select
               
                    // endAdornment={
                    //   <InputAdornment position="start">
                    //     <AccountCircle />
                    //   </InputAdornment>
                    // }
                    endAdornment={
                        true ? (
                            <div
                                // onClick={xClick}
                            >
                                <i className="bi bi-x-lg"></i>
                            </div>
                        ) : null
                    }
                    sx={{
                        "& .MuiSelect-iconOutlined": {
                            display: false ? "none" : "",
                        },
                        "&.Mui-focused .MuiIconButton-root": {
                            color: "primary.main",
                        },
                    }}
                required
                // color="success"
                // error={isError ? false : true}
                defaultValue={defaultValue ? `${defaultValue}` : null}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-label"
                value={field.value}
                // label={translate(label)}
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
            </Box>
    );
}

export default MobiSelectInputItem;