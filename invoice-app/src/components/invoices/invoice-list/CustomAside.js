import { Typography } from '@mui/material';
import { useListContext } from 'react-admin';



// note https://github.com/marmelab/react-admin/blob/v4.0.1/docs/List.md
const Aside = () => {
    const { data, isLoading } = useListContext();
    if (isLoading) return null;
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Posts stats</Typography>
            <Typography variant="body2">
                Total views: {data.reduce((sum, post) => sum + post.views, 0)}
            </Typography>
        </div>
    );
};