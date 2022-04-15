import * as React from "react";
import { Stack } from "@mui/material";
import { TextField, Labeled } from "react-admin";

export const CodeAndNameCityDualField = ({ labelCode, labelName, sourceCode, sourceName } ) => (
    <Stack direction="row" gap={3} width="100%">
        <Labeled  label={labelCode ? labelCode : "ZIP Code"} >
            <TextField source={sourceCode ? sourceCode : ""}     />
        </Labeled>
        <Labeled label={labelName ? labelName : "City Name"} >
            <TextField source={sourceName ? sourceName : ""}  fullWidth  />
        </Labeled>
    </Stack>
);