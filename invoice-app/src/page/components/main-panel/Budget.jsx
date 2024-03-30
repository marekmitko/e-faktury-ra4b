import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import CurrencyDollarIcon from "@mui/icons-material/CurrencyExchange";
import { useTranslate } from "react-admin";

export function Budget({ diff, trend, sx, value, label }) {
    const TrendIcon = trend === "up" ? ArrowUpIcon : ArrowDownIcon;
    const trendColor =
        trend === "up"
            ? "var(--mui-palette-success-main)"
            : "var(--mui-palette-error-main)";
    const translate = useTranslate();
    return (
        <Card sx={sx} className="info-card accent-icon">
            <CardContent>
                <Stack spacing={3}>
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
                            className="main-accent-icon budget-circle"
                            sx={{
                                backgroundColor:
                                    "var(--mui-palette-primary-main)",
                                height: "56px",
                                width: "56px",
                            }}
                        >
                            <CurrencyDollarIcon className="budget-icon" />
                        </Avatar>
                    </Stack>
                    {diff ? (
                        <Stack
                            sx={{ alignItems: "center" }}
                            direction="row"
                            spacing={2}
                        >
                            <Stack
                                sx={{ alignItems: "center" }}
                                direction="row"
                                spacing={0.5}
                            >
                                <TrendIcon
                                    color={trendColor}
                                    fontSize="var(--icon-fontSize-md)"
                                />
                                <Typography color={trendColor} variant="body2">
                                    {diff}%
                                </Typography>
                            </Stack>
                            <Typography
                                color="text.secondary"
                                variant="caption"
                            >
                                Since last month
                            </Typography>
                        </Stack>
                    ) : null}
                </Stack>
            </CardContent>
        </Card>
    );
}
