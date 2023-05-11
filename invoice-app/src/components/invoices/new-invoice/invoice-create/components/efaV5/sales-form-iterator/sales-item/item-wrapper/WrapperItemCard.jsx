import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Divider } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { MQ_isMedium } from "../../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
// export default function ExampleFilterStatusCheckbox() {



export default function WrapperItemCard({children, label }) {
    const isMedium = useMediaQuery(`${MQ_isMedium}`);


    return (
        <Sheet
        // variant="outlined"
        sx={{
            m: 0,
            pb: 0,
            borderRadius: 2,
            // minWidth: "250px",
            bgcolor: "background.body",
        }}
        >
            {/* <Box role="group" aria-labelledby="filter-status"
            sx={{ py: 0.25 }}
            > */}
            {isMedium && 

                <>
        <Typography
            textColor='neutral' level="body2" fontWeight='400'
            id="filter-status"
            sx={{
                textTransform: "uppercase",
                // fontSize: "xs2",
                fontSize: "body1",
            // letterSpacing: "lg",
            // fontWeight: "lg",
            color: "text.secondary",
            p: 1.5
        }}
        >
            { label ? label : "" }
        </Typography>
        {/* <Divider sx={{ py:0.15, mx: 0, mt: -0.5 }}  /> */}
        </>
    }

                { children? children : "" }
        {/* </Box> */}
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
