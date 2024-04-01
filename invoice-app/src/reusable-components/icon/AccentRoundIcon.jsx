import React, { memo } from "react";
import { Avatar, Box, SvgIcon } from "@mui/joy";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const initStyle = {
    boxShadow: 1,
    zIndex: 3,
    bgcolor: "neutral.50",
    color: "primary.900",
};
const initWrapper = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

const AccentRoundIcon = (props) => {
    const {
        icon = <QuestionMarkIcon />,
        iconSize,
        iconColor,
        circleSize,
        sx,
        boxSx,
    } = props;
    return (
        <Box sx={boxSx ? { ...initWrapper, ...boxSx } : { ...initWrapper }}>
            <Avatar
                size={`${circleSize}`}
                sx={sx ? { ...initStyle, ...sx } : { ...initStyle }}
                aria-label="recipe"
            >
                <SvgIcon
                    fontSize={`${iconSize}`}
                    sx={{ color: `${iconColor}` }}
                >
                    {icon}
                </SvgIcon>
            </Avatar>
        </Box>
    );
};

export default memo(AccentRoundIcon);
