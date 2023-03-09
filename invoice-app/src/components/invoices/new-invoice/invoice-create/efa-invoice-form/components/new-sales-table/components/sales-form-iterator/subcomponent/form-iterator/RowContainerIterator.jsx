    import * as React from "react";
    import AspectRatio from "@mui/joy/AspectRatio";
    import JoyCard from "@mui/joy/Card";
    import Typography from "@mui/joy/Typography";
    import {
    List,
    ListItem,
    Divider,
    ListItemContent,
    Button,
    Box, Stack,
    Link, CardCover, CardContent
    } from "@mui/joy";

export default function RowContainerIterator({children, isSmall}) {
    return (
        <> 
         <Box 
        // sx={{ display: "flex", gap: 1, flexWrap: "wrap", p: 0, m: 0, pb: 0 }}
      >
            <ListItem>
                <AspectRatio
                ratio="4/3"
                sx={{
                    flexBasis: "min-content",
                    marginRight: "8px"
                }}
                ><p>sadsa</p>
                    <Typography level="body2">
                        Your neighborhood doing errands this Tuesday.
                    </Typography>
                </AspectRatio>
                
                    {children ? children : "" }
              
                {/* <ListItemContent>
                <Typography level="h2" fontSize="lg">
                    Brunch this weekend?
                </Typography>
                </ListItemContent> */}
                
            </ListItem>
            <Divider orientation="horizontal" />
            </Box>
        </>
    );
}
