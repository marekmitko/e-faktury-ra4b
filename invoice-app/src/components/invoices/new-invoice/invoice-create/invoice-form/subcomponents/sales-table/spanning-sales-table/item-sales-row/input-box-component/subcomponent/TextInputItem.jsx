import React from "react";
import {InputAdornment,  TextField, Divider} from "@mui/material";
import { useTranslate } from "react-admin";

export const TextInputItem = ({ iconStart, iconEnd, InputProps, width, variant, label, ...props }) => {
    const translate = useTranslate();
    return (
        <TextField sx={{ width: width? width : "100%" }}
            {...props}
            variant={ variant ? variant : "standard"}
            label={translate(label)}
            // size="small"
            // helperText={false}
            InputProps={{
                ...InputProps,
                startAdornment: iconStart ? (
                    <InputAdornment    position="start">{iconStart}</InputAdornment>
                ) : null,
                endAdornment: iconEnd ? (
                    <InputAdornment    position="end">{iconEnd}</InputAdornment>
                ) : null
            }}
        />
    );
};