import { ShowBase, SimpleShowLayout,  RecordContextProvider, TextField, useGetOne  } from 'react-admin';
import { Card } from '@mui/material';

// wywołuje useListController, umieszcza wynik w ListContext, a następnie renderuje jego dziecko.
// sprawdź czy tak to może być - czy należy użyć ResourceContextProvider & RecordContextProvider


// Albo moge użyć useGetOne(...) 


export const FixedSellerCard = ({ userResource, userId, actions, children }) => {
    const { data: profile,
        //  isLoading, error 
        } = useGetOne(userResource, { id: userId });

    // if (isLoading) return <Loading />;
    // if (error) return <Error />;
    if (!profile) return null;

return (
    <div>
            {/*  <ShowBase  resource={userResource} id={userId}> */}
            <Card>
                <center>
                <p>{profile.id}</p>
                <p>{profile.nickname}</p>
                <p>{profile.email}</p>

                </center>
            </Card>
                    {/* </ShowBase> */}
        </div>
);

};