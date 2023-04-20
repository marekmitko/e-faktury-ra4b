    import * as React from "react";
    import AspectRatio from "@mui/joy/AspectRatio";
    import Box from "@mui/joy/Box";
    import Button from "@mui/joy/Button";
    import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
    import Sheet from "@mui/joy/Sheet";
    import Typography from "@mui/joy/Typography";
    import Close from "@mui/icons-material/Close";
    import Delete from "@mui/icons-material/Delete";
    import Download from "@mui/icons-material/Download";
    import InsertLink from "@mui/icons-material/InsertLink";
    import Crop from "@mui/icons-material/Crop";
    import Divider from "@mui/joy/Divider";

    export default function BuyerInfoShow({buyerName, taxpayerId }) {
    return (
        <Sheet sx={{ p: 2, pr: 0, ml: "100px", mr: "-15px" }}>
        <Sheet
            variant="outlined"
            sx={{
            borderRadius: "md",
            overflow: "auto",
            borderColor: "background.level2",
            bgcolor: "background.level1",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0"
            }}
        >
            <Box
            sx={{
                display: "flex",
                p: 1.5,
                // pr: 0,
                gap: 1.5,
                "& > button": { bgcolor: "background.body" }
            }}
            >
            <div>
                {/* <tr> */}
                <AssignmentIndIcon
                sx={{
                    fontSize: 35,
                    p: 0.5,
                    // border: "2px solid",
                    // color: "primary"
                    color: "primary.600"
                }}
                // sx={{ mr: "auto" }}
                />
                <div style={{ marginTop: "-10px", textAlign: "center" }}>
                <small>
                    <b>MVA:</b>{" "}
                </small>
                </div>
            </div>
            <Divider orientation="vertical" />
            <Typography
                level="h5"
                textColor="primary.500"
                sx={{
                    mr: "auto",
                    lineHeight: "1.2",
                    fontWeight: "md",
                    // letterSpacing: '1px',
                    mt: "auto",
                    mb: "1px"
                }}
            >
                {  buyerName ? buyerName : '' } 
                <br />
                <tr>
                <td style={{ paddingRight: "5px" }}>
                    <small>{ taxpayerId ? taxpayerId : '' }</small>
                </td>
                </tr>
            </Typography>
            </Box>
        </Sheet>
        </Sheet>
    );
    }
