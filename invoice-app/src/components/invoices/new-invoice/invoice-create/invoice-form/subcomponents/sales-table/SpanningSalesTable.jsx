import { useState }from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import TableHeader from './spanning-sales-table/TableHeader';
import { Paper, TableContainer, Table, TableCell, TableRow, TableFooter, Grid } from '@mui/material';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import SalesTableList from './spanning-sales-table/SalesTableList';
import { SalesTotalSum } from './spanning-sales-table/total-sum-table/CalcTotalSum';
import SalesTableToolbar from './spanning-sales-table/sales-table-panel/SalesTableToolbar';
import { PriceNumberInput } from './spanning-sales-table/sales-item-cells/InputsCells';
import { RefNumberInputTEST } from './spanning-sales-table/conditional-rerender/PriceInputRef';
import { FormTab, SaveButton, TabbedForm } from 'react-admin';
import {setGrossPriceItem, setNetPriceItem} from './CalcTotal';

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





export default function SpanningSalesTable() {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        setValue,
        watch,
        useWatch,
        // defaultValues
    } = useForm({ 
            defaultValues:  {
                salesTableList: [
                    defaultValuesSalesItem,
                ]
            }
        });

    const { fields, append, remove } = useFieldArray({   // all props  prepend, swap, move, insert        
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "salesTableList" // unique name for your Field Array
    });
    

// custom switch input  // BUG -> place this in a bin
    const disabled = watch("switch-form");
    
    const record = { myComponent: "test netPrice" }; // my component 

//control 1) visible/hidden collumn price   2) Change calc sum item 3) Change headers in sales table  
    const [toggelPrice, setToggelPrice] = useState({
            checkedOption: false
        });

    const [entryPriceIsGross, setEntryPriceOnGross ] = useState(false);
    console.info("entryPriceIsGross", entryPriceIsGross);
    
    const [showGrossPrice, setShowGrossPrice] = useState(true);
    
    //control 1) visible/hidden collumn price   2) Change calc sum item 3) Change headers in sales table  
    



    const handleSetItemPrice = (index, getValueArr, setValueArr) => {
        const itemTaxValue = getValueArr(`salesTableList.${index}.taxValue`);
        let setPrice;
        let keyNameDataItem = entryPriceIsGross ? (`salesTableList.${index}.grossPrice`)
                                                : (`salesTableList.${index}.netPrice`);

                                                
        if(entryPriceIsGross)
            return(setPrice = setNetPriceItem(100, itemTaxValue));
            
            if(!entryPriceIsGross)
            return(setPrice = setGrossPriceItem(100, itemTaxValue));
            
            // return console.log("newPRICEItem",keyNameDataItem,);
        // return setValueArr(keyNameDataItem, `${setPrice}`)
        return console.log('dupa');
    };










    // *see ważne dla useForContext => https://codesandbox.io/embed/react-hook-form-conditional-fields-9iw0k
    
    
    const onSubmit = (data) => console.log("dataForm", {...data});
    console.log("dataLog", onSubmit());
    console.log("data fields", ...fields);
    console.log("data fields", ...fields);
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        entryPriceIsGross, setEntryPriceOnGross,
                    }}
                /> 
                <Table 
                    sx={{ minWidth: 700 }} 
                    aria-label="spanning table"
                    size='small'
                    padding="none"
                >
                    <TableHeader toggelPrice={entryPriceIsGross}
                        // {...{toggelPrice}} 
                        // enabled={ toggelPrice.checkedOption ? <td>GROSS PRICE</td> : <td>NET PRICE</td>} 
                        // disabled={ toggelPrice.checkedOption ? <td>NET PRICE</td> : <td>GROSS PRICE</td>} 
                    />
                    <SalesTableList defaultValuesSalesItem={defaultValuesSalesItem}
                        {...{
                            control,
                            watch,
                            register,
                            // defaultValues,
                            getValues,
                            setValue,
                            errors,
                            record,
                            disabled,
                            entryPriceIsGross,
                            setEntryPriceOnGross,
                            useWatch,
                            fields, append, remove,
                            handleSetItemPrice
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
                {/* <Table sx={{backgroundColor: "lightblue"}}>
                
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
                    </Table> */}
            </TableContainer>
                        <input type='button' value="▶🚀consol.log(data)" onClick={handleSubmit(onSubmit)}/>
        </form>
        </>
    );
}
