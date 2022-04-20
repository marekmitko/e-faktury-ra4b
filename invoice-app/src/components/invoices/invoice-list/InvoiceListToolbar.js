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
    DateInput
} from 'react-admin';
import { Stack, Divider } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

// import fakerestDataProvider from 'ra-data-fakerest';

// export default { title: 'ra-ui-materialui/list/filter/FilterButton' };

const data = {
    posts: []
};

const invoiceFilters = [
    <DateInput source="published_at_gte" label="Released after "  alwaysOn  />,
    <DateInput source="published_at_lte" label="Released before"  alwaysOn />,
    <DateInput source="dataTwoAdd14_gte" label="data due after "  alwaysOn  />,
    <DateInput source="dataTwoAdd14_lte" label="data due before"  alwaysOn />,
];

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="company" source="company" 
        // defaultValue="Hello, World!"
    />,
];
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-list-filter-filterbutton--basic


export const TopTestListToolbar = () => (
    <Stack  direction="row" justifyContent="space-between" 
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ bgcolor: lightBlue[50] }}
    >
        <FilterForm filters={invoiceFilters} />
        {/* <div>
            <FilterButton filters={postFilters} />
            <CreateButton />
        </div> */}
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