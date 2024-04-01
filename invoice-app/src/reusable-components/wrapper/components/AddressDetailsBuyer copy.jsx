import * as React from "react";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import CardContent from "@mui/joy/CardContent";
import { useRecordContext } from "react-admin";

export const AddressDetailsBuyer = (props) => {
    const { capitionLabel, prefixFirstRow, prefixThirdRow, thirdRow } = props;
    const record = useRecordContext(props);
    console.log("innner Data", record);
    // if (!record) return null;
    const { zip_code, place, address, id } = record;
    return (
        <>
            {id && (
                <Card
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
                            {capitionLabel ? capitionLabel : ""}
                        </Typography>
                    </CardOverflow>
                    <Divider />
                    <CardContent sx={{ ml: 2, justifyContent: "center" }}>
                        <Typography level="body1" sx={{ fontSize: "lg" }}>
                            {prefixFirstRow ? prefixFirstRow : ""}{" "}
                            {address ? address : ""}
                            <br />
                            {zip_code ? zip_code : ""} {place ? place : ""}
                            <br />
                            {prefixThirdRow && thirdRow
                                ? prefixThirdRow
                                : ""}{" "}
                            {thirdRow ? thirdRow : ""}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </>
    );
};
