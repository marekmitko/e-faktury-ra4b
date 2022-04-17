import * as React from "react";
import {TextInput, TextField } from 'react-admin';
import {Box} from '@mui/material';



const BoxTextInput = (props, defaultProps) => {
    // defaultProps = {variant: "outlined"};
    const record = { id: "user_123", company: "Aleksander", title: "Hello, world", author: "John Doe", body: "..." };
    return(
        <Box display="flex" record={record} resource="data_user" flex={1} {...props} >
            <TextInput 
            record={record}
            variant="filled"
            size="small"
            // defaultValue="Small"
            resource="data_user" 
            {...props} fullWidth  />
            <TextField {...props} />
        </Box>
    );
};

export default BoxTextInput;