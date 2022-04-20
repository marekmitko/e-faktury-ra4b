import TextField from '@mui/material/TextField';
import { useInput, required } from 'react-admin';

const BoundedTextField = (props) => {
    const { onChange, onBlur, ...rest } = props;
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        isRequired
    } = useInput({
        // Pass the event handlers to the hook but not the component as the field property already has them.
        // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
       
//         Przekaż procedury obsługi zdarzeń do haka, ale nie do składnika, ponieważ właściwość pola już je zawiera.
//   useInput wywoła podane onChange i onBlur jako dodatek do domyślnego wymaganego przez formularz reakcji haka.
       
        onChange,
        onBlur,
        ...props,
    });

    return (
        <TextField
            {...field}
            label={props.label}
            error={(isTouched || isSubmitted) && invalid}
            helperText={(isTouched || isSubmitted) && invalid ? error : ''}
            required={isRequired}
            {...rest}
        />
    );
};

// *see <LatLngIput /> Latitude, Longitude => Długości i szerokości geograficznej
const LatLngInput = props => {
    const {source, ...rest} = props;

    return (
        <span>
            <BoundedTextField source="lat" label="Latitude" validate={required()} {...rest} />
            &nbsp;
            <BoundedTextField source="lng" label="Longitude" validate={required()} {...rest} />
        </span>
    );
};


export default LatLngInput