import { TableHead, TableCell, TableRow, Grid, Box, Stack } from "@mui/material"
import { blue, lightBlue, grey } from '@mui/material/colors';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { useTranslate } from "react-admin";
import { StyledTableCellClasses } from "./styledHeaderCellClasses";






export default function TableHeader( {children, sxContentRow, enabled, disabled, toggelPrice } ) {
    const translate = useTranslate();
    return(
        <TableHead 
            // sx={{ m: 0, p: 0 }}
            sx={{ width: '100%', px: 0, mx: 0  }}
        >
            {/* <TableRow> */}
            <Box
                className="App"
                sx={ { ...sxContentRow, width: '100%' }}
            >
                    <StyledTableCellClasses sx={{  gridArea: 'name', width: "100%", pl: 1.5, minWidth: 100, border: 'none', }} >
                        {translate('myroot.form.label.header_salesTable.itemName')}
                    </StyledTableCellClasses>
                    <StyledTableCellClasses sx={{ gridArea: 'type', width: "100%",  p: 0,  border: 'none' }} >
                        {translate('myroot.form.label.header_salesTable.itemType')}
                    </StyledTableCellClasses>
                    <StyledTableCellClasses  sx={{   gridArea: 'count', width: "100%", border: 'none' }} >
                        {translate('myroot.form.label.header_salesTable.itemQty')}
                    </StyledTableCellClasses>
                    <StyledTableCellClasses sx={{   gridArea: 'tax', width: "100%",p: 0, border: 'none'  }}>
                        {translate('myroot.form.label.header_salesTable.itemTax')}
                    </StyledTableCellClasses>
                    <StyledTableCellClasses align="right"  sx={{ gridArea: 'price', width: "100%", border: 'none'  }} >
                        {children}
                    </StyledTableCellClasses>
                    <StyledTableCellClasses align="right"  sx={{   border: 'none' }} >
                        {translate('myroot.form.label.header_salesTable.sumNetPrice')}
                    </StyledTableCellClasses>
                    <StyledTableCellClasses align="right"  sx={{   border: 'none' }} >
                        {translate('myroot.form.label.header_salesTable.sumGrossPrice')}
                    </StyledTableCellClasses>
                    <td align="center"> </td>
            </Box>
        </TableHead>
    );
}