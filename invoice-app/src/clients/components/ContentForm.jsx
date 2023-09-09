import React, { memo } from 'react';
import { CardOverflow, Typography, Divider, Avatar, Box, SvgIcon,  } from "@mui/joy";
import {  CardContent, Stack } from '@mui/material';
import { NumberInput, TextInput, Title, regex, useResourceContext, useTranslate } from 'react-admin';
import CompanyTextInput from './subcomponent/CompanyTextInput';
import SemiovalTitleChip from '../../reusable-components/SemiovalTitleChip';


// icon import
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import HolidayVillageOutlined from '@mui/icons-material/HolidayVillageOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MvaBooleanInput from './subcomponent/MvaBooleanInput';
import MvaInputNumber from './subcomponent/MvaInputNumber';
import CircleIconChip from '../../reusable-components/CircleIconChip';
import HeaderClientFormCreate from './subcomponent/HeaderSimpleForm';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';




const Separator = (props) => (<Box sx={{ pt: '1em'}} {...props} />);

// const zipValidators = [, 'Must be a zip code')];
// const zipValidators = [regex(/^\d{5}$/, 'Must be a zip code')];

export const ContentForm = () => { 
    const translate = useTranslate();
    return(
        < > 

            <Stack direction="row" gap={1} width="100%">
                <CircleIconChip icon={<DriveFileRenameOutlineIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5, pr: 1 }} />
                <TextInput  
                    isRequired
                    source="company"   variant="standard"  fullWidth
                />
            </Stack>
            <Stack direction="row" spacing={2} width="100%" alignItems="center">
                <MvaBooleanInput sx={{ mt: 1.5, color: 'neutral.600'}} source="mva"  />
                {/* <MvaInputNumber  source="org_nr" variant="standard" fullWidth  /> */}
                <NumberInput source="org_nr"  variant="standard"  fullWidth   />
            </Stack>
            <SemiovalTitleChip  startDecorator={<EmailRoundedIcon  sx={{ maxHeight: '20px', color: 'primary.900', mb: -.1, ml: 1.5, mr: -.25, mt: -.15 }} />}>{translate('myroot.myBuyersEfaktury.header.addres_section')} </SemiovalTitleChip>
            <Separator />
            <Stack direction="row" gap={1} width="100%">
                <CircleIconChip icon={<EditLocationOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5, pr: 1 }} />
                <TextInput  
                    isRequired
                    source="address"   variant="standard"  fullWidth
                />
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                width="100%"
            >
                <CircleIconChip icon={<FmdGoodOutlinedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5 }} />
                <TextInput sx={{minWidth:'25%'}} 
                    // validate={zipValidators} 
                    isRequired
                    source="zip_code"  variant="standard" 
                    //type="number" //Om? Omówićź czy type number może tu być
                />
                <TextInput
                    isRequired
                    source="place"  fullWidth  variant="standard" 
                />
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
                    <TextInput 
                        isRequired
                        source="email" fullWidth variant="standard" 
                    />
                </Stack>
                <Stack direction="row"spacing={2} alignItems="center" width="100%" >
                    <CircleIconChip icon={<CallRoundedIcon />} iconSize="xl2"  circleSize="sm" boxSx={{ mt: -1.5 }} />
                    <TextInput source="phone" fullWidth variant="standard" />
                </Stack>
            </Stack>
        </ >
    )};

export default memo(ContentForm);
