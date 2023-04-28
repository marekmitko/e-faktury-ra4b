import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { IsFilld } from "./isFilled";
import { AutoHelperText } from "./AutoHelperText";
import { CustomInput } from "./CustomInput";
import FormControlUnstyled, {
    useFormControlUnstyledContext,
    } from '@mui/base/FormControlUnstyled';

export default function AutoValidInput() {

    const ColorFilld = () => (<IsFilld />);

    return ( 
        <Box component="form" noValidate autoComplete="off">
            <FormControl sx={{ width: "25ch", border: `3px ${IsFilld} solid` }} error
            >
            <OutlinedInput
                placeholder="Please enter text"
                sx={{ border: "3px  black solid" }}
            />{" "}
            <ColorFilld />
            <AutoHelperText />
            {/* <MyFormTextFilled /> */}
            </FormControl>
        </Box>
    );
}






export  function UseFormControl() {
    return (
        <FormControlUnstyled defaultValue="" required>
            <CustomInput />
            <AutoHelperText />
        </FormControlUnstyled>
    );
  }
  