// import * as React from "react";
// import GlobalStyles from "@mui/joy/GlobalStyles";
// import IconButton from "@mui/joy/IconButton";
// import Sheet from "@mui/joy/Sheet";
// import MuiLogo from "./subcomponent/EfaLogo";
// import ColorSchemeToggle from "./others/ColorSchemeToggle";
// import { toggleSidebar } from "./others/utilis";
// import { AppBar, Toolbar, Box } from "@mui/material";
// import {
//     TitlePortal,
//     RefreshIconButton,
//     useSidebarState,
//     useLocale,
// } from "react-admin";
// import MenuIcon from "@mui/icons-material/Menu";
// import { EfaHideOnScroll } from "./EfaHideOnScroll";

// // import {
// //     AppBar,
// //     TitlePortal,
// //     ToggleThemeButton,
// //     defaultTheme,
// // } from 'react-admin';

// // const darkTheme = { palette: { mode: 'dark' } };

// export default function AppBarHeader(props) {
//     // const {setOpen, open} = props;
//     const [open, setOpen] = useSidebarState();
//     useLocale(); // force redraw on locale change
//     const toggleSidebar = () => setOpen(!open);

//     return (
//         // in src/MyAppBar.js

//         // <AppBar position="static">
//         //     <Toolbar>
//         //         <TitlePortal />
//         //         <Box flex="1" />
//         //         <RefreshIconButton />
//         //     </Toolbar>
//         <EfaHideOnScroll>
//             <AppBar>
//                 <Sheet
//                     sx={{
//                         // display: { xs: 'flex', md: 'none' },
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         position: "fixed",
//                         top: 0,
//                         width: "100vw",
//                         height: "var(--Header-height)",
//                         // zIndex: 9995,
//                         p: 1,
//                         gap: 1,
//                         boxShadow: 1,
//                     }}
//                 >
//                     <GlobalStyles
//                         styles={(theme) => ({
//                             ":root": {
//                                 "--Header-height": "52px",
//                                 [theme.breakpoints.up("md")]: {
//                                     // '--Header-height': '0px',
//                                     "& .MuiToolbar-root": {
//                                         paddingLeft: 0,
//                                     },
//                                 },
//                                 "& .MuiToolbar-root": {
//                                     paddingLeft: 0,
//                                 },
//                             },
//                         })}
//                     />

//                     <Toolbar
//                         sx={{
//                             pl: 0,
//                             display: "flex",
//                             justifyContent: "space-between",
//                         }}
//                     >
//                         <IconButton
//                             onClick={() => toggleSidebar()}
//                             variant="outlined"
//                             color="neutral"
//                             size="sm"
//                             sx={{
//                                 "& i": {
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     // minHeight: "100vh",
//                                 },
//                             }}
//                         >
//                             <i data-feather="menu">
//                                 <MenuIcon />
//                             </i>
//                         </IconButton>
//                         <Box flex={1} />
//                         <MuiLogo
//                             variant="plain"
//                             sx={{ boxShadow: "none", mr: "auto", ml: 2 }}
//                         />
//                         {/* <ColorSchemeToggle id={undefined} /> */}
//                         <Box flex={1} />
//                     </Toolbar>
//                 </Sheet>
//             </AppBar>
//         </EfaHideOnScroll>
//         // </AppBar>
//     );
// }
