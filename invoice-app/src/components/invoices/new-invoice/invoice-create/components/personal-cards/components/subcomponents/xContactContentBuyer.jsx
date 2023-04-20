import * as React from "react";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import { Box } from "@mui/joy";
import { useRecordContext } from "react-admin";

export const ContactContentBuyer = ({contactNumber, emailAdress}) => {
    const record = useRecordContext();
    if (!record) return null;
    const { phone, email, firstname, lastname } = record;
    return (
        <Box >
                <CardOverflow
                // variant="soft"
                sx={{   display: "flex",
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
                    { phone ? phone : ""}
                </Typography>
                {/* <Divider orientation="vertical" /> */}
                <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                >
                    {email ? email : "" }
                </Typography>
                </CardOverflow>
                    </Box>
    );
};
