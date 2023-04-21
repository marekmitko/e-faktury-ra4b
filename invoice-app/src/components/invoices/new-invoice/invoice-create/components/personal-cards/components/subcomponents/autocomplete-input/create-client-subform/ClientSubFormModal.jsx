import * as React from "react";
import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField, 
    DialogTitle
} from '@mui/material';
import BuyerIcon from '@mui/icons-material/Person';

import { AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, CreateButton } from "react-admin";
import { BuyerDataFromLayout } from "../../buyer/BuyerDataFormLayout";
import { BuyerCard } from "../buyer/BuyerCard";
import { PersonalDataCard } from "../../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard";






const CreateNewClient = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();


    const handleSubmit = event => {
        event.preventDefault();
        create(
            'dbclientlist',
            {
                data: {
                    title: value,
                },
            },
            {
                onSuccess: (data) => {
                    setValue('');
                    onCreate(data);
                },
            }
        );
    };

    return (
        <Dialog open onClose={onCancel}>
            {/* <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            > */}
                <DialogTitle id="form-dialog-title">Create User with Modal</DialogTitle>
               <DialogContent>
                   form
               </DialogContent>


            {/* <Create resource="dbclientlist" 
            // mutationOptions={{ onSuccess }}
            component="div" redirect={null} title='Dodaj nowego kontrahenta' >
                <SimpleForm >
                    <BuyerCard />
                </SimpleForm>
            </Create>  */}
            {/* <form onSubmit={handleSubmit}>
                    <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle={"Nowy Nabywca"}>
                {/* <DialogContent> */}
                    {/* <BuyerCard /> */}
                    {/* <BuyerDataFromLayout />  */}
                    {/* <TextField
                        label="New category name"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        autoFocus
                    /> */}
                {/* </DialogContent> 
                </PersonalDataCard>
            </form> */}  
            <DialogActions>
                <Button type="submit">Save</Button>
                <Button onClick={onCancel}>Cancel</Button>
                <CreateButton
                // label="dbclientlist.action.save_and_notify"
                transform={data => ({ ...data, notify: true })}
                type="button"
                resource='dbclientlist/create'
            />
            </DialogActions>
        </Dialog>
    );
};
