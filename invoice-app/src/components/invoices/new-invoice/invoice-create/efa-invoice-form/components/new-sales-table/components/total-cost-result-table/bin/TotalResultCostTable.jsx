import * as React from 'react';
import { TableBody, TableRow, TableHead, Table } from "@mui/material"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableTotalSum from '../subcomponent/TableTotalSum';
import { SalesTotalSum } from "../CalcTotalSum";
import { useFormContext } from 'react-hook-form';





export default function TotalResultCostTable (){
    const { control } = useFormContext();
    return(
        <>
            {/* <JoyNotebox2 register={ () => {} }/> */}
            <Table size="small"  >
                <TableTotalSum >
                    <SalesTotalSum nameSalesList="products"  control={control} />
                </TableTotalSum>
            </Table>
        </>
    );
}