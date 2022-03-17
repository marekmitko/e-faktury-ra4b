import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, TextField, Button, Avatar, IconButton} from "@mui/material";

// ustawić w  Global Configuration Variable GCV - USER_DATA_PROVIDER_CONFIG
import { blue, white } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px',
            transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
// *see  PersonalDataCard
export const  PersonalDataCard = ({variant, headerTitle, headerIcon, children}) => (

    <Card variant={variant} sx={{ minWidth: 250,  display: 'inline-block', mx: '2px',}}>
        <CardHeader  
            sx={{fontWeight: 'bold', 
                    borderBottom: `2.5px solid ${blue[800]}`,
                    mx: 0,  p: '2px', pl: '10px', pb: 0, pr: '5px', color: blue[600],
                    
                }
            }
            avatar={headerIcon ? headerIcon : null} 
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
            title={headerTitle}
        />
            <CardContent>
                {children}
            </CardContent>
            <CardActions>
                <Button size="small">v more</Button>
            </CardActions>
        </Card>
);

// export default function PersonalDataCard() {
//     return (
//         <Box sx={{ minWidth: 275 }}>
//              {card}
//         </Box>
//     );
//}


// export function PersonalDataCard(props) {
//     return(
//     <Card variant="outlined">{props.children}</Card>
//     );
// }