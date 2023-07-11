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
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';


// set params when calling the hook

const ErrorAlertIconButton = () => (
    <span> 
        <IconButton
            sx={{
                "--IconButton-size": "30px"
            }}
            onClick={(event) => {
                    event.stopPropagation();
                    alert("❌Dokumenty nie zostały przesłane");
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

const SuccessAlertIconButton = () => (
    <span> 
        <IconButton
            sx={{
                "--IconButton-size": "30px",
                color: 'rgba(38, 198, 218, 1)',
            }}
            onClick={(event) => {
                    event.stopPropagation();
                    alert("✅Dokumeny zostały przesłane");
                } 
            }  
            variant='plain'
            // color='danger'

        >
            <FileDownloadDoneIcon />
            {/* <SdCardAlertIcon /> */}
        </IconButton>
        </span>
);

export const ErrorSpecialSubmitActionButton = (props) => {
    const record = useRecordContext(props); // przekazać props, chyba nie muszę bo useRecord pobiera z context 
    const diff = { ...record, a_TEST_file_inkasso: true };
    const [update, { isLoading, error }] = useUpdate(
        'error-test', //Om? brak zasobu - test 
        { id: record.id, data: diff, previousData: record }
    );
    const handleClick = (event) => {
        event.stopPropagation();
        console.log('previousState', record );
        update();
        console.log('previousState', record )
    }
    if (error) { return <ErrorAlertIconButton />; }
    if (record.a_TEST_file_inkasso) { return <SuccessAlertIconButton />; }
    return(
        <span>
            <IconButton
                sx={{ 
                    "--IconButton-size": "30px",
                    backgroundColor: 'transparent', color: 'primary.900', 
                    // borderRadius: '25px', 
                    padding: 0,
                    '&:hover': {
                            // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                            backgroundColor: 'primary.900',
                            color: '#fff'
                        },
                }} 
                onClick={(event) => handleClick(event, record) }  
            {...props}
            >
                <ContentPasteGoIcon />
            </IconButton>
        </span>
    );
};