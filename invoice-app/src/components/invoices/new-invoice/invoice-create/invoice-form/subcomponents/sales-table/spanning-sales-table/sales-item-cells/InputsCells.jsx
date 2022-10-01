import {useEffect, useMemo } from "react";
import {   TableCell} from "@mui/material";
import {   Controller, useWatch} from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { NumberInput } from "react-admin";


export function ItemNameTextInput({control, name}) {
    return(
        <TableCell  >
            <Controller
                name={name}
                render={({field}) => ( 
                        <TextField
                            sx={{ minWidth: 250}}
                            // sx={{ margin: 'auto' }}
                            size="small" variant="outlined" 
                            label="Item name" 
                            {...field}   
                        /> 
                    )}
                control={control}
                // defaultValue={item.itemName}
            />
        </TableCell>
    );
}



export function QuantityNumberInput({control, name }) {
    return(
        <TableCell >
        {/* {item.qty} */}
        <Controller
            name={name}
            render={({field}) => ( 
                <NumberInput 
                // sx={{ maxWidth: 75, p: 0  }}
                size="small" variant="outlined" 
                label="Quantity" 
                {...field}   helperText={false}
                /> 
                
                )}
                control={control}
            
        />
    </TableCell> 
    );
}


// const GrossValue = ({ control, register, setValue, itemNameRegister}) => {
//     const dataItemValue = useWatch({
//         control,
//         name: `${itemNameRegister}`,
//     });


    // const netPriceInput = useMemo(() => {
    //     if (grossPriceInput)
    //       return (+grossPriceInput / (100 + +taxValueInput)) * 100 * +qty;
    //     else return +startPrice * +qty;
    // }, [grossPriceInput]);

    // const grossValue = useMemo(
    //   () => (parseFloat(value) * parseFloat(discountPercent)) / 100,

    //     [value, discountPercent]
    // );

    // useEffect(() => {
    //     if (!isNaN(grossValue)) {
    //     setValue("grossValue", parseFloat(grossValue));
    //     }
    // }, [setValue, grossValue]);

// };




export function PriceNumberInput({control, name, labelName, defaultValue, setValue, entryPriceIsGross, itemNameRegister }) {

    return(
        <TableCell  >
            <Controller
                name={name}
                render={({field}) => ( 
                    <NumberInput  
                        // sx={{ maxWidth: 150, p: 0  }}
                        size="small" variant="outlined" 
                            label={labelName} 
                        {...field}   helperText={false}
                    /> )}
                control={control}
                defaultValue={defaultValue}

            />
            {/* {ccyFormat(item.netPrice)} */}
        </TableCell>
    );
}

