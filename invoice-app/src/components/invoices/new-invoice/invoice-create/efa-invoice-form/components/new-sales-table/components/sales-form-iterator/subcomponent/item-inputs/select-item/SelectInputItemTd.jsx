import * as React from "react";
// import { useState, useEffect, useMemo } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useTranslate, useInput } from "react-admin";
import { Box } from "@mui/joy";
import { useWatch } from "react-hook-form";
// import { width } from "@mui/system";

// function SelectItemOption({field, ...props}) {
export function SelectInputItemTd(props) {
    const {
        options,
        label,
        variantLabel,
        variant,
        defaultValue,
        sx,
        className,
        placeholder,
        parse,
        resource,
        source,
        validate,
        // format,
        ...rest
    } = props;
    const translate = useTranslate();

    // https://stackoverflow.com/questions/66722593/how-to-set-defaultvalue-after-some-delay-on-react-select-with-react-hook-form
    // useEffect(() => {
    //     setTimeout(() => {
    //     setValue("country", "India");
    //     }, 2000);
    // }, [setValue]);

    // const saveData = (form_data) => {
    //     console.log("form_data", form_data);
    // };
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        id,
        isRequired,
    } = useInput({
        // defaultValue,
        // format,
        parse,
        resource,
        source,
        // type: "text",
        validate,
        // onBlur,
        // onChange,
        ...rest,
    });

    const valueInput = useWatch({ name: `${id}` });
    // label={ typeItem.field.value ? "myroot.form.label.inputbox_itemrow.typeItem" : "Wprowadź typ"}
    // sx={{ minWidth: 100 }} defaultValue="placeholder" options={typeOptions}
    // console.log("valueInput💠", valueInput);
    return (
        <td className={`${className ? className : ""}`}>
            <Box sx={sx}>
                <FormControl fullWidth size="small" {...props}>
                    <InputLabel
                        variant={variant ? variant : "standard"}
                        // id="demo-simple-select-autowidth-label"
                        id="demo-select-small-label"
                        error={
                            ((isTouched || isSubmitted) && invalid) ||
                            (isTouched && valueInput === null) ||
                            (isTouched && valueInput === "") ||
                            (isTouched && valueInput === undefined)
                        }
                    >
                        {label && !error
                            ? translate(label)
                            : `Podaj ${translate(label)}`}
                    </InputLabel>
                    <Select
                        required={isRequired}
                        // color="success"
                        error={
                            ((isTouched || isSubmitted) && invalid) ||
                            (isTouched && valueInput === null) ||
                            (isTouched && valueInput === "") ||
                            (isTouched && valueInput === undefined)
                        }
                        // error={error ? true : false}
                        defaultValue={defaultValue ? `${defaultValue}` : ""}
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        // labelId="demo-simple-select-autowidth-label"
                        // id="demo-simple-select-autowidth-label"
                        value={field.value}
                        // label={label ? translate(label) : ""}
                        label={
                            label && !error
                                ? translate(label)
                                : `Podaj ${translate(label)}`
                        }
                        onChange={field.onChange}
                        variant={variant ? variant : "standard"}
                        autoWidth
                    >
                        {options.length
                            ? options.map(({ id, name, value }, index) => {
                                  if (index == 0)
                                      return (
                                          <MenuItem
                                              disabled
                                              key={`${id}_idx${index}`}
                                              value={value}
                                          >
                                              <em>{name ? name : ""}</em>
                                          </MenuItem>
                                      );
                                  return (
                                      <MenuItem
                                          key={`${id}_idx${index}`}
                                          value={value}
                                      >
                                          {name}
                                      </MenuItem>
                                  );
                              })
                            : ""}
                    </Select>
                </FormControl>
            </Box>
        </td>
    );
}

export default SelectInputItemTd;
