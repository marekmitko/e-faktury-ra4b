import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import { useInput, required } from 'react-admin';
import { useWatch } from "react-hook-form";
import { alpha, styled } from '@mui/material/styles';


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
    

// CUSTOM STYLE 
// https://codesandbox.io/s/qcixu6?file=/demo.tsx:3513-3525 

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});


const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
          borderColor: 'grey',
          borderWidth: 1,
        },
        '& input:valid:focus + fieldset': {
          borderColor: 'grey',
          borderWidth: 2,
        },
        '& input:invalid + fieldset': {
          borderColor: 'red',
          borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
          borderLeftWidth: 6,
          padding: '2px !important', // override inline-style
        },
      });
















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
            <>
            {/* <CssTextField label="Custom CSS" id="custom-css-outlined-input" /> */}
            <ValidationTextField
                label={label}
                // hiddenLabel
                autoComplete={autoComplete}
                id="validation-outlined-input"
                size="small"
                value={values.numberformat}
                onChange={handleChange}
                // name="numberformat"
                // id="formatted-numberformat-input"
                placeholder={placeholder}
                InputProps={{
                    inputComponent: NumericFormatCustom
                }}
                required={(values[name] === undefined)? false : ((parseFloat(values[name]) && parseFloat(values[name]) >= 0) ? false : true)}
                error={(values[name] === undefined)? false : ((parseFloat(values[name]) && parseFloat(values[name]) >= 0) ? false : true)}
                variant="outlined"
                helperText={(values[name] === undefined)? "" : (!(parseFloat(values[name]) >= 0) ? ((parseFloat(values[name])< 0) ? "Wartość ujemna" : "Podaj cenę") : ((parseFloat(values[name]) > 0)? "" : ("Podaj wartość większą od 0")) )}
            
            {...props}
            />
            
            </>
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

        const { onChange, onBlur, name, label, ...rest } = props;
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
                sx={{        '& input:valid + fieldset': {
                    borderWidth: (isTouched && (error === undefined) && !isNaN(parseFloat(field.value))) ? 0 : 2,
                    }
                }}
                // label={(isTouched && isNaN(parseFloat(field.value)) ) ? "Podaj cenę" : "" }
                error={ (isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) )) }
                // error={((isTouched || isSubmitted)) }
                placeholder={ (isTouched || error ) ? 'Cena wymagana': "Cena produktu" }
                // helperText={(isTouched || isSubmitted) && invalid ? error : ( (invalid || (isTouched && isNaN(parseFloat(field.value)) )) ? "Podaj cenę" : "" )}
                required={isRequired}
                {...rest}
            />
        );
    };
    



    export const InputNumberItem = (props) => {
        const {source, label,  name, ...rest} = props;
        return(
            <RaPriceNumberInput source={source} label={label} {...props} />
        );
    };