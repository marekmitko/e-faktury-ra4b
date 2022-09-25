import * as React from "react";
import {   TableCell} from "@mui/material";
import {   Controller} from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { NumberInput } from "react-admin";




export function RefNumberInputTEST({control, name, labelName}) {
    const refContainer = React.useRef(null);

    //do ustawienia wartosci na wejscie 
    // -> nie zmienia stanu i nie ustawia value 
    const myClick = () => {
        console.log('clicked !', refContainer.current.value); // refContainer is null !!!
        refContainer.current.value = '1';
    };

    return(
        <TableCell  >
            <Controller
                name={name}
                render={({field}) => ( 
                    <NumberInput  
                        inputRef={refContainer}
                        value='value'
                        // sx={{ maxWidth: 150, p: 0  }}
                        size="small" variant="outlined" 
                            label={labelName} 
                        {...field}   helperText={false}
                    /> )}
                control={control}
                // defaultValue={item.qty}
            />
            <input type="button" value="change" onClick={myClick}/>
            {/* {ccyFormat(item.netPrice)} */}
        </TableCell>
    );
}


// DependentInputs on the base of https://codesandbox.io/s/dependent-inputs-skn93w
// see props.inputRef --> https://stackoverflow.com/questions/63168374/using-useref-hook-with-react-admin
