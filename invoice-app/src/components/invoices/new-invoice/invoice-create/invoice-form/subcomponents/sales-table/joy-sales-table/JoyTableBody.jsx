import React from "react";

import { Container, Box, Paper, TableContainer, Table } from '@mui/material';













export default function JoyTableBody({children}) {

    return (
        <Container 
            // maxWidth="md"
        >
            <h3 style={{ textAlign: "center" }}>Tabela Sprzedaży</h3>
            {/* <Box sx={{ width: "100%" }}>  */}
            <Paper sx={{ width: "100%", mb: 2 }} >
            {/* <EnhancedTableToolbar numSelected={selected.length} />  */}
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table"
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        // size={dense ? "small" : "medium"}
                    >
                        {children ? (children) : null }
                    </Table>
                </TableContainer>

            </Paper>
            {/* </Box> */}
        </Container>
        );
}
