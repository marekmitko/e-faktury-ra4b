import * as React from "react";
import Cloud from "@mui/icons-material/Cloud";
import Sun from "@mui/icons-material/LightMode";
import Box from "@mui/joy/Box";
import JoyChip from "@mui/joy/Chip";
import { Avatar, ChipDelete, Stack } from "@mui/joy";
import { DeleteForever } from "@mui/icons-material";
import { Typography, Chip } from "@mui/material";
import CheckedIcon from "@mui/icons-material/DownloadDoneRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UncheckedIcon from "@mui/icons-material/AddRounded";
import { useTranslate } from "react-admin";

export default function ChipLabel(props) {
    const { label, className, children, error, sx, chipSx, disabled } = props;
    const translate = useTranslate();
    return (
        <Box
            className={className}
            sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                "& .mva-chip-label": {
                    fontWeight: "600",
                    textTransform: "uppercase",
                    "& .MuiChip-label": { ml: "-4px" },
                    "&.MuiChip-root.MuiChip-filled.MuiChip-colorError": {
                        backgroundColor: "danger.100",
                        color: "var(--mui-palette-error-dark)",
                    },
                    "&.MuiChip-colorError .icon-unchecked": {
                        transform: "rotate(45deg)",
                        color: "var(--mui-palette-error-main)",
                        marginTop: "-2px",
                        backgroundColor: "transperent",
                        borderRadius: "50%",
                    },
                    "&.MuiChip-root.MuiChip-filled.MuiChip-filledInfo": {
                        backgroundColor: "primary.50",
                        color: "primary.900",
                        "& .icon-checked": {
                            color: "primary.900",
                        },
                    },
                    "&.MuiChip-root.MuiChip-filled.MuiChip-colorError.Mui-disabled":
                        {
                            border: "1px solid",
                            borderColor: "neutral.700",
                            backgroundColor: "neutral.50",
                            color: "neutral.900",
                            "& .icon-checked": {
                                color: "neutral.900",
                            },
                        },
                    "&.MuiChip-root.MuiChip-filled.MuiChip-filledInfo.Mui-disabled":
                        {
                            border: "1px solid",
                            borderColor: "neutral.700",
                            backgroundColor: "neutral.50",
                            color: "neutral.900",
                            "& .icon-checked": {
                                color: "neutral.900",
                            },
                        },
                },
                ...sx,
            }}
        >
            <Chip
                disabled={disabled ? true : false}
                color={error ? "error" : "info"}
                className="mva-chip-label"
                sx={chipSx}
                size="small"
                avatar={
                    error ? (
                        <UncheckedIcon className="icon-unchecked" />
                    ) : (
                        <CheckedIcon className="icon-checked" />
                    )
                }
                label={"MVA"}
                variant="filled"
            />

            <Stack spacing={1}>
                <Typography
                    // className="title"
                    color="text.secondary"
                    variant="overline"
                    sx={{
                        color: disabled ? "neutral.600" : "primary.900",
                        fontSize: "0.85rem",
                        fontWeight: "400",
                        letterSpacing: "-0.1px",
                        marginTop: "-1.5px",
                    }}
                >
                    {/* {label ? translate(`${label}`) : "NR ORG.:"} */}
                    {children}
                </Typography>
            </Stack>
        </Box>
    );
}
