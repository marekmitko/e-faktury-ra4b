// in LatLongInput.js

import { TextField } from 'react-admin';

export const CityZipCodeField = (props) => { 
    // const {source, label ...rest} = props;
    return(
    < >
        <TextField source="address.street" label="company" />
        &nbsp;
        <TextField source="fullName" label="longitude" />
    </ >
);
    };