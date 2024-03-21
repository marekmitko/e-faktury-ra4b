import * as React from "react";
import {
    Box,
    Card,
    CardOverflow,
    Divider,
    ListDivider,
    Typography,
} from "@mui/joy";
import { func } from "prop-types";
import DatePickerGroup from "../../header-data-group/DatePickerGroup";
import { useTranslate } from "react-admin";

const Separator = () => <Box pt="0.5em" />;

export default function InvoiceHeader(props) {
    const translate = useTranslate();
    return (
        <Card
            sx={{
                p: 1,
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                gap: 0,
                boxShadow: "none",
                borderRadius: 0,
                width: "100%",
                alignItems: "flex-start",
                bgcolor: "background.paper",
            }}
        >
            <DatePickerGroup />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 0,
                    justifyContent: "center",
                }}
            >
                <Typography
                    component="span"
                    level="body2"
                    // startDecorator={<InfoOutlined />}
                    sx={{
                        mt: 0.75,
                        mb: -0.25,
                        wordBreak: "break-all", //Om //*edu Obczaj co to jest wordBreak in css
                        alignItems: "flex-start",
                        maxWidth: 240,
                        textTransform: "uppercase",
                        transform: "scale(0.85)",
                        color: "neutral.600",
                    }}
                >
                    {translate("resources.e_faktury.create.label.invoice_no")}
                </Typography>

                <Typography
                    level="body3"
                    sx={{
                        fontWeight: "500",
                        color: "neutral.600",
                        transform: "scale(0.89)",
                        textAlign: "left",
                    }}
                >
                    {props?.invoiceId ? props.invoiceId : ""}
                </Typography>
            </Box>
        </Card>
    );
}
