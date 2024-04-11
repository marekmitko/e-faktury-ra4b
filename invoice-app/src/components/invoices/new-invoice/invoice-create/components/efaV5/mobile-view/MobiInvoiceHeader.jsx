import * as React from "react";
import {
    Box,
    Card,
    CardOverflow,
    // Divider,
    // ListDivider,
    Typography,
} from "@mui/joy";
import { func } from "prop-types";
import DatePickerGroup from "../../header-data-group/DatePickerGroup";
import { useTranslate } from "react-admin";
 
import { CardContent } from "@mui/material";

const Separator = () => <Box pt="0.5em" />;

export default function MobiInvoiceHeader(props) {
    const translate = useTranslate();
    return (
        <Card
            sx={{
                p: 0,
                pb: 0,
                m: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "center",
                gap: 0,
                boxShadow: "none",
                width: "100%",
                alignItems: "flex-start",
                border: 0,
                bgcolor: "background.paper",
            }}
        >
            {/* <CardOverflow> */}

            <CardOverflow
                variant="soft"
                sx={(theme) => ({
                    borderRadius: 0,
                    display: "flex",
                    p: 0,
                    m: 0,
                    backgroundColor:
                        "var(--mui-palette-background-level1, #fafafa)",
                    width: "100%",
                    // borderTopLeftRadius: '15px',
                    // borderTopRightRadius: '15px'
                    // borderBottom: `2px solid ${theme.vars.palette.divider}`,
                    borderBottom: "1px solid",
                    borderBottomColor:
                        "var(--mui-palette-background-level1, #fafafa)",
                })}
            >
                <Box sx={{ display: "flex", margin: "0 0 0 auto", px: 1 }}>
                    <Typography
                        component="span"
                        level="body2"
                        // startDecorator={<InfoOutlined />}
                        sx={{
                            mt: 0.25,
                            mb: -0.25,
                            wordBreak: "break-all", //Om //*edu Obczaj co to jest wordBreak in css
                            alignItems: "flex-start",
                            textTransform: "uppercase",
                            transform: "scale(0.85)",
                            color: "text.secondary",
                            fontWeight: "400",
                        }}
                    >
                        {translate(
                            "resources.e_faktury.create.label.invoice_no"
                        )}
                    </Typography>

                    <Typography
                        level="body3"
                        sx={{
                            fontWeight: "500",
                            color: "neutral.900",
                            transform: "scale(0.85)",
                            textAlign: "left",
                        }}
                    >
                        {props?.invoiceId ? props.invoiceId : ""}
                    </Typography>
                </Box>
            </CardOverflow>
            <CardContent
                sx={{
                    px: 1,
                    py: 0,
                    "&.MuiCardContent-root": { paddingBottom: 1 },
                    width: "100%",
                }}
            >
                <Separator />
                <DatePickerGroup />
            </CardContent>
        </Card>
    );
}
