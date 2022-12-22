import * as React from 'react';
import { Resource, ListGuesser, ShowGuesser, EditGuesser, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { i18nProvider } from './i18nProvider/i18nProvider';

import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server' ;

import { fetchJson } from "@app/config";
import httpClient from './config/providers/httpClient';

import invoices from './components/invoices';
import clients from "./components/clients";
import MyAdmin from "./components/admin"
import MyProfile  from './components/admin/users';
import { ReactQueryDevtools } from 'react-query/devtools';
import TESTInvoiceCreate from './components/invoices/new-invoice/invoice-create/TESTInvoiceCreate';

// *see const dataProvider
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
const dbjsonProvider = jsonServerProvider('http://localhost:5000', httpClient);

//  *see App
function App(props) {
    return (
        <MyAdmin 
            dataProvider={dbjsonProvider}
            i18nProvider={i18nProvider}
        > 
            <Resource name="issuedInvoices_list" options={{ label: 'Lista Faktur' }} label="Faktury" {...invoices} />  
            <Resource name='dbclientlist' options={{ label: 'Lista kontrahentów' }} label="Kontrahenci"  {...clients} />
            <Resource name='dbTEST_client_list' options={{ label: 'client TEST' }} label="client_TEST" e  {...clients} create={TESTInvoiceCreate}/>
            <CustomRoutes>
                <Route path="/data_user" element={<MyProfile />}/ >
            </CustomRoutes>
        </MyAdmin>
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
