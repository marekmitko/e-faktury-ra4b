import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useInput, required } from 'react-admin';


const NumericFormatCustom = React.forwardRef(function NumericFormatCustom( props,ref  ) {
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

    export default function PriceFormatInput(props) {
    const [values, setValues] = React.useState({
        priceformat: "0.00"
    });

    const handleChange = (event) => {
        setValues({
        ...values,
        [event.target.name]: event.target.value
        });
    };

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

    return (
        <Box
        sx={{
            "& > :not(style)": {
            m: 1
            }
        }}
        >
        {/* <FormControl variant="standard">
            <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
            <Input
            value={values.textmask}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            />
        </FormControl> */}
        <TextField
            label="react-number-format"
            value={values.numberformat}
            onChange={handleChange}
            name="priceformat"
            id="formatted-numberformat-input"
            InputProps={{
            inputComponent: NumericFormatCustom
            }}
            variant="standard"
        />
        </Box>
    );
    }