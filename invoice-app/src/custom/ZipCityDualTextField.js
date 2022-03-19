import * as React from "react";
import { Stack } from "@mui/material";
import { useResourceContext, TextField, useRecordContext  } from "react-admin";

// *see ZipCityDualTextLabel 
export const ZipCityDualLabel= () => (
    <Stack direction="row" spacing={2}>
        <span>ZIP Code</span>
        <span>City Name</span>
    </Stack>
);
// *see ZipCityDualTextField   
// export const ZipCodeCityNameTextField = (props, defaultProps) => {
export const ZipCityDualTextField = (props, defaultProps) => {
    const {labelZipCode, labelCityName, sourceCity, sourceZip } = props;
    defaultProps = {addLabel: true};

    return (
        <Stack direction="row" spacing={3}>
            <TextField source={sourceZip} label={labelZipCode ? labelZipCode : "ZIP Code"}  />
            <TextField source={sourceCity} label={labelCityName ? labelCityName : "City Name"}  />
        </Stack>
    );
};



// BUG ZipCityCode   
// export const ZipCityCode = ({...props}, {addLabel}) => <TestCityZipCodeField  addLabel='true' label={<ZipCityDualLabel  />} /> ;
// 

// export const ZipCityDualTextField = (props, defaultProps) => {
//     let addLabel = {...defaultProps};
//     // defaultProps = {addLabel: true};
//     const record = useRecordContext(props);
//     return(
//     <ZipCodeCityNameTextField  addLabel='true' label={<Stack direction="row" spacing={2}><span >ZIP Code </span><span >City </span>  </Stack>}/>

// );
//     };
    