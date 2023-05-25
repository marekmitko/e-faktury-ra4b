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
        '& .RaCreate-card': { borderRadius: '15px', }
    
    
    
    }}   redirect="list" >
            <FormCardHeader />
        <SimpleForm
            sx={{ maxWidth: 500 }}
            // Here for the GQL provider
            defaultValues={{
                // birthday: new Date(),
                // first_seen: new Date(),
                // last_seen: new Date(),
                // has_ordered: false,
                // latest_purchase: new Date(),
                // has_newsletter: false,
                // groups: [],
                // nb_commands: 0,
                // total_spent: 0,
                // org_nr: 0,
                company: "Kowalski Company",
                is_company: false,
                org_nr: "123456789",
                mva: true,
                address: "Plac Powstańców Śląskich",
                zip_code: 44100,
                place: "Wrocław",
                firstname: "Jan",
                lastname: "Kowalski",
                email: "kowalski@company.pl",
                phone: "500100060",
                // id: "VDgkRBS"
            }}
            // validate={validateForm}
        >
                    
            
<CardHeader sx={{ mt: 0 , pt: 0, pl: 0, position: 'relative', left: -20, top: -20  }}
        avatar={ 
            
            <JoyAvatar size="lg" sx={{     pl: 4, pt: 4, 
                // boxShadow: 1, zIndex: 3, bgcolor: 'neutral.50', mt: -.5, color: 'primary.900', borderTopRadius: 0,  
            boxShadow: 1, zIndex: 3, bgcolor: 'neutral.50', mt: -.5, color: 'primary.900', borderTopRadius: 0,  
            }} aria-label="recipe">
            <IconBuyer sx={{  ml: -3.5, mt: -3,   }} />
          </JoyAvatar>
        }
        title={ <TitleCard >Dane nowego nabywcy </TitleCard>}
        // subheader="September 14, 2016"
      />
                <hr/>

<CircleIconChip />
<hr />

<CardHeader sx={{ mt: 0 , pt: 0, pl: 0, }}
        avatar={

          <Avatar  sx={{  
            // boxShadow: 1, zIndex: 3, bgcolor: 'neutral.50', mt: -.5, color: 'primary.900', borderTopRadius: 0,  
            boxShadow: 1, zIndex: 3, bgcolor: 'neutral.50', mt: -.5, color: 'primary.900', borderTopRadius: 0,  
            }} aria-label="recipe">
            <IconBuyer />
          </Avatar>
        }
        title={ <TitleCard >Dane nowego nabywcy </TitleCard>}
        // subheader="September 14, 2016"
      />


        <Box    width="100%" sx={{ marginRight: '-40px', position: 'relative', right: -25 }}>
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
        <BooleanInput  source="is_company" sx={{ alignItems: 'flex-start', p: 0, mt: '-15px' }} />
        {/* <NullableBooleanInput source="is_company" sx={{ alignItems: 'flex-start', p: 0, mt: '-15px' }} /> */}
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
            <BooleanInput  source="mva" sx={{ alignItems: 'center'  }} />
            <TextInput  source="org_nr" fullWidth               variant="standard"   />
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


// OLD
//**  
// export const BuyerDataFromLayout = (props) =>  { 
//     const translate = useTranslate();
//     return (
//     <>
//         {props.children}
//         <Stack direction="row"  spacing={2} width="100%" >
//         {/* <FullNameDualInput sourceForename="fullname.forename" sourceSurname="fullname.surname"
//           /> */} 
//             <TextInput  source="forename"  fullWidth  />
//             <TextInput source="surname"  fullWidth  />
//         </Stack>
//         <Stack direction="row" spacing={2} width="100%" alignItems="center">
//             <BooleanInput  source="mva" sx={{ alignItems: 'center' }} />
//             <TextInput  source="org_nr" fullWidth />
//         </Stack>
//         <Stack direction="row" gap={1} width="100%">
//             <MailIcon />  <strong>{translate('myroot.myBuyersEfaktury.header.addres_section')}</strong>
//         </Stack>
//         <TextInput source="address" fullWidth />
//         {/* <CodeAndNameCityDualInput sourceCode="place.zip_code" sourceName="place.name"  /> */}
//         <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//             spacing={2}
//             width="100%"
//         >
//             <NumberInput sx={{minWidth: '25%'}}  source="zip_code"/>
//             <TextInput    source="place"  fullWidth  />
//         </Stack>
//         <Stack direction="row" spacing={2} alignItems="center" width="100%">
//             <Stack direction="row"spacing={2} alignItems="center" width="100%" >
//                 <MailOutlineSharpIcon sx={{ transform: 'scale(1.2)',  mb: 2 }}  />
//                 <TextInput  source="email" fullWidth />
//             </Stack>
//             <Stack direction="row"spacing={2} alignItems="center" width="100%" >
//                 <LocalPhoneIcon sx={{ transform: 'scale(1.2)',  mb: 2 }}  />
//                 <TextInput source="phone" fullWidth />
            
//             </Stack>
            
//         </Stack>
//     </ >
// );
// }

