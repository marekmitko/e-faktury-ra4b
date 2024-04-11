import * as React from "react";
import { forwardRef, useCallback } from "react";
// import InputLabel from "@mui/material/InputLabel";
import { useTranslate } from "react-admin";
// import { CustomInputSelected } from "./subcomponent/CustomInputSelected";
import {
    InputAdornment,
    IconButton,
    TextField as MuiTextField,
    TextFieldProps,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
// import { Box } from "@mui/joy";
import { styled } from "@mui/material/styles";

import clsx from "clsx";

export const ResettableTextField = forwardRef((props, ref) => {
    // const {
    //     clearAlwaysVisible,
    //     InputProps,
    //     value,
    //     resettable,
    //     disabled,
    //     readOnly,
    //     variant,
    //     margin,
    //     className,
    //     ...rest
    // } = props;

    const {
        clearAlwaysVisible = false,
        choiceOptions,
        endAdornment,
        sx,
        InputProps,
        label,
        placeholder,
        resettable,
        value,
        selectChoiceButton,
        readOnly,
        variant,
        margin,
        className,
        disabled,
        ...rest
        // onChange,
        // onBlur,
        // source,
        // onFocus,
    } = props;
    const translate = useTranslate();

    const { onChange, onFocus, onBlur } = props;

    const handleClickClearButton = useCallback(
        (event) => {
            event.preventDefault();
            onChange("");
        },
        [onChange]
    );

    const handleFocus = useCallback(
        (event) => {
            onFocus && onFocus(event);
        },
        [onFocus]
    );

    const handleBlur = useCallback(
        (event) => {
            onBlur && onBlur(event);
        },
        [onBlur]
    );

    const {
        clearButton,
        clearIcon,
        inputAdornedEnd,
        selectAdornment,
        visibleClearIcon,
    } = ResettableTextFieldClasses;

    // const { endAdornment, ...InputPropsWithoutEndAdornment } = InputProps || {};

    // if (clearAlwaysVisible) {
    //     throw new Error(
    //         "ResettableTextField cannot display both an endAdornment and a clear button always visible"
    //     );
    // }

    const getEndAdornment = () => {
        if (!resettable) {
            return endAdornment;
        } else if (!value) {
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return (
                    <InputAdornment
                        sx={{ mr: -1 }}
                        position="end"
                        classes={{
                            root: props.select ? selectAdornment : null,
                        }}
                    >
                        <IconButton
                            className={clearButton}
                            aria-label={translate(
                                "ra.action.clear_input_value"
                            )}
                            title={translate("ra.action.clear_input_value")}
                            disabled={true}
                            size="large"
                        >
                            <ClearIcon
                                className={clsx(clearIcon, visibleClearIcon)}
                            />
                        </IconButton>
                    </InputAdornment>
                );
            } else {
                if (endAdornment) {
                    return endAdornment;
                } else {
                    // show spacer
                    return (
                        <InputAdornment
                            sx={{ mr: -1 }}
                            position="end"
                            classes={{
                                root: props.select ? selectAdornment : null,
                            }}
                        >
                            <span className={clearButton}>&nbsp;</span>
                        </InputAdornment>
                    );
                }
            }
        } else {
            // show clear
            return (
                <InputAdornment
                    sx={{ mr: -1 }}
                    position="end"
                    classes={{
                        root: props.select ? selectAdornment : null,
                    }}
                >
                    <IconButton
                        className={clearButton}
                        aria-label={translate("ra.action.clear_input_value")}
                        title={translate("ra.action.clear_input_value")}
                        onClick={handleClickClearButton}
                        onMouseDown={handleMouseDownClearButton}
                        disabled={disabled || readOnly}
                        size="large"
                    >
                        <ClearIcon
                            className={clsx(clearIcon, {
                                [visibleClearIcon]: clearAlwaysVisible || value,
                            })}
                        />
                    </IconButton>
                </InputAdornment>
            );
        }
    };
    // END fn getEndAdornment

    return (
        <StyledTextField
            // sx={{ width: "100%" }}
            sx={{
                width: "100%",
                "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error": {
                    "& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall":
                        {
                            // color: value=== ? "" : "var(--mui-palette-error-main)",
                            color: "var(--mui-palette-error-main)",
                        },
                },
            }}
            value={value}
            label={label}
            placeholder={placeholder ? placeholder : ""}
            autoComplete="off"
            InputProps={{
                readOnly: readOnly,
                classes:
                    // focused: 'on'
                    props.select && variant === "filled"
                        ? { adornedEnd: inputAdornedEnd }
                        : {},
                endAdornment: getEndAdornment(),
                startAdornment: (
                    <InputAdornment
                        sx={{ ml: -1.5 }}
                        sizeSmall="small"
                        position="start"
                    >
                        {selectChoiceButton ? selectChoiceButton : "add select"}
                    </InputAdornment>
                ),
                // ...InputPropsWithoutEndAdornment,
            }}
            disabled={disabled || readOnly}
            variant={variant}
            margin={margin}
            className={className}
            size="small"
            {...rest}
            onFocus={handleFocus}
            onBlur={handleBlur}
            inputRef={ref}
        />
    );
});

ResettableTextField.displayName = "ResettableTextField";

const handleMouseDownClearButton = (event) => {
    event.preventDefault();
};

const PREFIX = "RaResettableTextField";

export const ResettableTextFieldClasses = {
    clearIcon: `${PREFIX}-clearIcon`,
    visibleClearIcon: `${PREFIX}-visibleClearIcon`,
    clearButton: `${PREFIX}-clearButton`,
    selectAdornment: `${PREFIX}-selectAdornment`,
    inputAdornedEnd: `${PREFIX}-inputAdornedEnd`,
};

export const ResettableTextFieldStyles = {
    [`& .${ResettableTextFieldClasses.clearIcon}`]: {
        height: 16,
        width: 0,
        // color: "red",
    },
    [`& .${ResettableTextFieldClasses.visibleClearIcon}`]: {
        width: 16,
    },
    [`& .${ResettableTextFieldClasses.clearButton}`]: {
        height: 24,
        width: 24,
        padding: 0,
    },
    [`& .${ResettableTextFieldClasses.selectAdornment}`]: {
        position: "absolute",
        right: 24,
    },
    [`& .${ResettableTextFieldClasses.inputAdornedEnd}`]: {
        paddingRight: 0,
    },
};

const StyledTextField = styled(MuiTextField, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(ResettableTextFieldStyles);
