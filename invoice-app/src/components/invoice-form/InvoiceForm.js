import * as React from 'react';
import { Datagrid, DateField, TextField, Create, List, Edit, useResourceContext, ResourceContextProvider } from 'react-admin';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

export const InvoiceForm = () => (
    <List>
        <>
            <ResourceName /> {/* renders 'posts' */}
            <Datagrid>
                <TextField source="title" />
                <DateField source="published_at" />
            </Datagrid>
            <ResourceContextProvider value="userProfile">
        <ResourceName /> {/* renders 'comments' */}
            <Datagrid>
            <TextField source="myCompany" />
            <TextField source="myFullname" />
            </Datagrid>
        </ResourceContextProvider>
        </>
    </List>
)