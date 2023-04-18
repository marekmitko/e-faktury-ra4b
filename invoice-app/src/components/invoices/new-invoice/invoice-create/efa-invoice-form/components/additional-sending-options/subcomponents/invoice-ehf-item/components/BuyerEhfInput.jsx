import * as React from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import People from "@mui/icons-material/People";
import { Box, Divider, SvgIcon } from "@mui/joy";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


export default function BuyerEhfInput(props) {
  return (
    
    <Stack direction="column" spacing={0}>
      <Input
        size="sm"
        // disabled
        variant="outlined"
        startDecorator={<SvgIcon  fontSize="small" > <PermContactCalendarIcon /></SvgIcon>}
        endDecorator={
            <div>
                <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'min-content',
            // border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 0.5,
            bgcolor: 'transparent',
            color: 'text.secondary',
            mr: -0.5,

          
            // '& svg': {
            //     m: 1.5,
            // },
            // '& hr': {
            //     mx: 0.5,
            // },
            
        }}
    > 
        {/* <Divider 
        sx={{ p: 1 }}  variant="middle"  
        orientation="vertical" flexItem /> */}
            <Divider sx={{px: 0.05, py: 0, my: -0.5, }} orientation="vertical"  />
            <Chip size="sm" variant="solid" color="neutral.400"
                sx={{   p: 0,  minWidth: '80px', m: 0, justifyContent: "center", alignItems: 'center', width: '100%', display: 'flex' }}
            >
                <div style={{ textAlign: 'center' }} > NABYWCA </div>   
            </Chip>
            </Box>
            </div>
        }
        slotProps={{
            input: { 
                autocomplete: "off",
                // id: 'unique-id',
            },
            root: ({  focusVisible, primary, success}) => ({



            sx:    { 
                // '--Input-focusedHighlight': 'var(--mui-palette-neutral-500)',
                    '--Input-focusedThickness': '1.5px',
                    "& input": { fontSize: 'medium',
                    '--Input-placeholderOpacity': .9,  //toDo Trzeba to poprawić jakoś 
                    fontSize: 'medium', color: 'neutral.700'
                    }, 
                    "& svg": {  color: 'neutral.600'
                    },
                    "&:hover svg": {
                    color: 'var(--mui-palette-primary-800)',
                    }
                } 
            })
        }}
       {...props} />
      {/* <Input
        // disabled
        // sx={{ backgroundColor: "white" }}
        placeholder="Aleksander "
        color="primary"
        variant="soft"
        label=" "
        // startDecorator={<EditIcon />}
        startDecorator={<People />}
        endDecorator={<CheckIcon />}
      /> */}
    </Stack>
  );
}
