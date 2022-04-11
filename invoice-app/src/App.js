import * as React from 'react';
import { Resource, ListGuesser, ShowGuesser, EditGuesser, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchJson } from "@app/config";
import invoices from './components/invoices';
import clients from "./components/clients";
import MyAdmin from "./components/admin"
import { EditMyProfile } from './components/admin/users/EditMyProfile';


// *see const dataProvider
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );

//  *see App
function App(props) {
    return (
        <MyAdmin dataProvider={dataProvider} > 
            <Resource name="data_user"   />
            <Resource name="issuedInvoices_list" options={{ label: 'Lista Faktur' }} label="Faktury" {...invoices} />  
            <Resource name='dbclientlist' options={{ label: 'Lista kontrahentów' }} label="Kontrahenci"  {...clients} />
            <CustomRoutes>
                <Route path="/data_user/user_123" element={<EditMyProfile />} />
            </CustomRoutes>
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
