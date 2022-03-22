import React from "react";
import ClientList from "./ClientList";
import ClientCreate from "./ClientCreate";
import ClientEdit from "./ClientEdit";
import IconToClientList from '@mui/icons-material/SupervisorAccount';
import IconToClientCreate from '@mui/icons-material/PersonAdd';

export default {
    list: ClientList,
    create: ClientCreate,
    edit: ClientEdit,
    icon: IconToClientList,
    iconCreate: IconToClientCreate,
};