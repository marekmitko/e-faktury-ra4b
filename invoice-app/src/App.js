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
import { PostShow } from "./components/show-test/PostShow";
import { BinShowSellerCard } from "./components/invoice-form/bin/xShowSellerCard";
import { InvoiceCreate } from "./components/invoice-form/InvoiceCreate";


// import {ClientList, IconToClientList} from "./components/clients/ClientList";
// import { ClientEdit } from "./components/clients/ClientEdit";
// import { IconToCreateIcon, ClientCreate } from "./components/clients/ClientCreate";

import clients from "./components/clients";

const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
// const dataProvider = jsonServerProvider('http://localhost:5000');



//  *see App
function App(props) {
    return (
        <MyAdmin dataProvider={dataProvider} {...props}  >
            <EditMyProfile/>
            <Resource name="issuedInvoices_list"   icon={PostIcon} options={{ label: '1 Invoices' }}  list={ListGuesser}  create={InvoiceCreate} />  
            <Resource name="tradePartners_list" icon={CustomerIcon}  options={{ label: '2 Customers' }}   list={CustomerList} edit={CustomerEdit} create={CustomerCreate} />   
            <Resource options={{ label: 'Kontrahenci' }} name='tradePartners_list' label="Kontrahenci"  {...clients} />
            
            {/* <Resource
                name='dbclientlist'
                label="Kontrahenci"
                options={{ label: 'Kontrahenci' }} 
                list={ClientList}
                create={ClientCreate}
                edit={ClientEdit}
                icon={IconToClientList}
            /> */}
            {/* <Resource
                name='dbclientlist/create'
                label="Nowy Kontrahent"
                options={{ label: 'Nowy Kontrahent' }} 
                list={ClientCreate}
                create={EditGuesser}
                edit={ClientEdit}
                icon={IconToCreateIcon}
                /> */}
            {/* <Resource name="newInvoiceList" icon={PostIcon} options={{ label: '3 Inv.spec' }}  list={InvoiceForm}   />   */}
            {/* <Resource name="profile" icon={PostIcon} options={{ label: '*3 Profilwe' }}  list={ListGuesser} edit={EditMyProfile}  />   */}
            {/* <Resource name="profile" icon={PostIcon} options={{ label: '4Inv.spec' }}  list={InvoiceForm}   />   */}
            {/* <Resource name="myProfile/create" icon={PostIcon} options={{ label: '5 myProfile' }} list={InvoiceForm}    />   */}

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
