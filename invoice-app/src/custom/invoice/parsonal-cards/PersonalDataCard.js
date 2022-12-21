import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, TextField, Button, Avatar, IconButton, Grid} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import sxCSS from './PersonalDataCard.style'

// *see  PersonalDataCard
export const  PersonalDataCard = ({xs, sm, variant, headerTitle, headerIcon, children, sxContent, sxCard }) => (
    <Grid item xs={xs? xs : 12} sm={sm? sm : 6}>
        <Card   variant={variant}   sx={{...sxCSS.sxCard, ...sxCard, height: '100%' }}   >
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
    </Grid>
);


/* <CardActions>
    <Button size="small">v more</Button>
</CardActions> */