import { FormLabel, Typography, Stack, Switch, Grid} from "@mui/material"
import { styled } from '@mui/material/styles';
import { useState } from "react";


const CustomSwitch = styled(Switch)(({ theme }) => ({
            width: 30,
            height: 16,
            padding: 0,
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

export function ToggleOption({grossPrice}) {
    const [state, setState] = useState({
        checkedOption: grossPrice
    });
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
console.log("state", state);
    return (
        <div>
            <Grid component="label" container >
            {/* <FormLabel ><small>START WITH THE PRICE</small></FormLabel> */}
                <Grid    ><small>START WITH THE PRICE</small></Grid>
                <Grid   container alignItems="center" spacing={1} >
                    <Grid item><Typography>NET</Typography></Grid>
                    <Grid item>
                        <CustomSwitch
                            checked={state.checkedOption}
                            onChange={handleChange("checkedOption")}
                            value="checkedOption"
                            />
                    </Grid>
                    <Grid item><Typography>GROSS</Typography></Grid>
                </Grid>
                        {/* </Stack> */}
            </Grid>
        </div>
    );
}

export function AntiSwitch({grossPrice}) {
    const [state, setState] = useState({
        checkedOption: grossPrice
    });
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    console.log("state", state);
    return(
        <Grid   container  rowSpacing={1} ><br/>
            <Grid item ><small>START WITH THE PRICE</small></Grid>
            <Grid item   >
            <Grid item container alignItems="center" spacing={1.5} >
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>NET</Typography>
                        <CustomSwitch     defaultChecked inputProps={{ 'aria-label': 'ant design' }} 
                            checked={state.checkedOption}
                            onChange={handleChange("checkedOption")}
                            value="checkedOption"
                        />
                    <Typography>GROSS</Typography>
                </Stack>
            </Grid>
            </Grid>
        </Grid>
    );
};