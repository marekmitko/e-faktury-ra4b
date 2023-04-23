import React from 'react';
import { Admin, Layout} from 'react-admin';
import { FooterLayoutFragment } from './FooterLayoutFragment';
import { CustomDashboard } from './dashboard/CustomDashboard';
import { SidebarTopPartMenu } from './menu/SidebarTopPartMenu';
import { CustomAppBar } from './top-appbar/CustomAppBar';
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools';


const MyLayout = ( props ) => (
    <>
        <Layout
            {...props}
            sidebar={SidebarTopPartMenu }
            dashboard={null}
            appBar={CustomAppBar}
            // menu 
            // notification
        >
          <div>
                {/* <center><strong>CentralCardHeader</strong></center> */}
            </div>
                {props.children}
            <div>
                <center><strong>CentralCardFooter</strong></center>
            </div>
        </Layout> 
            <hr />
            <FooterLayoutFragment />
    </>
);
    



// const MyLayout = props => (
//     <>
//         <Layout {...props} />
//         <ReactQueryDevtools initialIsOpen={false} />
//     </>
// );


export default MyLayout;