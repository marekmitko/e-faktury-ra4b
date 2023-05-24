import * as React from 'react';
import { Menu, Sidebar, useSidebarState } from "react-admin";
import LeftSidebar from "./LeftSidebar";
import EfaLogo from './subcomponent/EfaLogo';
import { Box, Typography } from '@mui/joy';






export const EfaSidebar = ({children}) => {
    return(
        <Sidebar sx={{ 
            backgroundColor: 'rgb(255, 255, 255)',  
            }}
        >
                {children ? children : ''}
        </Sidebar>
    );
};