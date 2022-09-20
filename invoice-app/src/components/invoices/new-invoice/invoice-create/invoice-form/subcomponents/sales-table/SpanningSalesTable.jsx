import * as React from 'react';
import { useForm } from "react-hook-form";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHeader from './spanning-sales-table/TableHeader';
import { TableFooter } from '@mui/material';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import SalesTableList from './spanning-sales-table/SalesTableList';


/**DEFAULT VALUES FOR THE SpanningSalesTable */

//default values sales item
const rows = [
    createSalesItem( 1, 'Paperclips (Box)', 'Services', 100, 10, 15),
];
function setGrosssPriceSalesItem(netPrice, taxValue) {
    return ((netPrice * ((taxValue/100)+1)));
}
//auxiliary function create data default value sales item
//get value output
function createSalesItem( item_id, desc, type, qty, netPrice, taxValue) {
    const grossPrice = setGrosssPriceSalesItem(netPrice, taxValue);
    return { item_id, desc, type, qty, netPrice, taxValue, grossPrice };
}

// NEW APPROACH
const defaultValuesSalesItem = {}
const TESTdefaultValuesSalesItem = createSalesItem(1, 'Paperclips (Box)', 'Services', 100, 10, 1500);
// const defaultValues = { item_id: "",  itemName: "",  type: "",  qty: 1, netPrice: "",  taxValue: "",  grossPrice: ""}
const defaultValues = { 
    salesTableList: [
        {
            item_id: "",
            itemName: "",
            type: "",
            qty: 1,
            netPrice: "",
            taxValue: "",
            grossPrice: "",
        } 
    ]
};

function priceRow(qty, netPrice) {
    return qty * netPrice;
}

//global var
const TAX_RATE = 0.07;
//formatting functions
function ccyFormat(num) {
        return `${num.toFixed(2)}`;
}



function subtotal(items) {
    return items.map(({ netPrice }) => netPrice).reduce((sum, i) => sum + i, 0);
}
//result functions calc
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

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
                    {/* <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell align="center" sx={{ maxWidth: 5, pr: 1 }} >{row.item_id}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{ccyFormat(row.netPrice)}</TableCell>
                                <TableCell align="right">{`${(row.taxValue).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{`${(row.grossPrice).toFixed(2)}`}</TableCell>
                                <TableCell align="right">{"test"}</TableCell>
                                <TableCell align="right">{"test"}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody> */}
                        <SalesTableList
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
                        <TableRow><TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}}> <hr/> </TableCell></TableRow>
                        <TableTotalSum defaultValuesItem={TESTdefaultValuesSalesItem} />
                </Table>
                <input type="submit" />
            </TableContainer>
                        
        </form>
    );
}
