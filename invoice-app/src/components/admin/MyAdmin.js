import React from 'react';
import { Admin  } from 'react-admin';

import { MyLayout } from './MyLayout';
import { Dashboard } from './Dashboard';


const Ready = () => (
    <div>
        <h1>Admin ready</h1>
        <p>You can now add resources</p>
    </div>
)

export const MyAdmin = (props) => (  
    <Admin  
    basename="/admin"
    dashboard={Dashboard} 
    layout={MyLayout}
    {...props} 
    /> 
);

