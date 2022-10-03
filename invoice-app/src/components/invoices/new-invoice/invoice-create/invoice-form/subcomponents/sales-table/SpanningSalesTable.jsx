import { useState, useRef }from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import TableHeader from './spanning-sales-table/TableHeader';
import { Paper, TableContainer, Table, TableCell, TableRow, TableFooter, Grid, Button, TableBody } from '@mui/material';
import TableTotalSum from './spanning-sales-table/TableTotalSum';
import { SalesTotalSum } from './spanning-sales-table/total-sum-table/CalcTotalSum';
import SalesTableToolbar from './spanning-sales-table/sales-table-panel/SalesTableToolbar';
import AddIcon from '@mui/icons-material/Add';
import {setGrossPriceItem, setNetPriceItem} from './CalcTotal';
import { SalesItemRow } from './spanning-sales-table/item-sales-row/SalesItemRow';
import InputBox from './spanning-sales-table/item-sales-row/InputsCell';

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
    _grossPrice: "0",
    _netPrice: "0",
    _qty: "1",
    _salesItemName: "0",
    _tax: "0",
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
    item_0_grossPrice: null,
    item_0_netPrice: null,
    item_0_qty: "1",
    item_0_salesItemName: null,
    item_0_tax: null,
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
        useWatch,
        // defaultValues
    } = useForm({ 
            defaultValues:  {
                salesTableList: [
                    defaultValuesSalesItem,
                ]
            }
        });

        renderCount++

    const { fields, append, remove } = useFieldArray({   // all props  prepend, swap, move, insert        
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "salesTableList" // unique name for your Field Array
    });
//*see SPRAWDZIĆ 
  /*  const record = useRecordContext(props);
    const initialDefaultValue = useRef({});

    const removeField = useCallback(
        (index: number) => {
            remove(index);
        },
        [remove]
    );

    if (fields.length > 0) {
        const { id, ...rest } = fields[0];
        initialDefaultValue.current = rest;
        for (const k in initialDefaultValue.current)
            initialDefaultValue.current[k] = '';
    }


*/

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
    

// *see SPRAWDŹ KONIECNZIE 
    // https://codesandbox.io/s/react-hook-form-mui-forked-qie7ps

    
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
                            console.log("item", field);

                            
                            return(
                                        <>
                            {/* <label htmlFor={id}>Show Input</label>
                                <input
                                type="checkbox"
                                value="on"
                                id={id}
                                {...register(id)}
                                defaultChecked={field.checked} 
                                />
                                */}
                                <div hover={true} key={field.id} >
                                    <InputBox  entryPriceIsGross={entryPriceIsGross}
                                        control={control} arrayItemIdx={`salesTableList.${index}`} idx={index} />
                                </div>
                            </>
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
                        <SalesTotalSum nameSalesList={`salesTableList`} setValue={setValue} control={control} />
                    </TableTotalSum>
                </Table>
            </TableContainer>
                        <input type='button' value="▶🚀consol.log(data)" onClick={handleSubmit(onSubmit)}/>
        </form>
        </>
    );
}
