import * as React from "react";
import { TextField, SimpleShowLayout, useRecordContext  } from "react-admin";
import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../custom/ZipCityDualTextField";


// BUG // *see ZipCityCode
const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;


export const SellerDataShowLayout = () => (
    <SimpleShowLayout>
        <TextField label="Company Name" source="company" />
        <TextField label="Full Name" source="fullName" />
        <ZipCityDualTextField label={ <ZipCityDualLabel />} sourceZip="address.ZIPCode" sourceCity="address.city" />
        <TextField label="Street" source="address.street" />
        <TextField label="MVA Code" source="orgId.orgNumber" />
        {/* <ZipCityCode /> */}
    </SimpleShowLayout>
);