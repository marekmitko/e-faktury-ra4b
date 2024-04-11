import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { TextInput, useRecordContext, useTranslate } from "react-admin";
import { useMediaQuery } from "@mui/material";
// import { useWatch } from "react-hook-form";
import Collapse from "@mui/material/Collapse";
import styled from "@emotion/styled";
import CustomerIcon from "@mui/icons-material/HomeWork";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import AccentIconLabel from "../../../../../../../../reusable-components/icon/AccentIconLabel";
import { MQ_isMedium } from "../../../../components/efaV5/sales-form-iterator/useSalesFormIteratorStyles";
import ChipLabel from "../../../../../../../../reusable-components/icon/ChipLabel";

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

export function SellerPersonalCard(props) {
    const { children, title, icon, subtitle, sxCard } = props;
    const translate = useTranslate();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const isMedium = useMediaQuery(`${MQ_isMedium}`);

    const record = useRecordContext();
    if (!record) return null;
    return (
        <Card
            sx={{
                "&.MuiPaper-root.MuiPaper-elevation": {
                    backgroundColor: "rgba(250, 250, 250, 0.05)",
                },
                ...sxCard,
            }}
            className="parsonal-card wrapper"
        >
            <CardHeader
                sx={{
                    opacity: "0.75",
                    p: 1.25,
                    pt: 0.5,
                    pb: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    "& .MuiCardHeader-action": {
                        alignSelf: "center",
                    },
                }}
                // action={
                //     <Button
                //         disabled
                //         sx={{ pr: 2 }}
                //         color="inherit"
                //         size="small"
                //         startIcon={
                //             <BorderColorRoundedIcon fontSize="var(--icon-fontSize-md)" />
                //         }
                //     >
                //         Edit
                //     </Button>
                // }
                title={
                    <AccentIconLabel
                        icon={<CustomerIcon sx={{ color: "neutral.700" }} />}
                        iconSize="1.25em"
                        // iconSx
                        cssIcon={{ padding: "2px" }}
                        circleSize="xs"
                        sx={{ ml: -0.25, fontSize: "1.15rem", pb: 0.25 }}
                        // boxSx={{ mt: -1.5, pr: 1 }}
                        label="myroot.form.label.header.seller"
                    />
                }
            />

            <Divider />
            <CardContent
                sx={{
                    minHeight: "57px",
                    px: 1,
                    py: 0,
                    mt: -0.25,
                    pb: 0.25,
                }}
            >
                <TextInput
                    // variant="outlined"
                    variant="standard"
                    source="company"
                    helperText={false}
                    disabled
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </CardContent>
            <Divider />
            <CardActions
                sx={{
                    // justifyContent: "flex-end",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // py: 0,
                    mb: -0.5,
                    mt: -0.5,
                    // visibility: isMedium ? "visible" : "hidden",
                }}
            >
                <ChipLabel disabled error={record.mva == 1 ? false : true}>
                    {record ? `${record.org_nr}` : ""}
                </ChipLabel>
                <Button
                    disabled={record ? false : true}
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
        </Card>
    );
}
