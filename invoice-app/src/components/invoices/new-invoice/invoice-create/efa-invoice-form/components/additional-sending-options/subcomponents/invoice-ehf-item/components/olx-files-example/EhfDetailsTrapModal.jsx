import * as React from "react";
import Stack from "@mui/system/Stack";
import FocusTrap from "@mui/base/FocusTrap";
import Input from "@mui/joy/Input";
import { CheckedButton } from "../../../CheckedButton";
import { Box } from "@mui/joy";


    
export default function EhfDetailsTrapModal({ open  }) {
    return (
        <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
            <Box alignItems="left" sx={{ px: 2 }}>
                {open && (
                <div>
                    <label>
                    Wystawca: <input type="text" />
                    </label>
                    <label>
                    Nabywca: <input type="text" />
                    </label>
                    <label>
                    {" "}
                    <Input size="sm" />
                    Numer: <input type="text" />
                    </label>
                </div>
                )}
            </Box>
        </FocusTrap>
    );
    }
