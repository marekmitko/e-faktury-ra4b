// in src/MyMenu.js
import * as React from 'react';
import { Menu } from 'react-admin';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LabelIcon from '@mui/icons-material/Label';
import { Box, ListDivider } from '@mui/joy';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PeopleIcon from '@mui/icons-material/People';
import IconToInvoiceList from '@mui/icons-material/FindInPage'
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MuiLogo from './subcomponent/EfaLogo';

export const EfaMenu = (props) => {
    const [index, setIndex] = React.useState(0);
    return(
        <>
    <Menu {...props} sx={{
        // borderLeft: '3px solid transparent', 
        
        "& a.MuiMenuItem-root": {
            borderRadius: '0 20px 20px 0',   
            // backgroundColor: 'primary.50',
            color: 'text.tertiary',
            "& div": {
                color: 'text.tertiary',
                //Om? Najebane coś tu jest 
                ml: -0.5,
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
        "& a.item-activ.MuiMenuItem-root": {
                backgroundColor: 'primary.900',
                color: 'neutral.50',
                "& div": {color: 'neutral.50',},
        }

    }}>
            <Box sx={{ justifyContent: 'center', alignItems: 'center',    display: { xs: 'flex', sm: 'none'  },
                        paddingBottom: { xs: '8px', sm: 0 },   width: '100%'
            }}>
                    <Box sx={{ marginLeft: '140px' }}>

                <MuiLogo />
                    </Box>
            </Box>
            <Menu.DashboardItem   onClick={() => setIndex(0)} className={(index === 0) ? 'item-activ' : '' } />
            <ListDivider />
            <Menu.Item to="/issuedInvoices_list/create" primaryText="Nowa Faktura" leftIcon={<IconToInvoiceCreate />}
                idx={index} id={1} onClick={() => setIndex(1)} className={(index === 1) ? 'item-activ' : '' }
                />
            <Menu.Item to="/buyersEfaktury/create" primaryText="Dodaj klienta" leftIcon={<PersonAddAlt1Icon />}
                idx={index} id={2} onClick={() => setIndex(2)} className={(index === 2) ? 'item-activ' : '' }
                />
            <ListDivider />
            <Menu.Item to="/issuedInvoices_list" primaryText="Lista faktur" leftIcon={<IconToInvoiceList />}
                idx={index} id={3} onClick={() => setIndex(3)}    className={(index === 3) ? 'item-activ' : '' }
            />
            <Menu.Item to="/buyersEfaktury" primaryText="Lista klientów" leftIcon={<PeopleIcon />}
                idx={index} id={4} onClick={() => setIndex(4)}   className={(index === 4) ? 'item-activ' : '' }
            />
            <ListDivider />
        </Menu>
    </>
)
};