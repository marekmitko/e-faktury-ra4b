"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { alpha, useTheme } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowClockwiseIcon from "@mui/icons-material/History";
import {
    Labeled,
    TextField,
    useRecordContext,
    useTranslate,
} from "react-admin";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import { useWatch } from "react-hook-form";
import { AddressDetailsBuyer } from "./components/AddressDetailsBuyer";
import { ContactDetailsBuyer } from "./components/ContactDetailsBuyer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MQ_isMedium } from "../../components/invoices/new-invoice/invoice-create/components/efaV5/sales-form-iterator/useSalesFormIteratorStyles";
import styled from "@emotion/styled";
import AccentRoundIcon from "../icon/AccentRoundIcon";
import CustomerIcon from "@mui/icons-material/HomeWork";
import AccentIconLabel from "../icon/AccentIconLabel";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ChipLabel from "../icon/ChipLabel";
import BorderColorRoundedIcon from "@mui/icons-material/EditRounded";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton size="small" sx={{ mt: 1 }} {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginRight: "auto",
    marginLeft: "0px",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

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

export function PersonalCardWrapper(props) {
    const { children, title, icon, subtitle, sxCard, cardContent } = props;
    // const { cardContent, autoInput } = children;
    const translate = useTranslate();
    const record = useRecordContext();
    const [expanded, setExpanded] = React.useState(false);

    console.log("personalRecord", record);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const buyerId = useWatch({ name: "buyer_id" });

    const defaultSort = { field: "company", order: "ASC" };

    console.log("buyerId🔰", buyerId);

    const chartOptions = useChartOptions();
    const isMedium = useMediaQuery(`${MQ_isMedium}`);
    // if (!children) return null;
    return (
        <Card sx={sxCard} className="parsonal-card wrapper ">
            {/* <CardHeader
                subheader="Manage the notifications"
                title="Notifications"
            /> */}
            {/* <Labeled>
                <TextField source="title" />
            </Labeled> */}
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

            <Divider />
            <CardContent sx={{ px: 1, pt: 0.1, pb: 0.5 }}>
                {children}
            </CardContent>
            <Divider />
            <CardActions
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: -0.5,
                    mt: -0.5,
                    visibility: isMedium ? "visible" : "hidden",
                }}
            >
                <ChipLabel
                    // error
                    error={record.mva == 1 ? false : true}
                    chipSx={{ color: "primary.900" }}
                >
                    {record ? `${record.org_nr}` : ""}
                </ChipLabel>
                <Button
                    disabled={buyerId ? false : true}
                    onClick={handleExpandClick}
                    sx={{
                        minWidth: "80px",
                        "& .MuiButton-endIcon.MuiButton-iconSizeSmall": {
                            marginLeft: "0px",
                        },
                    }}
                    fontSize={{}}
                    color="inherit"
                    // endIcon={ expanded ? <ExpandMoreIcon /> : <ArrowClockwiseIcon />}
                    endIcon={
                        <CustomArrowRightIcon
                            sx={{ mp: 0 }}
                            aria-expanded={expanded}
                            expand={expanded}
                        />
                    }
                    size="small"
                >
                    {!expanded
                        ? translate("myroot.form.label.header.show")
                        : translate("myroot.form.label.header.hidden")}
                </Button>
                {/* <ExpandMore
                    disabled={buyerId ? false : true}
                    aria-label="show more"
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                ></ExpandMore> */}
            </CardActions>
            <Collapse
                in={!isMedium ? true : expanded}
                timeout="auto"
                unmountOnExit
            >
                <CardContent sx={{ my: -2, mx: -3.5 }}>
                    {cardContent}
                    {/* <AddressDetailsBuyer
                        prefixFirstRow={`${translate(
                            "myroot.form.label.header.street_prefix"
                        )} `}
                        capitionLabel={translate(
                            "myroot.form.label.header.address"
                        )}
                    />
                    <ContactDetailsBuyer
                        capitionLabel={translate(
                            "myroot.form.label.header.contact"
                        )}
                    /> */}
                </CardContent>
            </Collapse>
        </Card>
    );
}

function useChartOptions() {
    const theme = useTheme();

    return {
        chart: {
            background: "transparent",
            stacked: false,
            toolbar: { show: false },
        },
        colors: [
            theme.palette.primary.main,
            alpha(theme.palette.primary.main, 0.25),
        ],
        dataLabels: { enabled: false },
        fill: { opacity: 1, type: "solid" },
        grid: {
            borderColor: theme.palette.divider,
            strokeDashArray: 2,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
        },
        legend: { show: false },
        plotOptions: { bar: { columnWidth: "40px" } },
        stroke: { colors: ["transparent"], show: true, width: 2 },
        theme: { mode: theme.palette.mode },
        xaxis: {
            axisBorder: { color: theme.palette.divider, show: true },
            axisTicks: { color: theme.palette.divider, show: true },
            categories: ["Jan", "Feb"],
            labels: {
                offsetY: 5,
                style: { colors: theme.palette.text.secondary },
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
                offsetX: -10,
                style: { colors: theme.palette.text.secondary },
            },
        },
    };
}
