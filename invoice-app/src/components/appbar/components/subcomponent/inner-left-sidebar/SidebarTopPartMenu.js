import * as React from 'react';
import { Menu,   ComponentPropType,   useSidebarState, MenuItemLink, useTranslate} from 'react-admin';
import { CreateSubMenuFragment } from './CreateSubMenuFragment';
import { DashboardItemToSubMenu } from './DashboardItemToSubMenu';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";



import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

import { Box, IconButton, List, ListDivider, ListItem, ListSubheader } from '@mui/joy';
import Sidenav from '../side-drawer/Navigation';
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





export const SidebarTopPartMenu  = (props) => {
    const {resources, onMenuClick } = props;
    const translate = useTranslate();


    console.log('resources', resources);
    console.log('resources', props);
    return  (
<>
            <DashboardItemToSubMenu  />
    <Menu>
            <ul>
                
    {resources && resources.map(resource =>{
        
        return(
        <li>  <span> X <p>{resource.name} </p></span> </li>
        )}) 
    }
    </ul>
        <ListDivider />
        <Box sx={{ m: 1, ml: 1.25, mt: 0 }}>
            <Sidenav />
        </Box>        
        <ListDivider >
            <Divider sx={{mb: 2, mt: 0, p: 0 }} >
                <Chip  sx={{marginBottom: "-18px", fontWeight: 500, textTransform: 'uppercase' }} size="small" color="primary" variant='outlined' 
                    label={translate('myroot.sitebar.main_menu.header.section_create')} 
                />
            </Divider>
        </ListDivider >
        <CreateSubMenuFragment/>
        <ListDivider >
        <Divider sx={{mb: 2, mt: 0, p: 0 }} >
            <Chip  sx={{marginBottom: "-18px", fontWeight: 500, textTransform: 'uppercase' }} size="small" color="primary" variant='outlined' 
                    label={translate('myroot.sitebar.main_menu.header.section_list')} 
                />
        </Divider>
        </ListDivider >
    <Menu {...props} />
        { props?.children? props.children : '' }
    </Menu>  
    </>
);
        };
