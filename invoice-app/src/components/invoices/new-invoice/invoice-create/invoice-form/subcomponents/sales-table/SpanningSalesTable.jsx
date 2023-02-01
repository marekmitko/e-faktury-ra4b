import { useState, useRef, useMemo, useEffect } from 'react';
import { useForm, useWatch, useFieldArray, useFormContext} from "react-hook-form";
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
import { useRecordContext } from 'react-admin';

/**DEFAULT VALUES FOR THE SpanningSalesTable */
function setGrosssPriceSalesItem(netPrice, taxValue) {
    return ((netPrice * ((taxValue/100)+1)));
}
function createSalesItem( item_id, desc, type, qty, netPrice, taxValue) {
    const grossPrice = setGrosssPriceSalesItem(netPrice, taxValue);
    return { item_id, desc, type, qty, netPrice, taxValue, grossPrice };
}

const obj = {
    _product_name:             "",         
    _product_count:            "",          
    _product_price_brutto:     "",          
    _product_price_netto:      "",          
    _product_name_selected:    "",         
    _product_vat:              "",         
    _product_type:             ""
};

const createNewItemObj = (obj, index) => Object.fromEntries(
    Object.entries(obj).map(([key, value]) => 
    // Modify key here
    [`_${index}${key}`, value]
    )
);

// refactoring -> see you -> https://codesandbox.io/s/yjgdx4?file=/demo.js
const defaultValuesSalesItem = {
    _0_product_name:             "",         
    _0_product_count:            "",          
    _0_product_price_brutto:     "",          
    _0_product_price_netto:      "",          
    _0_product_name_selected:    "",         
    _0_product_vat:              "",         
    _0_product_type:             ""       
};

let renderCount = 0;




export default function SpanningSalesTable(props) {
    const { control, getValues, setValue } = useFormContext();
    const { fields, append, remove, update } = useFieldArray({   // all props  prepend, swap, move, insert        
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "products" // unique name for your Field Array
    });



    // const {
    //     control,
    //     register,
    //     handleSubmit,
    //     getValues,
    //     errors,
    //     setValue,
    //     watch,
    //     context,
        
    // } = useForm({ 
    //         defaultValues:  {
    //             products: [{

        renderCount++




    // const handleAppend = (value) => {
    //     append(value);
    //     console.log("add: ", getValues());
    //     };

    //     const handleRemove = (index) => {
    //     remove(index);
    //     console.log("remove: ", getValues());
    //     };




    


//*see SPRAWDZIĆ 
  /*  const record = useRecordContext(props); */
    const record = { myComponent: "test netPrice" }; // my component 
    const [entryPriceIsGross, setEntryPriceOnGross ] = useState(false);
    // *see ważne dla useForContext => https://codesandbox.io/embed/react-hook-form-conditional-fields-9iw0k
    
// *see SPRAWDŹ KONIECNZIE 
    // https://codesandbox.io/s/react-hook-form-mui-forked-qie7ps
//  *see https://codesandbox.io/s/usecontroller-checkboxes-forked-xdht0l

    // const SubmitHandler  = data => console.log(data);
    return (
        <>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
        
        <Grid item xs={12}  >
        {/* <form onSubmit={handleSubmit(onSubmit)} {...props}> */}
            <TableContainer component={Paper} >
                <Table    sx={{ minWidth: 700 }}    aria-label="spanning table"  size='small'    padding="none"     >
                    <TableHeader toggelPrice={entryPriceIsGross}  >
                        <SwitchNetOrGross {...{  entryPriceIsGross, setEntryPriceOnGross }}  />
                    </TableHeader>
                    <TableBody>
                        {fields.map((field, index) => { 
                                const id = `products.${index}.id`;
                                return(
                                    <div hover={true} key={field.id} >
                                        <InputBox  update={update} myField={field} entryPriceIsGross={entryPriceIsGross}
                                            setValue={setValue} control={control} arrayItemIdx={`products.${index}`} idx={index} 
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
                    {/* <div>  <br /> <span className="counter">Render Count: {renderCount}</span>  </div> */}
                </TableCell></TableRow>
                    <TableRow>
                        <TableCell colSpan={9} sx={{border: 0, p: 0, pt: 2}} />
                    </TableRow>
                </Table>
                <Table>
                    <TableTotalSum>
                        <SalesTotalSum nameSalesList="products" setValue={setValue} control={control} />
                    </TableTotalSum>
                </Table>
            </TableContainer>
                        {/* <input type='button' value="▶🚀consol.log(data)" onClick={handleSubmit(onSubmit)}/> */}
        {/* </form> */}
        </Grid>
        </Grid>
        </>
    );
}
