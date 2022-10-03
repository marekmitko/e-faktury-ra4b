import { TextField, Box, Typography, Stack, Table, TableHead, TableRow, TableCell, TableFooter, TableBody, Switch } from "@mui/material"
import { Controller } from "react-hook-form";
import {ToggleOption } from "./AllCustomSwitches";
import { TogglePrice } from "./TogglePrice";



export default function SalesTableToolbar({entryPriceIsGross, setEntryPriceOnGross }){
    return(
        <Table> 
            <TableRow>
                <TableCell variant="head" >OPTIONS:&nbsp;</TableCell>
                <TableCell align="center">
                    <TogglePrice state={entryPriceIsGross} setState={setEntryPriceOnGross} />
                </TableCell>
                <TableCell align="center"> rodzaj płatności  </TableCell>
                <TableCell align="center"> <TextField size="small" />  </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={5}></TableCell>
            </TableRow>
            <TableFooter><TableCell sx={{ borderColor: "white" }}> <hr /></TableCell></TableFooter>
        </Table>
    );
} 