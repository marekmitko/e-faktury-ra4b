import * as React from "react";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";


export const ModalToolbar = () => (


    <CardOverflow sx={{ p: "var(--Card-padding)", display: "flex" }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
           p
        </IconButton>
        <Input
            variant="plain"
            size="sm"
            placeholder="Add a comment…"
            sx={{ flexGrow: 1, mr: 1, "--Input-focusedThickness": "1px" }}
        />
        <Link disabled underline="none" role="button">
            Post
        </Link>
    </CardOverflow>
);