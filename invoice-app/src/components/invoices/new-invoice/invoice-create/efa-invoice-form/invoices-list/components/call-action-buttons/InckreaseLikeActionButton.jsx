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

// set params when calling the hook

export const IncreaseLikeActionButton = () => {
    const record = useRecordContext(); // przekazać props, chyba nie muszę bo useRecord pobiera z context 
    const diff = { likes: record.likes + 1 };
    const [update, { isLoading, error }] = useUpdate(
        'likes',
        { id: record.id, data: diff, previousData: record }
    );
    const handleClick = () => {
        update()
    }
    if (error) { return <p>ERROR</p>; }
    return <button disabled={isLoading} onClick={handleClick}>Like</button>;
};