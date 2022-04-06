import * as React from 'react';
import { Resource, ListGuesser, ShowGuesser, EditGuesser,} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchJson } from "@app/config";

import { InvoiceCreate } from "./components/invoice-form/InvoiceCreate";
import clients from "./components/clients";
import MyAdmin from "./components/admin"

import PostIcon from '@mui/icons-material/Book';
import { CustomDashboard } from './components/admin/dashboard/CustomDashboard';

// *see const dataProvider
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );

//  *see App
function App(props) {
    return (
        <MyAdmin 
        dashboard={CustomDashboard}
        dataProvider={dataProvider} > 
            <Resource name="issuedInvoices_list"   icon={PostIcon} options={{ label: 'Lista Faktur' }}  list={ListGuesser} create={InvoiceCreate}  />  
            <Resource options={{ label: 'Lista kontrahentów' }} name='dbclientlist' label="Kontrahenci"  {...clients} />
            <Resource options={{ label: 'L' }} name='newInvoiceList' label="Kontrahenci"  list={ListGuesser} edit={EditGuesser} />
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
