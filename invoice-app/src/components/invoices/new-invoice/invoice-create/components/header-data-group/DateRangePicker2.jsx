    /* This code displays a date picker as a React component. The "@mui/material"
    library is used for style and UI elements, and the "dayjs" library is used for
    date operations. The component lets the user choose a date range, and the 
    chosen range is highlighted in the user interface (UI). Additionally, the
        component has buttons for pre-defined date ranges like "Today" and "Yesterday." 
        The component leverages the "isBetween" dayjs plugin and a custom component
            called "RangeHighLightStyle" to style the selected date range. The component
            employs two distinct date pickers, "MobileDatePicker" and "DesktopDatePicker,"
                for use on mobile and desktop, respectively. */

                // import * as React from "react";
                // import dayjs from "dayjs";
                // import isBetweenPlugin from "dayjs/plugin/isBetween";
                // import { styled } from "@mui/material/styles";
                // import { PickersDay } from "@mui/x-date-pickers/PickersDay";
                // import Button from "@mui/material/Button";
                // import TextField from "@mui/material/TextField";
                // import Stack from "@mui/material/Stack";
                // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
                // import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
                // import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
                // import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
                // dayjs.extend(isBetweenPlugin);
                
                // //a custom component for styling the highlighted date range
                // const RangeHighLightStyle = styled(PickersDay, {
                // shouldForwardProp: (prop) =>
                //     prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay"
                // })(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
                // ...(dayIsBetween && {
                //     borderRadius: "50%",
                //     backgroundColor: theme.palette.primary.main,
                //     color: theme.palette.common.white,
                //     "&:hover, &:focus": {
                //     backgroundColor: theme.palette.primary.dark
                //     }
                // })
                // }));
                
                // const Buttons = styled(Button)({
                // whiteSpace: "nowrap",
                // textAlign: "center"
                // });
                
                // // main component function
                // export default function DateRangePicker2() {
                // // state for storing the start and end date of the selected range
                // const [startDate, setStartDate] = React.useState(
                //     dayjs(dayjs().endOf("day").toDate())
                // );
                // const [endDate, setEndDate] = React.useState(
                //     dayjs(dayjs().endOf("day").toDate())
                // );
                // const mondayStartOfWeek = dayjs().startOf("week", "Monday");
                
                // if (startDate > endDate) {
                //     const temp = startDate;
                //     setStartDate(endDate);
                //     setEndDate(temp);
                // }
                
                // // function for highlighting the selected date range
                // const rangeHighLight = (date, selectedDates, pickersDayProps) => {
                //     if (!startDate || !endDate) {
                //     return <PickersDay {...pickersDayProps} />;
                //     }
                
                //     const start = startDate;
                //     const end = endDate;
                
                //     const dayIsBetween = date.isBetween(start, end, null, "[]");
                //     // const isFirstDay = date.isSame(start, "day");
                //     // const isLastDay = date.isSame(end, "day");
                
                //     return (
                //     <RangeHighLightStyle
                //         {...pickersDayProps}
                //         disableMargin
                //         dayIsBetween={dayIsBetween}
                //         // isFirstDay={isFirstDay}
                //         // isLastDay={isLastDay}
                //     />
                //     );
                // };
                
                // const handleClickOnToday = () => {
                //     setStartDate(dayjs().startOf("day").toDate());
                //     setEndDate(dayjs().endOf("day").toDate());
                // };
                
                // const handleClickOnYesterday = () => {
                //     setStartDate(dayjs().subtract(1, "day").startOf("day").toDate());
                //     setEndDate(dayjs().subtract(1, "day").endOf("day").toDate());
                // };
                
                // const handleClickOnLastSevenDays = () => {
                //     setStartDate(dayjs().startOf("week"));
                //     setEndDate(dayjs().endOf("day"));
                // };
                // const handleClickOnThisMonth = () => {
                //     setStartDate(dayjs().startOf("month"));
                //     setEndDate(dayjs().endOf("day"));
                // };
                // const handleClickOnClear = () => {
                //     setStartDate(null);
                //     setEndDate(null);
                // };
                
                // const ActionBar = () => (
                //     <Stack spacing={1} p={1} direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                //     <Buttons onClick={handleClickOnToday} variant="outlined">
                //         Today
                //     </Buttons>
                //     <Buttons onClick={handleClickOnYesterday} variant="outlined">
                //         Yesterday
                //     </Buttons>
                //     <Buttons onClick={handleClickOnLastSevenDays} variant="outlined">
                //         Last 7
                //     </Buttons>
                //     <Buttons onClick={handleClickOnThisMonth} variant="outlined">
                //         This Month
                //     </Buttons>
                //     <Buttons onClick={handleClickOnClear} variant="outlined">
                //         Clear
                //     </Buttons>
                //     </Stack>
                // );
                
                // return (
                //     <Stack spacing={1}>
                //     <LocalizationProvider dateAdapter={AdapterDayjs}>
                //         <h2> Mobile</h2>
                //         <Stack spacing={2} p={2} direction="row">
                //         <MobileDatePicker
                //             showToolbar={false}
                //             label="Start date"
                //             value={startDate}
                //             onChange={(newValue) => {
                //             setStartDate(newValue);
                //             }}
                //             components={{
                //             ActionBar: () => <ActionBar />
                //             }}
                //             renderDay={rangeHighLight}
                //             renderInput={(params) => <TextField {...params} />}
                //         />
                //         <MobileDatePicker
                //             showToolbar={false}
                //             label="End date"
                //             value={endDate}
                //             onChange={(newValue) => {
                //             setEndDate(newValue);
                //             }}
                //             components={{
                //             ActionBar: () => <ActionBar />
                //             }}
                //             renderDay={rangeHighLight}
                //             renderInput={(params) => <TextField {...params} />}
                //         />
                //         </Stack>
                //         <h2> Desktop</h2>
                //         <Stack spacing={2} p={2} direction="row">
                //         <DesktopDatePicker
                //             label="Start date"
                //             value={startDate}
                //             onChange={(newValue) => {
                //             setStartDate(newValue);
                //             }}
                //             components={{
                //             ActionBar: () => <ActionBar />
                //             }}
                //             renderDay={rangeHighLight}
                //             renderInput={(params) => <TextField {...params} />}
                //         />
                
                //         <DesktopDatePicker
                //             label="End date"
                //             value={endDate}
                //             onChange={(newValue) => {
                //             setEndDate(newValue);
                //             }}
                //             components={{
                //             ActionBar: () => <ActionBar />
                //             }}
                //             renderDay={rangeHighLight}
                //             renderInput={(params) => <TextField {...params} />}
                //         />
                //         </Stack>
                //     </LocalizationProvider>
                //     </Stack>
                // );
                // }
                