import * as React from "react";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import { Box } from "@mui/joy";

export const ContactContent = ({contactNumber, emailAdress}) => {
    return (
        <Box >

                <CardOverflow
                // variant="soft"
                sx={{   display: "flex", flexFlow: 'column wrap',
                        m: 0, py: 0.5,
                        height: '30px',
                        bgcolor: "background.level1",
                //     // px: "var(--Card-padding)",
                }}
                >
                <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                    >
                    { contactNumber ? contactNumber : ""}
                </Typography>
                {/* <Divider orientation="vertical" /> */}
                <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                >
                    {emailAdress ? emailAdress : "" }
                </Typography>
                </CardOverflow>
                    </Box>
    );
};
