import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/material/Divider";
// export default function ExampleFilterStatusCheckbox() {

export default function LabelOptionCard({ children, label }) {
    return (
        <Sheet
            // variant="outlined"
            sx={{
                pb: 0,
                borderRadius: 2,
                // minWidth: "250px",
                bgcolor: "background.body",
                borderRadius: "20px",
            }}
        >
            <Typography
                textColor="neutral.700"
                level="body2"
                fontWeight="400"
                id="filter-status"
                sx={{
                    textTransform: "uppercase",
                    // fontSize: "xs2",
                    fontSize: "body1",
                    // letterSpacing: "lg",
                    // fontWeight: "lg",
                    color: "text.secondary",
                    p: 1.5,
                }}
            >
                {label ? label : ""}
            </Typography>
            <Divider sx={{ py: 0.15, mx: 0, mt: -0.5 }} />
            <Box role="group" aria-labelledby="filter-status" sx={{ mt: 0.25 }}>
                {children ? children : ""}
            </Box>
            {/* <Button
            variant="outlined"
            color="neutral"
            size="sm"
            onClick={() =>
            setStatus({
                postmail: false,
                inv_email: false,
                ehf: false
            })
            }
            sx={{ px: 1.5, mt: 1 }}
        >
            Clear All
        </Button> */}
        </Sheet>
    );
}
