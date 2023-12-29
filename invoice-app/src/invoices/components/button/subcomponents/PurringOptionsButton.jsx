import * as React from 'react'; //Om? wyjaśnić czy tak jak jest czy jednak => 
import { useState, memo } from 'react';
import {                   
    Datagrid,
    EmailField,
    List,
    TextField,
    ShowButton,
    EditButton,
    DeleteButton,
    CloneButton,
    useRecordContext,
    useDataProvider,
    useTranslate,
    useNotify,
    useRefresh,
    useResourceContext
} from 'react-admin';   
import CircularProgress from '@mui/material/CircularProgress';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PurringOffIcon from '@mui/icons-material/NotificationsOff';

import ArchiveIcon from '@mui/icons-material/Archive';
import { Button, IconButton, SvgIcon, Tooltip } from '@mui/joy';
import { get } from 'lodash';



const PurringOptionsButton = (props) => {
    const { icon, tooltip, sxSvg } = props;
    const resources = useResourceContext(props);
    const translate = useTranslate(props);
    if(!icon) return null;
    return(
        <Tooltip
            title={ tooltip ? translate(`resources.${resources}.${tooltip}`) : null }  
            // size="sm"
            // arrow
            // color="neutral"
            // placement="right"
            // variant="outlined"
            {...props}
        >
            <SvgIcon sx={ sxSvg ? sxSvg : "" } >
                {icon}
            </SvgIcon>
        </Tooltip>
    );
};

export default memo(PurringOptionsButton);