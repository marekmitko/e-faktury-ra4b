import { memo } from 'react';
import * as React from 'react';
// import { DateField, NumberField, ReferenceField, ReferenceFieldProps } from 'react-admin';
import { Box, SxProps, Typography } from '@mui/material';
import { useRecordContext, NumberField, NumberFieldProps } from 'react-admin';

// import { FieldProps, useRecordContext } from 'react-admin';


const ValuePaidField = ( props ) => {
    const {source, sx} = props;
    const record = useRecordContext( );
    console.log('records!!', record);
    // const { compare } = props;?
    if (!record || !props.source) {
        return null;
    }
    if(+record[props.source] === +record['payment_amount'])
        return (<span> <NumberField  source={source} sx={{ fontWeight: '500', color: 'green' }} options={{ minimumFractionDigits: 2}} /> {"✔"}</span>);
    if(+record[props.source] !== +record['payment_amount'])
        return (<span style={{  color: 'red', fontWeight: '600' }}> <NumberField  source={source} sx={{ fontWeight: '500', color: '#8D021F' }} options={{ minimumFractionDigits: 2 }} /> {" ✖"}</span>);
    
    return    <NumberField source={source} />
     
};

ValuePaidField.defaultProps = NumberField.defaultProps;

export default ValuePaidField;