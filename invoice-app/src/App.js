import * as React from 'react';
import { Resource, 
        ListGuesser, ShowGuesser, EditGuesser, 
        CustomRoutes, 
} from 'react-admin';
import { Route } from 'react-router-dom';
import { i18nProvider } from './i18nProvider/i18nProvider';

import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server' ;

import { fetchJson } from "@app/config";
import httpClient from './config/providers/httpClient';

import invoices from './components/invoices';
import clients from "./components/clients";
import salesitem from "./components/sale-item";
import MyAdmin from "./components/admin"
import MyProfile  from './components/admin/users';
import { ReactQueryDevtools } from 'react-query/devtools';
import TESTInvoiceCreate from './components/invoices/new-invoice/invoice-create/TESTInvoiceCreate';

import { CssVarsProvider } from "@mui/joy/styles";
import { BuyerDataFromLayout } from './components/invoices/new-invoice/invoice-create/invoice-form/subcomponents/personal-cards/buyer/BuyerDataFormLayout';
import EfaClientCreate from './components/clients/CLIENT-e-faktury/EfaClientCreate';
import EfaClientList from './components/clients/CLIENT-e-faktury/EfaClientList';
import EfaClientEdit from './components/clients/CLIENT-e-faktury/EfaClientEdit';
import { PostCreate } from './components/invoices/invoice-list/INVOICE-e-faktury/EfaInvoiceCreate';


// *see const dataProvider
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
const dbjsonProvider = jsonServerProvider('http://localhost:5000', httpClient);

//  *see App
function App(props) {
    return (
        
        
        <MyAdmin 
        theme={CssVarsProvider}
        dataProvider={dbjsonProvider}
        i18nProvider={i18nProvider}
        > 
        {/* <CssVarsProvider> */}
            <Resource name="issuedInvoices_list" options={{ label: 'Lista Faktur' }} label="Faktury" {...invoices} list={ListGuesser} />  
            <Resource name='dbclientlist' options={{ label: 'Lista kontrahentów' }} label="Kontrahenci"  {...clients} />
            {/* <Resource name='saleitemlist' options={{ label: 'Produkty' }} label="client_TEST"   {...salesitem}  /> */}
            <Resource name='invoicesEfaktury' options={{ label: 'efaktury' }} label="efaktury"  
                list={ListGuesser} 
                edit={PostCreate}   
                show={ShowGuesser}   
            />
            <Resource name='buyersEfaktury' options={{ label: 'efaKlient' }} label="efaKlient"  
                list={EfaClientList} 
                edit={EfaClientEdit}   
                show={ShowGuesser}
                create={EfaClientCreate}  
                // recordRepresentation={(record) => `${record.company} Masło`}
            />
            {/* <Resource name='dbTEST_client_list' options={{ label: 'client TEST' }} label="client_TEST"   {...clients} create={TESTInvoiceCreate}/> */}
            <CustomRoutes>
                <Route path="/data_user" element={<MyProfile />}/ >
            </CustomRoutes>
        {/* </CssVarsProvider> */}
            <hr/>{"asdsad"}
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
