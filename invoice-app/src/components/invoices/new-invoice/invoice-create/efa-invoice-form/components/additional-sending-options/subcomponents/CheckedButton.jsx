import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import Done from "@mui/icons-material/Done";

export const CheckedButton = (props) => {
    return (
        <Checkbox
            uncheckedIcon={<Done />}
            // label="My unchecked icon appears on hover"
            slotProps={{
                root: ({ checked, focusVisible }) => ({
                sx: !checked
                    ? {
                        "& svg": {
                        opacity: focusVisible ? 0.32 : 0
                        },
                        "&:hover svg": {
                        opacity: 0.32
                        }
                    }
                    : // : { transform: "rotate(180deg)" }
                    undefined
                })
            }}
            {...props}
            />
        );
    };