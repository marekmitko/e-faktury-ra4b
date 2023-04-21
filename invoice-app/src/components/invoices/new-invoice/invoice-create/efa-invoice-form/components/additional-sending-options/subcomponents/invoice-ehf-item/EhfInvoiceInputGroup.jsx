import * as React from "react";
import Stack from "@mui/system/Stack";
import FocusTrap from "@mui/base/FocusTrap";
import Input from "@mui/joy/Input";
import { Box, Grid, ListDivider, Typography } from "@mui/joy";
import IssuerEhfInput from "./components/IssuerEhfInput";
import BuyerEhfInput from "./components/BuyerEhfInput";
import OrderEhfInput from "./components/OrderIEhfInput";
import { Divider } from "@mui/material";
import { useRecordContext } from 'react-admin';
import { useFormContext, Controller, useWatch } from 'react-hook-form';

    
export default function EhfInvoiceInputGroup() {

    const record = useRecordContext();
    const { control, setValue } = useFormContext();
    const changeBuyer = useWatch({ control, name: 'buyer_id' });

    if(!changeBuyer) setValue('buyer_ref', "" );


    const preInvoiceId = useWatch({ control, name: 'preInvoiceId' });

    // const db_buyer = getValues('dbBuyers');
    // console.log(db_buyer?.company);

    return (
        <>
            {/* <Stack spacing={1} sx={{ p: 1, mt: 1,   }}> */}
            <Box sx={{ p: 1, mt: 1,   }} >
                <ListDivider />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="buyer_order_no"
                        render={({
                            field: { onChange, onBlur, value, name, ref,   },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState,
                            }) => {
                                // if(changeBuyer) field['value'] = changeBuyer;
                                return(
                                    <OrderEhfInput startLabel="Numer zamówienia:"  
                                        name={name}
                                        defaultValue={preInvoiceId}
                                        value={value}
                                        placeholder="Wprowadź numer" 
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                    
                                    />
                                )
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12} >
                    <Controller
                        control={control}
                        name="user_ref"
                        render={({
                            field: { onChange, onBlur, value, name, ref,   },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState,
                            }) => {
                                // if(changeBuyer) field['value'] = changeBuyer;
                                return(
                                    <IssuerEhfInput  
                                        name={name}
                                        value={value}
                                        placeholder="Wprowadź Wystawcę" 
                                        // defaultValue={changeBuyer ?  changeBuyer : "" } 
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                    />
                                )
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12}  >
                    <Controller
                        control={control}
                        name="buyer_ref"
                        render={({
                            field: { onChange, onBlur, value, name, ref,   },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState,
                            }) => {
                                // if(changeBuyer) field['value'] = changeBuyer;
                                return(
                                    <BuyerEhfInput 
                                        name={name}
                                        value={value}
                                        placeholder={changeBuyer?  changeBuyer : "Wprowadź Nabywcę" } 
                                        // defaultValue={changeBuyer ?  changeBuyer : "" } 
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                        sx={{
                                            placeholderOpacity: 0.1
                                          }}
                                    />
                                )
                            }
                        }
                    />
                </Grid>
            </Grid>
            </Box>
        </>
    );
    }
