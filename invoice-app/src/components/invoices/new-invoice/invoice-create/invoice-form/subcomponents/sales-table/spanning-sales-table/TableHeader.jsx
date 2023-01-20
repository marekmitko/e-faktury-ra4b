import { TableHead, TableCell, TableRow, Grid, Box, Stack } from "@mui/material"
import { blue, lightBlue, grey } from '@mui/material/colors';
import { tableHeadClasses } from '@mui/material/TableHead';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import PriceSwitchJoyButton from "../joy-sales-table/PriceSwitchJoyButton";



const StyledTableCellClasses = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontWeight: '450',
      },

    }));




export default function TableHeader( {children, enabled, disabled, toggelPrice } ) {
    // ?? Po co to było??? 
    // const {enabled, disabled} = children;
    // children = [enabled, disabled]
    return(
        <TableHead 
            // sx={{ m: 0, p: 0 }}
            sx={{ width: '100%', px: 0, mx: 0  }}
        >
            {/* <TableRow> */}
            <Box
                className="App"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "50px auto 150px 70px 60px 125px 125px 125px 50px",
                    gridGap: 10,
                    marginBottom: 1,
                    marginTop: "auto",
                    borderBottom: 1, 
                    width: '100%', 
                    paddingTop: ".5em",
                    paddingBottom: ".5em", 
                    paddingLeft: 0, 
                    // bgcolor:  lightBlue[300]
                    // bgcolor:  blue[400],
                    bgcolor:  "#054da7",
                    // color:  "white",
                    borderColor: "white"
                    
                    // textAlign: 'center',
                    // justifyItems: 'center'
                }}
            >
                <Grid item xs="auto" p="1" >
                    <StyledTableCellClasses align="right" 
                    // sx={{ maxWidth: 50,  pr:0, border: 'none' }} 
                    />
                </Grid>
                <Grid item xs="auto">
                    <StyledTableCellClasses sx={{ minWidth: 250, border: 'none', }} >
                        <Stack justifyContent="flex-start" direction='row' > 
                            POZYCJA SPRZEDAŻY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {children}
                        </Stack>
                    </StyledTableCellClasses>
                </Grid>
                <Grid item xs="auto" >
                    <StyledTableCellClasses sx={{ minWidth: 175, p: 0,  border: 'none' }} >TYP</StyledTableCellClasses>
                </Grid>
                <Grid item xs={0.75}>
                    <StyledTableCellClasses sx={{   border: 'none' }}>VAT</StyledTableCellClasses>
                </Grid>
                <Grid item xs={.75} >
                    <StyledTableCellClasses  sx={{   border: 'none' }} >ILOŚĆ</StyledTableCellClasses>
                </Grid>
                {/* <StyledTableCellClasses  sx={{   border: 'none' }} > */}
                    <td>
                        <PriceSwitchJoyButton />
                    </td>
                    {/* {toggelPrice ? 'CENA BRUTTO' : 'CENA NETTO'} */}
                {/* </StyledTableCellClasses> */}
                    <StyledTableCellClasses align="right"  sx={{   border: 'none' }} >SUMA NETTO</StyledTableCellClasses>
                    <StyledTableCellClasses align="right"  sx={{   border: 'none' }} >SUMA BRUTTO</StyledTableCellClasses>
                    <td align="center"> </td>
            </Box>
            {/* </TableRow> */}
        </TableHead>
    );
}