import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { TextField, SimpleShowLayout } from "react-admin";
import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../../../../custom/ZipCityDualTextField";
import { CodeAndNameCityDualField } from '../../../../../../../custom/invoice/fields/CodeAndNameCityDualField'

// BUG // *see ZipCityCode
const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;


export const SellerDataShowLayout = (props, propTypes) => (
    <SimpleShowLayout>
        <TextField label="Company Name" source="company" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="Street" source="address.street" />
        <CodeAndNameCityDualField  sourceCode="address.ZIPCode" sourceName="address.city"   />
        <TextField label="MVA Code" source="orgId.orgNumber" />
    </SimpleShowLayout>
);













// export const SellerDataShowLayout = (props) => (
// <SimpleShowLayout>
//     <TextField label="Company Name" source="company" />
//     <TextField label="Full Name" source="fullName" />
//         <TextField label="Street" source="address.street" />
//         <ZipCityDualTextField label={<ZipCityDualLabel  />} sourceZip="address.ZIPCode" sourceCity="address.city" />
//         <TextField label="MVA Code" source="orgId.orgNumber" />

//         <CodeAndNameCity  sourceCode="address.ZIPCode" sourceName="address.city"   />
//     </SimpleShowLayout>
// );