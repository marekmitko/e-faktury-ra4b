import * as React from 'react';
// in src/MyLayout.js
import { Layout, Sidebar } from 'react-admin';
import { CustomDashboard } from './dashboard/CustomDashboard';
import SubmenuCreate from './menu/CreateSubMenuFragment';
import { TopPartSidebarMenu } from './menu/TopPartSidebarMenu'
// import MyAppBar from './MyAppBar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

export const CustomLayout = (props) => (
    <React.Fragment>
        <Layout
            {...props}
            sidebar={TopPartSidebarMenu}
            dashboard={null}
            // menu 
            // notification
        >
            <div>
                <center>
                    <strong>CentralCardHeader</strong>
                </center>
            </div>
                {props.children}
            <div>
                <center>
                    <strong>CentralCardFooter</strong>
                </center>
            </div>
        </Layout>
        <hr />
        <footer>
            <center>
                <strong>CentralCardFooter</strong>
                <br />
                <small>to należy umieścić w części stałej public</small>
            </center>
        </footer>
    </React.Fragment>
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