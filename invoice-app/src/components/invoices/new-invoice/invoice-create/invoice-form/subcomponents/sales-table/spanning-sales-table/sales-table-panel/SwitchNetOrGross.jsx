import { TextField, Box, Typography, Stack, Grid, Table, TableHead, TableRow, TableCell, TableFooter, TableBody, Switch } from "@mui/material"
import { RadioButtonGroupInput } from "react-admin";
// import { Controller } from "react-hook-form";
import {ToggleOption } from "./AllCustomSwitches";
import { TogglePrice } from "./TogglePrice";



export default function SwitchNetOrGross({entryPriceIsGross, setEntryPriceOnGross }){
    return(
        <TogglePrice state={entryPriceIsGross} setState={setEntryPriceOnGross} />
    );
} 