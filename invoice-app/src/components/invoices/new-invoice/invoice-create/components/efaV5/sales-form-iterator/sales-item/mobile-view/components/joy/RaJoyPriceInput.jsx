import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box, Grid } from "@mui/material";
import { useInput, useTranslate } from "react-admin";
import { JoyInputField } from "./JoyInputField";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import FormControlUnstyled, {
    FormControlUnstyledState, useFormControlUnstyledContext,
  } from '@mui/base/FormControlUnstyled';


const NumericFormatCustom = React.forwardRef(function NumericFormatCustom( props, ref  ) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
        
        {...other}
        autoComplete="off"
        getInputRef={ref}
        onValueChange={(values, sourceInfo) => {
            onChange({
            target: {
                name: props.name,
                value: values.value
            }
            });
        }}
        // thousandSeparator=" "
        valueIsNumericString={true}
        // suffix=" zł"
        decimalScale={2}
        decimalSeparator=","
        style={{ 
            backgroundColor: 'transparent',  
            border: 'none',
            width: '100%',
            padding: 0,
            // height: '30px'
            // color: 'inherit',

        }}
    />
  );
});

NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
    };













// export  function JoySelectinputPriceFormat(props) {
export const  JoySelectinputPriceFormat = React.forwardRef(function PriceNumberInput( props, ref  )  {

    // const { 
    //     label,
    //     placeholder,
    //     helperText,
    //     name,
    //     type,
    //     onFocus,
    //     autoComplete="off",
    //     autoFocus,
    //     error,
    //     required,
    //     fullWidth,
    //     defaultValue,
    //     size,
    //     color,
    //     variant,   
    // } = props;

    const [values, setValues] = React.useState({
        numberformat: "0.00"
        });

        const handleChange = (event) => {

            setValues({
                ...values,
                [event.target.name]: event.target.value
            });
            }; 
    const { onChange, defaultValue, placeholderError, textAlignInput, ...rest } = props;
    const [currency, setCurrency] = React.useState("pln");
    const translate = useTranslate();
    let labelName = translate('myroot.form.label.input.datePickerSelectinput.optionLabelName');

    
            console.log("NumericFormatCustom", NumericFormatCustom);

    return (
        <>
        {/* <FormControlUnstyled sx={{ width: '100%' }} defaultValue="" required>
        {({ filled, focused } ) => ( */}
        <Box  sx={{  display: 'flex', margin: 'auto' // '& .datePickerSelectinput-input--main-root': { width: 'auto', pr: 0, }   
            }}  > 

           
            
            <JoyInputField 
                hiddenLabel
                
                error
                fullWidth
                name={props?.source ? props.source : props.name}
                slots={{ input: NumericFormatCustom ,   } }
                id="validation-outlined-input"

                className="datePickerSelectinput-input--main-root"
                // variant="solid"
                
                defaultValue={`${values.numberformat}`}
                value={values.numberformat}
                onChange={handleChange}
                endDecorator={
                    <Box sx={{ pr: 1 }}>
                    {{ pln: "zł", no: "no" }[currency]}
                    </Box>
                }
              
                {...props} 
                sx={{    
                    // '&:focus': {  outline: '10px solid  red'       } ,
                        
                        '& input': { fontSize: 'var(--mui-fontSize-md)', color: 'inherit', textAlign: textAlignInput },
                        '& input:focus-visible ': { outline: 'none' },
                        '& input::placeholder': {color: props?.error ? 'danger.500' : '' },
                        // '& :empty': { outline: '2px solid deeppink'  },
                    // "& > fieldset": {border: 'none'}
                    
                }}
                />
            </Box>
            {/* ) } */}
        {/* </FormControlUnstyled> */}
        </>
    );
}
);




export const RaJoyPriceInput = (props) => {
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
        console.log("fieldValue", field.value);
        return (
            <Box sx={{ "& div": { width: '100%', margin: 0, }}}>
            {/* <Grid container > */}
            <JoySelectinputPriceFormat
            placeholderError={true}
                slotProps={{ 
                    input: {
                        // placeholder: (isTouched || error ) ? <span style={{ color: 'red'}}>'Cena wymagana'</span>: "Cena produktu",
                        // placeholder: (isTouched || error ) ?  "Cena wymagana ": "Cena produktu",
                        placeholder: (isTouched || error ) ?  
                            translate('myroot.form.label.input.customText.errorPrice')
                            : 
                            translate('myroot.form.label.input.customText.enterPrice'),
                    } 
                }}
                
                

                {...field}
                // sx={{ '& input': { textAlign: props?.error ? 'center' : 'center'}
                // }}
                textAlignInput={ (isTouched && isNaN(parseFloat(field.value)) ) ? "left" : (isTouched ? "right" : "left" ) }
                // sx={{ bgcolor: isDirty? "gold" : "blue", border: isDirty? '4px green solid' : 'none'  }}
                label={(isTouched && isNaN(parseFloat(field.value)) ) ? "Podaj cenę" : translate(label) }
                error={ (isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) )) }
                // error={((isTouched || isSubmitted)) }
                // placeholder={ (isTouched || error ) ? 'Cena wymagana': "Cena produktu" }
                // helperText={(isTouched || isSubmitted) && invalid ? error : ( (invalid || (isTouched && isNaN(parseFloat(field.value)) )) ? "Podaj cenę" : "" )}
                required={isRequired}

                {...rest}
            />
            {/* </Grid> */}
            </Box>
        );
    };
    
 