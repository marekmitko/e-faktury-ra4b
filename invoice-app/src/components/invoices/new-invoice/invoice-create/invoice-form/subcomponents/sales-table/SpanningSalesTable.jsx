import { useState }from 'react';
import { useForm } from "react-hook-form";
import TableHeader from './spanning-sales-table/TableHeader';
import { Paper, TableContainer, Table, TableCell, TableRow, TableFooter, Grid } from '@mui/material';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import SalesTableList from './spanning-sales-table/SalesTableList';
import { SalesTotalSum } from './spanning-sales-table/total-sum-table/CalcTotalSum';
import SalesTableToolbar from './spanning-sales-table/sales-table-panel/SalesTableToolbar';
import { PriceNumberInput } from './spanning-sales-table/sales-item-cells/InputsCells';
import { RefNumberInputTEST } from './spanning-sales-table/conditional-rerender/PriceInputRef';


/**DEFAULT VALUES FOR THE SpanningSalesTable */
function setGrosssPriceSalesItem(netPrice, taxValue) {
    return ((netPrice * ((taxValue/100)+1)));
}
function createSalesItem( item_id, desc, type, qty, netPrice, taxValue) {
    const grossPrice = setGrosssPriceSalesItem(netPrice, taxValue);
    return { item_id, desc, type, qty, netPrice, taxValue, grossPrice };
}







// refactoring -> see you -> https://codesandbox.io/s/yjgdx4?file=/demo.js
const defaultValuesSalesItem = {
    item_id: "",
    itemName: "",
    type: "",
    qty: "",
    netPrice: "",
    taxValue: "",
    grossPrice: "",
    TestRef: ""
};

const defaultValues = { 
    priceCellLabel: "gross price",
    salesTableList: [
        {
            item_id: "",
            itemName: "",
            type: "",
            qty: "",
            taxValue: "",
            netPrice: "",
            grossPrice: "",
            TestRef: ""
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

// custom switch input 
    const disabled = watch("switch-form");
    
    const record = { myComponent: "test netPrice" }; // my component 


    const [toggelPrice, setToggelPrice] = useState({
            checkedOption: false
        });
    // console.log("grossPrice", grossPrice)
    const onSubmit = (data) => console.log("data", data);
    console.log("dataLog", onSubmit());


    // const priceCellLabel = register('priceCellLabel');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <hr />
       
            <TableContainer component={Paper}>
                <SalesTableToolbar 
                    {...{
                        control,
                        watch,
                        getValues,
                        setValue,
                        errors,
                        record,
                        disabled,
                        toggelPrice,
                        setToggelPrice,
                    }}
                /> 
                <Table 
                    sx={{ minWidth: 700 }} 
                    aria-label="spanning table"
                    size='small'
                    padding="none"
                >
                    <TableHeader {...{toggelPrice}} 
                        enabled={ toggelPrice.checkedOption ? <td>GROSS PRICE</td> : <td>NET PRICE</td>} 
                        disabled={ toggelPrice.checkedOption ? <td>NET PRICE</td> : <td>GROSS PRICE</td>} 
                    />
                    <SalesTableList defaultValuesSalesItem={defaultValuesSalesItem}
                        {...{
                            control,
                            watch,
                            register,
                            defaultValues,
                            getValues,
                            setValue,
                            errors,
                            record,
                            disabled,
                            toggelPrice
                        }}
                    />
                    <TableRow>
                        <TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}} />
                    </TableRow>
                </Table>
                <Table>
                    <TableTotalSum>
                        <SalesTotalSum nameSalesList={`salesTableList`} setValue={setValue} control={control} />
                    </TableTotalSum>
                </Table>
                {/* <input type="submit" /> */}
                <Table sx={{backgroundColor: "lightblue"}}>
                
                        <TableRow >
                    <Grid container spacing={3}>
                            <Grid item xs="auto">
                                <TableCell>variable width content</TableCell>
                            </Grid>
                            <Grid item xs={6}>
                                <TableCell>xs=6</TableCell>
                            </Grid>
                            <Grid item xs>
                                <TableCell>xs</TableCell>
                            </Grid>
                    </Grid>
                        </TableRow>
                </Table>
            </TableContainer>
                        
        </form>
    );
}
