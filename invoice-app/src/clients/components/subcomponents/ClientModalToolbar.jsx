import * as React from "react";
import JoyButton from "@mui/joy/Button";
import JoyStack from "@mui/joy/Stack";
import JoyModal from "@mui/joy/Modal";
import JoyModalClose from "@mui/joy/ModalClose";
import JoyModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import JoyDialogTitle from "@mui/DialogTitle";
import JoyDialogContent from "@mui/DialogContent";
import { useMediaQuery } from "@mui/material";
import { MQ_Breakpoint } from "../../../constant";
// import { DialogContent, DialogTitle } from "@mui/joy";

export default function ClientModalToolbar() {
    const isSmall = useMediaQuery(MQ_Breakpoint.isSmall);
    const [layout, setLayout] = React.useState(undefined);
    return (
        <React.Fragment>
            <JoyStack direction="row" spacing={1}>
                {/* Button Center */}
                <JoyButton
                    variant="outlined"
                    color="neutral"
                    onClick={() => {
                        setLayout("center");
                    }}
                >
                    Center
                </JoyButton>
                {/* Button Fullscreen */}
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
        </React.Fragment>
    );
}
