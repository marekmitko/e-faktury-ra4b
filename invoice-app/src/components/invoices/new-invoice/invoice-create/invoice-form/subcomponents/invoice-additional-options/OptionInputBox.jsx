import React from 'react';
import { useRecordContext, Edit, SimpleForm, DateInput, TextInput, NumberInput, SelectInput, CheckboxGroupInput } from 'react-admin'
import { Stack } from '@mui/material';
import { useWatch } from 'react-hook-form';

// TODO synch dateAdd14 
export const OptionInputBox = (props) => {
    return(
        <Stack   direction="row" spacing={1} width="100%" alignItems="center" justifyContent="flex-start">
            {/* <SelectInput source='payment method' choices={[{name: "1", value: "10" }]}/> */}

            {props.children}
            <CheckboxGroupInput source="category" choices={[
                { id: 'programming', name: 'Wyślij pocztą tradycyjną' },
                { id: 'lifestyle', name: 'Wyślij na adres e-mail' },
                // { id: 'photography', name: 'Photography' },
                ]} 
            />
            {/* </CheckboxGroupInput>  */}
            {/* {moreFHR ? moreFHR : null} */}
        </Stack>
    );
};