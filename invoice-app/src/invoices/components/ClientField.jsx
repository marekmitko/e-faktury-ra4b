import { memo } from 'react';
import * as React from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';
import { Box, SxProps, Typography } from '@mui/material';

// import FullNameField from './FullNameField';

// const CustomerReferenceField = (props
//     // props: Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
//     //     source?: string; }
// ) => (
//     <ReferenceField source="customer_id" reference="customers" {...props}>
//         <FullNameField />
//     </ReferenceField>
// );

// CustomerReferenceField.defaultProps = {
//     source: 'customer_id',
// };



// import * as React from 'react';
// import { memo } from 'react';

import { FieldProps, useRecordContext } from 'react-admin';
import AvatarField from './subcomponents/AvatarField';
// import AvatarField from './AvatarField';


const CustomerField = (props ) => {
    const { size, sx } = props;
    const record = useRecordContext();
    return record ? (
        <Box   sx={sx} >
        <Box   sx={{ display: 'flex', alignItems: 'center', ...sx }} >
            
        <AvatarField
            record={record}
            size={size}
            sx={{
                mr: 1,
            }}
            />
        <Box>
            <Box sx={{  mb: -0.5, color: 'text.secondary',  fontWeight: '500',   }}>{record.buyer_company}</Box>
            <Box sx={{   color: 'primary.800',
                // display: 'inline',  
                fontWeight: '500',  mt: -0.5,
                fontSize: 14, }}
            >
                {(+record.buyer_mva === 1 ) ? `mva: ` : `nr org.: ` }{record.buyer_org_nr}
            </Box>
        </Box>
            </Box>
            </Box>

    ) : null;
};

CustomerField.defaultProps = {
    // source: 'last_name' as const,
    source: 'buyer_company',
    label: 'resources.e_faktury.name',
};

export default memo(CustomerField);



// export default CustomerReferenceField;