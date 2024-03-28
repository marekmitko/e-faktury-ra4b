import React, { memo } from "react";
import { useResourceContext, useTranslate } from "react-admin";
import AddHomeWorkRoundedIcon from "@mui/icons-material/AddHomeWorkRounded";
import { CardOverflow, Typography, Divider, SvgIcon, Box } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";

const ClientModalFormHeader = (props) => {
    const {
        iconColor = "primary.900",
        iconSx,
        icon = <AddHomeWorkRoundedIcon sx={iconSx} />,
        title,
        toolbar,
        isSmall,
    } = props;
    const translate = useTranslate();
    const resource = useResourceContext();
    return (
        <Box>
            <CardOverflow
                variant="soft"
                sx={{
                    bgcolor: "background.level2",
                    width: "100%",
                    pt: isSmall ? 1 : "",
                }}
            >
                <CardContent
                    orientation="horizontal"
                    sx={{ mx: 1, flexDirection: "row", pb: isSmall ? 0.5 : "" }}
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
                            ? translate(`resources.${resource}.header.${title}`)
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
        </Box>
    );
};

export default memo(ClientModalFormHeader);
