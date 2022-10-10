import { useState, useEffect, useMemo} from "react";
import {InputAdornment, FormControl, InputLabel, Autocomplete, MenuItem, Select, Chip, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import { Controller, useController, setValue, useWatch} from "react-hook-form";
import { NumberInput } from "react-admin";
import { SetDependentValue } from "./setDependentValue"

const options = ["A", "B", "C", "D"];

// Obcaaj https://codesandbox.io/s/react-hook-form-mui-forked-0xkhyk


function setGrossPriceItem(netPriceItem, taxValue){
    return (netPriceItem*taxValue)/100;
}
function setNetPriceItem(grossPriceInput, taxValue){
    return (+grossPriceInput / (+taxValue)) * 100 ;
}


export default function InputBox ({ children, update, control, arrayItemIdx, idx, entryPriceIsGross, setValue, myField}) {

    const salesItemName = useController({ name: `${arrayItemIdx}.item_${idx}_salesItemName`, control, defaultValue: "", });
    const qtyItem = useController({ name: `${arrayItemIdx}.item_${idx}_qty`, control, defaultValue: "", });
    const taxItem = useController({ name: `${arrayItemIdx}.item_${idx}_tax`, control, defaultValue: "", });
    const netItem = useController({ name: `${arrayItemIdx}.item_${idx}_netPrice`, control, defaultValue: "", });
    const grossItem = useController({ name: `${arrayItemIdx}.item_${idx}_grossPrice`, control, defaultValue: "", });
    const typeItem = useController({ name: `${arrayItemIdx}.item_${idx}_typeItem`, control, defaultValue: "", });

    const netPriceInput = useWatch({ control, name: `${arrayItemIdx}.item_${idx}_netPrice` });
    const grossPriceInput = useWatch({ control, name: `${arrayItemIdx}.item_${idx}_grossPrice` });
    

    const enteryValue = entryPriceIsGross ? grossItem.field.value : netItem.field.value;

    const newDependentValue = useMemo(() => {
        // if (!isNaN(parseFloat((enteryValue))) || !isNaN(parseFloat((taxItem.field.value))))  return "";
        if (!entryPriceIsGross) //setGrossPriceItem
            return (parseFloat(enteryValue) * (+taxItem.field.value)) / 100;
        if (entryPriceIsGross) //setNetPriceItem
            return (parseFloat(enteryValue) / (+taxItem.field.value)) * 100 ;
        }, [enteryValue, taxItem.field.value, entryPriceIsGross]);

    useEffect(() => {
                if ( !isNaN(!parseFloat(newDependentValue)) && entryPriceIsGross ) {
                    setValue(`${netItem.field.name}`, `${newDependentValue.toFixed(2)}`);
                    // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
                }
                if ( !isNaN(!parseFloat(newDependentValue)) && !entryPriceIsGross ){
                    setValue( `${grossItem.field.name}`, `${newDependentValue.toFixed(2)}` );
                    // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );

                }
                // }, [ grossPriceInput, taxValueInput]);
            }, [enteryValue, taxItem.field.value, entryPriceIsGross]);

    // console.info("valueDEPENDENT:", newDependentValue); 

        return (
            <>
            <Box
                className="App"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "25px auto 150px 70px 60px 125px 125px 125px 50px ",
                    gridGap: 10,
                    alignItems: "baseline"
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

{/* New concept */}
                {/* <IconTextNumber  */}
                <IconTextField 
                    variant="standard"
                    onChange={ event => {
                        netItem.field.onChange(event.target.value)
                        }
                    } // send value to hook form 
                    onBlur={netItem.field.onBlur} // notify when input is touched/blur
                    value={netItem.field.value} // input value
                    name={netItem.field.name} // send down the input name
                    inputRef={netItem.field.ref} // send input ref, so we can focus on input when error appear
                    sx={{ display: entryPriceIsGross ? "none" : "block" }}
                    label="Net Price"
                    iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: 18 }} />}
                    iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: 18 }} />}
                />
                {/* <IconTextNumber  */}
                <IconTextField
                    variant="standard"
                    onChange={ event => {
                        grossItem.field.onChange(event.target.value)
                        }
                    } // send value to hook form 
                    onBlur={grossItem.field.onBlur} // notify when input is touched/blur
                    value={grossItem.field.value} // input value
                    name={grossItem.field.name} // send down the input name
                    inputRef={grossItem.field.ref} // send input ref, so we can focus on input when error appear
                    sx={{ display: entryPriceIsGross ? "block" : "none" }}
                    label="Gross Price"
                    iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: 18 }} />}
                    iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: 18 }} />}
                />
{/* {netSum} */}
                <div align="right">{ entryPriceIsGross    ? (setNetPriceItem(+grossItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)
                                            : (+netItem.field.value * +qtyItem.field.value).toFixed(2) }</div>
{/* {grossSum} */}
                <div align="right">{ entryPriceIsGross    ? (+grossItem.field.value * +qtyItem.field.value).toFixed(2) 
                                            : (setGrossPriceItem(+netItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)  }</div>
                <div align="center">
                    {children ? children : null}
                </div>
                
            </Box>
            <div>{`net: ${(+netPriceInput).toFixed(2)} gross: ${(+grossPriceInput).toFixed(2)}`}</div>
            </>
        );
    }





const IconTextNumber = ( {inputRef, iconStart, iconEnd, InputProps, ...props }) => {
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
                // defaultValue={10}
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