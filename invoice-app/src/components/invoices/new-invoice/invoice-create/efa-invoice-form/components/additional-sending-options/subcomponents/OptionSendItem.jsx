import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Divider } from "@mui/joy";
import { CheckedButton } from "./CheckedButton";
// export default function ExampleFilterStatusCheckbox() {



export default function OptionSendItem(props) {
    const { label, iconChecked, defaultIcon,  checked, onChange, cssIcon } = props;
    return (
        <div style={{  width: "100%"}}>
        <div style={{ display: 'flex', justifyContent: 'space-between'  }}>
            <CheckedButton // color="danger"
                label={label}
                overlay
                checked={checked}
                onChange={onChange}
                // sx={{ color: "inherit" }}
            />
            <Typography    color={checked ? "primary" : "neutral"} 
            // sx={{ ml: "auto", mb: -0.5, pb: 0, alignItems: "flex-end" }}
            sx={cssIcon}
            >
                {checked ? (  iconChecked ) : (   defaultIcon  )}
            </Typography>
        </div>
        </div>
    );
}
