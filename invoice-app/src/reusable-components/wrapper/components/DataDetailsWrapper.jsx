import * as React from "react";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import CardContent from "@mui/joy/CardContent";
import { useRecordContext, useTranslate } from "react-admin";

const DataDetailsWrapper = (props) => {
    const { children, capitionLabel } = props;
    const translate = useTranslate();
    const record = useRecordContext(props);
    return (
        <>
            <CardContent sx={{ my: -2, mx: -3.5 }}>{children}</CardContent>

            {/* <Card
                sx={{
                    // width: 300,
                    ml: 3,
                    mt: 1,
                    bgcolor: "initial",
                    boxShadow: "none",
                    border: "none",
                    "--Card-padding": "1px",
                }}
                orientation="horizontal"
                variant="outlined"
            >
                <CardOverflow
                    variant="soft"
                    color="neutral"
                    sx={{
                        px: 0.2,
                        py: 1,
                        writingMode: "vertical-rl",
                        textAlign: "center",
                        // letterSpacing: "-1px",
                        textTransform: "uppercase",
                    }}
                >
                    <Typography
                        level="body2"
                        textColor="neutral.500"
                        sx={{ fontWeight: "500" }}
                    >
                        {capitionLabel ? translate(`${capitionLabel}`) : ""}
                    </Typography>
                </CardOverflow>
                <Divider />
                <CardContent sx={{ ml: 2, justifyContent: "center" }}>
                    <Typography level="body1" sx={{ fontSize: "lg" }}>
                        {children ? children : ""}
                    </Typography>
                </CardContent>
            </Card> */}
        </>
    );
};

// export default React.memo(DataDetailsWrapper);
export default DataDetailsWrapper;
