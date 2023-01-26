import { Stack } from '@mui/material';
import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required, ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';

const SaleItemCreate = () => (
    <Create>
        <SimpleForm>
            <Stack direction="row" spacing={2} >
                <TextInput source="sales_category_name" />
                <NumberInput source="category_tax" />
            </Stack>
                <ArrayInput source="category_item_list">
                    <SimpleFormIterator inline>
                        {/* <TextInput source="id" /> */}
                        <TextInput source="name" />
                    </SimpleFormIterator>
                </ArrayInput>
        </SimpleForm>
    </Create>
);
















const PreSaleItemCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="teaser" multiline={true} label="Short description" />
            {/* <RichTextInput source="body" /> */}
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);

export default SaleItemCreate;



// // in src/App.js
// import * as React from 'react';
// import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

// import { PostCreate } from './posts';

// const App = () => (
//     <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
//         <Resource name="posts" create={PostCreate} />
//     </Admin>
// );

// export default App;