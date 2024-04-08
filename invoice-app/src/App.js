import * as React from "react";
import {
    Resource,
    // ListGuesser,
    ShowGuesser,
    CustomRoutes,
    Login,
} from "react-admin";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route } from "react-router-dom";
import { i18nProvider } from "./i18nProvider/i18nProvider";

import jsonServerProvider from "ra-data-json-server";

import { fetchJson } from "@app/config";
import httpClient from "./config/providers/httpClient";
import mydbProvider from "./config/providers/dataProviderCustom";

import invoices from "./components/invoices";

import clients from "./clients";
import new_invoices from "./invoices";
import { ReactQueryDevtools } from "react-query/devtools";

import { CssVarsProvider } from "@mui/joy/styles";

import { EditSimpleList } from "./components/invoices/invoice-list/INVOICE-e-faktury/EditSimpleList";
import CssVarJoyProvider from "./joy-theme-provider/JoyThemeProvider";
import PeopleIcon from "@mui/icons-material/People";
import { CustomAdmin } from "./Admin/CustoAdmin";

import AdminProfileEdit from "./users/new-profile/AdminProfileEdit";

const hostname = window.location.hostname;
const dbjsonProvider = jsonServerProvider(
    "http://" + hostname + ":5000",
    httpClient
);

// const dbjsonProvider = jsonServerProvider('https://fantastic-pancake-5rw5gwvq4v5h774p-5000.app.github.dev', httpClient);
// const dbjsonProvider = jsonServerProvider('https://studious-enigma-grg64gxq449cpvvp-5000.app.github.dev', httpClient);

//  *see App
function App(props) {
    return (
        <StyledEngineProvider injectFirst>
            <CssVarJoyProvider>
                {/* <MyAdmin  */}
                {/* <AppAdmin */}
                <CustomAdmin
                    // loginPage={Login}
                    // theme={CssVarsProvider}
                    dataProvider={mydbProvider}
                    // dataProvider={dbjsonProvider}
                    i18nProvider={i18nProvider}
                >
                    {/* <Resource name="issuedInvoices_list" options={{ label: 'Lista Faktur' }} label="Faktury" {...invoices}  edit={EditSimpleList} />   */}
                    <Resource
                        name="e_faktury"
                        options={{ label: "Lista Faktur" }}
                        label="Faktury"
                        {...invoices}
                        list={new_invoices.list}
                        edit={EditSimpleList}
                    />
                    <Resource
                        name="buyersEfaktury"
                        options={{ label: "efaKlient" }}
                        label="efaKlient"
                        list={clients.list}
                        edit={clients.edit}
                        show={ShowGuesser}
                        create={clients.create}
                        icon={PeopleIcon}
                        // recordRepresentation={(record) =>(<span> `${record.company} Masło`</span>)}
                    />
                    {/* <CustomRoutes>
                        <Route path="/data_user" element={<MyProfile />} />
                    </CustomRoutes> */}
                    <CustomRoutes>
                        <Route path="/profile" element={<AdminProfileEdit />} />
                    </CustomRoutes>

                    {/* {(permissions) => (
                        <>
                            {permissions ? (
                                <Resource name="users" {...users} />
                            ) : null}
                            <CustomRoutes noLayout>
                                <Route
                                    path="/custom1"
                                    element={
                                        <CustomRouteNoLayout title="Posts from /custom1" />
                                    }
                                />
                            </CustomRoutes>
                            <CustomRoutes>
                                <Route
                                    path="/custom2"
                                    element={
                                        <CustomRouteLayout title="Posts from /custom2" />
                                    }
                                />
                            </CustomRoutes>
                        </>
                    // )} */}
                    {/* <CustomRoutes>
                        <Route
                            path="/custom3"
                            element={
                                <CustomRouteLayout title="Posts from /custom3" />
                            }
                        />
                    </CustomRoutes> */}
                </CustomAdmin>

                {/* </CssVarsProvider> */}
                {/* </AppAdmin> */}
                {/* </MyAdmin> */}
            </CssVarJoyProvider>
        </StyledEngineProvider>
    );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// const AppWrapper = () => (
//     <StoreContextProvider value={store}>
//         <App />
//     </StoreContextProvider>
// );

// export default AppWrapper;
