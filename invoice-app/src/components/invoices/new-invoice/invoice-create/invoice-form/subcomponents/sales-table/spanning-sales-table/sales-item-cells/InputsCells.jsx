
import {   TableCell} from "@mui/material";
import {   Controller} from "react-hook-form";
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


export function PriceNumberInput({control, name, labelName, defaultValue}) {
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

