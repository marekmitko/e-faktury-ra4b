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

export const EfaTableFooter = () => {
    return (
        <TableFooter >
            <TableRow>
                <TablePagination
                // rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                // colSpan={3}
                // count={rows.length}
                // rowsPerPage={rowsPerPage}
                // page={page}
                // SelectProps={{
                //     inputProps: {
                //         'aria-label': 'rows per page',
                //     },
                //     native: true,
                // }}
                // onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions} 
                />
            </TableRow>
        </TableFooter>
    );
};