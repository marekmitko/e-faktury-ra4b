import * as React from 'react'; 
import { useState } from 'react';
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
    useUpdate
} from 'react-admin';   
import CircularProgress from '@mui/material/CircularProgress';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import { IconButton } from '@mui/joy';

// set params when calling the hook

const ErrorAlertIconButton = () => (
    <span> 
        <IconButton
            le
            sx={{
                "--IconButton-size": "30px"
            }}
            onClick={(event) => {
                    event.stopPropagation();
                    alert("Dokumenty nie zostały przesłane");
                } 
            }  
            variant='plain'
            color='danger'

        >
            <AssignmentLateOutlinedIcon />
            {/* <SdCardAlertIcon /> */}
        </IconButton>
        </span>
);



export const SpecialSubmitActionButton = () => {
    const record = useRecordContext(); // przekazać props, chyba nie muszę bo useRecord pobiera z context 
    const diff = { likes: record.likes + 1 };
    const [update, { isLoading, error }] = useUpdate(
        'likes',
        { id: record.id, data: diff, previousData: record }
    );
    const handleClick = (event) => {
        event.stopPropagation();
        update();
    }
    if (error) { return <ErrorAlertIconButton />; }
    return(
        <span>
            <IconButton
            sx={{
                "--IconButton-size": "30px"
            }}
            onClick={(event) => handleClick(event) }  
            >
                <ContentPasteGoIcon />
            </IconButton>
        </span>
    );
};