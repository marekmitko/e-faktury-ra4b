
import * as React from 'react';
import { AppBar, Logout, UserMenu, useUserMenu, useLocaleState } from 'react-admin';
import { Link } from 'react-router-dom';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Avatar from '@mui/material/Avatar';

import { SwitchLanguageItem } from './userbar/SwitchLanguageItem';
import { UserProfileConfigItem } from './userbar/UserProfileConfigItem';

const MyCustomIcon = () => (
    <Avatar
    sx={{
        height: 30,
        width: 30,
    }}
    src="https://marmelab.com/images/avatars/adrien.jpg"
    />
);

export const CustomUserMenu = props => (
        <UserMenu icon={<MyCustomIcon />} {...props} >
            <UserProfileConfigItem />
            <SwitchLanguageItem />
            <Logout />
        </UserMenu>
);