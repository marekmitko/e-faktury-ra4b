// // in src/MyMenu.js
// import * as React from "react";
// import { Menu } from "react-admin";
// import BookIcon from "@mui/icons-material/Book";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import PeopleIcon from "@mui/icons-material/People";
// import LabelIcon from "@mui/icons-material/Label";
// import { Box } from "@mui/joy";

// export const EfaMenu = (props) => (
//     <>
//         <Menu
//             {...props}
//             className="MENU-ROOT"
//             sx={{
//                 borderLeft: "3px solid transparent",
//                 pt: "55px",
//                 "& a.MuiMenuItem-root": {
//                     borderRadius: "0 20px 20px 0",
//                     backgroundColor: "primary.50",
//                     color: "neutral.600",
//                     "& div": {
//                         color: "neutral.600",
//                         //Om? Najebane coś tu jest
//                         // ml: -1,
//                     },
//                     margin: "3px",
//                     marginLeft: "-8px",
//                 },
//                 // "& .ra-item-menu a.RaMenuItemLink-active": {
//                 //     // color: index === 2 ? 'primary.900' : 'neutral.700',
//                 //     // backgroundColor: 'primary.900',
//                 //     color: 'neutral.50',
//                 //     "& div": {color: 'neutral.50',},
//                 // },

//                 // '& .MenuItemLink': {
//                 //     borderLeft: '10px solid #4f3cc9',
//                 //     "&.active": {
//                 //         backgroundColor:'green',
//                 //       },
//                 //     },
//                 //     '& .RaMenuItemLink-icon': {
//                 //         color: '#EFC44F',
//                 //         "&.active": {
//                 //             backgroundColor:'blue',
//                 //         },
//                 //     },
//             }}
//         >
//             <Menu.DashboardItem />
//             <Menu.Item
//                 to="/issuedInvoices_list/create"
//                 primaryText="Nowa Faktura"
//                 leftIcon={<ChatBubbleIcon />}
//             />
//             <Menu.Item
//                 to="/users"
//                 primaryText="Users"
//                 leftIcon={<PeopleIcon />}
//             />
//             <Menu.Item
//                 to="/custom-route"
//                 primaryText="Miscellaneous"
//                 leftIcon={<LabelIcon />}
//             />
//         </Menu>
//         <Box
//             sx={{
//                 "& #xxx > .ra-item-menu.dupa > a.RaMenuItemLink-active": {
//                     // color: index === 2 ? 'primary.900' : 'neutral.700',
//                     backgroundColor: "primary.900",
//                     color: "neutral.50",
//                     "& div": { color: "neutral.50" },
//                 },
//             }}
//         >
//             <div id="xxx">
//                 <Menu className="ra-item-menu dupa" />
//             </div>
//         </Box>
//     </>
// );
