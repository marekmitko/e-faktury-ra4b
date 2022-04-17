import React from 'react';
import { useRecordContext, Edit, SimpleForm, DateInput, TextInput, NumberInput, TextField } from 'react-admin'
import { Stack } from '@mui/material';

export const DateInputPart = (props) => (
    <Stack direction="row" spacing={2} width="100%" alignItems="center" justifyContent="space-around">
        <NumberInput source="nb_views" />
        <DateInput source="create_at" />
        <DateInput source="payment_due" />
    </Stack>
);