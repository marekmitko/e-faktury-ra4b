import React from "react";
import {InputAdornment,  TextField, Divider} from "@mui/material";

export const TextInputItem = ({ iconStart, iconEnd, InputProps, width, variant, ...props }) => {
    return (
        <TextField sx={{ width: width? width : "100%" }}
            {...props}
            variant={ variant ? variant : "standard"}
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