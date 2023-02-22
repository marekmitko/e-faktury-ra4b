import * as React from 'react';
import { Card, Grid, 
    // Stack, Paper, TableContainer 
} from '@mui/material';
// import { OptionInputBox } from './OptionInputBox';
// import { LogotypeItem } from './LogotypeItem';
// import { flexbox } from '@mui/system';
// import { PROPERTY_VALUE_CSS_CONFIG } from '../../../../../../../config/GLOBAL_CONFIG_CONST';
import { JoyNotebox } from './JoyNotebox';
import Sheet from "@mui/joy/Sheet";
import JoyOptionbox from './JoyOptionbox';
import { useController, useFormContext, useWatch} from 'react-hook-form';
import InvoiceAdditionalCheckbox from './component/InvoiceAdditionalCheckbox';
import EhfCheckbox from './component/EhfCheckbox';
import SendInvoiceCheckbox from './component/subcomponent/SendInvoiceCheckbox';
import { EhfOptionbox } from '../../../../../efa-invoice-form/desktop/invoice-ehf-box/EhfOptionbox';
import { useTranslate } from 'react-admin';
import { Chip } from '@mui/joy';
import JoyInput  from "@mui/joy/Input";
import TextFieldDecorator from './component/subcomponent/TextFieldDecorator';
import EhfBuyerTextInput from './component/subcomponent/EhfBuyerTextInput';
import EhfUserTextInput from './component/subcomponent/EhfUserTextInput';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const AdditionalBox = (props) => {
    const { register } = useFormContext();
    const ehf = useWatch({ name: "ehf" });
    const translate = useTranslate(); 


    const EHFCheckbox  = useController({ name: 'ehf', defaultValue: false, });

    return(
        <Grid item xs={12} >
            <Grid container spacing={1} rowSpacing={1}>
                <Grid item xs={12}  >
                {/* <Grid item xs={xs? xs : 12} sm={sm? sm : 6}> */}
                    <Card    sx={{  mt: 0 }} >
                                {/* <Grid  xs={12} container spacing={1} rowSpacing={2} > */}
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} sx={{   border: '1px dashed grey' }}> 
                                    <Grid item xs={12} sm={3}  md={4}>
                                        <InvoiceAdditionalCheckbox />
                                    </Grid>
                                    <Grid item xs={12} sm={3}  md={4}>
                                        <SendInvoiceCheckbox />
                                    </Grid>
                                    <Grid item xs={12} sm={6}  md={4}>
                                        <div>
                                        <EhfOptionbox  label={translate('myroot.form.label.checkbox.ehf')} >
                                        {  ehf ?  
                                            ehf && (
                                                <Chip   sx={{ paddingLeft: '45px', marginTop: '-70px', height: '25px'}} variant="soft"> 
                                                    <small> ZAMÓWIENIE NR: </small>  
                                                    <JoyInput sx={{ display: 'inline', p:1 }} 
                                                    // variant="plain"
                                                    placeholder="Podaj numer"   
                                                    {...register('buyer_order_no')}/>
                                                </Chip>
                                                )  
                                            : (" ")
                                        }
                                        </EhfOptionbox>
                                        {ehf && (
                                        <div style={{marginTop: '-20px'}}>  
                                            {/* <EhfBuyerTextInput /> 
                                            <EhfUserTextInput />    */}
                                        </div>
                                        )}
                                        </div>
                                    </Grid>
                                            {/* 
                                    <Grid item xs={12} sm={8}>
                                        <OptionInputBox >
                                            {props.children ? (props.children) : null}
                                            </OptionInputBox>
                                            <div>
                                            {props.moreDetailEHF && ( 
                                                // <div>
                                        //     <label> Wystawca: </label>
                                        //     <input type="text" 
                                        //     // {...register("Interests")}
                                        //      />
                                        //      <label> Odbiorca: </label>
                                        //     <input type="text" 
                                        //     // {...register("Interests")}
                                        //      />
                                        //      <label> Nr: </label>
                                        //     <input type="text" 
                                        //     // {...register("Interests")}
                                        //     />
                                        //     </div>
                                        //     )}
                                        //     </div>
                                    </Grid>
                                    */}
                                </Grid>
                            {/* </Grid> */}
                        {/* </Sheet> */}
                    </Card>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default AdditionalBox; 