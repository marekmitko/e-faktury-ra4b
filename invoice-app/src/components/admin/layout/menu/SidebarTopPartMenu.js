import * as React from 'react';
import { Menu,   ComponentPropType,   useSidebarState, MenuItemLink } from 'react-admin';
import { CreateSubMenuFragment } from './CreateSubMenuFragment';
import { DashboardItemToSubMenu } from './DashboardItemToSubMenu';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
// const SidebarMenuDivider = ({   chiplabel  }) => (
//     <Divider>
//         { chiplabel ?  
//             (<Chip label={chiplabel} />) 
//             : (null)
//         }
//     </Divider>
// );

// SidebarMenuDivider.props.chiplabel = false; 

// const SidebarMenuChipDivider = ({ chiplabel , ...props }) => (
//     <Divider {...props}>
//         <Chip label={chiplabel} />
//     </Divider>
// );





export const SidebarTopPartMenu  = ({children}) => (
    <Menu>
        <Divider sx={{m: 1 }} >
            <small><b><MarkAsUnreadIcon /></b></small> 
        </Divider>
        <MenuItemLink to="/custom-route" 
            primaryText={
                <Badge  badgeContent={ <div>4</div>} color="primary">
                    { `NotiInfo   ' `  }
                </Badge>
            } 
        />
        <hr/>
            <DashboardItemToSubMenu  />
        <hr/>
        <Divider sx={{m: 1}} >
            <small><b>ADD</b></small> 
        </Divider>
        <CreateSubMenuFragment/>
        <Divider sx={{m: 1 }} >
            <small><b>LIST</b></small> 
        </Divider>
        {children}
    </Menu>  
);

