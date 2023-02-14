import { useState, useEffect, useMemo} from "react";
import {InputAdornment, IconButton,   Chip, Stack, TextField,  } from "@mui/material";
import Box from "@mui/material/Box";
import {   useController, useFormContext, useWatch } from "react-hook-form";
import {  useTranslate } from "react-admin";
import { PriceInput } from "./input-box-component/PriceInput";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
// import AutoItemCategoryInput from "./input-box-component/subcomponent/AutoItemCategoryInput";
import SelectItemOption from "./input-box-component/subcomponent/SelectItemOption";
import { TextInputItem } from "./input-box-component/subcomponent/TextInputItem";
import { productOptions, taxOptions, typeOptions }  from './options_select_input';
// import JoyComboInputSelect from "./input-box-component/subcomponent/JoyComboInputSelect";


// Obcaaj https://codesandbox.io/s/react-hook-form-mui-forked-0xkhyk

function setGrossPriceItem(netPriceItem, taxValue){
    // if(!isNaN(!parseFloat(taxValue))) return "";
    if(netPriceItem)
    return (netPriceItem*taxValue)/100;
}
function setNetPriceItem(grossPriceInput, taxValue){
    // if(!isNaN(!parseFloat(taxValue))) return "";
    if(+grossPriceInput)
    return (+grossPriceInput / (+taxValue)) * 100 ;
}

export default function InputBox ({ 
    // addItemOnFocusin, 
    ButtonAddItem, setCellGridTemplateRowItem, setValue,
    eventsOnItem, salesListLength, salesItemIndex, children, update, control, arrayItemIdx, idx, entryPriceIsGross, myField}) {

    const translate = useTranslate();

    const salesItemName = useController({ name: `${arrayItemIdx}._${idx}_product_name`, control, defaultValue: "", rules: { required: true }, });
    const qtyItem = useController({ name: `${arrayItemIdx}._${idx}_product_count`, control, defaultValue: "", });
    const taxItem = useController({ name: `${arrayItemIdx}._${idx}_product_vat`, control, defaultValue: "", });
    const netItem = useController({ name: `${arrayItemIdx}._${idx}_product_price_netto`, control, defaultValue: "", });
    const grossItem = useController({ name: `${arrayItemIdx}._${idx}_product_price_brutto`, control, defaultValue: "", });
    const typeItem = useController({ name: `${arrayItemIdx}._${idx}_product_type`, control, defaultValue: "", });
    const categoryItem = useController({ name: `${arrayItemIdx}._${idx}_product_name_selected`, control, defaultValue: "", });

    // const netPriceInput = useWatch({ control, name: `${arrayItemIdx}._${idx}_product_price_netto` });
    // const grossPriceInput = useWatch({ control, name: `${arrayItemIdx}._${idx}_product_price_brutto` });
    
    const enteryValue = entryPriceIsGross ? grossItem.field.value : netItem.field.value;

    const newDependentValue = useMemo(() => {
        // if (!enteryValue) return "";
        if (!entryPriceIsGross  ) //setGrossPriceItem
            return ((!isNaN(enteryValue)) ? (parseFloat(enteryValue)  * (+taxItem.field.value)) : "0.00" ) / 100;
        if (entryPriceIsGross) //setNetPriceItem
            return (parseFloat(enteryValue) / (+taxItem.field.value)) * 100 ;
        }, [enteryValue, taxItem.field.value, entryPriceIsGross]);


    // React Hook useEffect has missing dependencies: 'grossItem.field.name', 'netItem.field.name', 'newDependentValue', and 'setValue'. Either include them or remove the dependency array. If 'setValue' changes too often, find the parent component that defines it and wrap that definition in useCallback.eslintreact-hooks/exhaustive-deps
    //  Chyba umyślnie to tak tutaj było 🙈
    useEffect(() => {
                if ( !isNaN(!parseFloat(newDependentValue)) && entryPriceIsGross ) {
                    setValue(`${netItem.field.name}`, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "" }`);
                    // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
                }
                if ( !isNaN(!parseFloat(newDependentValue)) && !entryPriceIsGross ){
                    setValue( `${grossItem.field.name}`, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "" }` );
                    // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );

                }
                // }, [ grossPriceInput, taxValueInput]);
            }, [enteryValue, taxItem.field.value, entryPriceIsGross]);

     // addItemOnFocusin ##############################
            function addItemOnFocusin(event) {
                // console.log("create");
                console.log("inItemOnFocusin");
                if ( salesListLength === salesItemIndex + 1 &&
                !event.currentTarget.contains(event.relatedTarget)
                ) { return eventsOnItem();}
            }

        //   const { formState: { errors } } = useFormContext();











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
                    gridTemplateColumns: setCellGridTemplateRowItem,
                    gridGap: 10,
                    alignItems: "baseline"
                }}
            >
                <Stack direction="row" 
                    alignItems="right" component='span' sx={{ display: "flex", taxtAlign: "right", width: "100%" }} >
                    {(salesListLength === salesItemIndex + 1) ? 
                        <IconButton color="primary"  sx={ {ml: "auto", mr: 0,} } // aria-label="upload picture" component="label"
                            onClick={() => eventsOnItem()}
                        >  {/* <ButtonAddItem />  */}
                            <AddCircleRoundedIcon sx={ {ml: "auto", mr: 0,} }   />
                        </IconButton>
                        :
                        <Chip label={`${++idx}`} size="normal" color="primary" variant="outlined" 
                            sx={{ ml: "auto", mr: 0, border: "none", fontSize: '1em', fontWeight: 500, textAlign: 'right'  }}
                        />
                    }   
                </Stack>
                <Stack direction="row" spacing={0} alignItems="flex-start" sx={{ paddingTop: 0, marginTop: '-15px', width: '100%' }}
                        // divider={<Divider orientation="vertical" flexItem />}
                >
                    <SelectItemOption {...categoryItem.field} field={categoryItem.field} variant="standard" 
                        label="myroot.form.label.inputbox_itemrow.itemNameSelect" 
                        sx={{ width: '40%'}} defaultValue="placeholder" options={productOptions} 
                    />
                    <TextInputItem {...salesItemName.field} onFocus={(event) => addItemOnFocusin(event)}  
                        sx={{ width: '60%'}} // iconStart={<AccountCircle sx={{ color: "#0089ff", fontSize: 18 }} /> } 
                        label="myroot.form.label.inputbox_itemrow.itemNameField" 
                    />
                    {/* <p>{ errors.salesItemName && <span>This field is required</span>}</p> */}
                </Stack>
{/* <td> <JoyComboInputSelect /> </td> */}
{/* <AutoItemCategoryInput /> */}
                <SelectItemOption {...typeItem.field} field={typeItem.field} variant="standard"
                    label="myroot.form.label.inputbox_itemrow.typeItem" 
                    sx={{ minWidth: 120 }} defaultValue="placeholder" options={typeOptions}  
                />
                <SelectItemOption {...taxItem.field} field={taxItem.field} variant="standard"
                    label="myroot.form.label.inputbox_itemrow.taxItem" 
                    sx={{ minWidth: 25 }} defaultValue="placeholder" options={taxOptions}  
                />
                <IconTextNumber   {...qtyItem.field} objController={qtyItem}
                    label={translate('myroot.form.label.inputbox_itemrow.qtyItem')} 
                />
                <PriceInput objController={netItem} sx={{ display: entryPriceIsGross ? "none" : "block" }}
                    label={translate('myroot.form.label.inputbox_itemrow.netItem')}
                />
                <PriceInput objController={grossItem} sx={{ display: entryPriceIsGross ? "block" : "none" }}
                    label={translate('myroot.form.label.inputbox_itemrow.grossItem')}
                />
{/* {netSum} */}
                <div align="right" style={{   // marginTop: "auto", marginBottom: 0    // borderBottom: '1px', border: "1px solid black"
                    }}
                >{ 
                    (entryPriceIsGross ) ? (setNetPriceItem(+grossItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)
                                            : (( +netItem.field.value ) ?  (+netItem.field.value * +qtyItem.field.value).toFixed(2)
                                                : "")
                                        }</div>
{/* {grossSum} */}
                <div align="right">{ (entryPriceIsGross) ? ( +grossItem.field.value * +qtyItem.field.value).toFixed(2) 
                                            : ( +netItem.field.value ? ((setGrossPriceItem(+netItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2))  
                                                : "" )
                                        }</div>
                <div align="center">
                    {children ? children : null}
                </div>
            </Box>
            </>
        );
    }

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
 