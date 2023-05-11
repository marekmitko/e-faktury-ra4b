import React from 'react';
import { memo } from 'react';
import { Admin, Layout, InspectorButton, AppBar } from 'react-admin';



import { SidebarTopPartMenu } from '../../menu/SidebarTopPartMenu';
import { CustomAppBar } from '../../top-appbar/CustomAppBar';
import { Typography } from '@mui/joy';
import { ReactQueryDevtools } from 'react-query/devtools';

import { FooterLayoutFragment } from '../../FooterLayoutFragment';
import { CustomDashboard } from '../../dashboard/CustomDashboard';
import JoyAppBar from '../appbar/JoyAppBar';
import { Box } from '@mui/material';
// import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools';


const MyAppBar = memo(props => (  //*edu po co to memo //Om? WAŻNE PYTANIE 
    <AppBar {...props}>
        <Typography flex="1" variant="h6" id="react-admin-title" />
        <InspectorButton />
    </AppBar> 
));






const JoyLayout = ( props ) => (
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
    //Om //*edu TRZEBA SPRAWDZIĆ JAK ZROBIĆ TAK BY nie było mx: '-4px'
        <Layout {...props}  sx={{  mx: '-4px', m: 0, mt: -2,  pb: 2,  }} //toDo do przerobienia //Om? Inaczej to ustawić usunąć mb: 1
            // sidebar={SidebarTopPartMenu }
            dashboard={null}
            menu={SidebarTopPartMenu}
            // appBar={CustomAppBar}
            appBar={JoyAppBar}
        
        
        />
        {/* <ReactQueryDevtools         //chciałbym sobie to dołożyć 
            initialIsOpen={false}
            toggleButtonProps={{ style: { width: 20, height: 30 } }}
        /> */}
        {/* <hr /> */}
        <FooterLayoutFragment />
       {/* <Box  sx={{ my: 1 }}>

       </Box> */}
    </>
);

// export default JoyLayout;