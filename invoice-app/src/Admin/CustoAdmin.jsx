import * as React from "react";
import { Admin } from "react-admin";
import { Login, Layout } from "../layout";
import { CustomDashboard } from "../components/admin/layout/dashboard/CustomDashboard";
import MainDashboard from "../home/MainDashboard";

export const CustomAdmin = ({ children, ...props }) => (
    <Admin
        title=""
        // authProvider={authProvider}
        // dashboard={CustomDashboard}
        dashboard={MainDashboard}
        loginPage={Login}
        layout={Layout}
        // i18nProvider={i18nProvider}
        disableTelemetry
        // theme={lightTheme}
        {...props}
    >
        {children}
    </Admin>
);
