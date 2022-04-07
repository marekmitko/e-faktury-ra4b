import * as React from "react";
import { ReferenceInput, SelectInput, TextInput } from "react-admin";


export const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Company" reference="tradePartners_list">
        <SelectInput optionText="company" label="Company"  />
    </ReferenceInput>
];