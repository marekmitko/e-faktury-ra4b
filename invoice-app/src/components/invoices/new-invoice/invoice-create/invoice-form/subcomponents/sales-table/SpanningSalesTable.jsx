import { useState, useRef, useMemo, useEffect } from 'react';
import { useForm, useWatch, useFieldArray} from "react-hook-form";
import TableHeader from './spanning-sales-table/TableHeader';
import { Paper, TableContainer, Table, TableCell, TableRow, TableFooter, Grid, Button, TableBody, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import { SalesTotalSum } from './spanning-sales-table/total-sum-table/CalcTotalSum';
import SalesTableToolbar from './spanning-sales-table/sales-table-panel/SalesTableToolbar';
import AddIcon from '@mui/icons-material/Add';
import {setGrossPriceItem, setNetPriceItem} from './CalcTotal';
import { SalesItemRow } from './spanning-sales-table/item-sales-row/SalesItemRow';
import InputBox from './spanning-sales-table/item-sales-row/InputBox';
import DependentInputTest from './spanning-sales-table/item-sales-row/DependentInputTest';
import { PriceDependentInput } from './change-input-test/PriceDependentInput';
import OptionLine from '../option-line/OptionLine';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SwitchNetOrGross from './spanning-sales-table/sales-table-panel/SwitchNetOrGross';
import JoyInputBox from './spanning-sales-table/item-sales-row/JoyInputBox';

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
    _salesItemName: "",
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
    item_0_salesItemName: "",         
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
                    item_0_salesItemName: "",         
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
 
    // *see ważne dla useForContext => https://codesandbox.io/embed/react-hook-form-conditional-fields-9iw0k
    

// *see SPRAWDŹ KONIECNZIE 
    // https://codesandbox.io/s/react-hook-form-mui-forked-qie7ps
//  *see https://codesandbox.io/s/usecontroller-checkboxes-forked-xdht0l
    
    const onSubmit = (data) => console.log("dataForm", {...data});



    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TableContainer component={Paper} >
                {/* <OptionLine> */}
                    {/* <SalesTableToolbar    {...{  entryPriceIsGross, setEntryPriceOnGross }}  />  */}
                {/* </OptionLine> */}
                
                <Table    sx={{ minWidth: 700 }}    aria-label="spanning table"  size='small'    padding="none"     >
                    <TableHeader toggelPrice={entryPriceIsGross}  >
                        <SwitchNetOrGross {...{  entryPriceIsGross, setEntryPriceOnGross }}  />
                    </TableHeader>
                    <TableBody>
                        {fields.map((field, index) => { 
                                const id = `salesTableList.${index}.id`;
                                return(
                                    <div hover={true} key={field.id} >
                                        <InputBox  update={update} myField={field} entryPriceIsGross={entryPriceIsGross}
                                            setValue={setValue} control={control} arrayItemIdx={`salesTableList.${index}`} idx={index} 
                                            salesListLength={fields.length}
                                            salesItemIndex={index}
                                            eventsOnItem={() => append(createNewItemObj(obj, fields.length))} 
                                            // addItemOnFocusin={
                                            //     console.log("da")
                                            // //     // addItemOnFocusin(fields.length, index, append(createNewItemObj(obj, fields.length)) )
                                            // }
                                            ButtonAddItem={<AddCircleRoundedIcon />}
                                        >
                                            <IconButton  color="error"   aria-label="delete" size="small"   onClick={() => remove(index)} >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </InputBox>
                                    </div>
                            ); 
                        })}
                    </TableBody>
                    <TableRow><TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}}> 
                    {/* <div>
                        <br /> <span className="counter">Render Count: {renderCount}</span>
                    </div> */}
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
                        {/* <input type='button' value="▶🚀consol.log(data)" onClick={handleSubmit(onSubmit)}/> */}
        </form>
        </>
    );
}
