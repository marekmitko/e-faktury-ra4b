// // in src/MyUserMenu.js
// import React from "react";
// import { UserMenu, MenuItemLink } from "react-admin";
// import SettingsIcon from "@material-ui/icons/Settings";

// const MyUserMenu = (props) => {
//  = (props) => {
//   return (
//     <UserMenu {...props}>
//       <MenuItemLink
//         to="/my-profile"
//         primaryText="My Profile"
//         leftIcon={<SettingsIcon />}
//       />
//     </UserMenu>
//   );
// };

// export default MyUserMenu;

// // in src/MyAppBar.js
// import React from 'react';
// import { AppBar } from 'react-admin';
// import MyUserMenu from './MyUserMenu';

// const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;
// export default MyAppBar;

// // in ./MyLayout.js
// import React from 'react';
// import { Layout } from 'react-admin';
// import MyAppBar from './MyAppBar';

// const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

// export default MyLayout;
