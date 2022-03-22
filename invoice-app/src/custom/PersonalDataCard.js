import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, TextField, Button, Avatar, IconButton} from "@mui/material";

// ustawić w  Global Configuration Variable GCV - USER_DATA_PROVIDER_CONFIG
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PROPERTY_VALUE_CSS_CONFIG } from "../config/GLOBAL_CONFIG_CONST";

const {INVOICE_FORM} = PROPERTY_VALUE_CSS_CONFIG;
const {...PersonalDataCard_GCPCSS} = INVOICE_FORM;

// *see  PersonalDataCard
export const  PersonalDataCard = ({variant, headerTitle, headerIcon, children}) => (
    
    <Card   variant={variant} 
    // BUG  PROPERTY_VALUE_CSS_CONFIG sx={{ minWidth:  PersonalDataCard_GCPCSS.Card_minWidth_GCPCSS ,
    // sx={{ minWidth:  PersonalDataCard_GCPCSS.Card_minWidth_GCPCSS , m: "1px", bgcolor: PersonalDataCard_GCPCSS.Card_minWidth_GCPCSS
        sx={{ minWidth:  250 }}
    >
        <CardHeader  
            sx={{fontWeight: 'bold', 
                    borderBottom: `2.5px solid ${blue[800]}`,
                    m: 0,  py: '2px', px: '10px', color: blue[600]
            }}
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
            {/* <CardActions>
                <Button size="small">v more</Button>
            </CardActions> */}
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