import { Box, Typography } from '@mui/material';
import { AppBar, LocalesMenuButton, ToggleThemeButton, defaultTheme, useTheme  } from 'react-admin';
import { HelpButton } from './HelpButton'
import { Button } from '@mui/material';

const lightTheme = defaultTheme;
const darkTheme = {
    ...defaultTheme,
    palette: {
        mode: 'dark',
    },
};



// *see <CustomAppBar />
export const CustomAppBar = props => (
    <AppBar {...props}>
        <Box flex="1">
            <Typography variant="h6" id="react-admin-title"></Typography>
        </Box>
        <Box   >
            <HelpButton   />
        </Box>
        <LocalesMenuButton
            languages={[
                { locale: 'en', name: 'English' },
                { locale: 'no', name: 'Norwegian' },
                { locale: 'pl', name: 'Polish' },
            ]}
        />
        <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
    </AppBar>
);
