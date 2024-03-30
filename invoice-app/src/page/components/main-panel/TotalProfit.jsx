import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReceiptIcon from "@mui/icons-material/Addchart";
import { useTranslate } from "react-admin";

export function TotalProfit({ value, sx, label }) {
    const translate = useTranslate();
    return (
        <Card sx={sx} className="info-card accent-icon">
            <CardContent>
                <Stack
                    direction="row"
                    sx={{
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            className="title"
                            color="text.secondary"
                            variant="overline"
                        >
                            {label ? translate(`${label}`) : ""}
                        </Typography>
                        <Typography variant="h4">{value}</Typography>
                    </Stack>
                    <Avatar
                        className="main-accent-icon profit-circle"
                        sx={{
                            backgroundColor: "var(--mui-palette-primary-main)",
                            height: "56px",
                            width: "56px",
                        }}
                    >
                        <ReceiptIcon className="profit-icon" />
                    </Avatar>
                </Stack>
            </CardContent>
        </Card>
    );
}
