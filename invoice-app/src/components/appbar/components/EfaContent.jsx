import * as React from 'react';
import { Menu, Sidebar, useSidebarState } from "react-admin";
import LeftSidebar from "./LeftSidebar";
import { Box } from '@mui/joy';






// export const EfaContent = ({children}) => {
//     return(
//         <Box
//             component="main"
//             className="MainContent"
//             sx={(theme) => ({
//                 "--main-paddingTop": {
//                 xs: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
//                 md: "32px"
//                 },
//                 px: {
//                 xs: 2,
//                 md: 3
//                 },
//                 pt: "var(--main-paddingTop)",
//                 pb: {
//                 xs: 2,
//                 sm: 2,
//                 md: 3
//                 },
//                 flex: 1,
//                 display: "flex",
//                 flexDirection: "column",
//                 minWidth: 0,
//                 height: "100dvh",
//                 gap: 1,
//                 overflow: "auto"
//             })}
//         >
//                 {children ? children : ''}
//         </Box>
//     );
// };
export const EfaContent = (props) => {
    const { children, ...rest } = props; 
    return(
        <Box
            component="main"
            className="MainContent"
            sx={(theme) => ({
                // "--main-paddingTop": {
                // xs: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
                // md: "32px"
                // },
                // px: {
                // xs: 2,
                // md: 3
                // },
                // pt: "var(--main-paddingTop)",
                // pb: {
                // xs: 2,
                // sm: 2,
                // md: 3
                // },
                // flex: 1,
                // display: "flex",
                // flexDirection: "column",
                // minWidth: 0,
                // height: "100dvh",
                // gap: 1,
                // overflow: "auto"
                display: "flex",
                flexDirection: "column",
                flexGrow: 2,
                // padding: theme.spacing(3),
                // marginTop: "4em",
                padding: 1,
                // zIndex: -1


            })}
            {...rest}
        >
                {children ? children : ''}
        </Box>
    );
};