import * as React from 'react';
import {  useUserMenu, useLocaleState } from 'react-admin';

import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GTranslateIcon from '@mui/icons-material/GTranslate';


// It's important to pass the ref to allow MUI to manage the keyboard navigation
export const SwitchLanguageItem = React.forwardRef((props, ref) => {
    const [locale, setLocale] = useLocaleState();
    // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
    const { onClose } = useUserMenu();

    return (
        <MenuItem
            ref={ref}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            sx={{ color: 'text.secondary' }}
            onClick={event => {
                setLocale(locale === 'en' ? 'fr' : 'en');
                onClose(); // Close the menu
            }}
        >
            <ListItemIcon sx={{ minWidth: 5 }}>
                <GTranslateIcon />
            </ListItemIcon>
            <ListItemText>
                Switch Language
            </ListItemText>
        </MenuItem>
    );
});