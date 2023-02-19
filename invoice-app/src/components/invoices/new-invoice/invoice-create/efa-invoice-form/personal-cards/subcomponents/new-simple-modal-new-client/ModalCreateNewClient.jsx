import * as React from "react";
import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@mui/material';


import BuyerIcon from '@mui/icons-material/Person';
import BuyerAddIcon from '@mui/icons-material/PersonAddAlt1'; 

import { SaveButton, TextInput, useRecordContext, AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, choices } from "react-admin";
import { PersonalDataCard } from "../PersonalDataCard";
import { BuyerDataFromLayout } from "../BuyerDataFormLayout";


const db_buyer =  {
    id: "",
    company: "Test",
    fullname: "",
    email: "",
    address: {
        street: "",
        city: "",
        codeCity: ""
        },
    MVA: "",
    telephoneNumber: ""
};






export const ModalCreateNewClient = ({handleBuyerIdChange, onClose, selectedValue, open }) => {
    // const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    // const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();

    // const { onClose, selectedValue, open } = props;

    const handleClose = () => {
            onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
            onClose(value);
    };


    const postSave = (data) => {
        // event.preventDefault();
        // data.company = value;
        create('dbclientlist', {  data    },
        {
            onSuccess: (data) => {
                // setValue('');
                // onCreate(data);
                // redirect(false);
                onClose()
            },
        }
        );
    };




    return (
        <Dialog 
        open={open} 
        onClose={handleClose}
        >
            <PersonalDataCard  sx={12} sm={12} variant="outlined" headerIcon={<BuyerAddIcon />} headerTitle={"Nowy Nabywca"}>
                <SimpleForm 
                    defaultValues={db_buyer}
                    sx={{ display: "flex", alignContent: "stretch"}}
                    onSubmit={postSave}
                    toolbar={
                        <DialogActions>
                        <SaveButton 
                            form="client_create_form" 
                            // type="button"
                            variant="text"
                            />
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                } 
                id="client_create_form" 
                >
                    {/* <BuyerCard /> */}
                    
                    <BuyerDataFromLayout>
                        <TextInput default label="Company Name" source="company" fullWidth />
                    </BuyerDataFromLayout >
            
                </SimpleForm>
                    </PersonalDataCard>
            
        </Dialog>
    );
};