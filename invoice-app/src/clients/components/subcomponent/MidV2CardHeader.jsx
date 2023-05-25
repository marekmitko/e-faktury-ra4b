import React, { memo } from 'react';
import { CardOverflow, Typography, Divider, Avatar, Box} from "@mui/joy";
import { CardHeader } from '@mui/material';
import { IconBuyer } from '../..';
import { TitleCard } from './TitleCard';


export const MidV2CardHeader = ({children, ...props}) => (

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
    /> 
);


export default memo(MidV2CardHeader);