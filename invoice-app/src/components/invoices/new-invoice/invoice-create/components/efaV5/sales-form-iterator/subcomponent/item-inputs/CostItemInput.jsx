    import * as React from "react";
    import Input from "@mui/joy/Input";
    import { Stack, Select, Option } from "@mui/joy";
    // import { OutputShow } from "./OutputShow";
    import { useMediaQuery } from "@mui/material";

    export const CostItemInput = (props) => {
    const isSmall = useMediaQuery("(min-width:600px)");
    return (
        <>
        <Stack
            direction={"column"}
            spacing={0.5}
        >
            <Stack direction="row" spacing={0.5}>
            <Input
                sx={{ width: "100%" }}
                placeholder="Qty"
                type="number"
                // defaultValue={2.5}
                slotProps={{
                input: {
                    min: 1,
                    max: 5,
                    step: 1
                }
                }}
            />

            <Select placeholder="VAT" sx={{ width: "200%" }} >
                <Option>...</Option>
            </Select>
            <Input
                sx={{ width: "200%" }}
                placeholder="Price"
                type="number"
                // defaultValue={2.5}
                slotProps={{
                input: {
                    min: 1,
                    max: 5,
                    step: 1
                }
                }}
            />
            </Stack>
        </Stack>
        </>
    );
    };
