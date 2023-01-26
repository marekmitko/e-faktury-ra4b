import { useParams } from 'react-router-dom';
import { useGetOne, useRedirect, Title,  ArrayField, Datagrid, Show, SimpleShowLayout, TextField  } from 'react-admin';
import { Card, Stack, Typography } from '@mui/material';



const SaleItemShow = () => (
    <Show>
        <SimpleShowLayout>
            {/* <TextField source="id" /> */}
            {/* <Stack direction="row" spacing={2} > */}
                <TextField source="sales_category_name" />
                <TextField source="category_tax" />
            {/* </Stack> */}
            <ArrayField source="category_item_list">
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);















/**
 * Fetch a book from the API and display it
 */
const PreSaleItemShow = () => {
    const { id } = useParams(); // this component is rendered in the /books/:id path
    const redirect = useRedirect();
    const { data, isLoading } = useGetOne(
        'books',
        { id },
        // redirect to the list if the book is not found
        { onError: () => redirect('/books') }
    );
    // if (isLoading) { return <Loading />; }
    if (isLoading) { return <b>"Error"</b>; }
    return (
        <div>
            <Title title="Book Show"/>
            <Card>
                <Stack spacing={1}>
                    <div>
                        <Typography variant="caption" display="block">Title</Typography>
                        <Typography variant="body2">{data.title}</Typography>
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

export default SaleItemShow;