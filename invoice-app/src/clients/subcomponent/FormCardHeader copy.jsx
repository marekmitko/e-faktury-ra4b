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
        py: 1,
        // px: 'var(--Card-padding)',
        // bgcolor: 'background.level3',
        bgcolor: 'primary.900',
        // borderBottomLeftRadius: 25,
    }}
    > 
    {/* <Avatar  sx={{  
            borderTopLeftRadius: 0, borderBottomLeftRadius: 0, mt: -1,
            boxShadow: 1, zIndex: 3, bgcolor: 'neutral.50', mt: -.5, color: 'primary.900', borderTopRadius: 0,  
            }} aria-label="recipe">
            <IconBuyer />
          </Avatar> */}
          <Box sx={{ pl: 1, pt: .25 }}>

    <Avatar  sx={{  
        borderBottomLeftRadius: 0, borderBottomRightRadius: 0, 
        borderTopRightRadius: 0,
        mt: -1,
        boxShadow: 1, zIndex: 3, bgcolor: 'neutral.50', mt: -.5, color: 'primary.900', borderTopRadius: 0,  
    }} aria-label="recipe">
            <IconBuyer />
          </Avatar>

                </Box>


                <IconBuyer />
        <Typography level="body3" fontWeight='600' sx={{ fontWeight: 'md', color: '#fff' }}>
           NOWY NABYWACA
        </Typography> 
        {/* <TitleCard >Dane nowego nabywcy </TitleCard> */}

    {/* <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
        6.3k views
    </Typography>
    <Divider orientation="vertical" />
    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
        1 hour ago
    </Typography> */}
    </CardOverflow>

);