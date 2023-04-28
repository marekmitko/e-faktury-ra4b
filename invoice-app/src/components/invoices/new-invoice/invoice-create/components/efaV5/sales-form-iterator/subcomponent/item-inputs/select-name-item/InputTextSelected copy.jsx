import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import { choices, useInput } from 'react-admin';
import SelectButton from "./subcomponent/SelectButton";
import { CustomInputSelected } from "./subcomponent/CustomInputSelected";
import { Stack, Divider, Box, FormControl, InputLabel } from "@mui/material";
// import { Box } from "@mui/joy";



const SelectBtn = ({namefield, choiceOptions }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'min-content',
            // border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            // '& svg': {
            //     m: 1.5,
            // },
            // '& hr': {
            //     mx: 0.5,
            // },
            
        }}
    >

    <SelectButton sxCSS={{   display: 'flex',   alignItems: 'center' }}
    nameProdcutNameInput={namefield ? namefield : ""} 
    options={choiceOptions ? choiceOptions : {} }
/>
        <Divider 
        // sx={{ m: 0 }}  variant="middle"  
        orientation="vertical" flexItem />
</Box>
)




export const InputTextSelected = ({choiceOptions, sx, label, ...props}) => {

    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useInput(props);
    const namefield = field.name;
    // const options = props.choiceOptions;
    return(
        <Box sx={{ ...sx, '& > :not(style)': { m: 1, width: '25ch' }, } }   component="form"
  
      >      <FormControl>
      <InputLabel variant='outlined' htmlFor="component-outlined">Name</InputLabel>
                <CustomInputSelected id="component-outlined"
                    {...field}  
                    iconStart={<SelectBtn choiceOptions={choiceOptions? choiceOptions : {} } namefield={namefield ? namefield : ""} />}
                    variant="outlined"
                    // label={ label ? label : "" }
                    // error={(!isTouched) ? false :  true }
                    {...props}
                    />
                    </FormControl>
        </Box>
    );
};