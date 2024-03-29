import React from "react";
import { Box, FormLabel, Typography } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useTranslate } from "react-admin";

// AutocompleteInputProps={{
//     startAdornment: (
//         <InputAdornment position="ControlUnstyled">
//             <AccountCircle />
//         </InputAdornment>
//     ),
// }}

export const CustomerAutoLabel = ({ label }) => {
    const translate = useTranslate();
    return (
        <span>
            <PersonSearchIcon sx={{ mb: "-5px" }} />
            &nbsp;
            <Typography
                sx={{
                    display: "inline-block",
                    // mt: -4,=
                    px: 0,
                    py: 0,
                    backgroundColor: "transparent",
                }}
            >
                {label ? translate(`${label}`) : ""}
            </Typography>
        </span>
    );
};
