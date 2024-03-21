import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import "dayjs/locale/nb";
import { useInput, useTranslate } from "react-admin";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Stack } from "@mui/joy";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import DatePickerSelectinput from "./new-date-group-V5/DatePickerSelectinput";
import MinSelect from "./new-date-group-V5/MinSelect";
import { Controller, useFormContext } from "react-hook-form";

const RaDataPicker = (props) => {
    const { onChange, onBlur, ...rest } = props;
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        isRequired,
    } = useInput({
        // Pass the event handlers to the hook but not the component as the field property already has them.
        // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
        onChange,
        onBlur,
        // ...props,
        ...rest,
    });

    return (
        <DatePicker
            {...field}
            name={field}
            label={props.label}
            // error={(isTouched || isSubmitted) && invalid}
            // helperText={(isTouched || isSubmitted) && invalid ? error : ''}
            // required={isRequired}
            {...rest}
        />
    );
};

const MyDataPicker = (props) => {
    const { field, label } = props;
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            rules={{ required: true }} //optional
            render={({
                field: { onChange, onBlur, ref, name, value },
                fieldState: { invalid, isDirty }, //optional
                formState: { errors }, //optional, but necessary if you want to show an error message
            }) => (
                <>
                    <DatePicker
                        value={value || ""}
                        onChange={(date) => {
                            onChange(date?.isValid ? date : "");
                        }}
                        label={label}
                        onBlur={onBlur}
                        inputRef={ref}
                        slotProps={{
                            textField: {
                                variant: "outlined",
                                // helperText: 'MM/DD/YYYY',
                            },
                        }}
                        // format={language === "en" ? "MM/DD/YYYY" : "YYYY/MM/DD"}
                    />
                    {errors &&
                        errors[name] &&
                        errors[name].type === "required" && (
                            //if you want to show an error message
                            <span>your error message !</span>
                        )}
                </>
            )}
        />
    );
};

const locales = ["en", "pl", "nb"];
const days = [7, 14, 21];

const MyCustomRangeDatePicker = ({
    labelStart,
    labelEnd,
    sourceEnd,
    sourceStart,
}) => {
    const [locale, setLocale] = useState("pl");
    const [dayDate, setDayDate] = useState("7");

    const translate = useTranslate();

    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs().add(7, "day"));

    // useEffect(() => {
    // console.log("startDate", startDate);
    // console.log("endDate", endDate);

    const { setValue } = useFormContext();

    // const handlerChangePaymentDate = ( ) => ();
    //     setValue("payment_date", `${endDate}`);
    // }, [endDate, startDate]);

    // setValue("payment_date", `${newEndDate}`);

    // const [alignment, setAlignment] = React.useState('web');
    // const handleChange = (
    //     event: React.MouseEvent<HTMLElement>,
    //     newAlignment: string,
    //   ) => {
    //     setAlignment(newAlignment);
    //   };
    // SimpleExample
    // https://www.makeuseof.com/react-date-picker/

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            {/* <Stack spacing={2} sx={{ width: '100%' }}>
            <ToggleButtonGroup
                color='primary'
                value={locale}
                exclusive
                fullWidth
                onChange={(event, newLocale) => setLocale(newLocale)}
            >
                {locales.map((localeItem) => (
                    <ToggleButton key={localeItem} value={localeItem} sx={{ p: 0 }}
                        //  onChange={handleChange}
                    >
                        {localeItem}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Stack> */}
            {/* <Box sx={{ width: '100%' }}> */}

            <Box
                sx={{
                    gap: 1,
                    display: "flex",
                    flexFlow: "row wrap",
                    alignSelf: "center",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                }}
            >
                <RaDataPicker
                    source={`${sourceStart}`}
                    sx={{ width: "150px" }}
                    label={labelStart ? translate(`${labelStart}`) : ""}
                    slotProps={{
                        textField: {
                            variant: "outlined",
                        },
                    }}
                    value={startDate}
                    onChange={(dateStart) => {
                        setStartDate(() => dateStart);
                        let newEndDate = dateStart.add(7, "day");
                        setEndDate(() => newEndDate);
                        // setValue('name', 'value', { shouldDirty: true })
                        // mogę zaktualizowac state
                        setValue("payment_date", newEndDate);
                    }}
                />
                {/* <MinSelect /> */}
                <RaDataPicker
                    source={`${sourceEnd}`}
                    sx={{ width: "150px" }}
                    label={labelEnd ? translate(`${labelEnd}`) : ""}
                    slotProps={{
                        textField: {
                            variant: "outlined",
                            // helperText: 'MM/DD/YYYY',
                        },
                    }}
                    value={endDate}
                    onChange={(dateEnd) => {
                        setEndDate(() => dateEnd);
                    }}
                />

                {/* </DemoContainer> */}
                {/* </Box> */}
            </Box>
        </LocalizationProvider>
    );
};

export default MyCustomRangeDatePicker;
