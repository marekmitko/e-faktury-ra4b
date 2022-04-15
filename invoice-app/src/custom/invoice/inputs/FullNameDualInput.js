import * as React from "react";
import { Stack } from "@mui/material";
import { TextInput  } from "react-admin";

export const FullNameDualInput = ({ labelForename, labelSurname, sourceForename, sourceSurname, ...props } ) => (
    <Stack direction="row"  spacing={2} width="100%" >
        <TextInput label="First Name" source="fullname.forename" { ...props} fullWidth  />
        <TextInput label="Last Name" source="fullname.surname" { ...props} fullWidth  />
    </Stack>
);
