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
export const OptionCard = (props) => {
    const { sxCSS, children, label} = props;
    const { register } = useFormContext( );
    const translate = useTranslate();
    // const { onChange, onBlur, name, ref } = register('comments'); 
    return(
            // <div style={{ width: '100%' }}>

                <Card   sx={{  p: 0, m: 0,   borderRadius: 1.5, height: '100%', ...sxCSS, width: 'auto' }} 
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
                        {translate(label)}
                    </JoyTypography>
                </CardOverflow>
                    <Divider sx={{ p:0.15 }}  />
                    { children ? children : "" }
                </Card>
                // </div>
            // </Grid>
    );
};

export default OptionCard; 