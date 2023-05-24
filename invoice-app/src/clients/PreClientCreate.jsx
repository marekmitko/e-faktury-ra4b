import { Card,  Box, Stack, Avatar, IconButton, CardContent, InputAdornment } from '@mui/material';
import React from 'react';
import {  useTranslate, TextInput,   BooleanInput , NumberInput, useRecordContext, RecordContextProvider, NullableBooleanInput, SimpleForm, Create, BooleanField } from 'react-admin';
import MailIcon from '@mui/icons-material/MailOutline';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { CompanyCardHeader } from './subcomponent/CompanyCardHeader';
import { IconCreate } from '.';
import { IconBuyer } from '.';
import CardHeader from '@mui/material/CardHeader';
import { TitleCard } from './subcomponent/TitleCard';
import CircleIconChip from '../reusable-components/CircleIconChip';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import HolidayVillageOutlined from '@mui/icons-material/HolidayVillageOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SemiovalTitleChip from '../reusable-components/SemiovalTitleChip';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import MarkAsUnreadRoundedIcon from '@mui/icons-material/MarkAsUnreadRounded';

import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import SettingsPhoneRoundedIcon from '@mui/icons-material/SettingsPhoneRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded';
import PictureInPictureAltRoundedIcon from '@mui/icons-material/PictureInPictureAltRounded';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import JoyAvatar from '@mui/joy/Avatar';
import { FormCardHeader } from './subcomponent/FormCardHeader';
import MvaInputNumber from './subcomponent/MvaInputNumber';
import MidV2CardHeader from './subcomponent/MidV2CardHeader';


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
    {/* <Create component="div" redirect="list"   {...props}> */}
    <Create sx={{ p: 0,  maxWidth: 500,
        '& .RaCreate-card': { borderRadius: '15px',  pt: 0, mt: 0
    }
    
    
    
    }}   redirect="list" >
            <FormCardHeader />
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
        <Box    width="100%" sx={{ zIndex: 1000, marginRight: '-40px', position: 'relative', left: -25, right: -25 }}>
            <TextInput label="" 
                source="company" fullWidth helperText={false} resettable 
            sx={{
                marginRight: -10,
                // marginRight: '1em',
                '& .MuiFilledInput-input': {
                    paddingTop: 2,
                    marginTop: -1,
                    borderBottomColor: 'red',
                },
                '& .MuiFilledInput-underline': {
                    borderTopLeftRadius: '15px',
                    fontSize: '1.2rem',
                },
                
                // '& .MuiFormControl': {
                    //     borderTopLeftRadius: '15px',
                    //     defaultProps: {
                        //         variant: 'outlined',
                        //     },
                        // },
                    }}
            InputProps={{
                    placeholder: "Nazwa firmy",
                    startAdornment: <InputAdornment position="start"   sx={{ color: 'primary.900',  }}>
                        <AddHomeWorkRoundedIcon  sx={{ mt: -1.5, ml: -.25 }} />
                    </InputAdornment>,
                }}    
            />
        </Box>
        <Separator />
        {/* <BooleanInput  source="is_company" sx={{ alignItems: 'flex-start', p: 0, mt: '-15px' }} /> */}
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
            <BooleanInput 
            options={{ checkedIcon: <AccountBoxOutlinedIcon />  }} 
            // options={{ labelPlacement: "top" }} 
            
            size="small" source="mva" sx={{ alignItems: 'center'  }} />
            <MvaInputNumber  source="org_nr" variant="standard" fullWidth  />
        </Stack>
        <SemiovalTitleChip  startDecorator={<EmailRoundedIcon  sx={{ maxHeight: '20px', color: 'primary.900', mb: -.1, ml: 1.5, mr: -.25, mt: -.15 }} />}>{translate('myroot.myBuyersEfaktury.header.addres_section')} </SemiovalTitleChip>
        <Separator />
        <Stack direction="row" gap={1} width="100%">
            <CircleIconChip icon={<EditLocationOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5, pr: 1 }} />
            <TextInput  source="address" fullWidth                   variant="standard"   />
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
                <TextInput disabled source="email" fullWidth variant="standard" />
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

