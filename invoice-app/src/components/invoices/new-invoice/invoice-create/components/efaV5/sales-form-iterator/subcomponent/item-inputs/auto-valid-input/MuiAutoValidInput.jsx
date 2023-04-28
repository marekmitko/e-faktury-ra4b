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
import { CustomMuiInput } from "./CustomMuiInput";





export default function MuiAutoValidInput() {

    const ColorFilld = () => (<IsFilld />);

    return ( 
        <Box component="form" noValidate autoComplete="off">
            <FormControl sx={{ width: "25ch", border: `3px black solid` }} 
            >
            <CustomMuiInput
                placeholder="Please enter text"
                sx={{ bgcolor: IsFilld }}
            />{" "}
            {/* <ColorFilld />
            <AutoHelperText /> */}
            {/* <MyFormTextFilled /> */}
            </FormControl>
        </Box>
    );
}






// export  function UseFormControl() {
//     return (
//         <FormControlUnstyled defaultValue="" required>
//             <CustomInput />
//             <AutoHelperText />
//         </FormControlUnstyled>
//     );
//   }
  