import React, { memo } from "react";
import { Avatar, Box, SvgIcon } from "@mui/joy";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Stack } from "@mui/material";
import { useTranslate } from "react-admin";

const initStyle = {
    boxShadow: 1,
    zIndex: 1,
    bgcolor: "neutral.50",
    color: "primary.900",
};
const initWrapper = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

const AccentIconLabel = (props) => {
    const {
        icon = <QuestionMarkIcon />,
        iconSize,
        iconColor,
        circleSize,
        sx,
        boxSx,
        iconSx,
        label,
        className,
        cssIcon,
    } = props;

    const translate = useTranslate();
    return (
        <Stack
            className={className}
            direction="row"
            gap={1}
            width="100%"
            sx={sx}
            // sx={{ mb: isSmall ? -0.5 : "" }}
        >
            <Box sx={boxSx ? { ...initWrapper, ...boxSx } : { ...initWrapper }}>
                <Avatar
                    size={`${circleSize}`}
                    sx={iconSx ? { ...initStyle, ...iconSx } : { ...initStyle }}
                    aria-label="recipe"
                >
                    <SvgIcon
                        fontSize={`${iconSize}`}
                        sx={{ color: `${iconColor}`, ...cssIcon }}
                    >
                        {icon}
                    </SvgIcon>
                </Avatar>
            </Box>
            {label ? translate(`${label}`) : ""}
        </Stack>
    );
};

export default memo(AccentIconLabel);
