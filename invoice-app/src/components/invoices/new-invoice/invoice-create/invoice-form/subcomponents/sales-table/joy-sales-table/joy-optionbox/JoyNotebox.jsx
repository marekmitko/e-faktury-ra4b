import * as React from 'react';
import { useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField, useTranslate } from 'react-admin'
import { Card, Stack, Grid, Paper } from '@mui/material';

// import { OptionInputBox } from './OptionInputBox';
// import { LogotypeItem } from './LogotypeItem';
// import { flexbox } from '@mui/system';
// import { PROPERTY_VALUE_CSS_CONFIG } from '../../../../../../../config/GLOBAL_CONFIG_CONST';
import JoyTypography from "@mui/joy/Typography";
import JoyTextarea from '@mui/joy/Textarea';



// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const JoyNotebox = ({register}) => {
    const translate = useTranslate();
    const { onChange, onBlur, name, ref } = register('comments'); 
    return(

            <Grid item xs={12} sm={3}>
                {/* <Card sx={{ p: 0.5, height:'100%', display: 'flex', alignContent: "flex-start" }} > */}
                <JoyTypography
                    // id="example-payment-channel-label"
                    // level="body5"
                    textTransform="uppercase"
                    // fontWeight="xl"
                    sx={{ 
                        fontSize: "xs1",
                        letterSpacing: "xs",
                        fontWeight: "lg",
                        color: "text.secondary",
                        pb: 1,
                    }}
                >
            {translate('myroot.form.label.header.additional_note')}
            </JoyTypography>
                    <JoyTextarea 
                        placeholder={translate('myroot.form.placeholder.notebox_invoice')} 
                        minRows={10} 
                        color="text.secondary"
                        sx={{
                            backgroundColor: "aliceblue"
                        }}
                        {...register('comments')}
                    />
                {/* </Card> */}
            </Grid>
    );
};

export default JoyNotebox; 