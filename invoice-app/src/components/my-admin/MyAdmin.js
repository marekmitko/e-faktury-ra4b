import React from 'react';
import { Admin  } from 'react-admin';

import { MyLayout } from './MyLayout';
import { Dashboard } from './Dashboard';

export const MyAdmin = (props) => (  <Admin  dashboard={Dashboard} layout={MyLayout} {...props}/>);