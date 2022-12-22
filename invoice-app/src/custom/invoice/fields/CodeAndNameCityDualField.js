import * as React from "react";
import { Stack } from "@mui/material";
import { TextField, Labeled } from "react-admin";

export const CodeAndNameCityDualField = ({ labelCode, labelName, sourceCode, sourceName, ...props } ) => (
    <Stack direction="row" gap={3} width="100%">
        {/* <Labeled  label={labelCode ? labelCode : "ZIP Code"} > */}
        {/* <Labeled   > */}
            <TextField source={sourceCode ? sourceCode : ""}  {...props }   />
        {/* </Labeled> */}
        {/* <Labeled label={labelName ? labelName : "City Name"} > */}
        {/* <Labeled  > */}
            <TextField source={sourceName ? sourceName : ""} {...props } fullWidth  />
        {/* </Labeled> */}
    </Stack>
);