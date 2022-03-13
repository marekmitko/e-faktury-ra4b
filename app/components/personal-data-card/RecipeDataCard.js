import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, Button, Avatar, IconButton} from "@mui/material";
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (

    <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
                <Avatar sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: 32, height: 32, bgcolor: blue[500] }} aria-label="recipe">
                    M
                </Avatar>
                }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
);

export default function RecipeDataCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
             {card}
        </Box>
    );
}


// export function PersonalDataCard(props) {
//     return(
//     <Card variant="outlined">{props.children}</Card>
//     );
// }