import * as React from "react";
import Input from "@mui/joy/Input";
import { Stack, Select, Option, Button, Chip } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

export const DescItemInput = () => {
  // const isSmall = useMediaQuery("(min-width:899px)");

    return (
        <Stack direction="row" alignItems="center" spacing={0.5}>
        {/* <Chip> 1 </Chip> */}
        <Input
            placeholder="Product name"
            sx={{ width: "200%" }}
            startDecorator={<Button>...</Button>}
        />
        <Select placeholder="Type" sx={{ width: '100%'}} >
            <Option>...</Option>
        </Select>
        </Stack>
    );
    };
