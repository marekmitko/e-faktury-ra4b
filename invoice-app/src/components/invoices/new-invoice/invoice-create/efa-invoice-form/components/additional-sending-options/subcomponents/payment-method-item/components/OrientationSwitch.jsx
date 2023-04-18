import * as React from 'react';
import { Box, Typography,  } from "@mui/joy"
import Switch, { switchClasses } from "@mui/joy/Switch";






const OrientationSwitch = ({orientation, setOrientation,  }) => {
    return(
        <Box
            sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
            }}
        >
            <Typography
            id="example-payment-channel-label"
            level="body3"
            textTransform="uppercase"
            fontWeight="xl"
            sx={{ letterSpacing: "0.15rem" }}
            >
            Pay with
            </Typography>
            <Switch
            component="label"
            size="sm"
            endDecorator="Row view"
            checked={orientation === "horizontal"}
            onChange={(event) =>
                setOrientation(event.target.checked ? "horizontal" : "vertical")
            }
            sx={{
                [`&&:not(.${switchClasses.checked})`]: {
                "--Switch-trackBackground": (theme) =>
                    theme.vars.palette.background.level3
                }
            }}
            />
        </Box>
    );
};

export default OrientationSwitch;