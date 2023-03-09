    import * as React from "react";
    import { alpha, styled } from "@mui/material/styles";
    import TextField from "@mui/material/TextField";

    // https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component
    // '&:hover, &.Mui-focusVisible': {
    // '&.Mui-active': {

    // Dynamiczny CSS
    // https://mui.com/material-ui/customization/how-to-customize/#dynamic-overrides

export   const CustomInputSLC = styled(TextField)({
    "& .MuiInputBase-input": {
        borderRadius: 4,
        // position: "relative",
        // border: "1px solid #ced4da",
        fontSize: 16,
        // width: "auto",
        padding: "8px 10px"
    },
    // "& .MuiInputLabel-root": {
    //     marginTop: "-0px",
    //     padding: "0"
    // },
    // "& .MuiInputBase-input:hover + fieldset": {
    //     borderColor: "pink",
    //     borderWidth: 2
    // },
    "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: 2
    },
    "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 2
    },
    "& input:invalid:focus + fieldset": {
        borderColor: "gold",
        borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important" // override inline-style
    }
    });

