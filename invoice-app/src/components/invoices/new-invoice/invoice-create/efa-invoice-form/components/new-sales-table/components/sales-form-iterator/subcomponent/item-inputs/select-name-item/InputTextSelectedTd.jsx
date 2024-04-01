import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import { choices, useInput, useTranslate } from "react-admin";
import SelectButton from "./subcomponent/SelectButton";
import { CustomInputSelected } from "./subcomponent/CustomInputSelected";
import {
    Stack,
    Divider,
    Box,
    FormControl,
    InputLabel,
    TextField,
    InputAdornment,
} from "@mui/material";
// import { Box } from "@mui/joy";

const SelectBtn = ({ namefield, choiceOptions }) => (
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            width: "min-content",
            // border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: "transparent",
            color: "text.secondary",
            // '& svg': {
            //     m: 1.5,
            // },
            // '& hr': {
            //     mx: 0.5,
            // },
        }}
    >
        <SelectButton
            sxCSS={{
                display: "flex",
                alignItems: "center",
                bgcolor: "transparent",
            }}
            nameProdcutNameInput={namefield ? namefield : ""}
            options={choiceOptions ? choiceOptions : {}}
        />
        <Divider
            // sx={{ m: 0 }}  variant="middle"
            orientation="vertical"
            flexItem
        />
    </Box>
);

export const InputTextSelectedTd = ({
    choiceOptions,
    sx,
    InputProps,
    label,
    placeholder,
    variant,
    className,
    ...props
}) => {
    const translate = useTranslate();
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        // isRequired
    } = useInput(props);
    const { name } = field;
    // const options = props.choiceOptions;
    return (
        <td className={`${className ? className : ""}`}>
            <Box sx={{ ...sx }}>
                <TextField
                    sx={{ width: "100%" }}
                    {...field}
                    variant={variant ? variant : "outlined"}
                    label={translate(label)}
                    required
                    placeholder={translate(placeholder)}
                    autoComplete="off"
                    InputProps={{
                        // ...InputProps,
                        startAdornment: (
                            <InputAdornment
                                sx={{ ml: -1.5 }}
                                sizeSmall="small"
                                position="start"
                            >
                                {
                                    <SelectBtn
                                        namefield={field ? name : ""}
                                        choiceOptions={
                                            choiceOptions ? choiceOptions : {}
                                        }
                                    />
                                }
                            </InputAdornment>
                        ),
                        // classes: {
                        //     focused: 'on'
                        // }
                        // value: 'fs'
                    }}
                    {...props}
                />

                {/* <CustomInputSelected id="component-outlined"
                    {...field}  
                    iconStart={<SelectBtn choiceOptions={choiceOptions? choiceOptions : {} } namefield={namefield ? namefield : ""} />}
                    variant="outlined"
                    // label={ label ? label : "" }
                    // error={(!isTouched) ? false :  true }
                    {...props}
                    />
               */}
            </Box>
        </td>
    );
};
