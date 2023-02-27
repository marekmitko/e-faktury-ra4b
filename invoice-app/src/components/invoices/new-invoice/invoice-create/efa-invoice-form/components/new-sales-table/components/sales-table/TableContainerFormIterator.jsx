    import * as React from "react";
    import AspectRatio from "@mui/joy/AspectRatio";
    import Card from "@mui/joy/Card";
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

    export default function TableContainerFormIterator() {
    return (
        <Card
        variant="outlined"
        row
        sx={{
            width: "auto",
            gap: 2
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
            <ListItem>
                <AspectRatio
                ratio="4/3"
                sx={{
                    flexBasis: 120,
                    marginRight: "8px"
                }}
                ></AspectRatio>
                <ListItemContent>
                <Typography level="h2" fontSize="lg">
                    Brunch this weekend?
                </Typography>
                <Typography level="body2">
                    Your neighborhood doing errands this Tuesday.
                </Typography>
                </ListItemContent>
            </ListItem>
            <Divider orientation="horizontal" />

            <ListItem>
                <AspectRatio
                ratio="4/3"
                sx={{
                    flexBasis: 120,
                    borderRadius: "sm",
                    overflow: "auto",
                    marginRight: "8px"
                }}
                >
                <img
                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
                </AspectRatio>
                <ListItemContent>
                <Typography level="h2" fontSize="lg">
                    Brunch this weekend?
                </Typography>
                <Typography level="body2">
                    Your neighborhood doing errands this Tuesday.
                </Typography>
                </ListItemContent>
            </ListItem>
            <Divider orientation="horizontal" />
            <ListItem>
                <AspectRatio
                ratio="4/3"
                sx={{
                    flexBasis: 120,
                    borderRadius: "sm",
                    marginRight: "8px"
                }}
                >
                <img
                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
                </AspectRatio>
                <ListItemContent>
                <Typography level="h2" fontSize="lg">
                    Brunch this weekend?
                </Typography>
                <Typography level="body2">
                    Your neighborhood doing errands this Tuesday.
                </Typography>
                </ListItemContent>
            </ListItem>
            </List>
            <Button sx={{ mb: 2 }} fullWidth>
            Checkout
            </Button>
            <Link underline="hover">View Shopping Bag</Link>
        </Box>
        </Card>
    );
    }
