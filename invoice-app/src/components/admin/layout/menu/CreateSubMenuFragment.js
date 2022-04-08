import React from 'react';
import { MenuItemLink, useResourceDefinitions, useSidebarState } from 'react-admin';
import IconToClientCreate from '@mui/icons-material/PersonAddAlt';
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';

export const CreateSubMenuFragment = () => (
    <React.Fragment>
        <MenuItemLink to="/issuedInvoices_list/create" primaryText="Nowa Faktura" leftIcon={<IconToInvoiceCreate />}/>
        <MenuItemLink to="/dbclientlist/create" primaryText="Nowy Kontrahent" leftIcon={<IconToClientCreate />}/>
    </React.Fragment>
);


