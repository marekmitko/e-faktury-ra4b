import * as React from 'react';
// in src/MyLayout.js
import { Layout, Sidebar } from 'react-admin';
import { CustomSidebar } from './sidebar/CustomSidebar';
import SubmenuCreate from './sidebar/SubmenuCreate';
// import MyAppBar from './MyAppBar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

export const CustomLayout = (props) => (
    <Layout
        {...props}
        sidebar={CustomSidebar}
        dashboard={props.dashboard}
        // menu={ AppbarMenuCreate }
        // notification
       / >
        

);
    

// BUG Kiedy to children a kiedy nie ? //?ver spr kiedy prop.children 


// export const CustomLayout = (props) => (
//     <Layout
//         {...props}
//         sidebar={SubmenuCreate}
//         // menu={ AppbarMenuCreate }
//         // notification
//     >
//     {props.children}
//     </Layout>
//     );
// export default CustomLayout;