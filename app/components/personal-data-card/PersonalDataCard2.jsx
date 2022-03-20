import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, TextField, Button, Avatar, IconButton} from "@mui/material";
import { blue, white } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BuyerIcon from '@mui/icons-material/Contacts';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonSearchSharpIcon from '@mui/icons-material/PersonSearchSharp';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px',
         transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (

    <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardHeader  
            sx={{fontWeight: 'bold', 
                    borderBottom: `2.5px solid ${blue[800]}`,
                    mx: 0,  p: '2px', pl: '10px', pb: 0, pr: '5px', color: blue[600]}
            }
            avatar={<ManageAccountsIcon />} 
            // avatar={
            //     <Avatar sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: 32, height: 32, bgcolor: blue[500] }} aria-label="recipe">
            //         M
            //     </Avatar>
            //     }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
            title="Sprzedawca"
        />
            <CardContent>
                
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
);

export default function PersonalDataCard2() {
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