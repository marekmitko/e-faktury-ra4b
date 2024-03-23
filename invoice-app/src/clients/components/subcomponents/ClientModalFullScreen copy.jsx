import * as React from "react";
import JoyButton from "@mui/joy/Button";
import JoyStack from "@mui/joy/Stack";
import JoyModal from "@mui/joy/Modal";
import JoyModalClose from "@mui/joy/ModalClose";
import JoyModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
// import JoyDialogTitle from "@mui/DialogTitle";
// import JoyDialogContent from "@mui/DialogContent";
// import { DialogContent, DialogTitle } from "@mui/joy";
import {
    DialogTitle,
    // DialogActions,
    DialogContent,
    // TextField,
    // useMediaQuery,
} from "@mui/material";

export default function ClientModalFullScreen() {
    const [layout, setLayout] = React.useState(undefined);
    return (
        <React.Fragment>
            <JoyStack direction="row" spacing={1}>
                <JoyButton
                    variant="outlined"
                    color="neutral"
                    onClick={() => {
                        setLayout("center");
                    }}
                >
                    Center
                </JoyButton>
                <JoyButton
                    variant="outlined"
                    color="neutral"
                    onClick={() => {
                        setLayout("fullscreen");
                    }}
                >
                    Full screen
                </JoyButton>
            </JoyStack>
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
