import { useState, useRef, useMemo, useEffect } from 'react';
import { useForm, useWatch, useFieldArray} from "react-hook-form";
import TableHeader from './spanning-sales-table/TableHeader';
import { Paper, TableContainer, Table, TableCell, TableRow, TableFooter, Grid, Button, TableBody } from '@mui/material';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import { SalesTotalSum } from './spanning-sales-table/total-sum-table/CalcTotalSum';
import SalesTableToolbar from './spanning-sales-table/sales-table-panel/SalesTableToolbar';
import AddIcon from '@mui/icons-material/Add';
import {setGrossPriceItem, setNetPriceItem} from './CalcTotal';
import { SalesItemRow } from './spanning-sales-table/item-sales-row/SalesItemRow';
import InputBox from './spanning-sales-table/item-sales-row/InputsCell';
import DependentInputTest from './spanning-sales-table/item-sales-row/DependentInputTest';

/**DEFAULT VALUES FOR THE SpanningSalesTable */
function setGrosssPriceSalesItem(netPrice, taxValue) {
    return ((netPrice * ((taxValue/100)+1)));
}
function createSalesItem( item_id, desc, type, qty, netPrice, taxValue) {
    const grossPrice = setGrosssPriceSalesItem(netPrice, taxValue);
    return { item_id, desc, type, qty, netPrice, taxValue, grossPrice };
}

const obj = {
    _item_id: "",
    _grossPrice: "",
    _netPrice: "",
    _qty: "",
    _salesItemName: "Podaj",
    _tax: "",
    _typeItem: "",
};

const createNewItemObj = (obj, index) => Object.fromEntries(
    Object.entries(obj).map(([key, value]) => 
    // Modify key here
    [`item_${index}${key}`, value]
    )
);

// refactoring -> see you -> https://codesandbox.io/s/yjgdx4?file=/demo.js
const defaultValuesSalesItem = {
    item_0_item_id: "",         
    item_0_grossPrice: "",          
    item_0_netPrice: "",          
    item_0_qty: "",          
    item_0_salesItemName: "Podaj",         
    item_0_tax: "",         
    item_0_type: "",         
};

let renderCount = 0;


export default function SpanningSalesTable() {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        setValue,
        watch,
    } = useForm({ 
            defaultValues:  {
                salesTableList: [{
                    item_0_item_id: "",         
                    item_0_grossPrice: "",          
                    item_0_netPrice: "",          
                    item_0_qty: "",          
                    item_0_salesItemName: "Podaj",         
                    item_0_tax: "",         
                    item_0_type: "",
                }]
            }
        });

        renderCount++

    const { fields, append, remove, update } = useFieldArray({   // all props  prepend, swap, move, insert        
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "salesTableList" // unique name for your Field Array
    });
//*see SPRAWDZIĆ 
  /*  const record = useRecordContext(props); */

    const record = { myComponent: "test netPrice" }; // my component 

    const [entryPriceIsGross, setEntryPriceOnGross ] = useState(false);
 

    // const stateArray = watch("salesTableList");

    // // useEffect( () => )



    // *see ważne dla useForContext => https://codesandbox.io/embed/react-hook-form-conditional-fields-9iw0k
    

// *see SPRAWDŹ KONIECNZIE 
    // https://codesandbox.io/s/react-hook-form-mui-forked-qie7ps
//  *see https://codesandbox.io/s/usecontroller-checkboxes-forked-xdht0l
    
    const onSubmit = (data) => console.log("dataForm", {...data});

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TableContainer component={Paper}>
                <SalesTableToolbar    {...{  entryPriceIsGross, setEntryPriceOnGross }}  /> 
                <Table    sx={{ minWidth: 700 }}    aria-label="spanning table"  size='small'    padding="none"     >
                    <TableHeader toggelPrice={entryPriceIsGross}  />
                    <TableBody>
                        {fields.map((field, index) => { 
                                const id = `salesTableList.${index}.id`;
                                // console.log("item", field);

                                return(
                                    <div hover={true} key={field.id} >
                                        <InputBox  update={update} myField={field} entryPriceIsGross={entryPriceIsGross}
                                            setValue={setValue} control={control} arrayItemIdx={`salesTableList.${index}`} idx={index} />
                                    {/* <br />
                                    <DependentInputTest entryPriceIsGross={entryPriceIsGross} /> */}
                                    </div>
                            ); 
                        })}
                    </TableBody>
                    <TableRow><TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}}> 
                    <Button onClick={() => append(createNewItemObj(obj, fields.length))} variant="contained" size="small" >
                        <AddIcon/>
                    </Button>
                    <div>
                    {/* // <input type="button" value="+ADD" onClick={() => append(defaultValuesSalesItem)}    /> */}
                    <br /> <span className="counter">Render Count: {renderCount}</span>
                    </div>
                </TableCell></TableRow>
                    <TableRow>
                        <TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}} />
                    </TableRow>
                </Table>
                <Table>
                    <TableTotalSum>
                        <SalesTotalSum nameSalesList="salesTableList" setValue={setValue} control={control} />
                    </TableTotalSum>
                </Table>
            </TableContainer>
                        <input type='button' value="▶🚀consol.log(data)" onClick={handleSubmit(onSubmit)}/>
        </form>
        </>
    );
}
