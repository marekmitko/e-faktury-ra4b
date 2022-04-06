import React from 'react';
import {DashboardMenuItem, Menu, MenuItemLink,
        useResourceDefinitions, useSidebarState
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';
import IconToClientCreate from '@mui/icons-material/PersonAdd';

const SubmenuCreate = (props) => (
    <Menu {...props}>
        <MenuItemLink to="/issuedInvoices_list/create" primaryText="Wystaw Fakturę" leftIcon={<LabelIcon />}/>
        <MenuItemLink to="/dbclientlist/create" primaryText="Nowy Kontrahent" leftIcon={<IconToClientCreate />}/>
    </Menu>
);

export default SubmenuCreate;

