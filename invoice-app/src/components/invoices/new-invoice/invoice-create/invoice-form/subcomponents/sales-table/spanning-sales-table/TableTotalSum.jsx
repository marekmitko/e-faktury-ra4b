import { TableBody, TableRow, TableCell, TableHead } from "@mui/material"
import { SalesTotalSum } from "./total-sum-table/CalcTotalSum";

export default function TableTotalSum ({children}){
    
    return(
        <>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={7} sx={{border: 0}}>
                        {' '} 
                    </TableCell>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell align="right"/> 
                    <TableCell align="right">NETTO</TableCell>
                    <TableCell align="right">VAT</TableCell>
                    <TableCell align="right">BRUTTO</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    <TableCell colSpan={7} sx={{border: 0}} >
                        {' '}
                    </TableCell>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell variant="head" component="th" align="right">RAZEM</TableCell>
                    {children}
                </TableRow>
            </TableBody>
        </>
    );
}