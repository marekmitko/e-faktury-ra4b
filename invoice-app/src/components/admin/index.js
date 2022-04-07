import React from 'react';
import { Admin, Menu  } from 'react-admin';
import { CustomLayout } from './layout/CustomLayout';
import { CustomDashboard } from './layout/dashboard/CustomDashboard';
import TestComponentLayout from "./layout/MyLayout"


// ?ver catchAll && title="e-faktury"  po cholere 

// BUG Spprawdź te props.children 
// https://marmelab.com/react-admin/doc/4.0/Admin.html#layout

const MyAdmin = (  {children, upperDashboard, ...props} ) => (
    <Admin
        basename="/admin"
        disableTelemetry  
        // dashboard={null}
        layout={CustomLayout}
        {...props}  
    >
        {children}
    </Admin>
);
    
export default MyAdmin;



