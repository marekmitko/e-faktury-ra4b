import * as React from "react";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import { Link } from "@mui/joy";
import { useRecordContext } from "react-admin";

export const SubHeaderBuyer = () => {
    const record = useRecordContext();    
    const mvaShow = (org_nr) => (
        <Box>
            <CardOverflow
                    sx={{
                    m: 0,
                    borderBottomRightRadius: 0
                    }}
            >
                    {/* <Divider /> */}
                    <CardOverflow
                    variant="soft"
                    // color="neutral"
                    color="primary"
                    sx={{
                        mx: 0,
                        px: 0.1,
                        py: 0.1,
                        pl: 4,
                        pb: 0,
                        mr: -2,
                        ml: 1,
                        // writingMode: "vertical-rl",
                        // textAlign: "left",
                        // fontSize: "xs3",
                        // fontWeight: "xl2",
                        // letterSpacing: "2px",
                        textTransform: "uppercase",
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0
                    }}
                    >
                    <Typography level="body2"  
                    >
                        {org_nr ? (<span>MVA: <b> {org_nr} </b></span>) : "WYBIERZ ODBIORCĘ" }
                    </Typography>
                </CardOverflow>
            </CardOverflow>
        </Box>
    );
    
    if(!record) return mvaShow('');

    const { org_nr } = record;
    return mvaShow(org_nr);

};
