import * as React from "react";
import { Stack } from "@mui/material";
import { TextInput, NumberInput } from "react-admin";
import Divider from '@mui/material/Divider';

export const CodeAndNameCityDualInput = ({ labelCode, labelName, sourceCode, sourceName, ...props } ) => (

    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        width="100%"
    >
        <NumberInput sx={{minWidth: '25%'}} label={ labelCode ? labelCode : "ZIP Code"} source={sourceCode ? sourceCode : ""}    {...props } />
        <TextInput   label={ labelName ? labelName : "City Name"} source={sourceName ? sourceName : ""}  {...props } fullWidth  />
    </Stack>
);
