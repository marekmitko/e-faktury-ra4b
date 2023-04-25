
import * as React from 'react';
import { AppBar, Logout, UserMenu, useUserMenu, useLocaleState } from 'react-admin';
import { Link } from 'react-router-dom';
import GTranslateIcon from '@mui/icons-material/GTranslate';

import { SwitchLanguageItem } from './userbar/SwitchLanguageItem';
import { UserProfileConfigItem } from './userbar/UserProfileConfigItem';
import { CompanyLogoAvatar } from '../../users/subcomponents/CompanyLogoAvatar';


export const CustomUserMenu = props => (
        <UserMenu icon={<CompanyLogoAvatar />} {...props} >
            <UserProfileConfigItem />
            <SwitchLanguageItem />
            <Logout />
        </UserMenu>
);