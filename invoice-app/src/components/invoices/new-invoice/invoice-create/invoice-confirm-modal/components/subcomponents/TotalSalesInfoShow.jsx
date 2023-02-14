    import * as React from "react";
    import AspectRatio from "@mui/joy/AspectRatio";
    import Card from "@mui/joy/Card";
    import CardOverflow from "@mui/joy/CardOverflow";
    import Divider from "@mui/joy/Divider";
    import Typography from "@mui/joy/Typography";

    export default function TotalSalesInfoShow() {
    return (
        <Card variant="outlined" sx={{ width: 220, bgcolor: "background.body" }}>
        <CardOverflow
            variant="soft"
            color="primary"
            sx={{
            display: "flex",
            gap: 1.5,
            py: 1.5,
            px: "var(--Card-padding)",
            bgcolor: "background.level1",
            textAlign: "center",
            fontSize: "xs2",
            fontWeight: "xl2",
            letterSpacing: "1px",
            textTransform: "uppercase"
            }}
        >
            <Typography
            level="body3"
            sx={{
                display: "block",
                // ml: "auto",
                fontWeight: "md",
                color: "text.secondary"
            }}
            >
            RAZEM
            </Typography>
            <Divider orientation="vertical" />
            <Typography
            level="body1"
            textColor="primary.500"
            sx={{
                mb: "-10px",
                ml: "auto",
                fontWeight: "md"
            }}
            >
            2867.27 zł
            </Typography>
        </CardOverflow>
        <Divider />
        <CardOverflow
            // variant="soft"
            // color="primary"
            sx={{
            display: "flex",
            gap: 1.5,
            py: 0.5,
            px: "var(--Card-padding)",
            // bgcolor: "background.level1",
            textAlign: "center",
            fontSize: "xs2",
            fontWeight: "xl2",
            letterSpacing: "1px",
            textTransform: "uppercase"
            }}
        >
            <Typography
            level="body3"
            sx={{
                display: "block",
                // ml: "auto",
                fontWeight: "md",
                color: "text.secondary"
            }}
            >
            {" "}
            NETTO
            <br />
            VAT
            </Typography>
            <Divider orientation="vertical" />
            <Typography
            level="body3"
            textColor="neutral.500"
            sx={{
                ml: "auto",
                fontWeight: "md"
            }}
            >
            2867.27 zł
            <br />
            2867.27 zł
            </Typography>
        </CardOverflow>

        {/* <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            Wrocław, ul. Sienkieiwcza 12/3
        </Typography> */}
        </Card>
    );
    }
