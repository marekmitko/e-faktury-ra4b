import * as React from "react";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { Stack } from "@mui/joy";

export const ModalTitle = ({ title, invoiceNo, prefixInovoiceNo }) => (
    <>
        <Box sx={{ display: "flex", alignItems: "center", pb: 1, gap: 1 }}>
            <Box
                sx={{
                    position: "relative",
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        m: "-2px",
                        borderRadius: "50%",
                    },
                }}
            >
                <LibraryBooksIcon
                    sx={{
                        fontSize: 45,
                        p: 0.25,
                        // border: "2px solid",
                        // color: "primary"
                        color: "neutral.400",
                    }}
                />
            </Box>
            <Stack direction="column" sx={{ m: 0 }}>
                <Typography
                    level="h5"
                    textColor="neutral.800"
                    fontWeight="Demi Bold"
                    sx={{ p: 0, m: 0, lineHeight: 0.75 }}
                >
                    {title}
                </Typography>
                <Typography
                    level="body3"
                    textColor="neutral.600"
                    fontWeight="Demi Bold"
                >
                    {prefixInovoiceNo ? `${prefixInovoiceNo} ` : ""}{" "}
                    {invoiceNo ? invoiceNo : ""}
                </Typography>
            </Stack>
        </Box>
    </>
);
// <Typography
//     id="alert-dialog-modal-title"
//     component="h2"
//     startDecorator={<WarningRoundedIcon />}
// >
//     {title}
// </Typography>
