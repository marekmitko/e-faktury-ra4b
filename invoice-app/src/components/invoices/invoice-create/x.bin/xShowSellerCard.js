import { ShowBase, SimpleShowLayout,  RecordContextProvider, TextField,  } from 'react-admin';
import { Card } from '@mui/material';

// wywołuje useListController, umieszcza wynik w ListContext, a następnie renderuje jego dziecko.
// sprawdź czy tak to może być - czy należy użyć ResourceContextProvider & RecordContextProvider


// Albo moge użyć useGetOne(...) 

export const BinShowSellerCard = ({ userResource, userId, actions, children }) => (
    <ShowBase  resource={userResource} id={userId}>
        <SimpleShowLayout>
            <TextField label="company" source="company" />
            <TextField label="name" source="fullName" />
            <TextField label="NIP" source="nip" />
            <TextField label="Street" source="address.street" />
        </SimpleShowLayout>
    </ShowBase>
);