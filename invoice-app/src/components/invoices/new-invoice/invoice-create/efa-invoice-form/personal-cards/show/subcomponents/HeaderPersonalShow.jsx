import * as React from "react";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import { Link } from "@mui/joy";

export const HeaderPersonalShow = ({ title, icon, mvaNo, companyName }) => {
    return (
    <>
      {/* <Card> */}
        <IconButton 
            size="md"
            variant="solid"
            color="primary"
            aria-label="Like minimal photography"
            sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                left: 9,
                top: 0,
                transform: "translateY(130%)",
                borderBottomRightRadius: "15%"
            }} 
        >
                {icon? icon : ""}
            </IconButton>
        <Typography
            level="h5"
            color="primary"
            sx={{
            ml: 7,
            mt: 1
            }}
        >
            {/* <Link href="#multiple-actions" overlay underline="none"> */}
            {companyName ? companyName : ""}
            {/* </Link> */}
        </Typography>
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
            MVA: <b>{mvaNo ? mvaNo : null}</b>
        </Typography>
            </CardOverflow>
        </CardOverflow>
    </>
  );
};
