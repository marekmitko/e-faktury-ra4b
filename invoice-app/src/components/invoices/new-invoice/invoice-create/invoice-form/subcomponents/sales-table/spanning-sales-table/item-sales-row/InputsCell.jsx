import {useState} from "react";
import {InputAdornment, FormControl, InputLabel, Autocomplete, MenuItem, Select, Chip, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import { Controller, useController, setValue } from "react-hook-form";
import { NumberInput } from "react-admin";

const options = ["A", "B", "C", "D"];

// Obcaaj https://codesandbox.io/s/react-hook-form-mui-forked-0xkhyk


function setGrossPriceItem(netPriceItem, taxValue){
    return (netPriceItem*taxValue)/100;
}
function setNetPriceItem(grossPriceInput, taxValue){
    return (+grossPriceInput / (+taxValue)) * 100 ;
}


export default function InputBox ({control, arrayItemIdx, idx, entryPriceIsGross}) {

    const salesItemName = useController({ control, name: `${arrayItemIdx}.item_${idx}_salesItemName` });
    const qtyItem = useController({ control, name: `${arrayItemIdx}.item_${idx}_qty` });
    const taxItem = useController({ control, name: `${arrayItemIdx}.item_${idx}_tax` });
    const netItem = useController({ control, name: `${arrayItemIdx}.item_${idx}_netPrice` });
    const grossItem = useController({ control, name: `${arrayItemIdx}.item_${idx}_grossPrice` });
    const typeItem = useController({ control, name: `${arrayItemIdx}.item_${idx}_typeItem` });

        // if(entryPriceIsGross)
        //     useEffectsetValue('notRegisteredInput', 'value')

        return (
            <Box
                className="App"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "25px auto 150px 50px 60px 150px 150px 100px 100px 25px ",
                    gridGap: 10
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Chip label={`${++idx}`} size="small" color="primary" variant="outlined" />
                </Stack>
                <IconTextField 
                    {...salesItemName.field}
                    label="First Name" iconStart={<AccountCircle sx={{ color: "#0089ff", fontSize: 18 }} />} 
                />
                <SelectSmallType {...typeItem.field} field={typeItem.field} />
                <SelectSmallTax {...taxItem.field} field={taxItem.field} />
                <IconTextNumber  {...qtyItem.field}  label="Quantity"  />
{/* {display netPrice} */}
                <IconTextNumber
                    {...netItem.field}
                    sx={{ display: entryPriceIsGross ? "none" : "block" }}
                    label="Net Price"
                    iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: 18 }} />}
                    iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: 18 }} />}
                />
{/* {display grossPrice} */}
                <IconTextNumber
                    {...grossItem.field}
                    sx={{ display: entryPriceIsGross ? "block" : "none" }}
                    label="Gross Price"
                    iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: 18 }} />}
                    iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: 18 }} />}
                />
{/* {netSum} */}
                <div>{ entryPriceIsGross    ? (setNetPriceItem(+grossItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)
                                            : (+netItem.field.value * +qtyItem.field.value).toFixed(2) }</div>
{/* {grossSum} */}
                <div>{ entryPriceIsGross    ? (+grossItem.field.value * +qtyItem.field.value).toFixed(2) 
                                            : (setGrossPriceItem(+netItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)  }</div>
                {/* <ErrorOutlineIcon sx={{   color: "red" }} /> */}
            </Box>
        );
    }





const IconTextNumber = ({ iconStart, iconEnd, InputProps, ...props }) => {
        return (
            <NumberInput 
                {...props}
                variant="standard"
                size="small"
                InputProps={{
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment    position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment    position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
        );
    };


const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
        return (
            <TextField 
                {...props}
                variant="standard"
                size="small"
                InputProps={{
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment    position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment    position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
        );
    };


    // *see SelectInput 
    // ->     https://codesandbox.io/s/react-hook-form-mui-forked-9ohh3s


    const objOptions = [
        { value: 65, label: "A" },
        { value: 66, label: "B" },
        { value: 67, label: "C" }
    ];



// const SelectInput = ({ field,  options,  ...props}) => {
//         return (
//     <Controller
//     // control={control}
//     name="auto-complete"
//     defaultValue={options[0]}
//     render={({ field: { ref, onChange, ...field } }) => (
//         <Autocomplete
//             options={options}
//             defaultValue={options[0]}
//             onChange={(_, data) => field.onChange(data)}
//             renderInput={(params) => (
//             <TextField
//                 // {...field}
//                 {...params}
//                 fullWidth
//                 // inputRef={field.ref}
//                 variant="filled"
//                 label="Auto-Complete"
//             />
//             )}
//         />
//     )}
//     />

//         );
//     };




const SelectItemType = ({...props}) => (
    <Select
    // sx={{ minWidth: 175, py: 0  }}
    size="small" variant="standard"  
    
    label="Type"
    >
    <MenuItem value={'Usługi'}>Usługi</MenuItem>
    <MenuItem value={'Towar'}>Towar</MenuItem>
    <MenuItem value={'Wynajem'}>Wynajem</MenuItem>
    <MenuItem value={'Prowizja'}>Prowizja</MenuItem>
    <MenuItem value={'Sprzedaż'}>Sprzedaż</MenuItem>
    <MenuItem value={'Sprzedaż 0% MVA'}>Sprzedaż 0% MVA</MenuItem>
    <MenuItem value={"Zwolniona z MVA"}>Zwolniona z MVA</MenuItem>
</Select>
);


const SelectItemTax = () => (
        <Select  
            sx={{ 
                // minWidth: 80, 
                p: 0  }}
            size="small" variant="standard"  
            // {...field}
            label="VAT"
            >
            <MenuItem value={125}>25%</MenuItem>
            <MenuItem value={115}>15%</MenuItem>
            <MenuItem value={112}>12%</MenuItem>
            <MenuItem value={106}>6%</MenuItem>
            <MenuItem value={100}>0</MenuItem>
        </Select>
);




function SelectSmallType({field, ...props}) {
        // const [age, setAge] = useState('');
    
        // const handleChange = (event) => {
        // setAge(event.target.value);
        // };
    
        return (
        <FormControl 
        {...props}
        // sx={{ m: 1, minWidth: 120 }}
         size="small">
            <InputLabel id="demo-select-small-type">Item Type</InputLabel>
            <Select
            labelId="demo-select-small-type"
            id="demo-select-small-type"
            value={field.value}
            label="Item Type"
            onChange={field.onChange}
            variant="standard"
            >
            <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={'Usługi'}>Usługi</MenuItem>
                <MenuItem value={'Towar'}>Towar</MenuItem>
                <MenuItem value={'Wynajem'}>Wynajem</MenuItem>
                <MenuItem value={'Prowizja'}>Prowizja</MenuItem>
                <MenuItem value={'Sprzedaż'}>Sprzedaż</MenuItem>
                <MenuItem value={'Sprzedaż 0% MVA'}>Sprzedaż 0% MVA</MenuItem>
                <MenuItem value={"Zwolniona z MVA"}>Zwolniona z MVA</MenuItem>
            </Select>
        </FormControl>
        );
    }
function SelectSmallTax({field, ...props}) {
        // const [age, setAge] = useState('');
    
        // const handleChange = (event) => {
        // setAge(event.target.value);
        // };
    
        return (
        <FormControl 
        {...props}
        // sx={{ m: 1, minWidth: 120 }}
         size="small">
            <InputLabel id="demo-select-small-tax">Item Tax</InputLabel>
            <Select
            labelId="demo-select-small-tax"
            id="demo-select-small-tax"
            value={field.value}
            label="Item Tax"
            onChange={field.onChange}
            variant="standard"
            >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={125}>25%</MenuItem>
            <MenuItem value={115}>15%</MenuItem>
            <MenuItem value={112}>12%</MenuItem>
            <MenuItem value={106}>6%</MenuItem>
            <MenuItem value={100}>0</MenuItem>
            </Select>
        </FormControl>
        );
    }