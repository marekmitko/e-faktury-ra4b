import * as React from 'react';
import { Datagrid, DateField, TextField, Create, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';
// import { PostShow } from '../show-test/PostShow';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

export const InvoiceForm = () => (
    <List>
        <>
            {/* <PostShow /> */}
            <ResourceName /> {/* renders 'posts' */}
            <Datagrid>
                <TextField source="title" />
                <DateField source="published_at" />
            </Datagrid>
            <ResourceContextProvider value="#/profile/MyProfile">
                <ResourceName /> {/* renders 'comments' */}
                <Datagrid>
                    <TextField source="myCompany" />
                    <TextField source="myFullname" />
                </Datagrid>
            </ResourceContextProvider>
        </>
    </List>
)