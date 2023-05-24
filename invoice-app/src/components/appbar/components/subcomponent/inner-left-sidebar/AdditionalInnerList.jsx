    import * as React from 'react';
    import { Menu,   ComponentPropType,   useSidebarState, MenuItemLink, useTranslate, MenuItemLinkClasses} from 'react-admin';
    import { CreateSubMenuFragment } from './CreateSubMenuFragment';
    import { DashboardItemToSubMenu } from './DashboardItemToSubMenu';
    import Badge from '@mui/material/Badge';
    import Chip from '@mui/material/Chip';
    import FindInPageIcon from '@mui/icons-material/FindInPage';


    import { styled } from '@mui/joy/styles';
    import Avatar from '@mui/joy/Avatar';
    import Box from '@mui/joy/Box';
    import Card from '@mui/joy/Card';
    import Divider from '@mui/joy/Divider';
    import IconButton from '@mui/joy/IconButton';
    import Input from '@mui/joy/Input';
    import Link from '@mui/joy/Link';
    import LinearProgress from '@mui/joy/LinearProgress';
    import List from '@mui/joy/List';
    import ListItem from '@mui/joy/ListItem';
    import ListItemButton from '@mui/joy/ListItemButton';
    import ListItemContent from '@mui/joy/ListItemContent';
    import Typography from '@mui/joy/Typography';
    import Sheet from '@mui/joy/Sheet';
    import ReceiptLong from '@mui/icons-material/ReceiptLong';




    import ListItemDecorator, {
        listItemDecoratorClasses,
      } from '@mui/joy/ListItemDecorator';

    import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";



    import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

    // import { Box, IconButton, List, ListDivider, ListItem, ListSubheader } from '@mui/joy';
    import Sidenav from '../side-drawer/Navigation';
    import ExpandMoreIconButton from '../base/ExpandMoreIconButton';
import { ItemButton } from './components/ItemButton';
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

    const Dropdown = styled('i')(({ theme }) => ({
        // color: theme.vars.palette.text.tertiary,
        color: 'red',
    }));




    export const AdditionalInnerList  = (props) => { 
        const [index, setIndex] = React.useState(0);
        return(
            <>
               <Menu.Item to="/buyersEfaktury" primaryText="Lista klientów" leftIcon={<FindInPageIcon />}
                idx={index} id={4} onClick={() => setIndex(4)}   className={(index === 4) ? 'item-activ' : '' }
            />
            <List size={true ? 'sm' : undefined}
                sx={{
                    mt: 'auto',
                    flexGrow: 0,
                    '--ListItem-radius': '8px',
                    '--List-gap': '8px',
                }}
            >
            <ListItem className=" MenuItemLinkClasses">
                    <ListItemButton>
                    <ListItemDecorator>
                        <FindInPageIcon />
                    </ListItemDecorator>
                    <ListItemContent className=" MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters"
                    >Supports</ListItemContent>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                    <ListItemDecorator>
                        <i data-feather="settings" />
                    </ListItemDecorator>
                    <ListItemContent>Settings</ListItemContent>
                    </ListItemButton>
                </ListItem>
            </List>
            {/* <Card
            variant="soft"
            color="primary"
            invertedColors
            sx={{ boxShadow: 'none' }}
            >
            <Typography fontSize="sm" fontWeight="lg" mb={0.5}>
                Used space
            </Typography>
            <Typography level="body3">
                Your team has used 80% of your available space. Need more?
            </Typography>
            <LinearProgress value={80} determinate sx={{ my: 1.5 }} />
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Link fontSize="sm" component="button" fontWeight="lg">
                Upgrade plan
                </Link>
                <Link fontSize="sm" component="button">
                Dismiss
                </Link>
            </Box>
            </Card> */}
            </>
        )
    }



    // export const InnerSidebarList  = (props) => {
    //     const {resources, onMenuClick } = props;
    //     const translate = useTranslate();


    //     console.log('resources', resources);
    //     console.log('resources', props);
    //     return  (
    // <>
    //             <DashboardItemToSubMenu  />
    //     <Menu>
    //             <ul>
                    
    //     {resources && resources.map(resource =>{
            
    //         return(
    //         <li>  <span> X <p>{resource.name} </p></span> </li>
    //         )}) 
    //     }
    //     </ul>
    //         <ListDivider />
    //         <Box sx={{ m: 1, ml: 1.25, mt: 0 }}>
    //             <Sidenav />
    //         </Box>        
    //         <ListDivider >
    //             <Divider sx={{mb: 2, mt: 0, p: 0 }} >
    //                 <Chip  sx={{marginBottom: "-18px", fontWeight: 500, textTransform: 'uppercase' }} size="small" color="primary" variant='outlined' 
    //                     label={translate('myroot.sitebar.main_menu.header.section_create')} 
    //                 />
    //             </Divider>
    //         </ListDivider >
    //         <CreateSubMenuFragment/>
    //         <ListDivider >
    //         <Divider sx={{mb: 2, mt: 0, p: 0 }} >
    //             <Chip  sx={{marginBottom: "-18px", fontWeight: 500, textTransform: 'uppercase' }} size="small" color="primary" variant='outlined' 
    //                     label={translate('myroot.sitebar.main_menu.header.section_list')} 
    //                 />
    //         </Divider>
    //         </ListDivider >
    //     <Menu {...props} />
    //         { props?.children? props.children : '' }
    //     </Menu>  
    //     </>
    // );
    //         };
