import * as React from 'react';
import { useTranslate } from 'react-admin'
import { Card, Stack, Grid, Paper } from '@mui/material';
import JoyTypography from "@mui/joy/Typography";
import JoyTextarea from '@mui/joy/Textarea';
import { useFormContext } from 'react-hook-form';
import { CardOverflow, Divider } from '@mui/joy';
import PaymentChannelSwitcherV2 from './component/subcomponent/PaymentChannelSwitcherV2';



// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const PaymentBoxV2 = (props) => {
    const { sxCSS } = props;
    const { register } = useFormContext( );
    const translate = useTranslate();
    // const { onChange, onBlur, name, ref } = register('comments'); 
    return(

                <Card   sx={{  p: 0, m: 0,   borderRadius: 1.5, height: '100%', ...sxCSS, }} 
                variant="solid"
                >
                <CardOverflow
                    variant="soft"
                    sx={{
                    display: 'flex',
                    gap: 1.5,
                    py: 1,
                    px: 'var(--Card-padding)',
                    bgcolor: 'background.level2',
                    }}
                >
                    <JoyTypography textColor='neutral.700' level="body2" fontWeight='400' sx={{     px: 1,  }}>
                        {translate('myroot.form.label.header.payment_channel')}
                    </JoyTypography>
                </CardOverflow>
                    <Divider sx={{ p:0.15 }}  />
                    <PaymentChannelSwitcherV2 register={register} />
                </Card>
            // </Grid>
    );
};

export default PaymentBoxV2; 