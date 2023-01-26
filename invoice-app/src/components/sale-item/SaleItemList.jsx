import { useState } from 'react';
import { Title, useGetList, ArrayField, ChipField, Datagrid, List, SingleFieldList, 
            TextField,
            TopToolbar,FilterButton,  CreateButton, ExportButton,Button, EditButton,
} from 'react-admin';
import {
    Card,
    Toolbar,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Stack,
} from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import IconEvent from '@mui/icons-material/Event';



const ListActions = () => (

    <Stack sx={{ 
            // marginLeft: "5px", marginRight: "auto", 
                textAlign: "left" 
            }}
    // direction="row"
    // justifyContent="flex-start"
    // alignItems="flex-start"
    >
            <TopToolbar>
            {/* <FilterButton/> */}
            <CreateButton/>
            <ExportButton/>
            {/* Add your custom actions */}
            <Button
                onClick={() => { alert('Your custom action'); }}
                label="Show calendar"
                >
                <IconEvent/>
            </Button>
    </TopToolbar>
        </Stack>    
);





const SaleItemList = () => (
    <List actions={<ListActions/>}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <TextField source="sales_category_name" />
            <TextField source="category_tax" />
            <ArrayField source="category_item_list">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

const PreSaleItemList = () => {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 10;
    const { data, total, isLoading } = useGetList('books', {
        filter: { q: filter },
        pagination: { page, perPage },
        sort: { field: 'id', order: 'ASC' }
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Title title="Book list" />
            <MuiTextField
                label="Search"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                variant="filled"
                size="small"
                margin="dense"
            />
            <Card>
                <Table sx={{ padding: 2 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(book => (
                            <TableRow key={book.id}>
                                <TableCell>{book.id}</TableCell>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
            <Toolbar>
                {page > 1 && <MuiButton onClick={() => setPage(page - 1)}>Previous page</MuiButton>}
                {page < total / perPage && <MuiButton onClick={() => setPage(page + 1)}>Next page</MuiButton>}
            </Toolbar>
        </div>
    );
};

export default SaleItemList;