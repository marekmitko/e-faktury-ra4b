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

export default function IssuerEhfInput(props) {

  return (
    <Stack direction="column" spacing={0}>
      <Input
        // label=" "
        // placeholder="Aleksander Mariański"
        // disabled
        size="sm"
        variant="soft"
        color="neutral"
        
        startDecorator={<SvgIcon  fontSize="small" > <PersonRoundedIcon /></SvgIcon>}
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
          <Chip size="sm" variant="solid" color="neutral.400"
            sx={{ px: 0.5, borderRadius: 1, }}
          >
            
            WYSTAWCA 
          </Chip>

          </Box>
            </div>
        }
        slotProps={{
            root: ({  focusVisible, primary, success}) => ({
            sx:    { 
                    "& input": { fontSize: 'medium' }, 
                    "& svg": {
                    },
                    "&:hover svg": {
                    color: 'focusVisible',
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
