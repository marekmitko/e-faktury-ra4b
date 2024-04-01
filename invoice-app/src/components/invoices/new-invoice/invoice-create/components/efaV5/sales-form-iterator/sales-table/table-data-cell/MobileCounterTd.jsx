import { any } from "prop-types";
import * as React from "react";

import { Card, Box, useMediaQuery, Container } from "@mui/material";

export const MobileCounterTd = (props) => {
    const { indexChip, removeButton, itemName, display, visibility, children } =
        props;
    return (
        <td
            class="counter-td"
            style={{ display: display, visibility: visibility }}
        >
            <div class="counter-container">
                <div class="item-counter-container">{indexChip}</div>
                <div class="item-header-container">
                    <span>{itemName}</span>
                </div>
                <Box className="item-switch-container">
                    <div>{children}</div>
                </Box>
                <div class="item-remove-button-container">{removeButton}</div>
            </div>
        </td>
    );
};
