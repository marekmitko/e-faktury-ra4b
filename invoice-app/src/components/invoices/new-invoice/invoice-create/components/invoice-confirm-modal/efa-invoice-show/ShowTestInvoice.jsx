import { Stack, Card } from '@mui/material';
import * as React from 'react';
import { Toolbar, Show, useRecordContext, DeleteWithConfirmButton, CreateButton, SaveButton, Datagrid, DateField, TextField, Create, DateInput, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider, Button } from 'react-admin';



const PostTitle = () => {
    const record = useRecordContext();
    return <span>{record.company}</span>;
};

export const ShowTestInvoice = () => (
    <Show emptyWhileLoading>
        <Card>
            <div>Title: <PostTitle /></div>
        </Card>
    </Show>
);