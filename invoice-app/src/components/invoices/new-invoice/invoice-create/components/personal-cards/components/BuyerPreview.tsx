import * as React from 'react';
// import { useQueryClient } from 'react-query';
import {
    useGetOne, // 
    SimpleShowLayout,
    TextField,
    ResourceContextProvider,
    Identifier,
    RaRecord,
} from 'react-admin';

const BuyerPreview = <RecordType extends RaRecord = any>({
    id, resource
}: {
    id: Identifier;
    resource: string;
}) => {
    // const queryClient = useQueryClient();
   
   
    // const record = queryClient.getQueryData<RecordType>([
    //     resource,
    //     'getOne',
    //     { id: String(id) },
    // ]);
    
    const { data } = useGetOne(
        resource,
        { id: String(id) },
    );


    return (
        <ResourceContextProvider value={resource}>
            <SimpleShowLayout record={data}>
                {/* <TextField source="id" /> */}
                {/* <TextField source="title" /> */}
                <TextField source="company" />
            </SimpleShowLayout>
        </ResourceContextProvider>
    );
};

export default BuyerPreview;
