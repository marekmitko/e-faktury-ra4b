import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import Divider from "@mui/material/Divider";
// import { alpha, useTheme } from "@mui/material/styles";
// import ArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import ArrowClockwiseIcon from "@mui/icons-material/History";

import {
    // Labeled,
    // TextField,
    // useChoicesContext,
    useRecordContext,
    // RecordContextProvider,
    useTranslate,
} from "react-admin";
import { useMediaQuery } from "@mui/material";
import { useWatch } from "react-hook-form";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MQ_isMedium } from "../../../components/invoices/new-invoice/invoice-create/components/efaV5/sales-form-iterator/useSalesFormIteratorStyles";
import styled from "@emotion/styled";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

// import BorderColorRoundedIcon from "@mui/icons-material/EditRounded";
import ChipLabel from "../../icon/ChipLabel";

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton size="small" sx={{ mt: 1 }} {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//     marginRight: "auto",
//     marginLeft: "0px",
//     transition: theme.transitions.create("transform", {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

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

export function CollapsePartCustomerCard(props) {
    const {
        children, //title, icon, subtitle, sxCard, cardContent
    } = props;
    const [expanded, setExpanded] = useState(false);
    const translate = useTranslate();
    const record = useRecordContext();
    const buyerId = useWatch({ name: "buyer_id" });

    useEffect(() => {
        if (expanded && buyerId === null) setExpanded(!expanded);
    }, [buyerId]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // const isMedium = useMediaQuery(`${MQ_isMedium}`);

    if (!children) return null;
    return (
        <>
            <CardActions
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: -0.5,
                    mt: -0.5,
                    // visibility: isMedium ? "visible" : "hidden",
                    // display: isMedium ? "" : "none",
                }}
            >
                <ChipLabel
                    sx={{ visibility: buyerId ? "visible" : "hidden" }}
                    // error
                    error={record.mva == 1 ? false : true}
                    chipSx={{ color: "primary.900" }}
                >
                    {record?.org_nr ? `${record.org_nr}` : ""}
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
            </CardActions>
            <Collapse
                // in={!isMedium ? true : expanded}
                in={expanded}
                timeout="auto"
                unmountOnExit
            >
                <CardContent sx={{ my: -2, mx: -3.5 }}>{children}</CardContent>
            </Collapse>
            {/* </Card> */}
        </>
    );
}

// function useChartOptions() {
//     const theme = useTheme();

//     return {
//         chart: {
//             background: "transparent",
//             stacked: false,
//             toolbar: { show: false },
//         },
//         colors: [
//             theme.palette.primary.main,
//             alpha(theme.palette.primary.main, 0.25),
//         ],
//         dataLabels: { enabled: false },
//         fill: { opacity: 1, type: "solid" },
//         grid: {
//             borderColor: theme.palette.divider,
//             strokeDashArray: 2,
//             xaxis: { lines: { show: false } },
//             yaxis: { lines: { show: true } },
//         },
//         legend: { show: false },
//         plotOptions: { bar: { columnWidth: "40px" } },
//         stroke: { colors: ["transparent"], show: true, width: 2 },
//         theme: { mode: theme.palette.mode },
//         xaxis: {
//             axisBorder: { color: theme.palette.divider, show: true },
//             axisTicks: { color: theme.palette.divider, show: true },
//             categories: ["Jan", "Feb"],
//             labels: {
//                 offsetY: 5,
//                 style: { colors: theme.palette.text.secondary },
//             },
//         },
//         yaxis: {
//             labels: {
//                 formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
//                 offsetX: -10,
//                 style: { colors: theme.palette.text.secondary },
//             },
//         },
//     };
// }
