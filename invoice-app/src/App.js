import * as React from 'react';
import { Resource, 
        // ListGuesser,
        ShowGuesser, EditGuesser, 
        CustomRoutes,
        ListGuesser,
        Login, 
} from 'react-admin';
import { StyledEngineProvider } from '@mui/material/styles';
import { Route } from 'react-router-dom';
import { i18nProvider } from './i18nProvider/i18nProvider';

import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server' ;

import { fetchJson } from "@app/config";
import httpClient from './config/providers/httpClient';

import invoices from './components/invoices';
import old_clients from "./components/clients";
import clients from './clients';
import salesitem from "./components/sale-item";
import MyAdmin from "./components/admin"
import AppAdmin from "./components/admin/AppAdmin"
import MyProfile  from './components/admin/users';
import { ReactQueryDevtools } from 'react-query/devtools';

import { CssVarsProvider } from "@mui/joy/styles";
import Efa_v3_ClientCreate from './components/clients/CLIENT-e-faktury/EfaClientCreate';
import EfaClientList from './components/clients/CLIENT-e-faktury/EfaClientList';
import EfaClientEdit from './components/clients/CLIENT-e-faktury/EfaClientEdit';
import { PostCreate } from './components/invoices/invoice-list/INVOICE-e-faktury/EfaInvoiceCreate';
import { EditSimpleList } from './components/invoices/invoice-list/INVOICE-e-faktury/EditSimpleList';
import CssVarJoyProvider from './joy-theme-provider/JoyThemeProvider';
import { FormsCreate } from './components/invoices/new-invoice/invoice-create/efa-invoice-form/components/mobile/spanning-sales-table/mobile-form-iterator/MobiForm';
import AbcIcon from '@mui/icons-material/Abc';
import { SalesTableV2 } from './components/invoices/new-invoice/invoice-create/components/efaV2/SalesTableV2';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Chip, Divider } from '@mui/joy';
import VisitorCreate from './components/clients/efa-V5-test/VisitorCreate';
import PeopleIcon from '@mui/icons-material/People';
import { CustomAdmin } from './Admin/CustoAdmin';
import EfaClientCreate from './clients/old/ClientCreate';
import ClientCreate from './components/clients/ClientCreate';
import { PreClientCreate } from './clients/MinClientCreate';



// *see const dataProvider
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
const dbjsonProvider = jsonServerProvider('http://localhost:5000', httpClient);













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
                dataProvider={dbjsonProvider}
                i18nProvider={i18nProvider}
            >  
                <Resource name="issuedInvoices_list" options={{ label: 'Lista Faktur' }} label="Faktury" {...invoices}  edit={EditSimpleList} />  
                <Resource name='buyersEfaktury' options={{ label: 'efaKlient' }} label="efaKlient"  
                    list={clients.list} 
                    edit={clients.edit}   
                    show={ShowGuesser}
                    create={clients.create}  
                    icon={PeopleIcon}
                    // recordRepresentation={(record) =>(<span> `${record.company} Masło`</span>)}
                    />
                {/* <Resource name='dbTEST_client_list' options={{ label: 'client TEST' }} label="client_TEST"   {...clients} create={TESTInvoiceCreate}/> */}
                <CustomRoutes>
                    <Route path="/data_user" element={<MyProfile />}/ >
                </CustomRoutes>
            </CustomAdmin>
            {/* <CssVarsProvider> */}
                {/* <Resource name="dbclientlist" options={{ label: 'Visitor V5' }} label="Visitor V5" list={ListGuesser} create={VisitorCreate}/>   */}
                    {/* <Resource name='dbclientlist' options={{ label: 'Lista kontrahentów' }} label="Kontrahenci"  {...clients} create={VisitorCreate} />
                    <Resource name='invoicesEfaktury' options={{ label: 'efaktury' }} label="efaktury"  
                        list={FormsCreate} 
                        edit={PostCreate}   
                        show={ShowGuesser} 
                        create={FormsCreate}  
                        icon={AbcIcon}
                    />  */}
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
