


import * as React from 'react';
import  { Admin } from 'react-admin';
import { Login, Layout } from '../layout';
import { CustomDashboard } from '../components/admin/layout/dashboard/CustomDashboard';

export const CustomAdmin = ({children, ...props} ) => (

            <Admin
                title=""
                // authProvider={authProvider}
                dashboard={CustomDashboard}
                
                loginPage={Login}
                layout={Layout}
                // i18nProvider={i18nProvider}
                disableTelemetry
                // theme={lightTheme}
            {...props} 
            >
                {children}
            </Admin>
);