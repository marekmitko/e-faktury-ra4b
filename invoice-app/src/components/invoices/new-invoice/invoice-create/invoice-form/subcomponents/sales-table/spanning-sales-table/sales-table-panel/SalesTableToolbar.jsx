import { TextField, Box, Typography, Stack, Table, TableHead, TableRow, TableCell, TableFooter, TableBody, Switch } from "@mui/material"
import { Controller } from "react-hook-form";
import {ToggleOption } from "./AllCustomSwitches";
import { TogglePrice } from "./TogglePrice";



export default function SalesTableToolbar({control, setValue, record, toggelPrice, setToggelPrice }){
    return(
        <Table> 
            <TableRow>
                <TableCell variant="head" >OPTIONS:&nbsp;</TableCell>
                <TableCell align="center">
                    <TogglePrice state={toggelPrice} setState={setToggelPrice} />
                </TableCell>
                <TableCell align="center"> rodzaj płatności  </TableCell>
                <TableCell align="center"> <TextField size="small" />  </TableCell>
                {/* <TableCell>
                    <Controller
                        control={control}
                        name="switch-form"
                        defaultValue={false}
                        render={({ value: valueProp, onChange }) => {
                        return (
                            <Switch
                            value={valueProp}
                            onChange={(event, val) => {
                                if (val) {
                                setValue(`input2`, record.price);
                                }
                                return onChange(val);
                            }}
                            />
                        );
                        }}
                    />
                </TableCell> */}
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={5}></TableCell>
            </TableRow>
            <TableFooter><TableCell sx={{ borderColor: "white" }}> <hr /></TableCell></TableFooter>
        </Table>
    );
} 