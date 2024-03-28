import React, { memo } from "react";
import { Box, Typography, Chip, Avatar } from "@mui/joy";
import WebIcon from "@mui/icons-material/Web";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";

export const SemiovalTitleChip = ({ children, boxSx, ...props }) => (
    <Box flex="1" sx={boxSx ? boxSx : ""}>
        <Chip
            size="small" //endDecorator={<WebIcon />}
            // startDecorator={<KeyboardDoubleArrowRightRoundedIcon
            // sx={{ color: 'primary.900', mx: 0.75, mt: .1 }} />}
            variant="outlined"
            sx={{
                // boxShadow: .5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,

                px: 1,
                // pl: 4,
                mt: 0.1,
                pt: 0.1,
                pb: 0.2,
                ml: -4.4,
                // zIndex: -1,
                // border: "1px inset black",
                bgcolor: "neutral.100",
                // bgcolor: 'primary.900',
                borderColor: "neutral.300",
                // borderRightColor:  'neutral.300',
                borderLeft: "none",
                borderTop: "none",
                // borderTopRightRadius: '0',
            }}
            {...props}
        >
            <Typography //id="react-admin-title"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                variant="h6"
                sx={{
                    pl: 1.5,
                    textTransform: "uppercase",
                    mt: 0.1,
                    // textTransform: 'uppercase',
                    // color: 'neutral.50',
                    // color: "var(--mui-palette-primary-outlinedColor)",
                    color: "primary.900",
                    // color: "neutral.800",
                    fontWeight: "500",
                }}
            >
                {children}
            </Typography>
        </Chip>
    </Box>
);

export default memo(SemiovalTitleChip);
