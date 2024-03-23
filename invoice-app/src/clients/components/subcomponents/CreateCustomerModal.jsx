import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    List,
    ListItem,
    Switch,
    Typography,
} from "@mui/joy";
import { SimpleForm, useCreate, useCreateSuggestionContext } from "react-admin";
import { MQ_Breakpoint } from "../../../constant";
import {
    DialogActions,
    DialogContent,
    useMediaQuery,
    TextField,
} from "@mui/material";
import JoyModal from "@mui/joy/Modal";
import JoyModalClose from "@mui/joy/ModalClose";
import JoyModalDialog from "@mui/joy/ModalDialog";
import ContentForm from "../ContentForm";
import HeaderSimpleForm from "./HeaderSimpleForm";

// import JoyModalOverflow from "@mui/joy/ModalOverflow";
// export const ClientCreateButton = (props: any) => {
export const CreateCustomerModal = (props) => {
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

    const data_record = { company: `${value}` };

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
                <JoyModalDialog layout={layout} sx={{ p: 0, m: 0 }}>
                    <JoyModalClose onClick={onCancel} />
                    <form onSubmit={handleSubmit}>
                        <DialogContent
                            className="ModalContent"
                            sx={{
                                "&.MuiDialogContent-root": {
                                    overflowY: "hidden",
                                },
                            }}
                        >
                            {/* <Typography id="modal-dialog-overflow" level="h2">
                                Overflow content
                            </Typography> */}
                            {/* <HeaderSimpleForm title="create" /> */}

                            <SimpleForm
                                record={data_record}
                                // onSubmit={onSubmit}
                                onSubmit={handleSubmit}
                                // defaultValues={db_buyer}
                                // sx={{ display: "flex", alignContent: "stretch" }}
                                // onSubmit={postSave}
                                toolbar={
                                    <DialogActions>
                                        {/* <SaveButton
                        form="client_create_form"
                        // type="button"
                        variant="text"
                    /> */}
                                        <Button onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                }
                                id="client_create_form"
                            >
                                <ContentForm />

                                {/* <TextField
                                    label="New category name"
                                    value={value}
                                    onChange={(event) =>
                                        setValue(event.target.value)
                                    }
                                    autoFocus
                                /> */}
                            </SimpleForm>
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
