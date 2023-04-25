import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePickerInput from './DatePickerInput';

export default function DatePickerGroup() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                'DatePicker',
                'MobileDatePicker',
                'DesktopDatePicker',
                'StaticDatePicker',
                ]}
            >
                <DemoItem label="Responsive variant">
                    <DatePickerInput 
                        label="myroot.form.label.input.data_sale"
                        name='date_sale'
                    />
                    <DatePickerInput 
                        label="myroot.form.label.input.date_payment"
                        name='date_payment'
                    />
                    <DatePicker 
                        label="Basic date picker"
                        defaultValue={dayjs('2022-04-17')} 
                    />
                </DemoItem>
            
            </DemoContainer>
        </LocalizationProvider>
    );
    }
