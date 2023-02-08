import { TableBody, TableRow, TableHead } from "@mui/material"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
// import { SalesTotalSum } from "./total-sum-table/CalcTotalSum";

export default function TableTotalSum ({children}){
    

    const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontWeight: '450',
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        },
    }));
    
    const StyledTableCell = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        
        fontWeight: '550',
        },
        // hide last border
        '&th': {
        border: 0,
        },
    }));



    return(
        <>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={7} sx={{border: 0}}>
                        {' '} 
                    </TableCell>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell align="right" sx={{border: 0}} /> 
                    <StyledHeaderCell align="center">NETTO</StyledHeaderCell>
                    <StyledHeaderCell align="center">VAT</StyledHeaderCell>
                    <StyledHeaderCell align="center">BRUTTO</StyledHeaderCell>
                    <TableCell sx={{border: 0}}/>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    <TableCell colSpan={7} sx={{border: 0}} >
                        {' '}
                    </TableCell>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <StyledTableCell  sx={{border: 0, p: 1, m: 1  }} variant="head" component="th" align="right"><div style={{marginTop: "3px", textAlign: "right"}}>SUMA:</div></StyledTableCell>
                    {children}
                    <TableCell sx={{border: 0}}/>
                </TableRow>
            </TableBody>
        </>
    );
}