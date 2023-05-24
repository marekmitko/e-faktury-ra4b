import * as React from 'react';
import {  ComponentPropType,  useSidebarState,  DashboardMenuItem } from 'react-admin';
import { CustomDashboard } from '../../../../admin/layout/dashboard/CustomDashboard';

// ?ver //infO sprawdzić różnice pomiedzy <Menu /> a ...
// infO <MenuItem > - component form mui5 
// notE Ciekawe zablokowanie MenuSidebar przez <Sidebar >
// Ver Spr <Sidebar> <Menu /> </Sidebar>

// *see <DashboardItemToSubMenu />
export const DashboardItemToSubMenu  = () => ( 
        <DashboardMenuItem >
            <CustomDashboard />
        </DashboardMenuItem >
);

