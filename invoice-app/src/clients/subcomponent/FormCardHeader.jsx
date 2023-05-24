import React from 'react';
import { CardOverflow, Typography, Divider, Avatar, Box} from "@mui/joy";
import { CardHeader } from '@mui/material';
import { IconBuyer } from '..';
import { TitleCard } from './TitleCard';


export const FormCardHeader = ({children, ...props}) => (


    <CardOverflow
    variant="soft"
    sx={{
        display: 'flex',
        gap: 1.5,
        pt: .5,
        pb: .25,
        pl: 1.25,
        // px: 'var(--Card-padding)',
        // bgcolor: 'background.level3',
        bgcolor: 'primary.900',
        // borderBottomLeftRadius: 25,
    }}
    > 
   
                {/* <IconBuyer /> */}
        <Typography level="body3" fontWeight='600' sx={{ fontWeight: 'md', color: '#fff' }}>
            NOWY NABYWACA
        </Typography> 
    </CardOverflow>

);