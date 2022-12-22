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
        <NumberInput sx={{minWidth: '25%'}}  source={sourceCode ? sourceCode : ""}    {...props } />
        <TextInput    source={sourceName ? sourceName : ""}  {...props } fullWidth  />
    </Stack>
);
