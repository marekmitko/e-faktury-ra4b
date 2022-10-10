import { TextField } from "@mui/material";
import { useController, useForm } from "react-hook-form";

export function PriceDependentInput({ control, name }) {
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields }
    } = useController({
        name: `${name}`,
        control,
        rules: { required: true },
        defaultValue: "",
    });

    return (
        <TextField 
            // onChange={ event => {
            //     field.onChange
            //     }
            // } // send value to hook form 
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
        />
    );
}