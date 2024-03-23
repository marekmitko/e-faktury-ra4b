import React, { memo } from "react";
import { useResourceContext, useTranslate } from "react-admin";
import AddHomeWorkRoundedIcon from "@mui/icons-material/AddHomeWorkRounded";
import { CardOverflow, Typography, Divider, SvgIcon, Box } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";

const HeaderSimpleForm = (props) => {
    const {
        iconColor = "primary.900",
        iconSx,
        icon = <AddHomeWorkRoundedIcon sx={iconSx} />,
        title,
        toolbar,
    } = props;
    const translate = useTranslate();
    const resource = useResourceContext();
    return (
        <Box
            width="115%"
            sx={{
                display: "flex",
                zIndex: 1000,
                position: "relative",
                left: -25,
                right: 0,
                mb: 1,
            }}
        >
            <div style={{ width: "100%" }}>
                <CardOverflow
                    variant="soft"
                    sx={{ bgcolor: "background.level2" }}
                >
                    <CardContent
                        orientation="horizontal"
                        sx={{ mx: 1, flexDirection: "row" }}
                    >
                        <SvgIcon
                            fontSize="xl"
                            sx={{
                                color: iconColor,
                                "& > svg": {},
                                display: "block",
                                mx: 1,
                                my: "auto",
                            }}
                        >
                            {icon}
                        </SvgIcon>
                        <Typography
                            level="h6"
                            fontSize="md"
                            sx={{
                                my: 0.25,
                                textTransform: "uppercase",
                                color: iconColor,
                                fontWeight: "500",
                            }}
                        >
                            {title
                                ? translate(
                                      `resources.${resource}.header.${title}`
                                  )
                                : ""}
                        </Typography>
                        {toolbar && (
                            <Box sx={{ ml: "auto", mr: 3, my: "auto" }}>
                                {toolbar}
                            </Box>
                        )}
                    </CardContent>
                    <Divider inset="context" />
                </CardOverflow>
            </div>
        </Box>
    );
};

export default memo(HeaderSimpleForm);
