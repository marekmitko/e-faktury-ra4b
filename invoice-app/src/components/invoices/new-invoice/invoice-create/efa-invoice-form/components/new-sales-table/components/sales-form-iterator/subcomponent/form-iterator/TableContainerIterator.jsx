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
    Box,
    Link
    } from "@mui/joy";

    export default function TableContainerIterator({children, isSmall, className}) {
    return (
        <JoyCard
        className={className ? className : '' }
        variant="outlined"
        // component='li'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            border: isSmall ? 'none' : '',
            boxShadow: isSmall ? 'none' : '',
            // width: "auto",
            gap: 2,
            bgcolor: isSmall ? 'transparent' : ''
        }}
        >
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
            }}
        >
            <List sx={{ gap: 2, mb: 2 }}>
                {children? children : ""}
            </List>
        </Box>
        </JoyCard>
    );
    }
