import * as React from "react";
import JoyButton from "@mui/joy/Button";
import JoyStack from "@mui/joy/Stack";
import JoyModal from "@mui/joy/Modal";
import JoyModalClose from "@mui/joy/ModalClose";
import JoyModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";

import {
    DialogTitle,
    // DialogActions,
    DialogContent,
} from "@mui/material";

export default function ClientModalFullScreen() {
    const [layout, setLayout] = React.useState("fullscreen");
    return (
        <React.Fragment>
            <JoyModal open={!!layout} onClose={() => setLayout(undefined)}>
                <JoyModalDialog layout={layout}>
                    <JoyModalClose />
                    {/* <JoyDialogTitle>Modal Dialog</JoyDialogTitle> */}
                    <DialogTitle>Modal Dialog</DialogTitle>
                    {/* <JoyDialogContent> */}
                    <DialogContent>
                        <div>
                            This is a <code>{layout}</code> modal dialog. Press{" "}
                            <code>esc</code> to close it.
                        </div>
                    </DialogContent>
                    {/* </JoyDialogContent> */}
                </JoyModalDialog>
            </JoyModal>
        </React.Fragment>
    );
}
