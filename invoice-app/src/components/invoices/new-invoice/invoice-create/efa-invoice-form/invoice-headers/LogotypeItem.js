import React from 'react';
import { Stack } from '@mui/material';

export const LogotypeItem = ({titleForm}) => (
    <Stack direction="row" spacing={1} width="100%" alignItems="center" justifyContent="space-around">
        {titleForm}
        {/* <CompanyLogoAvatar /> */}
        {/* <p>Efremitd add lint resource</p> */}
        {/* <TextField source="" defaultValue="Efremtit - add link" /> */}
    </Stack>
);