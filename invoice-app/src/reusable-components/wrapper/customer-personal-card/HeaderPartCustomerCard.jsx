import * as React from "react";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { alpha, useTheme } from "@mui/material/styles";
import { useRecordContext, useTranslate } from "react-admin";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import { useWatch } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MQ_isMedium } from "../../../components/invoices/new-invoice/invoice-create/components/efaV5/sales-form-iterator/useSalesFormIteratorStyles";
import styled from "@emotion/styled";
import CustomerIcon from "@mui/icons-material/HomeWork";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import BorderColorRoundedIcon from "@mui/icons-material/EditRounded";
import AccentIconLabel from "../../icon/AccentIconLabel";
import ChipLabel from "../../icon/ChipLabel";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

const CustomArrowRightIcon = styled((props) => {
    const { expand, ...other } = props;
    return <ExpandMoreRoundedIcon {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginRight: "auto",
    marginLeft: "0px",
    marginTop: "-2px",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

// import { Chart } from "@/components/core/chart";

export function HeaderPartCustomerCard(props) {
    const buyerId = useWatch({ name: "buyer_id" });

    // if (!children) return null;
    return (
        <CardHeader
            sx={{
                backgroundColor:
                    "var(--mui-palette-background-level1, #fafafa)",
                p: 1.25,
                pt: 0.5,
                pb: 0,
                justifyContent: "center",
                alignItems: "center",
                "& .MuiCardHeader-action": {
                    alignSelf: "center",
                },
            }}
            action={
                buyerId === null ? (
                    <Button
                        disabled={buyerId ? false : true}
                        sx={{ pr: 2 }}
                        color="inherit"
                        size="small"
                        startIcon={
                            <AddHomeWorkIcon fontSize="var(--icon-fontSize-md)" />
                            // <CustomArrowRightIcon />
                        }
                    >
                        Add
                    </Button>
                ) : (
                    <Button
                        disabled={buyerId ? false : true}
                        sx={{ pr: 2 }}
                        color="inherit"
                        size="small"
                        startIcon={
                            <BorderColorRoundedIcon fontSize="var(--icon-fontSize-md)" />
                            // <CustomArrowRightIcon />
                        }
                    >
                        Edit
                    </Button>
                )
            }
            title={
                <AccentIconLabel
                    icon={<CustomerIcon />}
                    iconSize="1.25em"
                    // iconSx
                    cssIcon={{ padding: "2px" }}
                    circleSize="xs"
                    sx={{ ml: -0.25, fontSize: "1.15rem", pb: 0.25 }}
                    // boxSx={{ mt: -1.5, pr: 1 }}
                    label="myroot.form.label.header.buyer"
                />
            }
        />
    );
}
