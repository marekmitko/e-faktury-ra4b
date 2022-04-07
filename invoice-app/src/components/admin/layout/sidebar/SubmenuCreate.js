import React from 'react';
import {DashboardMenuItem, Menu, MenuItemLink,
        useResourceDefinitions, useSidebarState
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';
// import IconToClientCreate from '@mui/icons-material/PersonAdd';
import IconToClientCreate from '@mui/icons-material/PersonAddAlt';
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';
import { CustomDashboard } from '../../dashboard/CustomDashboard';


const SubmenuCreate = (props) => (
    <Menu {...props}>
        <MenuItemLink to="/issuedInvoices_list/create" primaryText="Nowa Faktura" leftIcon={<IconToInvoiceCreate />}/>
        <MenuItemLink to="/dbclientlist/create" primaryText="Nowy Kontrahent" leftIcon={<IconToClientCreate />}/>
        {/* {props.children} */}
    </Menu>
);

export default SubmenuCreate;

