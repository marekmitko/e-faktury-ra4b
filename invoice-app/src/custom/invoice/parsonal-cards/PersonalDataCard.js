import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, TextField, Button, Avatar, IconButton} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import sxCSS from './PersonalDataCard.style'

// *see  PersonalDataCard
export const  PersonalDataCard = ({variant, headerTitle, headerIcon, children, sxContent, sxCard }) => (
    
    <Card   variant={variant}   sx={{...sxCSS.sxCard, ...sxCard}}   >
        <CardHeader sx={sxCSS.sxCardHeader}
            avatar={headerIcon ? headerIcon : null} 
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
            title={headerTitle}
        />
            <CardContent sx={ {...sxContent }}   >
                {children}
            </CardContent>
    </Card>
);


/* <CardActions>
    <Button size="small">v more</Button>
</CardActions> */