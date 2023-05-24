import React from 'react';
import { MenuItemLink, useResourceDefinitions, useSidebarState } from 'react-admin';
import IconToClientCreate from '@mui/icons-material/PersonAddAlt';
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";



import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import { Box, IconButton, List, ListItem, ListSubheader } from '@mui/joy';




export const CreateSubMenuFragment = () => (
    <React.Fragment>

<List size="sm" sx={{ "--ListItem-radius": "8px" }}>
        <ListItem nested>
            <ListSubheader>
                Utwórz
            <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ "--IconButton-size": "24px", ml: "auto" }}
            >
                <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
            </ListSubheader>

            </ListItem>
    </List>




        <MenuItemLink to="/issuedInvoices_list/create" primaryText="Nowa Faktura" leftIcon={<IconToInvoiceCreate />}/>
        <MenuItemLink to="/dbclientlist/create" primaryText="Nowy Kontrahent" leftIcon={<IconToClientCreate />}/>
    </React.Fragment>
);


