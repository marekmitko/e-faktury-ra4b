import React from 'react';
import { Admin, Menu  } from 'react-admin';
import { CustomLayout } from './layout/CustomLayout';
import { CustomDashboard } from './dashboard/CustomDashboard';
import TestComponentLayout from "./layout/MyLayout"


// ?ver catchAll && title="e-faktury"  po cholere 

// BUG Spprawdź te props.children 
// https://marmelab.com/react-admin/doc/4.0/Admin.html#layout

const MyAdmin = (props) => (
    <Admin
        basename="/admin"
        disableTelemetry  
        // dashboard={CustomDashboard}
        layout={CustomLayout}
        sidebar={Menu}
        {...props}  
    >
        {props.children}
    </Admin>
);
    
export default MyAdmin;



