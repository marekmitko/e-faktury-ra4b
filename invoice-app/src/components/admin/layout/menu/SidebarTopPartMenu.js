import * as React from 'react';
import { Menu,   ComponentPropType,   useSidebarState, MenuItemLink, useTranslate} from 'react-admin';
import { CreateSubMenuFragment } from './CreateSubMenuFragment';
import { DashboardItemToSubMenu } from './DashboardItemToSubMenu';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';




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





export const SidebarTopPartMenu  = (props) => {
    const translate = useTranslate();
    return  (
<>
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
        <Divider sx={{mb: 2, mt: 0, p: 0 }} >
            <Chip  sx={{marginBottom: "-18px", fontWeight: 500, textTransform: 'uppercase' }} size="small" color="primary" variant='outlined' 
                label={translate('myroot.sitebar.main_menu.header.section_create')} 
            />
        </Divider>
        <CreateSubMenuFragment/>
        <Divider sx={{mb: 2, mt: 0, p: 0 }} >
            <Chip  sx={{marginBottom: "-18px", fontWeight: 500, textTransform: 'uppercase' }} size="small" color="primary" variant='outlined' 
                    label={translate('myroot.sitebar.main_menu.header.section_list')} 
                />
        </Divider>
        { props?.children? props.children : '' }
    </Menu>  
    <Menu {...props} />
    </>
);
        };
