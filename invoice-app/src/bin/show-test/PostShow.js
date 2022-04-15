import { useShowController, useResourceContext, Title, DateField, Show, ShowBase, SimpleShowLayout,  RecordContextProvider, TextField, Resource, Create } from 'react-admin';
import { Card } from '@mui/material';


// export const PostShow = ({componet, children}, {id, resource, ...rest}) => {
   
 

//     return (
  
//             <Show  title={null} id='MyProfile' resource='profile' componet={<Card>{children}</Card>} >

//                 <SimpleShowLayout>
//                     <TextField source="myCompany" />
//                     <TextField source="myEmail" />
//                     <TextField source="id" />
//                     <TextField source="fullName" />
//                     <TextField source="email" />
//                 </SimpleShowLayout>
//             </Show>

//     );
// };

export const PostShow = ({children}) => (
    <Create >
            <h4>Jak</h4>
    <ShowBase id="MyProfile" resource='profile' >
        <div>
            {/* <Title title="Book Show" /> */}
            <h4>Jak</h4>
            <Card>
                <SimpleShowLayout>
                    <TextField label="Title" source="title" />
                    <DateField label="Publication Date" source="published_at" />
                    <TextField source="id" />
                    <TextField source="fullName" />
                    <TextField source="email" />
                </SimpleShowLayout>
            </Card>
        </div>
    </ShowBase>
    </Create>
);