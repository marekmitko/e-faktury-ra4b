import * as React from "react";
import {TextInput, TextField } from 'react-admin';
import {Box} from '@mui/material';

// BUG Spr jak usunąć <InputHelperText />
    // https://github.com/marmelab/react-admin/blob/v4.0.0-beta.3/packages/ra-ui-materialui/src/input/TextInput.tsx


// reCSS variant ?  	'filled' | 'outlined' | 'standard'

    export const SmallTextInput = (props, defaultProps) => {
        defaultProps = {
            variant: "outlined", 
            size: "small",
            margin: "none" 
        };
    // BUG //*edu SmallTextInput - Upewnic sie czy nie potrzeba record = useRecordContext(); 
    
    return(
        <Box component="span" flex={1}   display="inline-block"  {...props} {...defaultProps}   
            // *edu Spr jak usunąć <InputHelperText /> =>   my="-10px" mx="-10px" 
            // my="-10px" mx="-10px" 
            // sx={{   transform: 'scale(0.9)' }}
        >
            <TextInput sx={{m: '-10px', transform: 'scale(0.9)'}} fullWidth {...props} {...defaultProps} />
        </Box>
    );
};



// return(
//     <Box component="span" flex={1} my="-5px"  display="flex"  {...props} {...defaultProps}   >
//         {/* {props.children} */}
//         <TextInput  
//         fullWidth   
//         {...props}  {...defaultProps} sx={{transform: 'scale(0.9)',  display: 'flex' }}/>
//     </Box>
// );