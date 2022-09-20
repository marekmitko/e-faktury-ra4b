import { TableHead, TableCell, TableRow } from "@mui/material"





export default function TableHeader() {
    return(
        <TableHead>
            <TableRow>
                <TableCell align="center" sx={{ maxWidth: 15,  p: 0 }} />
                <TableCell>Desc</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Qty.</TableCell>
                <TableCell>Net Price</TableCell>
                <TableCell>VAT</TableCell>
                <TableCell align="right">Gross Price</TableCell>
                <TableCell align="right">Net Value</TableCell>
                <TableCell align="right">Gross Value</TableCell>
                <TableCell align="right">X</TableCell>
            </TableRow>
        </TableHead>
    );
}