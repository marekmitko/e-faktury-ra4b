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
import { formatCurrency } from "../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ";

export default function PaymentInfoShow({ totalGross, totalNet }) {
    const translate = useTranslate();
    return (
        <Card
            orientation="horizontal"
            variant="outlined"
            // variant="plain"
            sx={{
                width: "90%",
                bgcolor: "background.body",
                backgroundColor: "background.level1",
                ml: "auto",
                boxShadow: "none",
                px: 0.5,
            }}
        >
            {/* <CardOverflow
                variant="soft"
                color="primary"
                sx={{
                    px: 0.1,
                    writingMode: "vertical-rl",
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    // backgroundColor: "background.body",
                    backgroundColor: "background.level2",
                }}
            >
                <Typography
                    fontWeight="400"
                    textColor="primary.900"
                    sx={{ letterSpacing: "1px" }}
                >
                    {translate(
                        "myroot.form.invoiceConfirmModal.paymentInfoShow.verticalCaption"
                    )}
                </Typography>
            </CardOverflow> */}
            {/* <Divider /> */}
            <CardContent sx={{ my: -1, px: 1 }}>
                <Grid
                    container
                    rowSpacing={0.5}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={12} sm={12} sx={{ mb: -0.5 }}>
                        <Stack direction="column" sx={{ mt: 0.75, mb: -1 }}>
                            <Typography
                                level="h6"
                                textColor="neutral.600"
                                fontWeight="400"
                                sx={{
                                    p: 0,
                                    m: 0,
                                    lineHeight: 0.5,
                                    // textTransform: "uppercase",
                                }}
                            >
                                {translate(
                                    "myroot.form.invoiceConfirmModal.paymentInfoShow.horizontalCaption"
                                )}
                            </Typography>
                            <Typography
                                level="subtitle2"
                                textColor="neutral.600"
                                fontWeight="300"
                            >
                                <small>
                                    {translate(
                                        "myroot.form.invoiceConfirmModal.paymentInfoShow.horizontalSubtitle"
                                    )}
                                </small>
                            </Typography>
                        </Stack>
                        <Typography
                            // fontSize="md"
                            level="h5"
                            align="right"
                            // mr="-20px"
                            mt="5px"
                            // textColor='primary.plainColor'
                            textColor="primary.800"
                            fontWeight="500"
                        >
                            {totalGross ? formatCurrency(totalGross) : null}
                        </Typography>
                        <Typography
                            level="subtitle2"
                            textColor="neutral.600"
                            align="right"
                            // mr="-20px"
                            mt="-5px"
                            fontWeight="300"
                        >
                            <small>
                                {translate(
                                    "myroot.form.invoiceConfirmModal.paymentInfoShow.capitionVat"
                                )}{" "}
                            </small>
                            <Typography
                                fontWeight="400"
                                textColor="neutral.600"
                            >
                                {totalNet
                                    ? formatCurrency(totalGross - totalNet)
                                    : null}
                            </Typography>
                        </Typography>
                        {/* <Typography
                            level="subtitle2"
                            textColor="neutral.600"
                            align="right"
                            // mr="-20px"
                            mt="-5px"
                            fontWeight="300"
                        >
                            <small>
                                {translate(
                                    "myroot.form.invoiceConfirmModal.paymentInfoShow.capitionNet"
                                )}{" "}
                            </small>
                            <Typography
                                fontWeight="400"
                                textColor="neutral.600"
                            >
                                {totalNet ? formatCurrency(totalNet) : null}
                            </Typography>
                        </Typography> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
