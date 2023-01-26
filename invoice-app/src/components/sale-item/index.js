import React from "react";
import create from "./SaleItemCreate";
import edit from "./SaleItemEdit";
import list from "./SaleItemList";
import show from "./SaleItemShow";
import IconToSalesItemList from '@mui/icons-material/Style';
import IconToClientList from '@mui/icons-material/SupervisorAccount';
import IconToSalesItemCreate from '@mui/icons-material/LibraryAdd';

export default {
    list,
    create,
    edit,
    show,
    icon: IconToSalesItemList,
    iconCreate: IconToSalesItemCreate,
};