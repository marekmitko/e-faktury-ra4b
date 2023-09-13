import * as React from 'react';
import { memo, ReferenceField, ReferenceFieldProps } from 'react-admin';
import { SxProps, Typography } from '@mui/material';

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
// import AvatarField from './AvatarField';


const CustomerField = (props ) => {
    const { size } = props;
    const record = useRecordContext();
    return record ? (
        <Typography
            variant="body2"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            component="div"
            sx={props.sx}
        >
            {/* <AvatarField
                record={record}
                size={size}
                sx={{
                    mr: 1,
                    mt: -0.5,
                    mb: -0.5,
                }}
            /> */}
            {record.first_name} {record.last_name}
        </Typography>
    ) : null;
};

CustomerField.defaultProps = {
    // source: 'last_name' as const,
    source: 'company',
    label: 'resources.customers.fields.name',
};

export default memo(CustomerField);



// export default CustomerReferenceField;