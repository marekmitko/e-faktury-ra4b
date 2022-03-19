// in LatLongInput.js
import React from 'react';
import {TextField} from '@mui/material';

import { useController } from 'react-hook-form';

const MyTextField = ({ name, label }) => {
    const {
        field
        // fieldState: { isTouched, invalid, error },
        // formState: { isSubmitted }
    } = useController(name);
    
    return (
        <TextField
            {...field}
            label={label}
            name={name}
        />
    );
};

// sx={{display: "inline-block", width: "5em"}}

export const CityZipCodeField = (props) =>(
        <MyTextField name="address.ZIPCode" label="ISBN" />
        // <MyTextField  name="fullName" label="longitude" />
);

// export const CityZipCodeLabels = ({...props}) =>(

//     <span>
        
//     </span >
// );


/// ####################################################################
