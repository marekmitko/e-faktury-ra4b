import React from "react";
import {InputAdornment,  
    TextField,
    Divider} from "@mui/material";
import { TextInput, useRecordContext, useTranslate } from "react-admin";
import { Box } from "@mui/system";
// import SelectListButton from "../SelectListButton";
// import JoyInput from '@mui/joy/Input';
// import { useFormContext, Controller } from 'react-hook-form';
// import Chip from '@mui/joy/Chip';
// import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import { Stack } from "@mui/joy";

export const CustomInputSelected = ({  iconStart, iconEnd, InputProps, width, variant, label, ...props }) => {

    // const { isDirty, isTouched } = objController.fieldState;
    const translate = useTranslate();
    return (
            <TextField sx={{ width: width? width : "100%" }}
                {...props} 
                variant={ variant ? variant : "standard"}
                label={translate(label)}
                required

                autoComplete="off"
                InputProps={{
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment  sx={{  ml: -1.5, }} sizeSmall="small"  position="start">
                                {iconStart}
                                </InputAdornment>
                        ) : null
                    }}
            />

    );
};    


