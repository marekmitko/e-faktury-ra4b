import React from 'react'
import { Title, useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import Typography from '@mui/material/Typography';

    const { id } = useParams();
    const [create] = useCreate();
    const postSave = (data) => {
        create('posts', { id, data });
    };
    