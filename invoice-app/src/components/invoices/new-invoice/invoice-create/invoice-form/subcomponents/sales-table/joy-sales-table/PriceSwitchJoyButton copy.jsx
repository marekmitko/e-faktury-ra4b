import * as React from "react";
import JoySwitch from "@mui/joy/Switch";
import JoyTypography from "@mui/joy/Typography";
import JoyFormControl from "@mui/joy/FormControl";
import JoyFormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Box from "@mui/joy/Box";
import JoyTooltip from "@mui/joy/Tooltip";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { blue, lightBlue, grey } from '@mui/material/colors';

// import PriceChangeIcon from '@mui/icons-material/PriceChange';

export default function PriceSwitchJoyButton() {
const [checked, setChecked] = React.useState(false);
console.log(checked, "checked demo 3");

return (
    <CssVarsProvider >

    <JoyFormControl
    orientation="horizontal"
    sx={{ width: 300, justifyContent: "space-between" }}
    >
    {/* <Box>
        <FormLabel>Show captions</FormLabel>
        <FormHelperText sx={{ mt: 0 }}>All languages available.</FormHelperText>
    </Box> */}
    {/* <Tooltip title={{{checked? "Przełącz na brutto" : "Przełącz na netto" }}} > */}
    <JoyTooltip arrow placement="top" title={checked ? "Przełącz na brutto" : "Przełącz na netto"}>
        <JoySwitch
        variant="solid"
        color='primary'
        // color={blue[400]}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        slotProps={{
            track: {
            children: (
                <React.Fragment>
                <JoyTypography
                    component="span"
                    level="inherit"
                    sx={{ ml: "5px" }}
                >
                    {checked ? (
                        <span style={{ fontWeight: "550", color: "white" }}>CENA NETTO</span>
                    ) : (
                    ""
                    )}
                </JoyTypography>
                <JoyTypography
                    component="span"
                    level="inherit"
                    sx={{ mr: "5px" }}
                >
                    {checked ? (
                    ""
                    ) : (
                    <span style={{ fontWeight: "550", color: "white" }}>CENA BRUTTO</span>
                    )}
                </JoyTypography>
                </React.Fragment>
            )
            }
        }}
        sx={{
            // '--Switch-thumb-size': '27px',
            // '--Switch-track-width': '64px',
            // "--Switch-track-height": "31px",

            "--Switch-track-radius": "2px",
            "--Switch-track-width": "115px",
            "--Switch-track-height": "20px",
            "--Switch-gap": "5px",
            "--Switch-thumb-size": "18px",
            "--Switch-thumb-radius": "2px",
            "--Switch-thumb-width": "7px",
            "--Switch-thumb-offset": "1px"
        }}
        />
    </JoyTooltip>
    </JoyFormControl>
</CssVarsProvider>
);
}
