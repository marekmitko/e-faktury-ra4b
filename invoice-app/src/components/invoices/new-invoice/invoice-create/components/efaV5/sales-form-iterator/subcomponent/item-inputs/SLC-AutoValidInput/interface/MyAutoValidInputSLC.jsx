import * as React from "react";
import SLCAutoValidInput from "../AutoValidInput";
import { useInput, required } from 'react-admin';

const MyAutoValidInputSLC = (props) => {
    const { onChange, onBlur, source, ...rest } = props;
    const {
        field,
        fieldState: { isTouched, isDirty, invalid, error },
        formState: { isSubmitted },
        isRequired,
    } = useInput({
        onChange,
        onBlur,
        source, 
        ...props
    }); 
    return (
        <>
        <SLCAutoValidInput
            {...field}
            error={(isTouched || isSubmitted) && invalid}
            // error={ !isTouched ? (isDirty ? false : true ) : false }
            color={ isDirty ? "warning"  : "primary" }
            // helperText={(isTouched || isSubmitted) && invalid ? error : ''}
            required={isRequired}
            source={props.source}
            {...rest} 
            />
        <p>{error ? error.message : "" }</p>
        </>
    );
};
export default MyAutoValidInputSLC;