import React from "react";
import { Button } from "@mui/joy";
import AddIcon from "@mui/icons-material/PersonAddAlt1";
import { TextField, useCreate, useCreateSuggestionContext } from "react-admin";
import { MQ_Breakpoint } from "../../../constant";
import { DialogActions, DialogContent, useMediaQuery } from "@mui/material";
import { ModalCreateNewClient } from "../../../components/invoices/new-invoice/invoice-create/efa-invoice-form/personal-cards/subcomponents/new-simple-modal-new-client/ModalCreateNewClient";
import JoyModal from "@mui/joy/Modal";
import JoyModalClose from "@mui/joy/ModalClose";
import JoyModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";

// export const ClientCreateButton = (props: any) => {
export const ClientCreateModalButton = (props) => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [create] = useCreate();
    const [value, setValue] = React.useState(filter || "");

    const data_newCustomer = {};

    const { version, onChange, onClick } = props;
    const [open, setOpen] = React.useState(false); // Controls modal

    const isSmall = useMediaQuery(MQ_Breakpoint.isSmall);
    const [layout, setLayout] = React.useState(undefined);
    console.log("layoutUndefi🔰", layout);

    if (isSmall && layout !== "fullscreen") setLayout("fullscreen");
    if (!isSmall && layout !== "center") setLayout("center");

    console.log("layoutSet🔰", layout);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // create(
        //     { data: data_newCustomer },
        //     {
        //         onSuccess: (data) => {
        //             // setValue("");
        //             // onCreate(data);
        //             console.log("newCustomerData", data);
        //         },
        //     }
        // );
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };
    return (
        <>
            {/* <div> */}
            {/* <Button
                size="small"
                aria-label="create"
                variant="plain"
                sx={{
                    border: "none",
                    transform: "scale(1.3)",
                    color: "primary.800",
                }}
                onClick={handleClickOpen}
            >
                <AddIcon />
            </Button> */}

            {/* <Dialog open onClose={onCancel}> */}
            <JoyModal open={!!layout} onClose={() => setLayout(undefined)}>
                {/* <ModalCreateNewClient
                    // selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                > */}
                <JoyModalDialog layout={layout}>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                label="New category name"
                                value={value}
                                // onChange={(event) => setValue(event.target.value)}
                                autoFocus
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit">Save</Button>
                            <Button onClick={onCancel}>Cancel</Button>
                        </DialogActions>
                    </form>
                    {/* </ModalCreateNewClient> */}
                </JoyModalDialog>
            </JoyModal>
            {/* </div> */}
        </>
    );
};
