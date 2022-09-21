import * as React from 'react';
import { useForm } from "react-hook-form";
import TableHeader from './spanning-sales-table/TableHeader';
import { Paper, TableContainer, Table, TableCell, TableRow, TableFooter } from '@mui/material';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import SalesTableList from './spanning-sales-table/SalesTableList';
import { SalesTotalSum } from './spanning-sales-table/total-sum-table/CalcTotalSum';


/**DEFAULT VALUES FOR THE SpanningSalesTable */
function setGrosssPriceSalesItem(netPrice, taxValue) {
    return ((netPrice * ((taxValue/100)+1)));
}
function createSalesItem( item_id, desc, type, qty, netPrice, taxValue) {
    const grossPrice = setGrosssPriceSalesItem(netPrice, taxValue);
    return { item_id, desc, type, qty, netPrice, taxValue, grossPrice };
}

const defaultValuesSalesItem = {
    item_id: "",
    itemName: "",
    type: "",
    qty: "",
    netPrice: "",
    taxValue: "",
    grossPrice: "",
};

const defaultValues = { 
    salesTableList: [
        {
            item_id: "",
            itemName: "",
            type: "",
            qty: "",
            netPrice: "",
            taxValue: "",
            grossPrice: "",
        } 
    ]
};

export default function SpanningSalesTable() {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        setValue,
        watch
    } = useForm({ defaultValues });

    const onSubmit = (data) => console.log("data", data);
    console.log("dataLog", onSubmit());
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHeader /> 
                    <SalesTableList defaultValuesSalesItem={defaultValuesSalesItem}
                        {...{
                            control,
                            watch,
                            register,
                            defaultValues,
                            getValues,
                            setValue,
                            errors,
                        }}
                    />
                    <TableRow>
                        <TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}} />
                    </TableRow>
                    <TableTotalSum>
                        <SalesTotalSum nameSalesList={`salesTableList`} setValue={setValue} control={control} />
                    </TableTotalSum>
                </Table>
                {/* <input type="submit" /> */}
            </TableContainer>
                        
        </form>
    );
}
