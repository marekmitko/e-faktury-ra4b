import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    useSidebarState,
} from 'react-admin';

import invoices from '../components/invoices';
import clients from "../components/clients";
import { ListDivider } from '@mui/joy';
import EfaLogo from '../components/appbar/components/subcomponent/EfaLogo';

// import visitors from '../visitors';
// import orders from '../orders';
// import invoices from '../invoices';
// import products from '../products';
// import categories from '../categories';
// import reviews from '../reviews';
// import SubMenu from './SubMenu';




const styleCSS = {
    // borderLeft: '3px solid transparent', 
    
    "& a.MuiMenuItem-root": {
        borderRadius: '0 20px 20px 0',   
        // backgroundColor: 'primary.50',
        color: 'text.tertiary',
        "& div": {
            color: "var(--mui-palette-grey-600)",
            opacity: 0.80,
            //Om? Najebane coś tu jest 
            // ml: -0.5,
        },
        // margin: '3px',
        // marginLeft: "-8px",
        margin: "3px 5px 3px 0  ",
        
    },
    // "& .ra-item-menu a.RaMenuItemLink-active": {
    //     // color: index === 2 ? 'primary.900' : 'neutral.700',
    //     // backgroundColor: 'primary.900',
    //     color: 'neutral.50',
    //     "& div": {color: 'neutral.50',},
    // }, 


};


const activCSS = {
    backgroundColor: 'primary.900',
    color: '#fff!important',
    "& div": {color: '#fff!important',
    opacity: '1!important',
    },
    '&:hover': { backgroundColor: 'primary.900', color: '#fff!important', }
};








const Menu = ({ dense = false }) => {
    const [state, setState] = useState();
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu) => {
        // setState(state => ({ ...state, [menu]: !state[menu] }));
        setState(menu);
    };

    return (
        <Box
            sx={{
                ...styleCSS,
                "& MuiMenuItem-root": {
                    borderRadius: '0 20px 20px 0',  
                },
                width: { sm: open ? 200 : 58 },
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <Box sx={{ justifyContent: 'center', alignItems: 'center', mx: "auto",    display: { xs: 'flex', sm: 'none'  },
                        paddingBottom: { xs: '8px', sm: 0 }
            }}>

                <EfaLogo />
            </Box>


            <DashboardMenuItem  
                onClick={ () => handleToggle(0) }
                sx={ (state === 0 ) ? activCSS : {} } 
            />
            {/* <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="pos.menu.sales"
                icon={<orders.icon />}
                dense={dense}
            > */}
                {/* <MenuItemLink
                    to="/commands"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    dense={dense}
                /> */}
                <ListDivider />
                <MenuItemLink
                    onClick={ () => handleToggle(1) }
                    sx={ (state === 1 ) ? activCSS : {} }

                    to="/issuedInvoices_list/create"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.issuedInvoices_list.create_menuItemLabel`, {
                        smart_count: 1,
                    })}
                    leftIcon={<invoices.iconCreate />}
                    dense={dense}
                />
                <MenuItemLink
                    onClick={ () => handleToggle(2) }
                    sx={ (state === 2 ) ? activCSS : {} }
                    // & .RaAppBar-title
                    to="/buyersEfaktury/create"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.buyersEfaktury.create_menuItemLabel`, {
                        smart_count: 2,
                    })}
                    leftIcon={<clients.iconCreate/>}
                    dense={dense}
                />
                <ListDivider />
                <MenuItemLink
                    onClick={ () => handleToggle(3) }
                    sx={ (state === 3 ) ? activCSS : {} }
                    
                    to="/issuedInvoices_list"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.issuedInvoices_list.list_menuItemLabel`, {
                        smart_count: 3,
                    })}
                    leftIcon={<invoices.icon />}
                    dense={dense}
                />
            {/* </SubMenu> */}
            {/* <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="pos.menu.catalog"
                icon={<products.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/products"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.products.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                    />
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    dense={dense}
                />
            </SubMenu> */}
            <MenuItemLink
                onClick={ () => handleToggle(4) }
                sx={ (state === 4 ) ? activCSS : {} }

                to="/buyersEfaktury"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.buyersEfaktury.list_menuItemLabel`, {
                    smart_count: 4,
                })}
                leftIcon={<clients.icon />}
                dense={dense}
            />
        <ListDivider />
        </Box>
    );
};

export default Menu;