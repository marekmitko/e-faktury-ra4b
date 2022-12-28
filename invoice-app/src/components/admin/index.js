import React from 'react';
import { Admin } from 'react-admin';
// import { CustomLayout } from './layout/FooterLayoutFragment';
import { CustomDashboard } from './layout/dashboard/CustomDashboard';
import MyLayout from './layout';
import { ReactQueryDevtools } from 'react-query/devtools';

// ?ver catchAll && title="e-faktury"  po cholere 
import { CssVarsProvider } from "@mui/joy/styles";
// BUG Spprawdź te props.children 
// https://marmelab.com/react-admin/doc/4.0/Admin.html#layout

const MyAdmin = ( {children, ...props} ) => (
    <Admin
        basename="/admin"
        disableTelemetry  
        dashboard={CustomDashboard}
        layout={MyLayout}
        // layout={<MyLayout /> && <ReactQueryDevtools />}
        {...props}  
    >

        {children}
    </Admin>
);
    
export default MyAdmin;



