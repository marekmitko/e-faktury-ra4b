import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { useTranslate } from 'react-admin';
import { useController } from 'react-hook-form';

const DatePickerInput = (props) => {
    const translate = useTranslate();
    const { name, label } = props;

    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useController({ name, defaultValue: '' });
    return (

        <DatePicker 
            // {...field}
            value={field.value}
            onChange={field.onChange}
            // name={field.name}
            {...props}
            label={label ? translate(`${label}`) : translate(`${name}`)  }
        />
        // <TextField
        //     {...field}
        //     label={label}
        //     error={(isTouched || isSubmitted) && invalid}
        //     helperText={(isTouched || isSubmitted) && invalid ? error : ''}
        // />
    );
};


export default DatePickerInput; 