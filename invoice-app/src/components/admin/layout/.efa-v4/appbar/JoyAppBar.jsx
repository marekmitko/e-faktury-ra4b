import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { AppBar, UserMenu, LocalesMenuButton, ToggleThemeButton, defaultTheme, useTheme  } from 'react-admin';
import { HelpButton } from './HelpButton'
import { Button } from '@mui/material';
import { CustomUserMenu } from './usermenu/CustomUserMenu';
import MyMenu from '../.joy-layout/components/MyMenu';
import JoyHeaderApp from './JoyHeaderApp';
import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import { Sheet } from '@mui/joy';


const lightTheme = defaultTheme;
const darkTheme = {
    ...defaultTheme,
    palette: {
        mode: 'dark',
    },
};



// *see <JoyAppBar />
 const JoyAppBar = props => (
    <>



    <AppBar 
        userMenu={<CustomUserMenu/>} 
        {...props} 
        sx={{ 
                color: 'neutral.900',
                backgroundColor: 'neutral.50',
                boxShadow: 'sm',
            }}
        >

          
             


        <Box flex="1">
            <Typography variant="h6" id="react-admin-title" 
                sx={{ typography: 'subtitle2', color: 'primary.900' }}
            ></Typography>
        </Box>
        {/* <Box   >
            <HelpButton   />
        </Box> */}
        <LocalesMenuButton sx={{ color: 'neutral.900' }}
            languages={[
                { locale: 'en', name: 'English' },
                { locale: 'no', name: 'Norwegian' },
                { locale: 'pl', name: 'Polish' },
            ]}
            />
        {/* <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme}        /> */}
        {/* {props.children} */}
        {/* <JoyHeaderApp /> */}
    </AppBar>

        {/* <MyMenu /> */}
            </>
);


export default JoyAppBar