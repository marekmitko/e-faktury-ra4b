import React from 'react';
import { memo } from 'react';
import { Admin, Layout, InspectorButton, AppBar } from 'react-admin';
import { FooterLayoutFragment } from './FooterLayoutFragment';
import { CustomDashboard } from './dashboard/CustomDashboard';
import { SidebarTopPartMenu } from './menu/SidebarTopPartMenu';
import { CustomAppBar } from './top-appbar/CustomAppBar';
import { Typography } from '@mui/joy';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools';


const MyAppBar = memo(props => (  //*edu po co to memo //Om? WAŻNE PYTANIE 
    <AppBar {...props}>
        <Typography flex="1" variant="h6" id="react-admin-title" />
        <InspectorButton />
    </AppBar> 
));










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
    



export default props => (
    <>
        <Layout {...props} appBar={MyAppBar} 
            // sidebar={SidebarTopPartMenu }
            dashboard={null}
            appBar={CustomAppBar}
            menu={SidebarTopPartMenu}
        
        
        />
        {/* <ReactQueryDevtools         //chciałbym sobie to dołożyć 
            initialIsOpen={false}
            toggleButtonProps={{ style: { width: 20, height: 30 } }}
        /> */}
       
    </>
);

// export default MyLayout;