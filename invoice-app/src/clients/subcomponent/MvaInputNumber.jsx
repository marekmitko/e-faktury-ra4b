import { Box, Collapse } from '@mui/material';
import React, { memo } from 'react';
import { useRecordContext, NumberInput  } from 'react-admin';
import { useWatch } from 'react-hook-form';

const MvaInputNumber = (props) => {

    const isCompany = useWatch({ name: 'mva' });
    return (
        <Box
            sx={{ width:'100%',
            "& > :not(style)": {
                display: "flex",
                // justifyContent: "space-around",
                minHeight: 70,
                width:'100%'
            },
        }}
    >
            <div>
                <Collapse in={isCompany} timeout="auto" sx={{ width: '100%' }} //unmountOnExit
                >
                    <NumberInput disabled={ isCompany ? false : true }   fullWidth  {...props} />
                </Collapse>
            </div>
        </Box>
    );
};


export default memo(MvaInputNumber);
