import * as React from "react";
import Chip from "@mui/joy/Chip";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import People from "@mui/icons-material/People";
import { Box, Divider, SvgIcon, Stack, Typography, Input, FormLabel } from "@mui/joy";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function OrderEhfInput(props) {
    const { startLabel } = props;
    return (
        
        <Stack     spacing={0.5} direction="row" sx={{ ml: 'auto', mr: 0   }}>
            <Chip size="sm" variant="solid"   sx={{  textTransform: 'uppercase', px: 0.5, borderRadius: 1, color: 'text.secondary', bgcolor: 'transparent', mb: -0.1,   }}   >
                {startLabel ? startLabel : '' }
            </Chip>
            <Input    variant="plain" sx={{ width: '20%'  }} 
            size="xs"  
            slotProps={{
                root: ({  focusVisible, primary, success, info}) => ({
                sx:    {  
                            "& input": { fontSize: 'small', px: 0.5, fontWeight: 500, border: 'none', textAlign: 'left', 
                            }, 
                            "& input:hover": {
                                color: 'primary.900',
                            },
                            "& input:focus": {
                                color: 'primary.800',
                        }
                    } 
                })
            }}
            {...props} />
                {/* <Typography  color="neutral.400" level="body2" sx={{ textTransform: 'uppercase', lineHeight: 1.8, mb: -0.5, 
                letterSpacing: '-0.2px', 
                fontFamily: 'monospace'
                }}><label>Numer zamówienia:</label> */}


            {/* <FormLabel  level="body2" sx={{   textTransform: 'uppercase', lineHeight: 1.8, mb: -0.5, 
            letterSpacing: '-0.5px', color: 'text.secondary'}} >NUMER ZAMÓWIENIA:</FormLabel> */}
            
            
            {/* </Typography> */}
        </Stack>
    );
}
