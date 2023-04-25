import * as React from 'react';
import { Link } from 'react-router-dom';
import { useUserMenu } from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';

export const UserProfileConfigItem =  React.forwardRef((props, ref) => {
    const { onClose } = useUserMenu();
    return (
        <MenuItem
            ref={ref}
            component={Link}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            to="/data_user"
            // sx={{ color: 'text.secondary' }}
            // BUG //?ver sprawdzić jak zamknać to podmenu 
            // onClick={ onClose() }
        >
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>
                My Profile
            </ListItemText>
        </MenuItem>
    );
});