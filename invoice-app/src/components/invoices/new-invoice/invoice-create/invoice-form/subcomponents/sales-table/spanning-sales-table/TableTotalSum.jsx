import { TableBody, TableRow, TableCell, TableHead } from "@mui/material"
import { SalesTotalSum } from "./total-sum-table/CalcTotalSum";

export default function TableTotalSum ({children}){
    
    return(
        <>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell align="center"/> 
                    <TableCell align="center">NET</TableCell>
                    <TableCell align="center">TAX</TableCell>
                    <TableCell align="center">GROSS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell align="right">Total Sum</TableCell>
                    {children}
                </TableRow>
                {/* <TableRow>
                    <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={2} >Tax</TableCell>
                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell colSpan={5} sx={{border: 0}}/>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>  */}
            </TableBody>
        </>
    );
}