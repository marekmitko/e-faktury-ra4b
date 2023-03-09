import * as React from 'react';
import FormControlUnstyled, {
useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import  JoyInput  from '@mui/joy/Input';
import MuiInput from '@mui/material/Input';


// export function CustomInput() {
export const CustomInput = (props) => {

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





const formControlContext = useFormControlUnstyledContext();







if (formControlContext === undefined) {
    return null;
}

const { value, required, onChange, disabled, onFocus, onBlur } =
    formControlContext;














    return (
        <input
        
            value={value}
            required={required}
            onChange={onChange}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}