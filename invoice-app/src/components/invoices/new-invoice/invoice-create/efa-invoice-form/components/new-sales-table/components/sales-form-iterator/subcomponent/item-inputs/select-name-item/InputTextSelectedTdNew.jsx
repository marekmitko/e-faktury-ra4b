import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import { InputHelperText, choices, useInput, useTranslate } from "react-admin";
import clsx from "clsx";
import SelectButton from "./subcomponent/SelectButton";
// import { CustomInputSelected } from "./subcomponent/CustomInputSelected";
import { Divider, Box } from "@mui/material";
import { ResettableTextField as TextFieldRef } from "../v24-select-name-item/TextFieldRef";
import { useWatch } from "react-hook-form";
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
            defaultValue={""}
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

export const InputTextSelectedTdNew = (props) => {
    const {
        sx,
        choiceOptions,
        label,
        placeholder,
        // defaultValue,
        variant,
        className,
        helperText,
        onBlur,
        onChange,
        parse,
        resource,
        source,
        validate,
        format,
        ...rest
    } = props;
    const translate = useTranslate();

    const {
        field,
        fieldState: { error, invalid, isTouched },
        formState: { isSubmitted },
        id,
        isRequired,
        // } = useInput({ onChange, onBlur, source, onFocus, ...rest });
    } = useInput({
        // defaultValue,
        format,
        parse,
        resource,
        source,
        type: "text",
        validate,
        onBlur,
        onChange,
        ...rest,
    });

    const renderHelperText =
        helperText !== false || ((isTouched || isSubmitted) && invalid);

    const valueInput = useWatch({ name: `${id}` });
    console.log("valueInput", valueInput);
    return (
        <td className={`${className ? className : ""}`}>
            <Box sx={{ ...sx }}>
                <TextFieldRef
                    id={id}
                    {...field}
                    className={clsx(
                        "ra-input",
                        `ra-input-${source}`,
                        className
                    )}
                    resettable
                    variant={variant ? variant : "outlined"}
                    // label={label ? translate(label) : ""}
                    // label={
                    //     isTouched &&
                    //     (field.value !== "" || field.value !== null)
                    //         ? "Podaj cenę"
                    //         : "sadsad"
                    // }
                    // label={
                    //     label !== '' && label !== false ? (
                    //         <FieldTitle
                    //             label={label}
                    //             source={source}
                    //             resource={resource}
                    //             isRequired={isRequired}
                    //         />
                    //     ) : null
                    // }
                    // error={(isTouched || isSubmitted) && invalid}
                    error={
                        ((isTouched || isSubmitted) && invalid) ||
                        (isTouched && valueInput === null) ||
                        (isTouched && valueInput === "") ||
                        (isTouched && valueInput === undefined)
                    }
                    placeholder={
                        isTouched || error
                            ? "Nazwa jest wymagana"
                            : translate(
                                  "resources.e_faktury.list.input.placeholder.sales_item_name"
                              )
                    }
                    // placeholder={
                    //     placeholder == "" && (isTouched || error)
                    //         ? placeholder
                    //         : isTouched || error
                    //         ? "Cena wymagana"
                    //         : "Cena produktu"
                    // }
                    // helperText={
                    //     renderHelperText ? (
                    //         <InputHelperText
                    //             touched={isTouched || isSubmitted}
                    //             error={error?.message}
                    //             helperText={helperText}
                    //         />
                    //     ) : null
                    // }
                    required={isRequired}
                    // placeholder={placeholder}
                    autoComplete="off"
                    selectChoiceButton={
                        <SelectBtn
                            defaultValue=""
                            namefield={field ? field.name : ""}
                            choiceOptions={choiceOptions ? choiceOptions : {}}
                        />
                    }
                    {...props}
                />
            </Box>
        </td>
    );
};
