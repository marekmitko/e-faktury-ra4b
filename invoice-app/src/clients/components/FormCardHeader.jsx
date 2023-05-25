import React, { memo } from 'react';
import { CardOverflow, Typography, Divider, Avatar, Box, SvgIcon} from "@mui/joy";
import { CardHeader } from '@mui/material';
import { IconBuyer } from '..';
import { TitleCard } from './subcomponent/TitleCard';
import { useResourceContext, useTranslate } from 'react-admin';


export const FormCardHeader = (props) => { 
    const { icon, iconSize, iconSx, bgColor, textColor } = props;
    const translate = useTranslate();
    const resource = useResourceContext();
    return(
        <CardOverflow
            variant="soft"
            sx={{
                width: '100%',
                display: 'flex',
                gap: .5,
                pt: .5,
                pb: .25,
                pl: 1.25,
                // px: 'var(--Card-padding)',
                // bgcolor: 'background.level3',
                bgcolor: bgColor ? bgColor : 'primary.900',
                color: textColor ? textColor : '#fff',
                // borderBottomLeftRadius: 25,
            }}
        > 
        { icon && (
            <SvgIcon fontSize={`${iconSize}`} sx={iconSx}  >
                { icon }
            </SvgIcon>)
        } 
            <Typography level="body3" fontWeight='600' sx={{ fontWeight: 'md', color: textColor }}>
                { translate(`resources.${resource}.${props['title']}`) }
            </Typography> 
        </CardOverflow>
    )
};


export default memo(FormCardHeader);