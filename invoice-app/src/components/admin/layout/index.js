import * as React from 'react';
import { Admin, Layout} from 'react-admin';
import { FooterLayoutFragment } from './FooterLayoutFragment';
import { CustomDashboard } from './dashboard/CustomDashboard';
import { SidebarTopPartMenu } from './menu/SidebarTopPartMenu';
import { CustomAppBar } from './appbar/CustomAppBar';



const MyLayout = ( props ) => (
    <React.Fragment>
        <Layout
            {...props}
            sidebar={SidebarTopPartMenu }
            dashboard={null}
            appBar={CustomAppBar}
            // menu 
            // notification
        >
            <div>
                <center><strong>CentralCardHeader</strong></center>
            </div>
                {props.children}
            <div>
                <center><strong>CentralCardFooter</strong></center>
            </div>
        </Layout>
        <hr />
        <FooterLayoutFragment />
    </React.Fragment>
);
    
export default MyLayout;