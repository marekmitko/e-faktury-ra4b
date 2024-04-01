import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { WithRecord, useRecordContext, useTranslate } from "react-admin";
import Apartment from "@mui/icons-material/Apartment";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payments";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import OrientationSwitch from './components/OrientationSwitch';
import { CardOverflow, Chip, Grid, Input } from "@mui/joy";
import {
    Controller,
    useController,
    useFormContext,
    useWatch,
} from "react-hook-form";
import PaymentDueDateField from "./PaymentDueDateField";
import DateToString from "../../../../../function/fnDateFormatOutputs";

export default function CardSubcaptionField({ watchName, label, show }) {
    const translate = useTranslate();
    const record = useRecordContext();
    // const dateInputController = useController({
    //     name: `${mySource}`,
    //     defaultValue: "",
    // });

    // const {
    //     field,
    //     fieldState: { isTouched, invalid, error },
    //     formState: { isSubmitted },
    // } = useController({ name, defaultValue: "" });
    const valueShow = useWatch({ name: watchName });

    console.log("RECORD USER ", record);
    const { user_db } = record;

    return (
        <>
            <Box
                sx={{
                    pb: 1,
                    //  mt: 1,
                }}
            >
                <Box
                    sx={{
                        p: 1,
                        pb: 0,
                        mt: "5.62px",
                    }}
                >
                    {/* <Grid container spacing={1}> */}
                    <ListDivider sx={{ py: 0.1 }} />

                    <CardOverflow
                        variant="soft"
                        sx={{
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                            display: "flex",
                            p: "var(--Card-padding)",
                            // pb: 0,
                            // // gap: 1.5,
                            // // pb: 1,
                            // mb: -1,
                            // --mui-palette-neutral-plainHoverBg:
                            bgcolor: "neutral.50",
                            opacity: 0.98,
                            filter: "alpha(opacity=98)", // IE 5-7
                            // bgcolor: 'transparent',

                            // borderBottomLeftRadius: 'calc(15px - var(--variant-borderWidth, 0px))',
                            borderBottomLeftRadius: "12.5px",
                            borderBottomRightRadius: "12.5px",
                        }}
                    >
                        {/* <Grid container spacing={0.5}  alignItems="flex-end" > */}

                        {/* <Grid item xs={12}  sx={{ m: .75,   }}   alignItems="flex-end"  justifyContent="flex-end" > */}
                        <Box
                            sx={{
                                display: "flex",
                                p: 0.5,
                                alignItems: "center",
                                // justifyContent: "center",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                mr: 0.5,
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "inline",
                                    // flexDirection: "column",
                                }}
                            >
                                <Chip
                                    size="sm"
                                    variant="solid"
                                    sx={{
                                        textTransform: "uppercase",
                                        pl: 1,
                                        pr: 0,
                                        borderRadius: 1,
                                        color: "text.secondary",
                                        bgcolor: "transparent",
                                        mb: -0.15,
                                        letterSpacing: "-0.15px",
                                    }}
                                >
                                    {/* {startLabel ? startLabel : '' } */}
                                    {label ? translate(label) : ""}
                                </Chip>
                            </Box>
                            <Box
                                sx={
                                    {
                                        // width: "auto",
                                        // mr: -0.25,
                                        // minWidth: "200px",
                                        // display: "inline",
                                        // flexWrap: "nowrap",
                                    }
                                }
                            >
                                {/* {valueShow ? } */}
                                <Typography
                                    // level="body2"
                                    fontWeight="500"
                                    sx={{
                                        fontSize: ".85rem",
                                        letterSpacing: "-0.35px",
                                        textTransform: "uppercase",
                                        px: 1,
                                        borderRadius: 1,
                                        // color: "text.secondary",
                                        color: valueShow
                                            ? "primary.900" //"rgba(var(--mui-palette-primary-mainChannel) / 1)"
                                            : "neutral.500",
                                        bgcolor: "transparent",
                                        mt: -0.125,
                                    }}
                                >
                                    {/* {valueShow ? valueShow : ""} */}
                                    {record ? user_db[`${show}`] : ""}
                                </Typography>
                                {/* <Input
                                    // {...dateInputController.field}
                                    placeholder={"placeholter"}
                                    type="date"
                                    size="xs"
                                    label={label}
                                    slotProps={{
                                        input: {
                                            autocomplete: "off",
                                            // id: 'unique-id',
                                        },
                                        root: ({
                                            focusVisible,
                                            primary,
                                            success,
                                            info,
                                        }) => ({
                                            sx: {
                                                "--Input-focusedThickness":
                                                    "1.5px",
                                                "--Input-radius": "5px",
                                                "& input": {
                                                    pl: "2px",
                                                    "--Input-placeholderOpacity": 0.5, //toDo Trzeba to poprawić jakoś
                                                    fontSize: "medium",
                                                    color: "neutral.700",
                                                    maxWidth: "115px",
                                                    textAlign: "center",
                                                    // width: 'max-content',
                                                    // textTransform: 'uppercase'
                                                    //     "& svg": {  color: 'success'
                                                    // },
                                                    // "&:hover svg": {
                                                    //     color: 'var(--mui-palette-primary-800)',
                                                    // },
                                                    // color: 'var(--mui-palette-primary-800)',
                                                },
                                            },
                                        }),
                                    }}
                                /> */}
                            </Box>
                        </Box>
                        {/* </Grid> */}
                        {/* </Grid> */}
                    </CardOverflow>

                    {/* <Typography textColor='neutral.700' level="body2" fontWeight='400' sx={{     px: 1,  }}>
                            {translate('myroot.form.label.header.additional_note')}
                        </Typography> */}
                </Box>
            </Box>
        </>
    );
}
