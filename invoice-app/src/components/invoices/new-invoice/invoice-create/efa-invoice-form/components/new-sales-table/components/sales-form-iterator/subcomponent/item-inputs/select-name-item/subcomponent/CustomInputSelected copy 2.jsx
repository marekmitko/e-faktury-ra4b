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
                // inputRef={textRef} 
                // defaultValue={product ? product : "" }
                // size="small"
                // helperText={true}
            //    focused
                required
                // error={(!isTouched) ? false :  true }
                autoComplete="off"
                InputProps={{
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment  sx={{  ml: -1.5, }} sizeSmall="small"  position="start">
                            {/* <Box sx={{p: 0, display: 'flex'}}> */}
                                {iconStart}
                                {/* <Divider variant="middle"  orientation="vertical" flexItem /> */}
                                {/* </Box> */}
                                </InputAdornment>
                        ) : null
                    }}
            />

    );
};    



    {/* <Controller
        control={control}
        name="produkt_Name_Test"
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
        }) => (
            <JoyInput
            defaultValue={`${product ? product : null }`}
                variant='soft'
                // name={name}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value}
                inputRef={ref}
                placeholder="Wpisz Wystawcę"
                startDecorator={<PersonRoundedIcon />}
                />
        )}
        /> */}