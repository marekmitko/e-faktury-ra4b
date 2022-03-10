import * as React from "react";
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
// import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';


// import { httpClient } from 'ra-core';
import { fetchJson } from "@app/config";
// import { httpClient } from "@app/config";
import { MyAdmin } from "./components/my-admin/MyAdmin"

import PostIcon from '@mui/icons-material/Book';
import CustomerIcon from '@mui/icons-material/Group';
import { CustomerList } from "./components/customers/CustomerList";
import { CustomerEdit } from "./components/customers/CustomerEdit";
import { CustomerCreate } from "./components/customers/CustomerCreate";
import { InvoiceForm } from "./components/invoice-form/InvoiceForm";
import {EditMyProfile} from "./components/users/EditMyProfile"
const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
// const dataProvider = jsonServerProvider('http://localhost:5000');


function App() {
    return (
        <MyAdmin dataProvider={dataProvider} >
            <EditMyProfile/>

            <Resource name="issuedInvoices_list" icon={PostIcon} options={{ label: '1 Invoices' }}  list={ListGuesser}   />  
            <Resource name="tradePartners_list" icon={CustomerIcon}  options={{ label: '2 Customers' }}   list={CustomerList} edit={CustomerEdit} create={CustomerCreate} />   
            <Resource name="newInvoiceList" icon={PostIcon} options={{ label: '3 Inv.spec' }}  list={InvoiceForm}   />  
            <Resource name="profile" icon={PostIcon} options={{ label: '*3 Profilwe' }}  list={ListGuesser} edit={EditMyProfile}  />  
            {/* <Resource name="profile" icon={PostIcon} options={{ label: '4Inv.spec' }}  list={InvoiceForm}   />   */}
            <Resource name="myProfile/create" icon={PostIcon} options={{ label: '5 myProfile' }} list={InvoiceForm}    />  

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
