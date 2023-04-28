import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import { useInput, required, useTranslate } from 'react-admin';
import { Controller, useWatch } from "react-hook-form";
import { alpha, styled } from '@mui/material/styles';
import FormControlUnstyled, {
    FormControlUnstyledState, useFormControlUnstyledContext,
  } from '@mui/base/FormControlUnstyled';









// 333
const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
//   const Input = styled(InputUnstyled)(
//     ({ theme }) => `
    
//     display: inline-block;
  
//     .${inputUnstyledClasses.input} {
//       width: 320px;
//       font-size: 0.875rem;
//       font-family: IBM Plex Sans, sans-serif;
//       font-weight: 400;
//       line-height: 1.5;
//       color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//       background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//       border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
//       border-radius: 8px;
//       padding: 12px 12px;
  
//       &:hover {
//         background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
//         border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//       }
  
//       &:focus {
//         outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
//       }
//     }
  
//     &.filled .${inputUnstyledClasses.input} {
//       box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
//     }
//   `,
//   );





// ###




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

// https://stackoverflow.com/questions/55556569/what-does-the-fieldset-validity-mean

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
            '& input:error + fieldset': {
            borderColor: 'gold',
            borderWidth: 5,
            },
            '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '2px !important', // override inline-style
            },
        });
















export const  PriceNumberInput = React.forwardRef(function PriceNumberInput( props, ref  )  {
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


        const OkMark = styled('span')`
        margin-left: 8px;
        margin-top: 10px;
        position: absolute;
        color: rgba(125, 200, 0, 1);
      `;


        return (
  <FormControlUnstyled sx={{ width: '100%' }} defaultValue="" required>
      {({ filled, focused } ) => (

          <React.Fragment> 
            {/* <div> {filled ?  "✔" : "noFilled"}</div> */}

            {/* <CssTextField label="Custom CSS" id="custom-css-outlined-input" /> */}
            <ValidationTextField
                className={filled ? 'filled' : ''}
                label={label}
                // hiddenLabel
                defaultValue={`${values.numberformat}`}
                autoComplete={autoComplete}
                id="validation-outlined-input"
                size="small"
                value={values.numberformat}
                onChange={handleChange}
                // name="numberformat"
                // id="formatted-numberformat-input"
                // placeholder={ (isTouched || error ) ? 'Cena wymagana': "Cena produktu" }
                InputProps={{
                    inputComponent: NumericFormatCustom
                }}
                // required={(values[name] === undefined)? false : ((parseFloat(values[name]) && parseFloat(values[name]) >= 0) ? false : true)}
                error={(values[name] === undefined)? false : ((parseFloat(values[name]) && parseFloat(values[name]) >= 0) ? false : true)}
                variant="outlined"
                // helperText={(values[name] === undefined)? "" : (!(parseFloat(values[name]) >= 0) ? ((parseFloat(values[name])< 0) ? "Wartość ujemna" : "Podaj cenę") : ((parseFloat(values[name]) > 0)? "" : ("Podaj wartość większą od 0")) )}
            
                {...props}
            />
            </React.Fragment>
          ) }
        </FormControlUnstyled>
        );
}
);
  

// https://mui.com/joy-ui/react-text-field/
// https://codesandbox.io/s/qcixu6?file=/demo.tsx:3513-3525



export const RaPriceNumberInput = (props) => {
    const translate = useTranslate(); 
        const { onChange, onBlur, name, label, ...rest } = props;
        const {
            field,
            fieldState: { isTouched, isDirty, invalid, error },
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
                // sx={{        '& input:valid + fieldset': {
                //     borderWidth: (isTouched && (error === undefined) && !isNaN(parseFloat(field.value))) ? 0 : 2,
                //     }
                // }}
                // sx={{ bgcolor: isDirty? "gold" : "blue", border: isDirty? '4px green solid' : 'none'  }}
           
                label={(isTouched && isNaN(parseFloat(field.value)) ) ? "Podaj cenę" : translate(label) }
                error={ (isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) )) }
                // error={((isTouched || isSubmitted)) }
                placeholder={ (isTouched || error ) ? 'Cena wymagana': "Cena produktu" }
                // helperText={(isTouched || isSubmitted) && invalid ? error : ( (invalid || (isTouched && isNaN(parseFloat(field.value)) )) ? "Podaj cenę" : "" )}
                required={isRequired}
                {...rest}
            />
        );
    };
    



export const CustomInputNumber = (props) => {
    const {source, label,  name, sx, ...rest} = props;
    return(
        <Box sx={sx} >
            <RaPriceNumberInput source={source} label={label} {...props} />
        </Box>
    );
};
export const CustomInputPrice = (props) => {
    const {source,  label, name, sx, entryPriceIsGross, ...rest} = props;

    // const enteryValue = entryPriceIsGross ? grossItem.field.value : netItem.field.value;

    // const priceNetto = () => (<RaPriceNumberInput source={`${source}_netto`} label={label} {...props} />);
    // const priceNetto = (<RaPriceNumberInput source={`${source}_brutto`} label={label} {...props} />);

    return(
        <Box sx={sx} >
            {entryPriceIsGross ? 
                                <RaPriceNumberInput source={`${source}_netto`} label='myroot.form.label.inputbox_itemrow.netItem' {...props} /> 
                                :
                                <RaPriceNumberInput source={`${source}_brutto`} label='myroot.form.label.inputbox_itemrow.grossItem' {...props} /> 
            }
        </Box>
    );
};



export function MyControlledPriceNumberInput({ name, control, onChange }) {
    return (
        
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <PriceNumberInput onChange={onChange || field.onChange} value={field.value} />
        )}
        />
    );
    }