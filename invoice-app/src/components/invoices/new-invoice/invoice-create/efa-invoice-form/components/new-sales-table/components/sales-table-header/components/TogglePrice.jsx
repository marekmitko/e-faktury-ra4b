import * as React from "react";
import { FormLabel, Typography, Stack, Switch, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useWatch, replace } from "react-hook-form";
import { RadioButtonGroupInput, useTranslate } from "react-admin";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { StyledTableCellClasses } from "./styledHeaderCellClasses";
import { G_Path } from "../../../../../../../../../../constant";

const translate_prefix = `resources.${G_Path.invoices}.create.sales_form_iterator.sales_table.header`;

const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 27,
    height: 15,
    padding: 0,
    // color: '#fff',
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 13,
            // color: "#fff",
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(10px)",
        },
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            // color: '#6200ea',
            color: "#fff",
            transform: "translateX(12px)",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#0d47a1" : "#1e88e5",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        // color: 'white',
        width: 11,
        height: 11,
        borderRadius: 6,
        transition: theme.transitions.create(["width"], {
            duration: 200,
        }),
    },
    "& .MuiSwitch-track": {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#0097a7" : "#26c6da",
        boxSizing: "border-box",
    },
}));

export function TogglePrice({ state, setState }) {
    const translate = useTranslate();

    // BUG -> wyniesc do góry
    const handleChange = (event) => {
        setState(event.target.checked);
    };
    return (
        <span>
            <Grid container alignItems="center" sx={{ mt: "-2px" }}>
                <Grid item align="center">
                    <Typography
                        sx={{
                            width: "50px",
                            //   color: "#fff",
                            mt: 0,
                            paddingTop: 0,
                            // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                            // paddingRight: "25px",
                            // color: "#5f5f5f",
                            // fontSize: "13px",
                        }}
                    >
                        <StyledTableCellClasses
                            sx={{
                                m: 0,
                                p: 0,
                                border: "none",
                                textAlign: "right",
                                fontFamily:
                                    "Roboto, Helvetica, Arial, sans-serif",
                                paddingRight: "25px",
                                color: "#5f5f5f",
                                fontSize: "13px",
                            }}
                        >
                            {translate(
                                `${translate_prefix}.switch_price_label`
                            )}
                            &nbsp;
                            <i
                                style={{
                                    textTransform: "lowercase",
                                    fontStyle: "normal",
                                }}
                            >
                                {state
                                    ? translate(
                                          `${translate_prefix}.switch_gross_price`
                                      )
                                    : translate(
                                          `${translate_prefix}.switch_net_price`
                                      )}
                            </i>
                        </StyledTableCellClasses>
                    </Typography>
                </Grid>
                <Grid item ml={3}>
                    <CustomSwitch
                        checked={state}
                        onChange={handleChange}
                        // value="checkedOption"
                    />
                </Grid>
            </Grid>
        </span>
    );
}
