import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useTranslate, useInput } from "react-admin";
import { Box } from "@mui/joy";
import { width } from "@mui/system";

// function SelectItemOption({field, ...props}) {
export function SelectInputItemTd({
    options,
    label,
    variantLabel,
    variant,
    defaultValue,
    sx,
    className,
    placeholder,
    ...props
}) {
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
    } = useInput(props);

    // label={ typeItem.field.value ? "myroot.form.label.inputbox_itemrow.typeItem" : "Wprowadź typ"}
    // sx={{ minWidth: 100 }} defaultValue="placeholder" options={typeOptions}

    return (
        <td className={`${className ? className : ""}`}>
            <Box sx={sx}>
                <FormControl fullWidth size="small" {...props}>
                    <InputLabel
                        variant={variant ? variant : "standard"}
                        // id="demo-simple-select-autowidth-label"
                        id="demo-select-small-label"
                    >
                        {translate(label)}
                    </InputLabel>
                    <Select
                        required
                        // color="success"
                        // error={isError ? false : true}
                        defaultValue={defaultValue ? `${defaultValue}` : null}
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        // labelId="demo-simple-select-autowidth-label"
                        // id="demo-simple-select-autowidth-label"
                        value={field.value}
                        label={translate(label)}
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
                                              <em>{name}</em>
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
                            : null}
                    </Select>
                </FormControl>
            </Box>
        </td>
    );
}

export default SelectInputItemTd;
