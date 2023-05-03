import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box } from "@mui/material";
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
        suffix=" zł"
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
    const { onChange, defaultValue, placeholderError, ...rest } = props;
    const [currency, setCurrency] = React.useState("dollar");
    const translate = useTranslate();
    let labelName = translate('myroot.form.label.input.datePickerSelectinput.optionLabelName');

    
            console.log("NumericFormatCustom", NumericFormatCustom);

    return (
        <>
        {/* <FormControlUnstyled sx={{ width: '100%' }} defaultValue="" required>
        {({ filled, focused } ) => ( */}
        <Box  sx={{   '& .datePickerSelectinput-input--main-root': { minWidth: '200px', pr: 0, }    }}  > 
            
            
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
                startDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
                endDecorator={
                    <React.Fragment>
                    <Divider orientation="vertical" />
                    <Select
                        className="datePickerSelectinput-select--inner-branch, datePickerSelectinput--endDecorator"
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => { 
                            console.log('DatePickerSelectinput', _);                     
                            setCurrency(value)
                            }
                        }
                        sx={{ 
                            minWidth: '65px',
                            p: 0,
                            bgcolor:  "transparent", 
                            "& span": {    pr: 1,  },
                            "& button": { bgcolor:  "transparent", pl: 1, pr: 3, mr: -4,  width: '100%', zIndex: 1 },
                            "&:hover": { bgcolor: "transparent" },

                        }}
                >
                        <Option value="dollar">7 {labelName}</Option>
                        <Option value="baht">14 {labelName}</Option>
                        <Option value="yen">21 {labelName}</Option>
                    </Select>  
                    </React.Fragment>
                }
                {...props} 
                sx={{   
                    // '&:focus': {  outline: '10px solid  red'       } ,
                        '& input': { fontSize: 'var(--mui-fontSize-md)', color: 'inherit',  },
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

            <JoySelectinputPriceFormat
            placeholderError={true}
                slotProps={{ 
                    input: {
                        // placeholder: (isTouched || error ) ? <span style={{ color: 'red'}}>'Cena wymagana'</span>: "Cena produktu",
                        placeholder: (isTouched || error ) ?  "Cena wymagana ": "Cena produktu",
                    } 
                }}
                
                

                {...field}
                // sx={{        '& input:valid + fieldset': {
                //     borderWidth: (isTouched && (error === undefined) && !isNaN(parseFloat(field.value))) ? 0 : 2,
                //     }
                // }}
                // sx={{ bgcolor: isDirty? "gold" : "blue", border: isDirty? '4px green solid' : 'none'  }}
                label={(isTouched && isNaN(parseFloat(field.value)) ) ? "Podaj cenę" : translate(label) }
                error={ (isTouched || isSubmitted) && (invalid || (isTouched && isNaN(parseFloat(field.value)) )) }
                // error={((isTouched || isSubmitted)) }
                // placeholder={ (isTouched || error ) ? 'Cena wymagana': "Cena produktu" }
                // helperText={(isTouched || isSubmitted) && invalid ? error : ( (invalid || (isTouched && isNaN(parseFloat(field.value)) )) ? "Podaj cenę" : "" )}
                required={isRequired}

                {...rest}
            />
        );
    };
    
 