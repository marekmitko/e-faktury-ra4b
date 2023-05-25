import React, { memo } from 'react';
import { CardOverflow, Typography, Divider, Avatar, Box, SvgIcon,  } from "@mui/joy";
import {  CardContent, Stack } from '@mui/material';
import { NumberInput, TextInput, useResourceContext, useTranslate } from 'react-admin';
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




const Separator = (props) => (<Box sx={{ pt: '1em'}} {...props} />);

export const ContentForm = () => { 
    const translate = useTranslate();
    return(
        < > 
            <Box width='150%'  sx={{ display: 'flex', zIndex: 1000,   position: 'relative', left: -25, right: 0 }}>
                <CompanyTextInput source="company"     />
            </Box>
            <Separator />
            <Stack direction="row" spacing={2} width="100%" alignItems="center">
                <MvaBooleanInput sx={{ mt: 1.5, color: 'neutral.600'}} source="mva"  />
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
        </ >
    )};

export default memo(ContentForm);
