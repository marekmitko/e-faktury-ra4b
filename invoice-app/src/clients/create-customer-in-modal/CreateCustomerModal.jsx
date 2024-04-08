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
    Create,
    Form,
    useTranslate,
} from "react-admin";
import { G_Path, MQ_Breakpoint } from "../../constant";
import {
    DialogActions,
    DialogContent,
    useMediaQuery,
    TextField,
    Grid,
    Divider,
} from "@mui/material";
import MuiButton from "@mui/material/Button";
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
    const isSmall = useMediaQuery(MQ_Breakpoint.isSmall);
    //
    const { setFocus } = useFormContext();
    // const { isValid } = formState;
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    //
    const [create, { isLoading: isSubmitting, error }] = useCreate();
    //
    const translate = useTranslate();
    const [value, setValue] = React.useState(filter || "");
    const [layout, setLayout] = React.useState(undefined);
    const notify = useNotify();
    const redirect = useRedirect();

    React.useEffect(() => {
        if (isSmall && layout !== "fullscreen") setLayout("fullscreen");
        if (!isSmall && layout !== "center") setLayout("center");
    }, [isSmall]);

    const data_record = { company: `${value}` };

    const customerSave = (data) => {
        create(
            "buyersEfaktury",
            { data },
            {
                onSuccess: (data) => {
                    setValue("");
                    onCreate(data);
                    // setFocus("products.0.product_name");
                    setFocus("products.0.product_count");
                    setLayout(undefined);
                },
            }
        );
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
                    <Form
                        record={data_record}
                        onSubmit={customerSave}
                        validate={validateClientCreateForm}
                        sanitizeEmptyValues
                    >
                        <ClientModalFormHeader
                            title="create"
                            isSmall={isSmall}
                        />

                        <Divider inset="context" />
                        <JoyModalClose
                            onClick={onCancel}
                            variant="plain"
                            sx={{ marginTop: "-8px" }}
                        />

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
                            <Grid container sx={{ p: 2, pb: 3 }}>
                                <ContentForm />
                            </Grid>
                        </DialogContent>

                        <DialogActions
                            sx={{ justifyContent: "space-between", px: 5 }}
                        >
                            <MuiButton onClick={onCancel}>
                                {translate(
                                    `resources.${G_Path.invoices}.create.modal.label.button.cancel`
                                )}
                            </MuiButton>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                sx={{
                                    borderRadius: "50px",
                                    bgColor: "primary.900",
                                }}
                            >
                                {translate(
                                    `resources.${G_Path.invoices}.create.modal.label.button.save`
                                )}
                            </Button>
                        </DialogActions>
                    </Form>
                </JoyModalDialog>
            </JoyModal>
            {/* </div> */}
        </>
    );
};
