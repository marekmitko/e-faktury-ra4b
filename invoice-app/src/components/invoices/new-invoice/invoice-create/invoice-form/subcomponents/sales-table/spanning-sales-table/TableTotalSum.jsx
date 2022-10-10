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
                    <TableCell align="right">NET</TableCell>
                    <TableCell align="right">TAX</TableCell>
                    <TableCell align="right">GROSS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    <TableCell colSpan={7} sx={{border: 0}} >
                        {' '}
                    </TableCell>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell variant="head" component="th" align="right">Total Sum</TableCell>
                    {children}
                </TableRow>
            </TableBody>
        </>
    );
}