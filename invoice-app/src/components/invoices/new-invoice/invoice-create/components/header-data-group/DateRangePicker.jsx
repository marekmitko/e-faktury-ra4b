    /* This code displays a date picker as a React component. The "@mui/material"
    library is used for style and UI elements, and the "dayjs" library is used for
    date operations. The component lets the user choose a date range, and the 
    chosen range is highlighted in the user interface (UI). Additionally, the
        component has buttons for pre-defined date ranges like "Today" and "Yesterday." 
        The component leverages the "isBetween" dayjs plugin and a custom component
            called "RangeHighLightStyle" to style the selected date range. The component
            employs two distinct date pickers, "MobileDatePicker" and "DesktopDatePicker,"
                for use on mobile and desktop, respectively. */


    /* Ten kod wyświetla selektor daty jako komponent React. „@mui/materiał”
        biblioteka jest używana do stylów i elementów interfejsu użytkownika, a biblioteka „dayjs” jest używana do
        operacje na datach. Komponent pozwala użytkownikowi wybrać zakres dat, a
        wybrany zakres jest podświetlony w interfejsie użytkownika (UI). Dodatkowo,
            komponent ma przyciski dla predefiniowanych zakresów dat, takich jak „Dzisiaj” i „Wczoraj”.
            Komponent wykorzystuje wtyczkę dayjs „isBetween” i komponent niestandardowy
                o nazwie „RangeHighLightStyle”, aby nadać styl wybranemu zakresowi dat. Składnik
                wykorzystuje dwa różne selektory dat, „MobileDatePicker” i „DesktopDatePicker”,
                    do użytku odpowiednio na urządzeniach mobilnych i stacjonarnych. */



import * as React from "react";
import dayjs from "dayjs";
import isBetween  from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Chip from "@mui/material/Chip"; 

import localeData from "dayjs/plugin/localeData";

dayjs.extend(isBetween);

// dayjs.extend(localeData);
                

//a custom component for styling the highlighted date range
const RangeHighLightStyle = styled(PickersDay, {
    shouldForwardProp: (prop) =>
            prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay"
        })(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
        ...(dayIsBetween && {
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            "&:hover, &:focus": {
            backgroundColor: theme.palette.primary.dark
            }
    })
}));
                export default function DateRangePicker() {
                // state for storing the start and end date of the selected range
                const [startDate, setStartDate] = React.useState(dayjs());
                
                const [endDate, setEndDate] = React.useState(dayjs());
                
                if (startDate > endDate) {
                  const temp = startDate;
                  setStartDate(endDate);
                  setEndDate(temp);
                }
                
                // function for highlighting the selected date range
                const rangeHighLight = (date, selectedDates, pickersDayProps) => {
                    if (!startDate || !endDate) {
                    return <PickersDay {...pickersDayProps} />;
                    }
                
                    const start = startDate;
                    const end = endDate;
                
                    const dayIsBetween = date.isBetween(start, end, null, "[]");
                    // const isFirstDay = date.isSame(start, "day");
                    // const isLastDay = date.isSame(end, "day");
                
                    return (
                    <RangeHighLightStyle
                        {...pickersDayProps}
                        disableMargin
                        dayIsBetween={dayIsBetween}
                        // isFirstDay={isFirstDay}
                        // isLastDay={isLastDay}
                    />
                    );
                };
                const handleClickOnToday = () => {
                  setStartDate(dayjs().startOf("day").toDate());
                  setEndDate(dayjs().endOf("day").toDate());
                };
                
                const handleClickOnYesterday = () => {
                    setStartDate(dayjs().subtract(1, "day").startOf("day").toDate());
                    setEndDate(dayjs().subtract(1, "day").endOf("day").toDate());
                };
                
                const handleClickOnThreeDays = () => {
                    setStartDate(dayjs().subtract(3, "day").startOf("day").toDate());
                    setEndDate(dayjs().endOf("day"));
                };
                
                const handleClickOnLastThisWeek = () => {
                    setStartDate(dayjs().startOf("week"));
                    setEndDate(dayjs().endOf("day"));
                };
                const handleClickOnThisMonth = () => {
                    setStartDate(dayjs().startOf("month"));
                    setEndDate(dayjs().endOf("day"));
                };
                const handleClickOnLastMonth = () => {
                    setStartDate(dayjs().subtract(1, "month").startOf("month"));
                    setEndDate(dayjs().subtract(1, "month").endOf("month"));
                };
                
                const handleClickOnClear = () => {
                    setStartDate(dayjs().startOf("day").toDate());
                    setEndDate(dayjs().endOf("day").toDate());
                };
                
                const ActionBar = () => (
                    <>
                    <Stack
                        spacing={1}
                        // p={1}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {/* <Chip label="Today" onClick={handleClickOnToday} variant="outlined" /> */}
                        <Chip
                        label="Yesterday"
                        onClick={handleClickOnYesterday}
                        variant="outlined"
                        />
                        <Chip
                        label="3 Days"
                        onClick={handleClickOnThreeDays}
                        variant="outlined"
                        />
                        <Chip
                        label="This Week"
                        onClick={handleClickOnLastThisWeek}
                        variant="outlined"
                        />
                    </Stack>
                    <Stack
                        spacing={1}
                        p={1}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Chip
                        label="This Month"
                        onClick={handleClickOnThisMonth}
                        variant="outlined"
                        />
                        <Chip
                        label="Last Month"
                        onClick={handleClickOnLastMonth}
                        variant="outlined"
                        />
                        <Chip
                        label="Clear"
                        onClick={handleClickOnClear}
                        variant="outlined"
                        color="error"
                        />
                    </Stack>
                    </>
                );
                const onKeyDown = (e) => {
                    e.preventDefault();
                };
                
                return (
                    <Stack spacing={1}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <h2> Mobile</h2>
                        <Stack spacing={2} p={2} direction="row">
                        <MobileDatePicker
                            showToolbar={false}
                            showDaysOutsideCurrentMonth={true}
                            views={["year", "month", "day"]}
                            inputFormat="DD MMM YYYY"
                            label="From"
                            value={startDate}
                            closeOnSelect={true}
                            onChange={(newValue) => {
                            setStartDate(newValue);
                            }}
                            components={{
                            ActionBar: () => <ActionBar />
                            }}
                            // openTo="day"
                            maxDate={endDate}
                            renderDay={rangeHighLight}
                            renderInput={(params) => (
                            <TextField {...params} helperText={null} onKeyDown={onKeyDown} />
                            )}
                        />
                        <MobileDatePicker
                            showToolbar={false}
                            showDaysOutsideCurrentMonth={true}
                            views={["year", "month", "day"]}
                            inputFormat="DD MMM YYYY"
                            label="To"
                            value={endDate}
                            closeOnSelect={true}
                            onChange={(newValue) => {
                            setEndDate(newValue);
                            }}
                            components={{
                            ActionBar: () => <ActionBar />
                            }}
                            // openTo="day"
                            maxDate={new Date()}
                            minDate={startDate}
                            renderDay={rangeHighLight}
                            renderInput={(params) => (
                            <TextField {...params} helperText={null} onKeyDown={onKeyDown} />
                            )}
                        />
                        </Stack>
                        <h2> Desktop</h2>
                        <Stack spacing={2} p={2} direction="column" sx={{ maxWidth: 200 }}>
                        <DesktopDatePicker
                            showToolbar={true}
                            showDaysOutsideCurrentMonth={true}
                            views={["year", "month", "day"]}
                            inputFormat="DD MMM YYYY"
                            label="From"
                            value={startDate}
                            closeOnSelect={true}
                            onChange={(newValue) => {
                            setStartDate(newValue);
                            }}
                            components={{
                            ActionBar: () => <ActionBar />
                            }}
                            // openTo="day"
                            maxDate={endDate}
                            renderDay={rangeHighLight}
                            renderInput={(params) => (
                            <TextField {...params} helperText={null} onKeyDown={onKeyDown} />
                            )}
                        />
                
                        <DesktopDatePicker
                            showToolbar={true}
                            showDaysOutsideCurrentMonth={true}
                            views={["year", "month", "day"]}
                            inputFormat="DD MMM YYYY"
                            label="To"
                            value={endDate}
                            closeOnSelect={true}
                            onChange={(newValue) => {
                            setEndDate(newValue);
                            }}
                            components={{
                            ActionBar: () => <ActionBar />
                            }}
                            // openTo="day"
                            maxDate={new Date()}
                            minDate={startDate}
                            renderDay={rangeHighLight}
                            renderInput={(params) => (
                            <TextField {...params} helperText={null} onKeyDown={onKeyDown} />
                            )}
                        />
                        </Stack>
                    </LocalizationProvider>
                    </Stack>
                );
                }
                