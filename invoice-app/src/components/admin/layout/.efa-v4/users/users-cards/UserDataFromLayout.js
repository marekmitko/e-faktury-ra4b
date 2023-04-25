import { Card,  Box, Stack, Divider } from '@mui/material';
import React from 'react';
import {  TextInput,   BooleanInput , NumberInput, useRecordContext, RecordContextProvider } from 'react-admin';
import MailIcon from '@mui/icons-material/MailOutline';
// import { useWarnWhenUnsavedChanges } from 'react-admin';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';


import CorporateDataIcon from '@mui/icons-material/MapsHomeWork';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ContactIcon from '@mui/icons-material/ContactMail';
import UserAdminIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';

import { FullNameDualInput } from '../../../../custom/invoice/inputs/FullNameDualInput';
import { CodeAndNameCityDualInput } from '../../../../custom/invoice/inputs/CodeAndNameCityDualInput';


const UserRecordContext = ({children}) => {
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

export const UserDataFromLayout = (props) =>  (
    <>
        <Stack direction="row" gap={1} width="100%" mb="-5px">
            <UserAdminIcon sx={{mt: -.3}}/>  <strong>DANE UŻYTKOWNIKA</strong>
        </Stack>
        < hr />
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
            <TextInput source="nickname" fullWidth  />
            <TextInput source="user.type" label="User Type" disabled />
        </Stack>
        <FullNameDualInput sourceForename="fullname.forename" sourceSurname="fullname.surname"  />
        <br />
        <Stack direction="row" gap={1} width="100%" mb="-5px">
            <CorporateDataIcon sx={{mt: -.3}}/>  <strong>DANE PRZEDSIĘBIORSTWA</strong>
        </Stack>
        < hr />
        <TextInput label="Company Name" source="company" fullWidth />
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
            <BooleanInput label="MVA" source="orgId.MVA" sx={{ alignItems: 'center' }} />
            <TextInput label="MVA Number"  source="orgId.orgNumber" fullWidth />
        </Stack>
        <TextInput label="Street Name" source="address.street" fullWidth />
        <CodeAndNameCityDualInput sourceCode="address.ZIPCode" sourceName="address.city"  />
        {/* <Divider sx={{mb: 2, mt: -1}}/> */}
        <Stack direction="row" gap={1} width="100%" mb="-5px">
            <ForwardToInboxIcon sx={{mt: -.3}}/>  <strong>DANE KONTAKTOWE PRZEDSIĘBIORSTWA</strong>
        </Stack>
        < hr />
        <Stack direction="row" spacing={2} alignItems="center" width="100%">
            <Stack direction="row"spacing={2} alignItems="center" width="100%"  >
                <EmailIcon sx={{ transform: 'scale(1.2)',  mb: 2, ml: 1 }}  />
                <TextInput label="Contact email" source="contact.email" fullWidth />
            </Stack>
            <Stack direction="row" gap={2} alignItems="center" width="100%" >
                <PhoneIcon sx={{ transform: 'scale(1.2)',  mb: 2,  }}  />
                <TextInput label="Phone Number" source="contact.phoneNumber" fullWidth />
            </Stack>
        </Stack>
    </ >
);



