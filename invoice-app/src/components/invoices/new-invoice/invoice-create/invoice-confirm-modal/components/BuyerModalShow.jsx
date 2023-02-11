import * as React from "react";
import JoyCard from "@mui/joy/Card";
import JoyCardOverflow from "@mui/joy/CardOverflow";
import JoyDivider from "@mui/joy/Divider";
import JoyTypography from "@mui/joy/Typography";

export default function BuyerModalShow() {
    return (
        <JoyCard variant="outlined" sx={{ width: 320, bgcolor: "background.body" }}>
        <JoyCardOverflow
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
            <JoyTypography
            level="body4"
            sx={{
                display: "block",
                // ml: "auto",
                fontWeight: "md",
                color: "text.secondary"
            }}
            >
            PRODUKTY SPRZEDAŻY:
            </JoyTypography>
            <JoyDivider orientation="vertical" />
            <JoyTypography
            level="body2"
            textColor="primary.500" 
            sx={{
                ml: "auto",
                fontWeight: "md"
            }}
            >
          <td>ILOŚĆ</td><td style={{ paddingRight: "10px", paddingLeft: "10px" }} >|</td><td>SUMA</td>
            </JoyTypography>
        </JoyCardOverflow>
        <JoyDivider />
        <JoyTypography
            level="body2"
            textColor="primary.500"
            sx={{
            ml: "auto",
            fontWeight: "md",
            flexDirection: "column",
            display: "flex"
            }}
        >
            <small>
            <tr>
                <td style={{ paddingRight: "10px", paddingLeft: "auto", }}>
                <small style={{  display: 'flex'}}>Nazwa produktu</small>
                </td>
                <td style={{ paddingRight: "25px" }}>
                <small> {" "} </small>
                </td>
                <td style={{ paddingRight: "5px" }}>
                <small>1  </small>
                </td>
                <td style={{ paddingRight: "25px" }}>
                <small> {" "} </small>
                </td>
                <td style={{ paddingRight: "5px" }}>
                <small>150 </small>
                </td>
                <td> zł </td>
            </tr>
            </small>
        </JoyTypography>
        </JoyCard>
    );
    }
