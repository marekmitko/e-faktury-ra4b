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
import PaymentBoxV2 from './PaymentBoxV2';
import { OptionCard } from './OptionCard';
import SendInvoiceCheckboxV2 from './component/subcomponent/SendInvoiceCheckboxV2';
import PaymentChannelSwitcherV2 from './component/subcomponent/PaymentChannelSwitcherV2';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const AdditionalBoxV2 = (props) => {
    const { register } = useFormContext();
    const ehf = useWatch({ name: "ehf" });
    const translate = useTranslate(); 


    const EHFCheckbox  = useController({ name: 'ehf', defaultValue: false, });

    return(

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} > 
            <Grid item xs={12} sm={12}  md={5}>
                <OptionCard  label='myroot.form.label.header.payment_channel' >
                    <PaymentChannelSwitcherV2 register={register} />
                </OptionCard>
            </Grid>
            <Grid item xs={12} sm={12}  md={7}>
                <OptionCard  label='myroot.form.label.header.send_invoice' >
                    <SendInvoiceCheckboxV2 />
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
                </OptionCard>
            </Grid>
        </Grid>

    );
};

export default AdditionalBoxV2; 