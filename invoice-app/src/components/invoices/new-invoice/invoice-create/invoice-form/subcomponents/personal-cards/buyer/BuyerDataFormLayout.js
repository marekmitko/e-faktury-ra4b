import { Card,  Box, Stack } from '@mui/material';
import React from 'react';
import {  TextInput,   BooleanInput , NumberInput, useRecordContext, RecordContextProvider } from 'react-admin';
import MailIcon from '@mui/icons-material/MailOutline';
// import { useWarnWhenUnsavedChanges } from 'react-admin';
import { CodeAndNameCityDualInput } from '../../../../../../../../custom/invoice/inputs/CodeAndNameCityDualInput';
import { FullNameDualInput } from '../../../../../../../../custom/invoice/inputs/FullNameDualInput';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';


const BuyerRecordContext = ({children}) => {
    const record = useRecordContext();
    return(
        <RecordContextProvider value={record}>
                { children}
        </RecordContextProvider>

    );
};

TextInput.defaultProps = {
    variant: "filled", 
    size: "small",
    margin: "none",
};
NumberInput.defaultProps = {
    variant: "filled", 
    size: "small",
    margin: "none",
};

export const BuyerDataFromLayout = (props) =>  (
    <>
        {props.children}
        <FullNameDualInput sourceForename="fullname.forename" sourceSurname="fullname.surname"  />
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
            <BooleanInput  source="orgId.MVA" sx={{ alignItems: 'center' }} />
            <TextInput  source="orgId.orgNumber" fullWidth />
        </Stack>
        <Stack direction="row" gap={1} width="100%">
            <MailIcon />  <strong>ADRES NABYWCY</strong>
        </Stack>
        <TextInput source="address.street" fullWidth />
        <CodeAndNameCityDualInput sourceCode="address.ZIPCode" sourceName="address.city"  />
        <Stack direction="row" spacing={2} alignItems="center" width="100%">
            <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                <MailOutlineSharpIcon sx={{ transform: 'scale(1.2)',  mb: 2 }}  />
                <TextInput  source="contact.email" fullWidth />
            </Stack>
            <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                <LocalPhoneIcon sx={{ transform: 'scale(1.2)',  mb: 2 }}  />
                <TextInput source="contact.phoneNumber" fullWidth />
            
            </Stack>
            
        </Stack>
    </ >
);



