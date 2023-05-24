import React, { memo } from 'react';
import {  BooleanInput  } from 'react-admin';

const MvaBooleanInput = (props) => (
    <BooleanInput size="small"  
        options={{ 
            sx: { 
                '& .Mui-checked': {
                '& > span.MuiSwitch-thumb': {
                    backgroundColor: 'primary.900' 
                },
            }
        
        } }} 
        {...props}
    />
);

export default memo(MvaBooleanInput);
