import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
// import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

import { PostList } from "./components/posts/PostList";
import { PostEdit } from "./components/posts/PostEdit";
import {PostCreate} from "./components/posts/PostCreate";

const dataProvider = simpleRestProvider('http://localhost:5000');
// const dataProvider = jsonServerProvider('http://localhost:5000');


function App() {
    return (
        <Admin dataProvider={dataProvider} >
            <Resource name="users" icon={UserIcon} list={ListGuesser} edit={EditGuesser}  />   
            <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />  
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
