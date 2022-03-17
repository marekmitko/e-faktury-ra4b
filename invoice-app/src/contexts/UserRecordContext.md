


### Dla testów w ramach sprawdzenia zastosowałem 
1. useResourceContext()
- zgodnie z instrukcją 
https://marmelab.com/react-admin/doc/4.0/Resource.html#resource-context


import * as React from 'react';
import { Datagrid, DateField, TextField, List, useResourceContext } from 'react-admin';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

const PostList = () => (
    <List>
        <>
            <ResourceName /> {/* renders 'posts' */}
            <Datagrid>
                <TextField source="title" />
                <DateField source="published_at" />
            </Datagrid>
        </>
    </List>
)