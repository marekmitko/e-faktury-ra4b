import { TextField, Box, Typography, Stack, Grid, Table, TableHead, TableRow, TableCell, TableFooter, TableBody, Switch } from "@mui/material"

import { TogglePrice } from "./TogglePrice";



export default function SwitchNetOrGross({entryPriceIsGross, setEntryPriceOnGross }){
    return(
        <TogglePrice state={entryPriceIsGross} setState={setEntryPriceOnGross} />
    );
} 