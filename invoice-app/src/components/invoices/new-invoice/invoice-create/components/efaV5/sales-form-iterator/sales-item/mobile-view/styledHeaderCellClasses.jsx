import { TableHead, TableCell, TableRow, Grid, Box, Stack } from "@mui/material"
import { blue, lightBlue, grey } from '@mui/material/colors';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';




export const StyledTableCellClasses = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontWeight: '450',
        paddingTop: 0, paddingBottom: 0,
        textTransform: 'uppercase'
      },

    }));

export const SalesTh = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontWeight: '450',
        padding: 0,
        textTransform: 'uppercase',
        border: 'none', 
        // flex: '1 1 auto', // auto zamiast width: 100%
        width: "100%",
      },

    }));
