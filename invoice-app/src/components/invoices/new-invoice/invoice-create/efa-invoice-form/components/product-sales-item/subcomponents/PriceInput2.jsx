import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';
// const salesItemName = useController({ name: `${arrayItemIdx}._${idx}_product_name`, control, defaultValue: "",  });
import { useInput, required } from 'react-admin';




// https://react-hook-form.com/api/usefieldarray

// InputLabelProps={{ shrink: true }} 

const PriceInput = (props) => {
    const { onChange, onBlur, ...rest } = props;
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        isRequired
    } = useInput({
        // Pass the event handlers to the hook but not the component as the field property already has them.
        // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
        onChange,
        onBlur,
        ...props,
    });

console.log('myFieldPrice', field);
    return (
        <>
        <TextField
            {...field}
            label={props.label}
            error={(isTouched || isSubmitted) && invalid}
            helperText={(isTouched || isSubmitted) && invalid ? error : ''}
            required={isRequired}
            {...rest}
        />
        <p>{ field?.value? field.value : '' }</p>
    </>
    );
};

export const NetAndGrossPrice2 = ({member, ...props}) => {
    const {source, ...rest} = props;
    return(
        <>
        <PriceInput source={`${source}1`} label="price" />
        &nbsp;
        <PriceInput source={`${source}2`}  label="price" />
        </>
    );
};