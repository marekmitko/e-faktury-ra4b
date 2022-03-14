import { useParams } from 'react-router-dom';
import { useGetOne, useRedirect, Title } from 'react-admin';
import { Card, Stack, Typography } from '@mui/material';

/**
 * Fetch a ProfilUser from the API and display it
 */
export const MyProfilUserShow = () => {
    const { id } = useParams(); // this component is rendered in the /profile/:id path
    const redirect = useRedirect();
    const { data } = useGetOne(
        'profile2',
        { id: 'MyProfile' },
        // redirect to the list if the book is not found
        { onError: () => redirect('/profile2') }
    );
    // if (isLoading) { return <Loading />; }
    return (
        <div>
            <Title title="Profile Show"/>
            <Card>
                <Stack spacing={1}>
                    <div>
                        <Typography variant="caption" display="block">Name</Typography>
                        <Typography variant="body2">{data.nickname}</Typography>
                    </div>
                    <div>
                        <Typography variant="caption" display="block">Company</Typography>
                        <Typography variant="body2">{data.company}</Typography>
                    </div>
                    <div>
                        <Typography variant="caption" display="block">Publication Date</Typography>
                        <Typography variant="body2">{new Date(data.published_at).toDateString()}</Typography>
                    </div>
                </Stack>
            </Card>
        </div>
    );
};