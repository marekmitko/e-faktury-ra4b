import { useState, useEffect, useMemo} from "react";
import {InputAdornment, FormControl, InputLabel, Autocomplete, MenuItem, Select, Chip, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";







// https://codesandbox.io/s/63236951-how-to-use-material-ui-select-with-react-hook-form-forked-1ibfi2

// https://codesandbox.io/s/react-hook-form-mui-forked-9ohh3s

// customize 
// https://mui.com/material-ui/react-select/#customization


export const MySelectInput = ({ label, slectOptions, objController, ...props }) => {
    return (
        <TextField
            {...props}
            variant="standard"
            size="small"
            fullWidth
            select
            SelectProps={{
                native: true,
                // inputProps: { ref: register, name: `${objController.field.name}` }
            }}
            label={label}
            defaultValue={objController.field.defaultValue}
            onBlur={objController.field.onBlur} // notify when input is touched/blur
            value={objController.field.value} // input value
            name={objController.field.name} // send down the input name
            inputRef={objController.field.ref} // send input ref, so we can focus on input when error appear
            onChange={objController.field.onChange}
        >
            <Select>

            {slectOptions.map((option) => (
                <MenuItem key={option.label} value={option.value}>

                {/* <option key={option.label} value={option.value}> */}
                    {option.label}
                {/* </option> */}
                </MenuItem>
            ))}
            </Select>
        </TextField>
    );
};

// export default function SelectTextFields() {
//     const { formState, getValues, watch, register, handleSubmit } = useForm({
//       defaultValues: {
//         currency: currencies[0].value,
//       },
//     });
//     const { errors } = formState;
  
//     watch();
  
//     const onSubmit = (data) => alert(JSON.stringify(data, null, 4));
  
//     return (
//       <Box sx={{ m: 1 }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             select
//             fullWidth
//             defaultValue=""
//             label="Select"
//             inputProps={register('currency', {
//               required: 'Please enter currency',
//             })}
//             error={errors.currency}
//             helperText={errors.currency?.message}
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
  
//           <Button type="submit" variant="contained" sx={{ mt: 3 }}>
//             submit
//           </Button>
  
//           <pre>{JSON.stringify(getValues(), null, 4)}</pre>
//         </form>
//       </Box>
//     );
//   }

