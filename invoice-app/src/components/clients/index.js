import React from "react";
import list from "./ClientList";
import create from "./ClientCreate";
import edit from "./ClientEdit";
import IconToClientList from '@mui/icons-material/SupervisorAccount';
import IconToClientCreate from '@mui/icons-material/PersonAdd';

export default {
    list,
    create,
    edit,
    icon: IconToClientList,
    iconCreate: IconToClientCreate,
};