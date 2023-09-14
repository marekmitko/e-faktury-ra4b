import { memo } from 'react';
import * as React from 'react';
import { DateField, ReferenceField, ReferenceFieldProps } from 'react-admin';
import { Box, SxProps, Typography } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';

// https://marmelab.com/react-admin/Fields.html#textalign

const CustomDataField = (props) => {
    const { sx, source, compare } = props;
    const record = useRecordContext();

    // if (!record.source && (new Date(record[source]) === '0000-00-00') ) return (<span style={{ color: 'red' }}>{record && record[source]}</span>);
    if (!record) return null;

    if (( record[source]  === '0000-00-00') )  return (<span style={{ color: '#8D021F' }}>{"brak daty"}</span>);
    if (( record[source]  !== '0000-00-00') ) return ( <DateField source={source} sx={sx} />);
    // <DataField />

    // const total = record.items.reduce((total, item) => total + item.price, 0);
    // return <span>{total}</span>;
};
// BasketTotal.defaultProps = {
//     textAlign: 'right',
// };

export default CustomDataField;