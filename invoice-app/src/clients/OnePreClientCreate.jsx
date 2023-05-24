import React from 'react';
import { Card,  Box, Stack,  } from '@mui/material';
import {  useTranslate, TextInput , NumberInput,   SimpleForm, Create, } from 'react-admin';
import CircleIconChip from '../reusable-components/CircleIconChip';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import HolidayVillageOutlined from '@mui/icons-material/HolidayVillageOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SemiovalTitleChip from '../reusable-components/SemiovalTitleChip';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { FormCardHeader } from './subcomponent/FormCardHeader';
import MvaInputNumber from './subcomponent/MvaInputNumber';
import MidV2CardHeader from './subcomponent/MidV2CardHeader';
import MvaBooleanInput from './subcomponent/MvaBooleanInput';
import CompanyTextInput from './subcomponent/CompanyTextInput';


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

const Separator = () => <Box sx={{ pt: '1em'}} />;

export const PreClientCreate = (props) =>  { 
    const translate = useTranslate();
    // const record = useRecordContext();
    return (

    <>
    <Create sx={{ p: 0,  maxWidth: 500,  '& .RaCreate-card': { borderRadius: '15px',  pt: 0, mt: 0 }  
                }} redirect="list"  // {...props}
    >
            {/* <FormCardHeader /> */}
        <SimpleForm
            sx={{ maxWidth: 500, pt: 0, mt: 0 }}
            // Here for the GQL provider
            defaultValues={{
                company: "",
                is_company: false,
                org_nr: "",
                mva: true,
                address: "",
                zip_code: "",
                place: "",
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
            }}
            // validate={validateForm}
            > 
                {/* <MidV2CardHeader /> */}
                <Box width='150%'  sx={{ display: 'flex', zIndex: 1000,   position: 'relative', left: -25, right: 0 }}>
                    <CompanyTextInput source="company"     />
                </Box>
                <Separator />
                <Stack direction="row" spacing={2} width="100%" alignItems="center">
                    <MvaBooleanInput  sx={{ mt: 1.5, color: 'neutral.600'}} source="mva"  />
                    <MvaInputNumber  source="org_nr" variant="standard" fullWidth  />
                </Stack>
                <SemiovalTitleChip  startDecorator={<EmailRoundedIcon  sx={{ maxHeight: '20px', color: 'primary.900', mb: -.1, ml: 1.5, mr: -.25, mt: -.15 }} />}>{translate('myroot.myBuyersEfaktury.header.addres_section')} </SemiovalTitleChip>
                <Separator />
                <Stack direction="row" gap={1} width="100%">
                    <CircleIconChip icon={<EditLocationOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5, pr: 1 }} />
                    <TextInput  source="address"   variant="standard"  fullWidth/>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    width="100%"
                >
                    <CircleIconChip icon={<FmdGoodOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5 }} />
                    <NumberInput sx={{minWidth:'25%'}} source="zip_code"  variant="standard" />
                    <TextInput    source="place"  fullWidth  variant="standard" />
                </Stack>
                    <SemiovalTitleChip   startDecorator={<RecentActorsIcon  sx={{ color: 'primary.900', mb: -.1, ml: 1.5, mr: 0 }} />}>{translate('myroot.myBuyersEfaktury.header.contact_section')} </SemiovalTitleChip>
                    <Separator />
                <Stack direction="row"  spacing={2} width="100%" >
                    <CircleIconChip icon={<PersonPinCircleOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5 }} />
                    <TextInput source="lastname"  fullWidth  variant="standard"/>
                    <TextInput  source="firstname"  fullWidth variant="standard" />
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center" width="100%">
                    <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                        <CircleIconChip icon={<MarkAsUnreadOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5 }} />
                        <TextInput source="email" fullWidth variant="standard" />
                    </Stack>
                    <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                        <CircleIconChip icon={<CallRoundedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5 }} />
                        <TextInput source="phone" fullWidth variant="standard" />
                    </Stack>
                </Stack>
            </SimpleForm>
        </Create>
    </ >
);
}

