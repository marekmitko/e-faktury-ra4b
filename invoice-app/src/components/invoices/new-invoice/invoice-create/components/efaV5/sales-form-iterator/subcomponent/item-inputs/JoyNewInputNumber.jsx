import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useInput, required } from 'react-admin';
import { useWatch } from "react-hook-form";
import { JoyTextField } from "./JoyTextField";


const NumericFormatCustom = React.forwardRef(function NumericFormatCustom( props, ref  ) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
            onChange({
            target: {
                name: props.name,
                value: values.value
            }
            });
        }}
        thousandSeparator=" "
        valueIsNumericString
        suffix=" zł"
        decimalScale={2}
        decimalSeparator=","
    
    />
  );
});

NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
    };
    
const PriceNumberInput = React.forwardRef(function PriceNumberInput( props, ref  )  {
    // function PriceNumberInput(props)  {
    const { 
        label,
        placeholder,
        helperText,
        name,
        type,
        onFocus,
        autoComplete="off",
        autoFocus,
        error,
        required,
        fullWidth,
        defaultValue,
        size,
        color,
        variant,   
    } = props;
    
    
        

        const [values, setValues] = React.useState({
        numberformat: "0.00"
        });

        const handleChange = (event) => {
            
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        }; 

        return (
            <TextField

            value={values.numberformat}
            onChange={handleChange}
            // name="numberformat"
            // id="formatted-numberformat-input"
            placeholder="Podaj Cene"
            InputProps={{
                inputComponent: NumericFormatCustom
            }}
            required={(values[name] === undefined)? false : ((parseFloat(values[name]) && parseFloat(values[name]) >= 0) ? false : true)}
            error={(values[name] === undefined)? false : ((parseFloat(values[name]) && parseFloat(values[name]) >= 0) ? false : true)}
            variant="standard"
            helperText={(values[name] === undefined)? "" : (!(parseFloat(values[name]) >= 0) ? ((parseFloat(values[name])< 0) ? "Wartość ujemna" : "Podaj cenę") : ((parseFloat(values[name]) > 0)? "" : ("Podaj wartość większą od 0")) )}
           
            {...props}
            />
        );
}
);
  





const RaPriceNumberInput = (props) => {

        const { onChange, onBlur, name, label,  ...rest } = props;
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

        return (

            <PriceNumberInput
                {...field}
                label={(isTouched && isNaN(parseFloat(field.value)) ) ? "Podaj cenę" : "" }
                error={ (isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) )) }
                // error={((isTouched || isSubmitted)) }
                // helperText={(isTouched || isSubmitted) && invalid ? error : ( (invalid || (isTouched && isNaN(parseFloat(field.value)) )) ? "Podaj cenę" : "" )}
                required={isRequired}
                {...rest}
            />
        );
    };
    





// #############################




const PreNewInputNumber = (props) => {
    const { onChange, onBlur, msgError, validate, ...rest } = props;
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
        validate,
        ...props,
    });
    const {message } = {...error};
    const msx = (error && message) ? (message) : '';

    console.log('isTouched', isTouched); 
    const joyValue = useWatch({ name: `${field.name}`});




    return (
        <JoyTextField
            // id={field.name}
            {...field}
            label={props.label}
            // error={(isTouched || isSubmitted) && invalid}
            error={(isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) )) }
            helperText={(isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) ))}
            required={isRequired}
            msgError={ message ? message : ""}
            {...rest}
        />
    );
};





// export const InputNumberItem = (props) => {
//     const {source, label,  name, ...rest} = props;
//     return(
//         <RaPriceNumberInput source={source} label={label} {...props} />
//     );
// };



export const JoyNewInputNumber = (props) => {
    const {source, label, name, ...rest} = props;
    return(
        <PreNewInputNumber source={source} label={label} 
        validate={required()} 
        {...rest} />
    );
};

    
    // const LatLngInput = props => {
    //     const {source, ...rest} = props;
    
    //     return (
    //         <span>
    //             <BoundedTextField source="lat" label="Latitude" validate={required()} {...rest} />
    //             &nbsp;
    //             <BoundedTextField source="lng" label="Longitude" validate={required()} {...rest} />
    //         </span>
    //     );
    // };