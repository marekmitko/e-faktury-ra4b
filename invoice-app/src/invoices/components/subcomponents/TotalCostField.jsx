import * as React from 'react';
import { Avatar, SxProps } from '@mui/material';
import { FieldProps, NumberField, useRecordContext } from 'react-admin';




// const FormattedNumberField = ({ source }) => {
//     const record = useRecordContext();
//     return <NumberField sx={{ color: record && record[source] < 0 ? 'red' : '' }} source={source} />;
// };
// FormattedNumberField.defaultProps = {
//     textAlign: 'right',
// };

const TotalCostField = ({source, sx } ) => {
    const record = useRecordContext();
    if (!record) return null
    return (
        <NumberField
        source={source}
        options={{
            style: 'currency',
            currency: 'PLN',
            minimumFractionDigits: 2
        }}
        sx={sx}
    />
    );
};

export default TotalCostField;


