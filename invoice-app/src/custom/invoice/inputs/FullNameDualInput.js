import * as React from "react";
import { Stack } from "@mui/material";
import { TextInput  } from "react-admin";

export const FullNameDualInput = ({ labelForename, labelSurname, sourceForename, sourceSurname, ...props } ) => (
    <Stack direction="row"  spacing={2} width="100%" >
        <TextInput  source="fullname.forename" { ...props} fullWidth  />
        <TextInput source="fullname.surname" { ...props} fullWidth  />
    </Stack>
);
