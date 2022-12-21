import React from 'react';
import { useRecordContext, Edit, SimpleForm, DateInput, TextInput, NumberInput, TextField } from 'react-admin'
import { Stack } from '@mui/material';
import { CompanyLogoAvatar } from '../../../../../../admin/users/subcomponents/CompanyLogoAvatar';

export const LogotypeItem = (props) => (
    <Stack direction="row" spacing={2} width="100%" alignItems="center" justifyContent="space-around">
        <NumberInput source="invoice_no" disabled />
        {/* <CompanyLogoAvatar /> */}
        {/* <p>Efremitd add lint resource</p> */}
        {/* <TextField source="" defaultValue="Efremtit - add link" /> */}
    </Stack>
);