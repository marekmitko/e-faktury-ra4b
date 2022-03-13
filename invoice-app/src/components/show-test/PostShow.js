import { useShowController, useResourceContext, Show, SimpleShowLayout,  RecordContextProvider, TextField } from 'react-admin';



export const PostShow = ( ) => {
   
 

    return (
        <RecordContextProvider value='profile' >
            <Show  >

                <SimpleShowLayout>
                    <TextField source="myCompany" />
                    <TextField source="myFullname" />
                </SimpleShowLayout>
            </Show>
        </RecordContextProvider>
    );
};