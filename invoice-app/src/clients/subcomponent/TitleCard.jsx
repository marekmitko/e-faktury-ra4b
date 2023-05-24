import * as React from 'react';
import { Box, Typography, Chip, Avatar } from '@mui/joy';
import WebIcon from '@mui/icons-material/Web';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';




export const TitleCard = ({children, ...props}) => (
    <Box flex="1" >
        <Chip   size="small"    //endDecorator={<WebIcon />}
            // startDecorator={<KeyboardDoubleArrowRightRoundedIcon 
                // sx={{ color: 'primary.900', mx: 0.75, mt: .1 }} />} 
            variant='outlined' 
            sx={{
                                // boxShadow: .5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                    
                px: 2,
                // pl: 4,
                mt: .1,
                pt: .1,
                pb: .2,
                ml: -4.4,
                // zIndex: -1,
                // border: "1px inset black",
                bgcolor: 'neutral.100',
                // bgcolor: 'primary.900',
                borderColor: 'neutral.300',
                // borderRightColor:  'neutral.300',
                borderLeft: 'none',
                borderTop: 'none',
                // borderTopRightRadius: '0',
            }}
            {...props}
        > 

        <Typography //id="react-admin-title"
            
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
            variant="h6"
            sx={{
                pl: 3,
                textTransform: 'uppercase',
                mt: .1,
                // textTransform: 'uppercase',
                // color: 'neutral.50',
                // color: "var(--mui-palette-primary-outlinedColor)",
                color: "primary.900",
                // color: "neutral.800",
                fontWeight: "500"
            }}
    >
        { children }
        </Typography>
        </Chip>
    </Box>
);