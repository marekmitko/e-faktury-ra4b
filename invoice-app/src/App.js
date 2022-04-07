import * as React from 'react';
import { Resource, ListGuesser, ShowGuesser, EditGuesser,} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchJson } from "@app/config";

// import  InvoiceCreate  from "./components/new-invoice-form/InvoiceCreate";
import invoices from './components/invoices';
import clients from "./components/clients";
import MyAdmin from "./components/admin"

import PostIcon from '@mui/icons-material/Book';
import { CustomDashboard } from './components/admin/layout/dashboard/CustomDashboard';

// *see const dataProvider
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );

//  *see App
function App(props) {
    return (
        <MyAdmin 
        dashboard={CustomDashboard}
        dataProvider={dataProvider} > 
            <Resource name="issuedInvoices_list" options={{ label: 'Lista Faktur' }} label="Faktury" {...invoices} />  
            <Resource name='dbclientlist' options={{ label: 'Lista kontrahentów' }} label="Kontrahenci"  {...clients} />
            {/* <Resource options={{ label: 'L' }} name='newInvoiceList' label="Kontrahenci"  list={ListGuesser} edit={EditGuesser} /> */}
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
