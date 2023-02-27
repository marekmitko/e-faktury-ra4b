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
        // ref = values[name];
        console.log("valuesname", values[name]);

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
  

// https://mui.com/joy-ui/react-text-field/



// -<TextField
// -  id="Id"
// -  label="Label"
// -  placeholder="Placeholder"
// -  helperText="Help!"
// -  name="Name"
// -  type="tel"
// -  autoComplete="on"
// -  autoFocus
// -  error
// -  required
// -  fullWidth
// -  defaultValue="DefaultValue"
// -  size="sm"
// -  color="primary"
// -  variant="outlined"
// -/>
// +<FormControl
// +  id="Id"
// +  required
// +  size="sm"
// +  color="primary">
// +  <FormLabel>
// +    Label
// +  </FormLabel>
// +  <JoyInput
// +    placeholder="Placeholder"
// +    name="Name"
// +    type="tel"
// +    autoComplete="on"
// +    autoFocus
// +    error
// +    fullWidth
// +    defaultValue="DefaultValue"
// +    variant="outlined" />
// +  <FormHelperText>
// +    Help!
// +  </FormHelperText>
// +</FormControl>









const RaPriceNumberInput = (props) => {

//    const { myNameSource={field.name} } = props;

    //     const myRef = React.useRef();
    // console.log("myRefCirr", myRef.current);
        const { onChange, onBlur, name, ...rest } = props;
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
        


    //     const myNameSource = `${field.name}` ;


    //     props.myNameSource =  `${field.name}`;

    // const valeuField = useWatch({name: `${field.name}` });
    // const valeuGty = useWatch({name: `${field.name}` });

        return (

            <PriceNumberInput
                {...field}
                label={props.label}
                error={(isTouched || isSubmitted) && invalid}
                helperText={(isTouched || isSubmitted) && invalid ? error : ''}
                required={isRequired}
                {...rest}
            />
           
    
        );
    };
    



    export const MyPriceFormatInput = (props) => {
        const {source, label,  name, ...rest} = props;
        console.log("myNameSource", name);
        return(
            <RaPriceNumberInput source={source} label={label} {...props}/>
        );
    };