import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, useCreate, useCreateSuggestionContext } from "react-admin";
import { useFormContext } from "react-hook-form";

export const CreateCategory = () => {
    const contextSugestion = useCreateSuggestionContext();
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const contextForm = useFormContext();

    const [value, setValue] = useState(filter || "");
    const [create] = useCreate();

    console.log("contextSugestion", contextSugestion);
    console.log("contextForm", contextForm);

    const { setFocus, getValues } = contextForm;

    console.log("setFocus", setFocus);
    console.log("getValues", getValues());

    const hendlerFocus = (name) => {
        setFocus(name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        create(
            "buyersEfaktury",
            {
                data: {
                    company: value,
                },
            },
            {
                onSuccess: (data) => {
                    setValue("");
                    onCreate(data);
                    setFocus("products.0.test");

                },
            }
        );
    };

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
                </DialogActions>
            </form>
        </Dialog>
    );
};
