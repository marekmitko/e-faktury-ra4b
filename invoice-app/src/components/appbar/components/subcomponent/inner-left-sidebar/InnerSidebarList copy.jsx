    import * as React from 'react';
    import { Menu,   ComponentPropType,   useSidebarState, MenuItemLink, useTranslate} from 'react-admin';
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








    export const InnerSidebarList  = (props) => { 
        const [index, setIndex] = React.useState(0);
        return(
            <>
            <List  size={true ? 'sm' : undefined}
            // sx={{
            //     '--ListItem-radius': '8px',
            //     '--List-gap': '4px',
            //     '--List-nestedInsetStart': '40px',
            // }}
            sx={{
                // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
                '--ListItem-paddingLeft': '0px',
                '--ListItemDecorator-size': '64px',
                '--ListItemDecorator-color': (theme) => theme.vars.palette.text.secondary,
                '--ListItem-minHeight': '32px',
                '--List-nestedInsetStart': '13px',
                [`& .${listItemDecoratorClasses.root}`]: {
                  justifyContent: 'flex-end',
                  pr: '18px',
                },
                '& [role="button"]': {
                  borderRadius: '0 20px 20px 0',
                },
              }}
            >
        <ListItem nested component="div" startAction={<FindInPageIcon />}>
            <ListItemDecorator  >
            <Typography level="body3" sx={{ textTransform: 'uppercase' }}>
              Documentation
            </Typography>
            </ListItemDecorator>
            <List>
                <ListItem  >
                    <ListItemButton
                        selected={index === 0}
                        variant={index === 0 ? 'soft' : 'plain'}
                        sx={{   backgroundColor: index === 0 ? 'primary.50' : undefined,
                                color: index === 0 ? 'primary.900' : undefined,
                            }}
                        // color={index === 0 ? 'primary.900' : undefined}
                        onClick={() => setIndex(0)}
                    >
                        <ListItemDecorator>
                            <FindInPageIcon />
                        </ListItemDecorator>
                        <ListItemContent>Tasks</ListItemContent>
                    </ListItemButton>
                </ListItem>
            </List>
          </ListItem>
            <ListItem startAction={<FindInPageIcon sx={{ color: index === 2 ? 'primary.900' : 'neutral.700',  }} />} >
                <ItemButton  itemName={"Nowa Faktura "} idx={index} id={2} onClick={() => setIndex(2)}  />
            </ListItem  >
            <ListItem  >
                <ListItemButton
                    selected={index === 0}
                    variant={index === 0 ? 'soft' : 'plain'}
                    sx={{   backgroundColor: index === 0 ? 'primary.50' : undefined,
                            color: index === 0 ? 'primary.900' : undefined,
                        }}
                    // color={index === 0 ? 'primary.900' : undefined}
                    onClick={() => setIndex(0)}
                >
                    <ListItemDecorator>
                        {/* <i data-feather="check-square" /> */}
                        <FindInPageIcon />
                    </ListItemDecorator>
                    <ListItemContent>Tasks</ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton
                    selected={index === 0}
                    variant={index === 0 ? 'soft' : 'plain'}
                    color={index === 0 ? 'danger' : undefined}
                    onClick={() => setIndex(0)}
                >
                    <ListItemDecorator sx={{ display: 'flex', alignItems: 'center' }} >
                    {/* <Sheet
                        variant="solid"
                        color="success"
                        sx={{ bgcolor: 'success.500' }}
                    >
                        <ListItemContent>Invoice</ListItemContent>
                    </Sheet> */}
                    <FindInPageIcon />
                    <ListItemContent>Cellular</ListItemContent>
                    <ExpandMoreIconButton />
                    </ListItemDecorator>
                    {/* <KeyboardArrowRight fontSize="xl3" sx={{ color: 'text.tertiary' }} /> */}
                </ListItemButton>
                {/* <ListItemButton>


                <ListItemDecorator>
                    <i data-feather="flag" />
                </ListItemDecorator>
                <ListItemContent>Invoice</ListItemContent>
                <Dropdown data-feather="chevron-down" />
                </ListItemButton> */}
            </ListItem>
            <ListItem>
                <ListItemButton
                    selected={index === 1}
                    variant={index === 1 ? 'soft' : 'plain'}
                    color={index === 1 ? 'neutral' : undefined}
                    onClick={() => setIndex(1)}
                >
                <ListItemDecorator>
                    <i data-feather="flag" />
                </ListItemDecorator>
                <ListItemContent>Reporting</ListItemContent>
                <Dropdown data-feather="chevron-down" />
                </ListItemButton>
            </ListItem>
            <ListItem nested>
                <ListItemButton>
                <ListItemDecorator>
                    <i data-feather="bar-chart-2" />
                </ListItemDecorator>
                <ListItemContent>Users</ListItemContent>
                <ExpandMoreIconButton />
                </ListItemButton>
                <List>
                <ListItem>
                    <ListItemButton selected variant="soft" color="primary">
                    My Profile
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>New user</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Role & Permission</ListItemButton>
                </ListItem>
                </List>
            </ListItem>
            </List>
            <List
            sx={{
                mt: 'auto',
                flexGrow: 0,
                '--ListItem-radius': '8px',
                '--List-gap': '8px',
            }}
            >
            <ListItem>
                <ListItemButton>
                <ListItemDecorator>
                    <i data-feather="life-buoy" />
                </ListItemDecorator>
                <ListItemContent>Supports</ListItemContent>
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
