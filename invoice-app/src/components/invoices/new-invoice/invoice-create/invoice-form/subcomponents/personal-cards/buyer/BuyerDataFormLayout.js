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




// "id": "2125",
// "buyer_id": "2125",
// ?? "user_id": "319",
// ?? "kunde_nr": "1",
                            // "company": "firma 1",
// "address": "Kolorowa",  | address.street
// "place": "34-567",      | place.zip_code   place.name


 // note Omówić różnice  "orgId.orgNumber" "orgId.MVA"
// "org_nr": "12345698",
// "mva": "1",

// Oki  "email": "",
// Oki "phone": "",
// BUG "fax": "",
// ?? "main_kunde_nr": "0",
// ?? "lang": "",
// ?? "debt": "126188.10",
// ??"remainder": "0",
// ??"inkasso": "0",
// ?? // note "is_company": "1



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
        <TextInput source="address" fullWidth />
        <CodeAndNameCityDualInput sourceCode="place.zip_code" sourceName="place.name"  />
        <Stack direction="row" spacing={2} alignItems="center" width="100%">
            <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                <MailOutlineSharpIcon sx={{ transform: 'scale(1.2)',  mb: 2 }}  />
                <TextInput  source="email" fullWidth />
            </Stack>
            <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                <LocalPhoneIcon sx={{ transform: 'scale(1.2)',  mb: 2 }}  />
                <TextInput source="phone" fullWidth />
            
            </Stack>
            
        </Stack>
    </ >
);



