import { useState, useEffect, useMemo} from "react";
import {InputAdornment, IconButton, FormControl, InputLabel, Autocomplete, MenuItem, Select, Chip, Stack, TextField} from "@mui/material";
// import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import { Controller, useController, setValue, useWatch} from "react-hook-form";
import { NumberInput } from "react-admin";
import { SetDependentValue } from "./setDependentValue"
import { PriceInput } from "./input-box-component/PriceInput";
import { MySelectInput } from "./input-box-component/MySelectInput";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const optionCurrencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];



// Obcaaj https://codesandbox.io/s/react-hook-form-mui-forked-0xkhyk

function setGrossPriceItem(netPriceItem, taxValue){
    // if(netPriceItem)
    return (netPriceItem*taxValue)/100;
}
function setNetPriceItem(grossPriceInput, taxValue){
    // if(+grossPriceInput)
    return (+grossPriceInput / (+taxValue)) * 100 ;
}

export default function InputBox ({ 
    // addItemOnFocusin, 
    ButtonAddItem,
    eventsOnItem, salesListLength, salesItemIndex, children, update, control, arrayItemIdx, idx, entryPriceIsGross, setValue, myField}) {

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








        // // addItemOnFocusin ##############################
            function addItemOnFocusin(event) {
                // console.log("create");
                console.log("createdsadssdsd");
                if ( salesListLength === salesItemIndex + 1 &&
                !event.currentTarget.contains(event.relatedTarget)
                ) { return eventsOnItem();}
            }

        return (
            <>
            <Box  
                // onFocus={(event) => addItemOnFocusin(event)}
                className="App"
                sx={{
                    mt: 0,
                    pt: 0,
                    pb: 1,
                    display: "grid",
                    gridTemplateColumns: "50px auto 150px 70px 60px 125px 125px 125px 50px ",
                    gridGap: 10,
                    alignItems: "baseline"
                }}
            >
                <Stack direction="row" 
                    alignItems="right" component='span' sx={{ display: "flex", taxtAlign: "right", width: "100%" }} >
                    {(salesListLength === salesItemIndex + 1) ? 
                    
                    <IconButton color="primary"  // aria-label="upload picture" component="label"
                        // onClick={() => append(createNewItemObj(obj, fields.length))}
                        sx={ {ml: "auto", mr: 0,} } 
                        >
                            
                        {/* <ButtonAddItem />  */}
                        <AddCircleRoundedIcon sx={ {ml: "auto", mr: 0,} }   />
                    </IconButton>


                    :
                    <Chip label={`${++idx}`} size="normal" color="primary" variant="outlined" 
                        sx={{ ml: "auto", mr: 0, border: "none", fontSize: '1em', fontWeight: 500, textAlign: 'right'  }}
                        // clickable
                    />
                    }   
                </Stack>
                <IconTextField 
                    onFocus={(event) => addItemOnFocusin(event)}
                    {...salesItemName.field}
                    // label="Product trade name" 
                    label="Przedmiot sprzedaży" 
                    // iconStart={<AccountCircle sx={{ color: "#0089ff", fontSize: 18 }} /> } 
                />
                {/* <MySelectInput objController={typeItem} slectOptions={optionCurrencies} labelName="currencie" /> */}
                <SelectSmallType {...typeItem.field} field={typeItem.field} />
                <SelectSmallTax {...taxItem.field} field={taxItem.field} />

                <IconTextNumber 
                    {...qtyItem.field}
                    // label="Quantity" 
                    label="Ilość" 
                    objController={qtyItem}
                    // iconStart={<AccountCircle sx={{ color: "#0089ff", fontSize: 18 }} /> } 
                />


{/* New concept */}
                <PriceInput objController={netItem}   
                // label="Net Price"
                label="Cena netto"
                    sx={{ display: entryPriceIsGross ? "none" : "block" }}
                    // iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: "1rem" }} />}
                    // iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: "1rem"  }} />}
                />
                <PriceInput objController={grossItem}   
                // label="Gross Price"
                label="Cena brutto"
                    sx={{ display: entryPriceIsGross ? "block" : "none" }}
                    // iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: "1rem" }} />}
                    // iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: "1rem"  }} />}
                />
{/* {netSum} */}
                <div align="right" style={{ 
                        // marginTop: "auto", marginBottom: 0 
                        // borderBottom: '1px', border: "1px solid black"
                    }}
                >{ 
                    entryPriceIsGross ? (setNetPriceItem(+grossItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)
                                            : (+netItem.field.value * +qtyItem.field.value).toFixed(2) }</div>
{/* {grossSum} */}
                <div align="right">{ entryPriceIsGross    ? (+grossItem.field.value * +qtyItem.field.value).toFixed(2) 
                                            : (setGrossPriceItem(+netItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)  }</div>
                <div align="center">
                    {children ? children : null}
                </div>
            </Box>
            </>
        );
    }






const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
        return (
            <TextField 
                {...props}
                variant="standard"
                // size="small"
                // helperText={false}
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

const IconTextNumber = ({ iconStart, iconEnd, InputProps, objController, ...props }) => {
        return (
            <TextField 
                {...props}
                variant="standard"
                type="number"
                // size="small"
                // helperText={false}

                InputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]',
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment    position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment    position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
                onChange={ event => {
                    var value = event.target.value.replace(/[^0-9\,\.]/ig,'');
                    value = value.replace(/[,]/gi,'.');
                    objController.field.onChange(value);
                    // console.log('valuePrice', value);
                    }
                } // send value to hook form 
            
            />
        );
    };
    // *see SelectInput 
    // ->     https://codesandbox.io/s/react-hook-form-mui-forked-9ohh3s




function SelectSmallType({field, ...props}) {

        return (
        <FormControl 
        {...props}
        sx={{ minWidth: 120 }}
        >
            <InputLabel 
// MASAKRA NO NIEWIERZ
            id="demo-simple-select-autowidth-label"
            variant="standard" 
            >Typ</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={field.value}
                label="Item Type"
                onChange={field.onChange}
                variant="standard"
                autoWidth
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

        return (
        <FormControl 
        {...props}
        sx={{ minWidth: 25 }}
        // size="small"
        >
            <InputLabel
                id="demo-simple-select-autowidth-label"
                variant="standard" 
            >VAT</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-tax"
                value={field.value}
                label="VAT"
                onChange={field.onChange}
                variant="standard"
                autoWidth
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