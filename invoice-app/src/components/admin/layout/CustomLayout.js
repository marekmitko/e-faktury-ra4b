import * as React from 'react';
// in src/MyLayout.js
import { Layout, Sidebar } from 'react-admin';
import SubmenuCreate from './navbars/SubmenuCreate';
import {AppbarMenuCreate} from "./navbars/AppbarMenuCreate";
// import MyAppBar from './MyAppBar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

const CustomLayout = (props) => (
    <Layout
        {...props}
        // appBar
        menu={ AppbarMenuCreate }
        // notification
    />

)

export default CustomLayout;