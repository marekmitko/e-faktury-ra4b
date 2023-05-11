import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Divider } from "@mui/joy";
// export default function ExampleFilterStatusCheckbox() {



export default function SalesItemCardLabel({children, label }) {

    return (
        <Sheet
        // variant="outlined"
        sx={{
            pb: 0,
            m: 0,
            p: 0,
            borderRadius: 2,
            // minWidth: "250px",
            bgcolor: "transparent",
            mb: -1,
           
        }}
        >
    
        { children? children : "" }
        <Divider sx={{ py:0.15, px: 0,  mt: -0.75,  backgroundColor: 'primary.900', opacity: 1,
                    mx: -1,  mr: -1.25,
                    position: 'relative', zIndex: 100,
                    }}  
        />
        <Box role="group" aria-labelledby="filter-status"
        sx={{ mt: 0.25 }}
        >
               
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
