import { TextField, Box, Typography, Stack, Grid, Table, TableHead, TableRow, TableCell, TableFooter, TableBody, Switch } from "@mui/material"
import { RadioButtonGroupInput } from "react-admin";
import { Controller } from "react-hook-form";
import {ToggleOption } from "./AllCustomSwitches";
import { TogglePrice } from "./TogglePrice";



export default function SalesTableToolbar({entryPriceIsGross, setEntryPriceOnGross }){
    return(
        <Table> 
            <TableRow align="right">
                <TableCell variant="head" >
                    {/* OPTIONS:&nbsp; */}
                </TableCell>
                <TableCell align="center">
                    <TogglePrice state={entryPriceIsGross} setState={setEntryPriceOnGross} />
                </TableCell>

                <TableCell align="center"></TableCell>
                    <Grid direction="column"   p="0" align="right"   >
                        <RadioButtonGroupInput sx={{ height:'100%', p: 0}}  source="payment_method" choices={[
                            { id: 'cash', name: 'Gotówka' },
                            { id: 'bank', name: 'Przelew' },
                        ]} />
                    </Grid>
                {/*<TableCell align="center"> <TextField size="small" />  </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={5}></TableCell> */}
            </TableRow>
            {/* <TableFooter><TableCell sx={{ borderColor: "white" }}></TableCell></TableFooter> */}
        </Table>
    );
} 