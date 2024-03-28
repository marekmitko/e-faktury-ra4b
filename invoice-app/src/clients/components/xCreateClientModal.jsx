import React from "react";
import { useCreate, useCreateSuggestionContext } from "react-admin";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    useMediaQuery,
} from "@mui/material";
import { G_Path, MQ_Breakpoint } from "../../constant";
import { ClientCreateButton } from "../../components/invoices/new-invoice/invoice-create/efa-invoice-form/personal-cards/show/buyer-invoice-form/create-client-subform/ClientCreateButton";
import ClientModalFullScreen from "./subcomponents/ClientModalFullScreen";
import ClientModalFormHeader from "./modal-subelements/ClientModalFormHeader";

export const CreateClientModal = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [create] = useCreate();
    const [value, setValue] = React.useState(filter || "");
    const data_newCustomer = {};
    const isSmall = useMediaQuery(MQ_Breakpoint.isSmall);
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

    if (isSmall) return <ClientModalFullScreen title="create" />;

    return (
        <Dialog open onClose={onCancel}>
            <form onSubmit={handleSubmit}>
                <DialogContent> 
                    <TextField
                        label="New category name"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                    <ClientCreateButton />
                </DialogActions>
            </form>
        </Dialog>
    );
};
