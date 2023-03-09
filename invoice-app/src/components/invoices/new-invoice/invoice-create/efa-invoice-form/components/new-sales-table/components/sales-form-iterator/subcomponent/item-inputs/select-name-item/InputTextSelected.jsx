import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import { choices, useInput } from 'react-admin';
import SelectButton from "./subcomponent/SelectButton";
import { CustomInputSelected } from "./subcomponent/CustomInputSelected";
import { Stack } from "@mui/material";
import { Box } from "@mui/joy";









export const InputTextSelected = ({choiceOptions, sx, label, ...props}) => {

    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useInput(props);

    const namefield = field.name;
    // const options = props.choiceOptions;
    return(
        <Box sx={ sx } >
            <Stack direction="row" spacing={0} alignItems="flex-start" sx={{ 
                // paddingTop: 0, marginTop: '-25px', 
                width: '100%', display: 'flex',
            }} >
                <SelectButton 
                    nameProdcutNameInput={namefield ? namefield : ""} 
                    options={choiceOptions ? choiceOptions : {} }
                />
                <CustomInputSelected 
                    variant="outlined"
                    {...field}  
                    label={ label ? label : "" }
                    // error={(!isTouched) ? false :  true }
                    />
            </Stack>
        </Box>
    );
};