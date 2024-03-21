import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import DatePickerInput from './DatePickerInput';
// import DateRangePicker from './DateRangePicker';
// import DateRangePicker2 from './DateRangePicker2';
// import PickerWithAutocompleteField from './PickerWithAutocompleteField';
import { useFormContext, useWatch } from "react-hook-form";
import MyCustomRangeDatePicker from "./MyCustomRangeDatePicker";
import DatePickerSelectinput from "./new-date-group-V5/DatePickerSelectinput";

// React Material UI Tutorial - 40 - Date and Time Picker
// https://www.youtube.com/watch?v=OpaT8jLB-hc

// https://react-hook-form.com/api/usewatch/

const a = dayjs();
const b = a.add(7, "day");

export default function DatePickerGroup() {
    // const { control, setValue } = useFormContext();
    // const dateIssue = useWatch({control, name: 'date_sale' });

    // const today = dayjs().startOf("day");

    // const [dateValue, setDateValue] = React.useState(a);

    // React.useEffect(() => {
    //     // let dateSelected = dateIssue;
    //     let dateSelected = today;
    //     dateSelected.add(7, 'day');
    //     setValue( 'date_sale', dateSelected );

    // }, [dateValue]);

    // const tomorrow = dayjs().add(1, 'day');

    // console.log("dateIssue", dateIssue);

    return (
        <>
            <MyCustomRangeDatePicker
                labelStart="resources.e_faktury.create.label.issue_date"
                labelEnd="resources.e_faktury.create.label.date_payment_label"
                // sourceStart="date_submit"
                // sourceEnd="date_payment"
                sourceStart="date_submit"
                sourceEnd="date_payment"
            />
        </>
    );
}
