import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';
// const salesItemName = useController({ name: `${arrayItemIdx}._${idx}_product_name`, control, defaultValue: "",  });
const PriceInput = ({ name, label }) => {
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useController({name, defaultValue: ""});
    return (
        <TextField
            {...field}
            label={label}
            error={(isTouched || isSubmitted) && invalid}
            helperText={(isTouched || isSubmitted) && invalid ? error : ''}
        />
    );
};
export const NetAndGrossPrice = () => (
    <span>
        <PriceInput name="netPrice" label="latitude" />
        &nbsp;
        <PriceInput name="grossPrice" label="longitude" />
    </span>
);