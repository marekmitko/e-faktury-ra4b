import * as React from 'react';
import {
    AppBar,
    Menu,
    Sidebar,
    ComponentPropType,
    useSidebarState,
    DashboardMenuItem
} from 'react-admin';
import { CustomDashboard } from '../../dashboard/CustomDashboard';

import SubmenuCreate from './SubmenuCreate';
// import MyAppBar from './MyAppBar';


export const CustomSidebar = (props) => (
    <Sidebar   {...props}   >
        <Menu  >
            <DashboardMenuItem >
                <CustomDashboard />
            </DashboardMenuItem >
        </Menu>
        <SubmenuCreate />
        <Menu>
            {props.children}
        </Menu>
    </Sidebar>
    );

