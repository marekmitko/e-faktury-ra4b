import * as React from 'react';
import { useState } from 'react';
import { Title, useGetList } from 'react-admin';
import {
    Card,
    TextField,
    Button,
    Toolbar,
    Table, TableHead, TableRow, TableBody, TableCell,
    CssBaseline, Container, GlobalStyles, TableContainer, TableFooter, TablePagination,
} from '@mui/material';
import { EfaTableFooter } from './other/EfaTableFooter';

const EfaSalesTable = React.forwardRef((props, ref ) => {
// export const EfaSalesTable = React.forwardRef((props, ref) => {
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
            {/* <DatagridContextProvider value={contextValue}> */}
            {/* <DatagridRoot sx={sx} className={DatagridClasses.root}> */}
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <CssBaseline />
            <Container
                maxWidth="xl"
                component="main"
            >
                <Title title="Book list" />
                <TextField
                    label="Search"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    variant="filled"
                    size="small"
                    margin="dense"
                />
                <TableContainer >


                    <Card>
                        <Table sx={{ padding: 2 }} size="small" aria-label="caption table"
                                ref={ref}
                                // className={clsx(DatagridClasses.table, className)}
                                size={size}
                                // {...sanitizeRestProps(rest)}
                        >
                            
                            
                            
                            <caption>A basic table example with a caption</caption>
                            <TableHead>
                            {/* cloneElement(element, props, children)  */}
                            {isValidElement(header)? cloneElement(
                                header,
                                {
                                    children,
                                    sort,
                                    data,
                                    hasExpand: !!expand,
                                    hasBulkActions,
                                    isRowSelectable,
                                    onSelect,
                                    resource,
                                    selectedIds,
                                    setSort,
                                },
                                children
                            ) : null }


                                <TableRow />      {/* header, */}
                            </TableHead>
                            <TableBody>
                           {/* cloneElement(element, props, children)  */}
                            {isValidElement(body)? cloneElement(
                                body,
                                {
                                    expand,
                                    rowClick,
                                    data,
                                    hasBulkActions,
                                    hover,
                                    onToggleItem: handleToggleItem,
                                    resource,
                                    rowStyle,
                                    selectedIds,
                                    isRowSelectable,
                                },
                                children
                                ) : null }

                                {/* {data.map(book => (
                                    <TableRow key={book.id}>
                                        <TableCell>{book.id}</TableCell>
                                        <TableCell>{book.title}</TableCell>
                                        <TableCell>{book.author}</TableCell>
                                        <TableCell>{book.year}</TableCell>
                                    </TableRow>
                                ))} */}



                            </TableBody>
                            <EfaTableFooter /> 
                        </Table>
                    </Card>
                    <Toolbar>
                        {page > 1 && <Button onClick={() => setPage(page - 1)}>Previous page</Button>}
                        {page < total / perPage && <Button onClick={() => setPage(page + 1)}>Next page</Button>}
                    </Toolbar>
                </TableContainer>
            </Container>
        </div>
    );
});
    const sanitizeRestProps = props => (
    Object.keys(sanitizeListRestProps(props))
        .filter(propName => !injectedProps.includes(propName))
        .reduce((acc, key) => ({ ...acc, [key]: props[key] }), {})
    );