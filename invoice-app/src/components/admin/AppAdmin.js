import React from 'react';
import { Admin, Layout, Menu, MenuItemLink, useLocale, useSidebarState } from 'react-admin';
// import { CustomLayout } from './layout/FooterLayoutFragment';
import { CustomDashboard } from './layout/dashboard/CustomDashboard';
// import Layout from './layout';
import { ReactQueryDevtools } from 'react-query/devtools';

// ?ver catchAll && title="e-faktury"  po cholere 
import { CssVarsProvider } from "@mui/joy/styles";
import JoyLayout from './layout/.efa-v4/.joy-layout';
import AppLayout from '../appbar/EfaLayout';
import JoyAppBar from './layout/.efa-v4/appbar/JoyAppBar';
import LeftSidebar from '../appbar/components/LeftSidebar';
import { Drawer } from '@mui/material';
import AppBarHeader from '../appbar/components/AppBarHeader';
import { defaultTheme } from 'react-admin';

// BUG Spprawdź te props.children 
// https://marmelab.com/react-admin/doc/4.0/Admin.html#layout

const MyMenu = ({ resources, onMenuClick }) => (
    <div>
        {resources.map(resource => (
            <MenuItemLink to={`/${resource.name}`} primaryText={resource.name} onClick={onMenuClick} />
        ))}
        <MenuItemLink to="/reference/create" primaryText="New Reference" onClick={onMenuClick} />
    </div>
);

export const MySidebar = ({...props}) => {
    const [open, setOpen] = useSidebarState(true);
    useLocale(); // force redraw on locale change

    const toggleSidebar = () => setOpen(!open);


    console.log("props", props);

    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={toggleSidebar}
            // classes={SidebarClasses}
        >
            {props.children}
        </Drawer>
    );
};



export const MyLayout = (props) => {
    console.log("props", props);
    return(
        <>
        <MyMenu />
        <Layout {...props} menu={<Menu ><MySidebar /></Menu>} sidebar={LeftSidebar} appBar={AppBarHeader} />
        </>
    
    )
};





const theme = {
    ...defaultTheme,
    sidebar: {
        width: 300, // The default value is 240
        closedWidth: 70, // The default value is 55
    },
    components: {
        // ... 
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    // invisible border when not active, to avoid position flashs
                    borderLeft: '3px solid transparent', 
                    '&.RaMenuItemLink-active': {
                        borderLeft: '10px solid #4f3cc9',
                    },
                    '& .RaMenuItemLink-icon': {
                        color: '#EFC44F',
                    },
                },
            },
        },
    }
};
















const AppAdmin = ( {children, ...props} ) => (
    <Admin
    // theme={theme}
    basename="/admin"
    // title="Example Admin"
    disableTelemetry  
        dashboard={CustomDashboard}
        // layout={MyLayout}
        layout={AppLayout}
        // layout={<MyLayout /> && <ReactQueryDevtools />}
        {...props}  
    > 
        {children}
    </Admin>
);
    
export default AppAdmin;



