    import * as React from "react";
    import AspectRatio from "@mui/joy/AspectRatio";
    import Card from "@mui/joy/Card";
    import CardContent from "@mui/joy/CardContent";
    import CardOverflow from "@mui/joy/CardOverflow";
    import Divider from "@mui/joy/Divider";
    import Typography from "@mui/joy/Typography";
    import Box from "@mui/joy/Box";
    import Grid from "@mui/material/Grid";
import { useTranslate } from "react-admin";
import { Stack } from "@mui/material";

    export default function PaymentInfoShow({ totalGross, totalNet,  }) {
    const translate = useTranslate();
    return (
        <Card
            orientation="horizontal"
            variant="outlined"
            sx={{ width: "90%", bgcolor: "background.body", 
            mr: "auto" }}
        >
    
            <CardOverflow
                variant="soft"
                color="primary"
                sx={{
                    px: 0.1,
                    writingMode: "vertical-rl",
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                }}
            >
                <Typography fontWeight='500' textColor='primary.600' > 
                    {translate('myroot.form.invoiceConfirmModal.paymentInfoShow.verticalCaption')} 
                </Typography>
            </CardOverflow>
            <Divider />
            <CardContent sx={{ my: -1, px: 2, width: "80%" }}>
                <Grid
                container
                rowSpacing={0.5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                <Grid item xs={12} sm={12} sx={{ mb: -0.5 }}   >
                    <Stack  direction="column" sx={{ mt: 0.75, mb: -1 }} >
                        <Typography level="subtitle1" textColor='neutral.600' fontWeight='500'  
                            sx={{ p:0, m: 0, lineHeight: 0.75, textTransform: 'uppercase'  }}
                        >
                            {translate('myroot.form.invoiceConfirmModal.paymentInfoShow.horizontalCaption')} 
                        </Typography>
                        <Typography  level="caption" textColor='neutral.500'    //sx={{ fontStyle: 'italic' }} 
                        >
                            {translate('myroot.form.invoiceConfirmModal.paymentInfoShow.horizontalSubtitle')} 
                        </Typography>
                    </Stack>
                        <Typography
                            // fontSize="md"
                            level="h5"
                            // lineHeight={1.7}
                            align="right" 
                            mr="-20px" 
                            mt="5px"
                            // textColor='primary.plainColor'
                            textColor='primary.800'
                        >
                    <b> { (totalGross) ? (totalGross).toFixed(2) : ''  }</b> <small style={{ color: 'primary' }}>PLN</small>
                        </Typography>
                        <Typography 
                            level="subtitle2" textColor='neutral.500'  
                            align="right" 
                            mr="-20px" 
                            mt="-5px"
                            fontWeight="300"
                        ><small>{translate('myroot.form.invoiceConfirmModal.paymentInfoShow.capitionVat')} </small>
                        <Typography fontWeight="500" textColor='neutral.600' >{ (totalGross && totalNet) ? (totalGross-totalNet).toFixed(2) : ''  }</Typography>
                        <small>{` ${translate('myroot.form.invoiceConfirmModal.paymentInfoShow.currencyName')}`} </small>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
    }
