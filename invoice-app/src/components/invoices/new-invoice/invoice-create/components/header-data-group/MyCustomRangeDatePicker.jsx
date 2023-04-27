import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import 'dayjs/locale/nb';
import { useTranslate } from 'react-admin';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Stack } from '@mui/joy';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const locales = ['en', 'pl', 'nb' ];
const days = [7, 14, 21 ];


const MyCustomRangeDatePicker = ({labelStart, labelEnd}) => {
    const [locale, setLocale] = useState('pl');
    const [dayDate, setDayDate] = useState('7');
    
    const translate = useTranslate();

    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs().add(7, 'day'));


    // const [alignment, setAlignment] = React.useState('web');
    // const handleChange = (
    //     event: React.MouseEvent<HTMLElement>,
    //     newAlignment: string,
    //   ) => {
    //     setAlignment(newAlignment);
    //   };
// SimpleExample
    // https://www.makeuseof.com/react-date-picker/

    console.log( "dayDate", dayDate);


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
        <Stack spacing={2} sx={{ width: 200 }}>
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
        </Stack>
            <Stack   direction='row'   alignItems='center' >
            <DemoContainer
                components={[
                    'DatePicker',
                    'MobileDatePicker',
                    'DesktopDatePicker',
                    'StaticDatePicker',
                ]}
            >
                <p></p>
                
            <DatePicker
                value={startDate}
                onChange={date => {
                    setStartDate(date);
                        setEndDate(date.add(7, 'day'));
                }}
            // label={label ? translate(`${label}`) : translate(`${name}`)  }
            label={labelStart ? translate(`${labelStart}`) : ''  }
            slotProps={{
                textField: {
                    variant: 'outlined',
                    // helperText: 'MM/DD/YYYY',
                }
            }}
            
            />
                    </DemoContainer>
            <p />
                <hr/>
            <p />
                <Stack spacing={2} sx={{ width: 200 }}>
                    <ToggleButtonGroup
                        color='primary'
                        value={dayDate}
                        exclusive
                        fullWidth
                        onChange={(event, newDays) => {
                                setDayDate(newDays);
                                console.log('newDays', newDays,  );
                                setEndDate(startDate.add(newDays, 'day'));
        
                            }
                        }
                        >
                        {days.map((daysItem, idx) => (
                            <ToggleButton key={daysItem} value={daysItem} sx={{ p: 0 }}
                            //  onChange={handleChange}
                            >
                                {daysItem}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Stack>
                <p />
                    <hr/>
                <p />
            <DatePicker
                value={endDate}
                onChange={date => setEndDate(date)}
                label={labelEnd ? translate(`${labelEnd}`) : ''  }
                slotProps={{
                    textField: {
                        variant: 'outlined',
                        // helperText: 'MM/DD/YYYY',
                    }
                }}
            />
    </Stack>
    </LocalizationProvider>
    );
}; 

export default MyCustomRangeDatePicker;









