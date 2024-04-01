// // in src/appbar/AppLayout.js
// import * as React from 'react';

// import { CssVarsProvider } from "@mui/joy/styles";
// import GlobalStyles from "@mui/joy/GlobalStyles";
// import CssBaseline from "@mui/joy/CssBaseline";
// import Box from "@mui/joy/Box";
// import customTheme from "./other/theme";


// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material';
// import Header from './components/AppBarHeader';
// import { SidebarClasses, useLocale, useSidebarState, AppBar, Menu, Sidebar } from 'react-admin';
// import { SidebarTopPartMenu } from './components/subcomponent/inner-left-sidebar/SidebarTopPartMenu';
// import LeftSidebar from './components/LeftSidebar';
// import { AppMenu } from './components/subcomponent/app-menu/AppMenu';
// import { EfaSidebar } from './components/EfaSidebar';
// import { EfaContent } from './components/EfaContent';
// import { EfaMenu } from './components/EfaMenu';
// import { defaultTheme } from 'react-admin';
// import { AdditionalInnerList } from './components/subcomponent/inner-left-sidebar/AdditionalInnerList';
// import EfaLogo from '../admin/layout/.efa-v4/appbar/custome-joy/MuiLogo';























// const Root = styled("div")(({ theme }) => ({
//     display: "flex",
//     flexDirection: "column",
//     // zIndex: 999999999999999,
//     zIndex: 1,
//     minHeight: "100dvh",
//     backgroundColor: theme.palette.background.default,
//     position: "relative",
// }));

// const AppFrame = styled("div")(({ theme }) => ({
//     display: "flex",
//     flexDirection: "column",
//     overflowX: "auto",
// }));

// const ContentWithSidebar = styled("main")(({ theme }) => ({
//     display: "flex",
//     flexGrow: 1,
//     minHeight: "100dvh",
//     marginTop: '53px'
// }));

// // const Content = styled("div")(({ theme }) => ({
// //     display: "flex",
// //     flexDirection: "column",
// //     flexGrow: 2,
// //     padding: theme.spacing(3),
// //     marginTop: "4em",
// //     paddingLeft: 5,
// // }));






// const EfaLayout = (props) => {
//     const { children, dashboard } = props;
//     // console.log("resources", resources);
//     // const [open, setOpen] = useSidebarState();


//     return(
//     <>
//     <Root sx={ theme => ({
//         ...defaultTheme,
//         sidebar: {
//             width: 300, // The default value is 240
//                 //closedWidth: 70, // The default value is 55
//         }, 
//                 } 
//         )
//     }>
//         <AppFrame>
//             <Box sx={{ display: "flex", minHeight: "100dvh" }}>
//                 <Header  />
//                 {/* <AppBar /> */}
//                 <ContentWithSidebar>
//                 {/*   // Om pokombinować ze zmianą pozycji względem RaSidebar && RaContent && Children */}
//                     {/* <EfaSidebar className="efa-sidebar" > */}
//                         {/* <Menu hasDashboard={!!dashboard} /> */}
//                         {/* <AppMenu /> */}
//                         <EfaMenu / >
//                                 {/* <EfaLogo /> */}
//                             {/* <AdditionalInnerList /> */}
//                         {/* </EfaMenu > */}

//                     {/* </EfaSidebar> */}
//                            {/* LayoutPage */}
//                     <EfaContent   sx={{ mt: "52px", //paddingLeft: { xs: 0, sm: '50px' } 
//                 }}>

//                         {children}
//                     </EfaContent>
//                 </ContentWithSidebar>
//             </Box>
//         </AppFrame>
//     </Root>
//     </>
// )};

// EfaLayout.propTypes = {
//     children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
//     dashboard: PropTypes.oneOfType([
//         PropTypes.func,
//         PropTypes.string,
//     ]),
// };

// // export const MyLayout = (props) => (
// //     <TenantContext.Provider value={getCookie('tenant')}>
// //         <EfaLayout {...props} />
// //     </TenantContext.Provider>
// // );



// export default EfaLayout;