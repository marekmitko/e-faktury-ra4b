import { TableBody, TableRow, TableCell } from "@mui/material"



//global var
const TAX_RATE = 0.07;

//formatting functions
function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}




export default function TableTotalSum ({defaultValuesItem}){
    
    //database
    // const rows = [
    //     createRow( 1, 'Paperclips (Box)', 'Services', 100, 1.15, "15%"),
    // ];
    
    const rows = [defaultValuesItem]

    //auxiliary functions calc
    function priceRow(qty, netPrice) {
        return qty * netPrice;
    }
    function createRow( item_id, desc, type, qty, netPrice) {
        const netValue = priceRow(qty, netPrice);
        const sumItem = {sumeNetPrice: netValue}
        return { item_id, desc, type, qty, netPrice, sumItem };
    }
    //result functions calc
    function subtotal(items) {
        return items.map(({ netPrice }) => netPrice).reduce((sum, i) => sum + i, 0);
    }
    
    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;



    return(
        <TableBody>
            <TableRow>
                <TableCell colSpan={5} sx={{border: 0}}/>
                <TableCell colSpan={3}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={5} sx={{border: 0}}/>
                <TableCell colSpan={2} >Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={5} sx={{border: 0}}/>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
        </TableBody>
    );
}