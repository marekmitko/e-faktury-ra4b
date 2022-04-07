import { Card,  Box, Stack } from '@mui/material';
import React from 'react';
import { SimpleForm,    TextInput,   BooleanInput, NumberInput, useRecordContext, RecordContextProvider } from 'react-admin';
import { SmallTextInput } from '../../../../../custom/SmallTextInput';
import MailIcon from '@mui/icons-material/MailOutline';
// import { Form, Field } from 'react-final-form';
// import { useWarnWhenUnsavedChanges } from 'react-admin';

const BuyerRecordContext = ({children}) => {
    const record = useRecordContext();
    return(
        <RecordContextProvider value={record}>
                { children}
        </RecordContextProvider>

    );
};



export const BuyerDataFromLayout3 = ( ) =>  (
            // <BuyerRecordContext>
                <SimpleForm toolbar="">
                    <TextInput source="CompanyName" fullWidth />
                    <Stack direction="row" gap={1} width="100%">
                        <TextInput label="First Name" source="fullname.forename" sx={{ width: '50%' }} />
                        <TextInput label="Last Name" source="fullname.surname" sx={{ width: '50%' }} />
                    </Stack>
                    <Stack direction="row" gap={1} width="100%">
                        <MailIcon />
                        <strong>ADRES NABYWCY</strong>
                    </Stack>
                    <TextInput label="Street Name" source="address.street" fullWidth />
                    <Stack direction="row" gap={1} width="100%">
                        <TextInput label="ZIP Code" source="addres.ZIPCode" sx={{ width: '30%' }} />
                        <TextInput label="City Name" source="addres.city"  sx={{ width: '70%' }} />
                    </Stack>
                    <Stack direction="row" gap={1} width="100%">
                        <TextInput   label="MVA Code" sx={{ width: '80%' }}    source="buyerMVA"     mr="0.5em"  />
                        {/* <BooleanInput  label="MVA"   /> */}
                    </Stack>
                </SimpleForm>
            // </BuyerRecordContext>
    );



