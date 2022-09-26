import { TableHead, TableCell, TableRow, Grid } from "@mui/material"
import { blue, lightBlue, grey } from '@mui/material/colors';




export default function TableHeader( {children, enabled, disabled, toggelPrice } ) {
    // const {enabled, disabled} = children;
    children = [enabled, disabled]
    return(
        <TableHead 
            // sx={{ backgroundColor: grey[300] }}
        >
            <TableRow>
            <Grid container spacing={1} padding={0.5} pl={1} justifyContent="center" >
                <Grid item xs="auto"  >
                    <TableCell align="center" sx={{ maxWidth: 25,  pr:0  }} />
                </Grid>
                <Grid item xs="auto">
                    <TableCell sx={{ minWidth: 250}} >Desc</TableCell>
                </Grid>
                <Grid item xs="auto" >
                    <TableCell sx={{ minWidth: 175, p: 0  }} >Type</TableCell>
                </Grid>
                <Grid item xs={0.75}>
                    <TableCell>Qty.</TableCell>
                </Grid>
                <Grid item xs={.75} >
                    <TableCell>VAT</TableCell>
                </Grid>
                <Grid item xs={1.5} >
                <TableCell>
                    {toggelPrice ? 'GROSS PRICE' : 'NET PRICE '}
                </TableCell>
               {/* { toggelPrice ? <td>GROSS PRICE</td> : <td>NET PRICE</td> } */}
                    {/* {children[0] ? (enabled) : null}
                </Grid>
                <Grid item xs={1.5} >
                    {children[1] ? (disabled) : null} */}
                </Grid>
                <Grid item xs={1} >
                    <TableCell align="right">Net Value</TableCell>
                </Grid>
                <Grid item xs={1} >
                    <TableCell align="right">Gross Value</TableCell>
                </Grid>
                <Grid item xs={1} >
                    <TableCell align="right"></TableCell>
                </Grid>
            </Grid>
            </TableRow>
        </TableHead>
    );
}