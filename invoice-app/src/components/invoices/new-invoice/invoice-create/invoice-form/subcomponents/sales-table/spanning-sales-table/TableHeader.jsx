import { TableHead, TableCell, TableRow, Grid, Box, Stack } from "@mui/material"
import { blue, lightBlue, grey } from '@mui/material/colors';




export default function TableHeader( {children, enabled, disabled, toggelPrice } ) {
    // ?? Po co to było??? 
    // const {enabled, disabled} = children;
    // children = [enabled, disabled]
    return(
        <TableHead 
            // sx={{ size: "1em" }}
        >
            {/* <TableRow> */}
            <Box
                className="App"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "50px auto 150px 70px 60px 125px 125px 125px 50px",
                    gridGap: 10,
                    paddingTop: 1,
                    paddingBottom: .5,
                    marginBottom: 5,
                    borderColor: "lightgray !important",
                    borderBottom: 1, 
                    
                    // textAlign: 'center',
                    // justifyItems: 'center'
                }}
            >
                <Grid item xs="auto" p="1" >
                    <TableCell align="right" 
                    // sx={{ maxWidth: 50,  pr:0, border: 'none' }} 
                    />
                </Grid>
                <Grid item xs="auto">
                    <TableCell sx={{ minWidth: 250, border: 'none' }} >
                        <Stack direction='row' > 
                            SALE ITEM  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {children}
                        </Stack>
                    </TableCell>
                </Grid>
                <Grid item xs="auto" >
                    <TableCell sx={{ minWidth: 175, p: 0,  border: 'none' }} >TYPE</TableCell>
                </Grid>
                <Grid item xs={0.75}>
                    <TableCell sx={{   border: 'none' }}>VAT</TableCell>
                </Grid>
                <Grid item xs={.75} >
                    <TableCell  sx={{   border: 'none' }} >QTY.</TableCell>
                </Grid>
                <TableCell  sx={{   border: 'none' }} >
                    {toggelPrice ? 'GROSS PRICE' : 'NET PRICE '}
                </TableCell>
                    <TableCell align="right"  sx={{   border: 'none' }} >NET VALUE</TableCell>
                    <TableCell align="right"  sx={{   border: 'none' }} >GROSS VALUE</TableCell>
                    <td align="center"> </td>
            </Box>
            {/* </TableRow> */}
        </TableHead>
    );
}