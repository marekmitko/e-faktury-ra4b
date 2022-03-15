import { ShowBase, SimpleShowLayout,  RecordContextProvider, TextField,  } from 'react-admin';
import { Card } from '@mui/material';

// wywołuje useListController, umieszcza wynik w ListContext, a następnie renderuje jego dziecko.
// sprawdź czy tak to może być - czy należy użyć ResourceContextProvider & RecordContextProvider


// Albo moge użyć useGetOne(...) 

export const ShowSellerCard = ({ userResource, userId, actions, children }) => (
    <ShowBase  resource={userResource} id={userId}>
        <div>
            <Card>
                <SimpleShowLayout>
                    <TextField label="Title" source="title" />
                    <TextField source="id" />
                    <TextField source="fullName" />
                    <TextField source="email" />
                     {() => console.log("dasda",userResource)} 
                    {children}
                </SimpleShowLayout>
            </Card>
        </div>
    </ShowBase>
);