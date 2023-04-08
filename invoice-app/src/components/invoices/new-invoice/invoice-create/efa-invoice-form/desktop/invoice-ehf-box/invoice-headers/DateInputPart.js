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
        // <Stack 
        // // direction="row" spacing={1} width="100%"  sx={{ justifyItems: 'center'}}  justifyContent="flex-end"  alignItems="center" 
        // direction="row"
        // justifyContent="flex-end"
        // alignItems="center"
        // spacing={5}
        // paddingRight={3}
        // >
    <>
            {/* <NumberInput source="invoice_no" disabled /> */}
           <NumberInput   
                 sx={{ marginRight: 'auto', marginLeft: '20px'}}
                    defaultValue="00000"
                    source="invoice_no" 
                    variant="standard" label="myroot.form.label.input.invoice_no" disabled />
            <DateInput source="date_submit" variant="standard" defaultValue={todayDate}   label="myroot.form.label.input.created_at"  />
            <DateInput source="date_payment" variant="standard" defaultValue={todayDateAdd14}  label="myroot.form.label.input.payment_due" />
            </>
        // </Stack>
    );
};