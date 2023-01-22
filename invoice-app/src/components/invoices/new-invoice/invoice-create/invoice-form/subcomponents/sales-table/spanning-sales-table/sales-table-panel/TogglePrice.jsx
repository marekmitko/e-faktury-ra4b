import * as React from 'react';
import { FormLabel, Typography, Stack, Switch, Grid} from "@mui/material"
import { grey} from "@mui/material/colors"
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useWatch, replace } from 'react-hook-form';
import { RadioButtonGroupInput } from 'react-admin';


const CustomSwitch = styled(Switch)(({ theme }) => ({
            width: 30,
            height: 16,
            padding: 0,
            // color: '#fff',
            display: 'flex',
                    '&:active': {
                    '& .MuiSwitch-thumb': {
                            width: 15,
                            // color: "#fff",
                    },
                    '& .MuiSwitch-switchBase.Mui-checked': {
                            transform: 'translateX(10px)', 
                    },
            },
            '& .MuiSwitch-switchBase': {
                    padding: 2,
                    '&.Mui-checked': {
                            // color: '#6200ea',
                            color: '#fff',
                            transform: 'translateX(12px)', 
                            '& + .MuiSwitch-track': {
                                    opacity: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#0d47a1' : '#1e88e5',
                            },
                    },
            },
            '& .MuiSwitch-thumb': { 
                    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
                    // color: 'white',
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    transition: theme.transitions.create(['width'], {
                            duration: 200,
                    }),
            },
            '& .MuiSwitch-track': {
                    borderRadius: 16 / 2,
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#0097a7' : '#26c6da',
                    boxSizing: 'border-box',
                },
    }));

export function TogglePrice({ state, setState}) {





    // BUG -> wyniesc do góry 
    const handleChange = (event) => {
        setState(event.target.checked);
    };
    return (
        <span>
            {/* <Grid component="label" container > */}
            {/* <FormLabel ><small>START WITH THE PRICE</small></FormLabel> */}
                {/* <Grid    ><small>START WITH THE PRICE</small></Grid> */}
                <Grid   container alignItems="center" spacing={1} >
                    <Grid item align="center">
                        <Typography sx={{ width: "30px", color: "#fff", paddingRight: '25px',
                            // fontWeight:  state ?  "300" : "500",
                            // display: "inline"
                            // textDecoration: state ? "" : "underline",
                        }} >
                            { state ? "BRUTTO" : "NETTO" }
                        </Typography></Grid>
                    <Grid item>
                        <CustomSwitch
                            checked={state}
                            onChange={handleChange}
                            // value="checkedOption"
                        />
                    </Grid>
                    {/* <Grid item align="center">
                        <Typography sx={{ width: "53px",
                            fontWeight:  state ?  "500" : "300",
                            // textDecoration: state ? "underline" : "",
                        }} >
                            { state ? "GROSS" : <small>GROSS</small>}
                        </Typography>
                    </Grid> */}
                </Grid>
                        {/* </Stack> */}
            {/* </Grid> */}
        </span>
    );
}
