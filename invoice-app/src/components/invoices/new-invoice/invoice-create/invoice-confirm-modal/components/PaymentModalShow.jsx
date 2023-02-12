import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";

export default function PaymentModalShow() {
    return (
        <Card
        orientation="horizontal"
        // variant="outlined"
        sx={{ width: 260, bgcolor: "background.body" }}
        >
        <CardOverflow
            variant="soft"
            color="primary"
            sx={{
            px: 0.2,
            // writingMode: "vertical-rl",
            textAlign: "center",
            // fontSize: "xs2",
            // fontWeight: "xl2",
            letterSpacing: "1px",
            textTransform: "uppercase"
            }}
        >
            PŁATNOŚĆ
        </CardOverflow>
        <Divider />
        <CardContent sx={{ px: 2 }}>
            <Grid
            container
            rowSpacing={0.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
            <Grid item xs={12} sm={8}>
                <Typography 
                // level="body2"
                >Termin do: 12-05-2021</Typography>
                <Typography 
                // level="body2"
                >Forma: PRZELEW</Typography>
                <Typography 
                // fontWeight="md"
                 textColor="success.plainColor" mb={0.5}>
                Kwota: 100 zł
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography
                startDecorator={
                    <Box
                    component="span"
                    sx={{
                        bgcolor: "neutral.400",
                        width: "0.5em",
                        height: "0.5em",
                        borderRadius: "50%"
                    }}
                    />
                }
                >
                Inactive
                </Typography>

                <Typography
                // fontSize="xl2"
                // lineHeight={1}
                startDecorator={
                    <Typography 
                    // fontSize="lg" 
                    textColor="text.secondary">
                    $
                    </Typography>
                }
                sx={{ alignItems: "flex-start" }}
                >
                25
                </Typography>
            </Grid>
            </Grid>
        </CardContent>
        </Card>
    );
    }
