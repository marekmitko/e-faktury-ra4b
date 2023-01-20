import React from "react";

import { Container, Box, Paper, TableContainer, Table } from '@mui/material';













export default function JoyTableContainer({children}) {

    return (
        <Container 
            // maxWidth="md"
        >
            <h3 style={{ textAlign: "center" }}>Tabela Sprzedaży</h3>
            {/* <Box sx={{ width: "100%" }}>  */}
            <Paper sx={{ width: "100%", mb: 2, mx: 0 }} >
            {/* <EnhancedTableToolbar numSelected={selected.length} />  */}
                <TableContainer   
                    sx={{ borderRadius: 5,
                        mx: 0, maxWidth: '100%'
                            // margin: "10px 10px", 
                    }}
    >
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
