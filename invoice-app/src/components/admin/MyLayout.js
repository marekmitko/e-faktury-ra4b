// in src/MyAdminLayout.js
import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, styled } from '@mui/material';
import {
    AppBar,
    Menu,
    Sidebar,
    ComponentPropType,
    useSidebarState,
} from 'react-admin';
import { AppbarMenuCreate } from './navbars/AppbarMenuCreate';

const Root = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    position: "relative",
}));

const AppFrame = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    overflowX: "auto",
}));

const ContentWithSidebar = styled("main")(({ theme }) => ({
    display: "flex",
    flexGrow: 1,
}));

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
    padding: theme.spacing(3),
    marginTop: "4em",
    paddingLeft: 5,
}));

const MyLayout = ({
    children,
    dashboard,
    title,
}) => {
    const [open] = useSidebarState();

    return (
        <Root>
            <AppFrame>
                <AppBar title={title} open={open} />
                <ContentWithSidebar>
                    <Sidebar  sx={{mt: "50px"}}>
                        <div>
                            <p>Appbar</p>
                        </div>
                        <AppbarMenuCreate />
                        <div>
                            <p>Topic</p>
                        </div>
                        <Menu hasDashboard={!!dashboard} />
                    </Sidebar>
                    <Content>
                        {children}
                        <center>
                            <h3>SubFooter</h3> 
                        </center>
                    </Content>
                        <Card sx={{display: "flex",  mt: '50px'}}>
                            <div>
                                <h3>Aside</h3>
                            </div>
                        </Card>
                </ContentWithSidebar>
                    <center>
                        <h1>Footer</h1> 
                    </center>
            </AppFrame>
        </Root>
    );
};

MyLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    dashboard: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
};

export default MyLayout;