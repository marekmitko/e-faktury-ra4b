import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Close from "@mui/icons-material/Close";
import Delete from "@mui/icons-material/Delete";
import Download from "@mui/icons-material/Download";
import InsertLink from "@mui/icons-material/InsertLink";
import Crop from "@mui/icons-material/Crop";
import Divider from "@mui/joy/Divider";
import { Stack } from "@mui/joy";

export default function BuyerInfoShow({
    buyerName,
    taxpayerId,
    labelTaxpayerId,
}) {
    return (
        <Sheet
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                py: { xs: 1.5, sm: 2 },
                backgroundColor: "transparent",
                pr: 0,
                ml: 1,
                mr: -2,
            }}
        >
            <Sheet
                variant="outlined"
                sx={{
                    borderRadius: "md",
                    overflow: "auto",
                    borderColor: "background.level2",
                    bgcolor: "background.level1",
                    borderTopLeftRadius: "15px",
                    // borderBottomLeftRadius: "15px",
                    m: 0,
                    justifyContent: "flex-end",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        "& > button": { bgcolor: "background.body" },
                        gap: { xs: 1, sm: 1.25 },
                        p: { xs: 1, sm: 1.25 },
                        pb: { xs: 0, sm: 0.5 },
                    }}
                >
                    <div>
                        <AssignmentIndIcon
                            sx={{
                                // typography: {  xs: 'h6', sm: 'h5' },
                                fontSize: { xs: 30, sm: 40 },
                                p: 0.2,
                                // border: "2px solid",
                                // color: "primary"
                                color: "primary.900",
                            }}
                        />
                        <div
                            style={{ marginTop: "-15px", textAlign: "center" }}
                        >
                            <Typography
                                level="body3"
                                textColor="neutral.600"
                                fontWeight="400"
                                sx={{ letterSpacing: -0.5 }}
                            >
                                <small>{`${labelTaxpayerId} `}</small>
                            </Typography>
                        </div>
                    </div>
                    <Divider orientation="vertical" />
                    <Stack
                        direction="column"
                        sx={{
                            pt: { xs: 0.5, sm: 1 },
                        }}
                        justifyContent="flex-end"
                    >
                        <Typography
                            textColor="primary.900"
                            fontWeight="Demi Bold"
                            sx={{
                                p: 0,
                                m: 0,
                                typography: { xs: "h6", sm: "h5" },
                                lineHeight: { xs: 1, sm: 0.75 },
                            }}
                        >
                            {buyerName ? buyerName : ""}
                        </Typography>
                        <Typography
                            textColor="neutral.600"
                            sx={{
                                typography: {
                                    xs: "subtitle2",
                                    sm: "subtitle1",
                                },
                                fontWeight: { xs: "400", sm: "400" },
                            }}
                        >
                            {taxpayerId ? taxpayerId : <p />}{" "}
                            {/* // toDo tu coś jest nie tak //Om? coś do poprawy */}
                        </Typography>
                    </Stack>
                </Box>
            </Sheet>
        </Sheet>
    );
}
