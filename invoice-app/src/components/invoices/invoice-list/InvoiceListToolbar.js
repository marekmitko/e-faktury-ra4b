import * as React from 'react';
import { ListBase } from 'ra-core';
import {
    Admin,
    Resource,
    CreateButton,
    Datagrid,
    FilterButton,
    FilterForm,
    Pagination,
    TextField,
    TextInput,
} from 'react-admin';
import { Stack } from '@mui/material';
// import fakerestDataProvider from 'ra-data-fakerest';

// export default { title: 'ra-ui-materialui/list/filter/FilterButton' };

const data = {
    posts: []
};

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="company" source="company" 
        // defaultValue="Hello, World!"
    />,
];
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-list-filter-filterbutton--basic


export const TopTestListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} />
            <CreateButton />
        </div>
    </Stack>
);

const PostList = () => (
    <ListBase>
        <TopTestListToolbar />
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
        <Pagination />
    </ListBase>
);