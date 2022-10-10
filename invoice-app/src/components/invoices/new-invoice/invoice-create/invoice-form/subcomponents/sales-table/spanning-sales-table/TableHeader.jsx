import { TableHead, TableCell, TableRow, Grid, Box } from "@mui/material"
import { blue, lightBlue, grey } from '@mui/material/colors';




export default function TableHeader( {children, enabled, disabled, toggelPrice } ) {
    // const {enabled, disabled} = children;
    children = [enabled, disabled]
    return(
        <TableHead 
            // sx={{ backgroundColor: grey[300] }}
        >
            {/* <TableRow> */}
            <Box
                className="App"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "25px auto 150px 70px 60px 125px 125px 125px 50px",
                    gridGap: 10,
                    paddingBottom: "10px"
                }}
            >
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
                    <TableCell>VAT</TableCell>
                </Grid>
                <Grid item xs={.75} >
                    <TableCell>QTY.</TableCell>
                </Grid>
                <TableCell>
                    {toggelPrice ? 'GROSS PRICE' : 'NET PRICE '}
                </TableCell>
                    <TableCell align="right">NET VALUE</TableCell>
                    <TableCell align="right">GROSS VALUE</TableCell>
                    <td align="center"> x </td>
            </Box>
            {/* </TableRow> */}
        </TableHead>
    );
}