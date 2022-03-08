import * as React from "react";
import { Admin, Resource, ListGuesser} from 'react-admin';
// import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';


// import { httpClient } from 'ra-core';
import { fetchJson } from "@app/config";
// import { httpClient } from "@app/config";

import PostIcon from '@mui/icons-material/Book';
// import UserIcon from '@mui/icons-material/Group';

// import { PostList } from "./components/posts/PostList";
// import { PostEdit } from "./components/posts/PostEdit";
// import {PostCreate} from "./components/posts/PostCreate";

const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
// const dataProvider = jsonServerProvider('http://localhost:5000');


function App() {
    return (
        <Admin dataProvider={dataProvider} >
            <Resource name="users"   list={ListGuesser}    />   
            {/* <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />   */}
            <Resource name="posts" icon={PostIcon} list={ListGuesser}   />  
        </Admin>
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
