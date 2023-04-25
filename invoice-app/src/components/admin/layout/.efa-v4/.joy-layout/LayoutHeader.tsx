
import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";

// Icons import
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
// custom
import Menu from "./components/MyMenu";
import Layout from "./Layout";
import ColorSchemeToggle from "./components/ColorSchemeToggle";

export default function JoyLayoutHeader({ setDrawerOpen }) {
return (
    <Layout.Header>
    <Box
        sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1.5
        }}
    >
        <IconButton
        variant="outlined"
        size="sm"
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { sm: "none" } }}
        >
        <MenuIcon />
        </IconButton>
        <IconButton
        size="sm"
        variant="solid"
        sx={{ display: { xs: "none", sm: "inline-flex" } }}
        >
        <MailRoundedIcon />
        </IconButton>
        <Typography component="h1" fontWeight="xl">
        Email
        </Typography>
    </Box>
    <Input
        size="sm"
        placeholder="Search anything…"
        startDecorator={<SearchRoundedIcon color="primary" />}
        endDecorator={
        <IconButton variant="outlined" size="sm" color="neutral">
            <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
            /
            </Typography>
        </IconButton>
        }
        sx={{
        flexBasis: "500px",
        display: {
            xs: "none",
            sm: "flex"
        }
        }}
    />
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
        <IconButton
        size="sm"
        variant="outlined"
        color="primary"
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
        >
        <SearchRoundedIcon />
        </IconButton>
        <IconButton
        size="sm"
        variant="outlined"
        color="primary"
        component="a"
        href="/blog/first-look-at-joy/"
        >
        <BookRoundedIcon />
        </IconButton>
        <Menu
        id="app-selector"
        control={
            <IconButton
            size="sm"
            variant="outlined"
            color="primary"
            aria-label="Apps"
            >
            <GridViewRoundedIcon />
            </IconButton>
        }
        menus={[
            {
            label: "Email",
            active: true,
            href: "/joy-ui/getting-started/templates/email/",
            "aria-current": "page"
            },
            {
            label: "Team",
            href: "/joy-ui/getting-started/templates/team/"
            },
            {
            label: "Files",
            href: "/joy-ui/getting-started/templates/files/"
            }
        ]}
        />
        <ColorSchemeToggle />
    </Box>
    </Layout.Header>
);
}
