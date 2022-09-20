
import {   TableCell} from "@mui/material";
import {   Controller} from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { NumberInput } from "react-admin";




export function SelectItemSalesType({control, name}) {
    return(
        <TableCell   align="left"   >
            <Controller
                name={name}
                render={({ field }) => (
                    <Select
                        sx={{ minWidth: 150, p: 0  }}
                        size="small" variant="outlined"  {...field}>
                        <MenuItem value={'Usługi'}>Usługi</MenuItem>
                        <MenuItem value={'Towar'}>Towar</MenuItem>
                        <MenuItem value={'Wynajem'}>Wynajem</MenuItem>
                        <MenuItem value={'Prowizja'}>Prowizja</MenuItem>
                        <MenuItem value={'Sprzedaż'}>Sprzedaż</MenuItem>
                        <MenuItem value={'Sprzedaż 0% MVA'}>Sprzedaż 0% MVA</MenuItem>
                        <MenuItem value={"Zwolniona z MVA"}>Zwolniona z MVA</MenuItem>
                    </Select>
                )}
                control={control}
            />
        </TableCell>
    );
}



export function SelectTaxSalesItem({control, name}) {
    return(
        <TableCell align="left">
            {/* {`${(item.taxValue).toFixed(0)} %`} */}
            <Controller
                name={name}
                render={({ field }) => (
                    <Select  
                        sx={{ minWidth: 80, p: 0  }}
                        size="small" variant="outlined"  {...field}>
                        <MenuItem value={125}>25%</MenuItem>
                        <MenuItem value={115}>15%</MenuItem>
                        <MenuItem value={112}>12%</MenuItem>
                        <MenuItem value={106}>6%</MenuItem>
                        <MenuItem value={100}>0</MenuItem>
                    </Select>
                )}
                
                control={control}
            />
        </TableCell>
    );
}


