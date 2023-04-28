import * as React from 'react';
import FormControlUnstyled, {
useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
// import  JoyInput  from '@mui/joy/Input';
import MuiInput from '@mui/material/Input';
import { useFormControl } from '@mui/material';


// export function CustomInput() {
// export function CustomInput(props) {
export const CustomMuiInput = (props) => {

    // const formControlContext = useFormControlUnstyledContext();
    const formControlContext = useFormControl();
    
    if (formControlContext === undefined) {
        return null;
}

    const { value, required, onChange, disabled, onFocus, onBlur } = formControlContext;


return (
        <MuiInput
        {...props}
            value={value}
            required={required}
            onChange={onChange}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder=""
            // aria-describedby={ariaDescribedby}
           
        />
            );
}







        // const {
        //     id="Id",
        //     required,
        //     size="sm",
        //     color="primary",
        //     placeholder="Placeholder",
        //     name,
        //     type='number',
        //     autoComplete="off",
        //     autoFocus,
        //     error,
        //     fullWidth,
        //     defaultValue="DefaultValue",
        //     variant="outlined",
        //     label,
        //     msgError, 
        //     value,
        //     onChange,
        // } = props;