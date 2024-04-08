import React, { useEffect } from "react";
import { Button } from "@mui/joy";
import {
    SimpleForm,
    TextInput,
    useCreate,
    useCreateSuggestionContext,
    SaveContextProvider,
    SaveButton,
    useNotify,
    useRedirect,
} from "react-admin";
import { MQ_Breakpoint } from "../../constant";
import {
    DialogActions,
    DialogContent,
    useMediaQuery,
    TextField,
} from "@mui/material";
import JoyModal from "@mui/joy/Modal";
import JoyModalClose from "@mui/joy/ModalClose";
import JoyModalDialog from "@mui/joy/ModalDialog";
import ContentForm from "../components/ContentForm";
import ClientModalFormHeader from "../components/modal-subelements/ClientModalFormHeader";
import { CustomerSaveButton } from "./CustomerSaveButton";
import { validateClientCreateForm } from "../validateClientCreateForm";
import { useFormContext } from "react-hook-form";

// import JoyModalOverflow from "@mui/joy/ModalOverflow";
// export const ClientCreateButton = (props: any) => {

export const CreateCustomerModal = (props) => {
    const { version, onChange, onClick, title = "SimpleForm" } = props;
    const [open, setOpen] = React.useState(false); // Controls modal
    const { setFocus, formState, getValues } = useFormContext();
    const { isValid } = formState;
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [create, { isLoading, error }] = useCreate();
    const [value, setValue] = React.useState(filter || "");
    const [layout, setLayout] = React.useState(undefined);
    const notify = useNotify();
    const redirect = useRedirect();
    const data_newCustomer = {};
    const isSmall = useMediaQuery(MQ_Breakpoint.isSmall);

    React.useEffect(() => {
        if (isSmall && layout !== "fullscreen") setLayout("fullscreen");
        if (!isSmall && layout !== "center") setLayout("center");
    }, [isSmall]);

    console.log("layoutSet🔰", layout);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const data_record = { company: `${value}` };

    const submitForm = (formData) => {
        console.log("submitForm", formData);
    };

    const hendlerFocus = (name) => {
        setFocus(name);
    };

    // const handleSubmit = (data) => {
    const onSubmit = (event) => {
        event.preventDefault();

        const customerData = getValues();
        const { id, ...data } = customerData;

        console.log("isValid💠❌💠", isValid);
        if (isValid)
            create("buyersEfaktury", {
                data: customerData,
            });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log("data💠", data_record);
    //     create(
    //         { data: data_newCustomer },
    //         {
    //             onSuccess: (data) => {
    //                 setValue("");
    //                 onCreate(data);
    //                 setFocus("products.0.product_count");
    //                 console.log("newCustomerData", data);
    //             },
    //         }
    //     );
    // };

    const handleLayout = (value) => {
        setLayout(value);
    };

    const handleOnCreate = (data) => {
        onCreate(data);
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
            <JoyModal
                className="modal-joy-wrapper"
                open={
                    layout === null || layout === undefined ? undefined : layout
                }
                // open={!!layout}
                // open={layout == undefined ? undefined : layout}
                onClose={() => setLayout(undefined)}
            >
                {/* <ModalCreateNewClient
                // selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            > */}
                <JoyModalDialog layout={layout} sx={{ p: 0, m: 0 }}>
                    <ClientModalFormHeader title="create" isSmall={isSmall} />
                    <JoyModalClose
                        onClick={onCancel}
                        variant="plain"
                        sx={{ marginTop: "-4px" }}
                    />
                    <form onSubmit={() => onSubmit} id="my-wrapper-form">
                        <DialogContent
                            className="ModalContent"
                            sx={{
                                m: 0,
                                p: 0,
                                "&.MuiDialogContent-root": {
                                    overflowY: "hidden",
                                },
                            }}
                        >
                            {/* <Typography id="modal-dialog-overflow" level="h2">
                                Overflow content
                            </Typography> */}
                            {/* <HeaderSimpleForm title="create" /> */}
                            {/* https://github.com/marmelab/react-admin/issues/7669 */}
                            <SaveContextProvider value={{ save: submitForm }}>
                                <SimpleForm
                                    record={data_record}
                                    mutationOptions={{
                                        onSuccess: (data) => {
                                            setValue("");
                                            onCreate(data);
                                            setFocus(
                                                "products.0.product_count"
                                            );
                                            console.log(
                                                "🙈🙈🙈newCustomerData",
                                                data
                                            );
                                            setLayout(undefined);
                                        },
                                    }}
                                    onSubmit={onSubmit}
                                    // defaultValues={db_buyer}
                                    // sx={{ display: "flex", alignContent: "stretch" }}
                                    // onSubmit={postSave}
                                    validate={validateClientCreateForm}
                                    toolbar={
                                        <DialogActions>
                                            <CustomerSaveButton
                                                onCancel={onCancel}
                                                onCreate={handleOnCreate}
                                                setValue={setValue}
                                                handleLayout={handleLayout}
                                                setLayout={setLayout}
                                            />
                                            <SaveButton
                                                sx={{ backgroundColor: "blue" }}
                                                mutationOptions={{
                                                    onSuccess: (data) => {
                                                        setValue("");
                                                        onCreate(data);
                                                        setLayout(undefined);
                                                        setFocus(
                                                            "products.0.product_count"
                                                        );
                                                        console.log(
                                                            "🙈🙈🙈newCustomerData",
                                                            data
                                                        );
                                                        notify(
                                                            "ra.notification.created",
                                                            {
                                                                type: "info",
                                                                messageArgs: {
                                                                    smart_count: 1,
                                                                },
                                                            }
                                                        );
                                                        redirect(false);
                                                    },
                                                }}
                                            />
                                        </DialogActions>
                                    }
                                    id="client_create_form"
                                    // {...props}
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
                            </SaveContextProvider>
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
