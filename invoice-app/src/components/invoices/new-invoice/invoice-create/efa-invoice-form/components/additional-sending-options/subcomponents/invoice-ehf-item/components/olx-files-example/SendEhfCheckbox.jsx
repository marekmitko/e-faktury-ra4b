import * as React from "react";
import Stack from "@mui/system/Stack";
// import FocusTrap from "@mui/base/FocusTrap";
import Input from "@mui/joy/Input";
import { CheckedButton } from "../../../CheckedButton";
import FocusTrap from "@mui/material/Unstable_TrapFocus";

export default function SendEhfCheckbox({
    open,
    label,
    setOpen,
    checked,
    onChange,
}) {
    console.log("open", open);

    return (
        <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
            <Stack alignItems="left" spacing={1}>
                <CheckedButton
                    checked={checked}
                    onChange={onChange}
                    label={label}
                />
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
            </Stack>
        </FocusTrap>
    );
}
