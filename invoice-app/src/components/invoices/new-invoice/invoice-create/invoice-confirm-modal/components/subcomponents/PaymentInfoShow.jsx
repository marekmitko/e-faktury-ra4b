    import * as React from "react";
    import AspectRatio from "@mui/joy/AspectRatio";
    import Card from "@mui/joy/Card";
    import CardContent from "@mui/joy/CardContent";
    import CardOverflow from "@mui/joy/CardOverflow";
    import Divider from "@mui/joy/Divider";
    import Typography from "@mui/joy/Typography";
    import Box from "@mui/joy/Box";
    import Grid from "@mui/material/Grid";

    export default function PaymentInfoShow({ totalGross, totalNet }) {
    return (
        <Card
        orientation="horizontal"
        variant="outlined"
        sx={{ width: "90%", bgcolor: "background.body", 
        mr: "auto" }}
        >
        <CardOverflow
            variant="soft"
            color="primary"
            sx={{
            px: 0.1,
            writingMode: "vertical-rl",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase"
            }}
        >
            <b>RAZEM</b>
        </CardOverflow>
        <Divider />
        <CardContent sx={{ my: -1, px: 2, width: "80%" }}>
            <Grid
            container
            rowSpacing={0.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
            <Grid item xs={12} sm={12}   >
                <Typography
                    level="body1"
                    align="right"
                    pr="25px"
                >KWOTA BRUTTO</Typography>
                <Typography
                    // fontSize="md"
                    level="h5"
                    // lineHeight={1.7}
                    align="right" 
                    mr="-20px" 
                    mt="5px"
                    textColor='primary.plainColor'
                >
               <b> { (totalGross) ? (totalGross).toFixed(2) : ''  }</b> <small style={{ color: 'grey' }}>PLN</small>
                </Typography>
                <Typography 
                    level="body3" 
                    align="right" 
                    mr="-20px" 
                    mt="-5px"
                    textColor='neutral.400'
                ><small>(w tym VAT: </small>
                   <b>{ (totalGross && totalNet) ? (totalGross-totalNet).toFixed(2) : ''  }</b><small> PLN)</small>
                </Typography>
            </Grid>
            </Grid>
        </CardContent>
        </Card>
    );
    }
