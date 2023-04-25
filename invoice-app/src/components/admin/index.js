import React from 'react';
import { Admin } from 'react-admin';
// import { CustomLayout } from './layout/FooterLayoutFragment';
import { CustomDashboard } from './layout/dashboard/CustomDashboard';
import Layout from './layout';
import { ReactQueryDevtools } from 'react-query/devtools';

// ?ver catchAll && title="e-faktury"  po cholere 
import { CssVarsProvider } from "@mui/joy/styles";
import JoyLayout from './layout/.efa-v4/.joy-layout';
// BUG Spprawdź te props.children 
// https://marmelab.com/react-admin/doc/4.0/Admin.html#layout

const MyAdmin = ( {children, ...props} ) => (
    <Admin
        basename="/admin"
        // title="Example Admin"
        disableTelemetry  
        dashboard={CustomDashboard}
        // layout={Layout}
        layout={JoyLayout}
        // layout={<MyLayout /> && <ReactQueryDevtools />}
        {...props}  
    > 
        {children}
    </Admin>
);
    
export default MyAdmin;



