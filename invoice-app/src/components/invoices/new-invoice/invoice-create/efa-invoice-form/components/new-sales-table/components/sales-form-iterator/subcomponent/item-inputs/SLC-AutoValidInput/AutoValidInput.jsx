    import * as React from "react";
    import { alpha, styled } from "@mui/material/styles";
    import InputBase from "@mui/material/InputBase";
    import Box from "@mui/material/Box";
    import InputLabel from "@mui/material/InputLabel";
    import TextField from "@mui/material/TextField";
    import FormControl from "@mui/material/FormControl";
    import { CustomInputSLC } from "./subcomponent/styledCustomInput";
import { FormHelperText } from "@mui/material";



    export default function SLCAutoValidInput(props) {
    return (
        <Box
        component="form"
        noValidate
        sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2
        }}
        >
        {/* <FormControl variant="standard"   >
         
            <InputLabel 
            
            shrink
            sx={{
                visibility: "v",
                mt: "-3px"
            }}
            htmlFor="AutoValidInput"
            >
          // isDirty? "Bootstrap" : ""
            "test"
            </InputLabel>
        <CustomInputSLC
            label="Bootstrap"

            onFocus="t"
            // hiddenLabel
            required
            // color="secondary"
            // error
            variant="outlined"
            id="AutoValidInput"
            placeholder="podaj cenę"
        {...props}    
        />
            </FormControl> */}
        <CustomInputSLC
            // hiddenLabel
            required
            // color="secondary"
            // error
            variant="outlined"
            id="AutoValidInput"
            placeholder="podaj cenę"
        {...props}    
        />
            {/* <p>{(props?.helperText) ? props.helperText. : "" }</p> */}
        </Box>
    );
    }
