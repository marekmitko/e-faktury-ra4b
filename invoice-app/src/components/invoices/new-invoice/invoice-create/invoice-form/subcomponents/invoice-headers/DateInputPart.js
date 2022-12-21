import React from 'react';
import { useRecordContext, Edit, SimpleForm, DateInput, TextInput, NumberInput, TextField } from 'react-admin'
import { Stack } from '@mui/material';
import { useWatch } from 'react-hook-form';

// TODO synch dateAdd14 
// *see <DateInputPart />
export const DateInputPart = (props) => {
    // const dataCreate = useWatch({ name: 'created_at' });
    const todayDate = new Date();
    const todayDateAdd14 = new Date(todayDate.getTime()+(14*24*60*60*1000));
    return(
        <Stack direction="row" spacing={2} width="100%"  sx={{ justifyItems: 'center', justi: "center" }}  alignItems="center" justifyContent="space-around">
            {/* <NumberInput source="invoice_no" disabled /> */}
            <DateInput source="created_at" defaultValue={todayDate} />
            {/* <DateInput source="sale_date" defaultValue={todayDate} /> */}
            <DateInput source="payment_due" defaultValue={todayDateAdd14} />
        </Stack>
    );
};