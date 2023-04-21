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
// import BuyerIcon from '@mui/icons-material/Person';
import BuyerAddIcon from '@mui/icons-material/PersonAddAlt1'; 

import { SaveButton, TextInput, ReferenceArrayInput, WithRecord, useRecordContext, AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, choices, Datagrid } from "react-admin";
import { PersonalDataCard } from "../../../../../efa-invoice-form/personal-cards/subcomponents/presonal-card-container/PersonalDataCard";
import { BuyerDataFromLayout } from "../../../../../efa-invoice-form/personal-cards/subcomponents/BuyerDataFormLayout";







export const CreateNewBuyer = ({handleBuyerIdChange, onClose, selectedValue, open }) => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();

    const postSave = (data) => {
        // event.preventDefault();
        // data.company = value;
        create('buyersEfaktury', {  data    },
        {
            onSuccess: (data) => {
                setValue('');
                onCreate(data);
                // redirect(false);
            },
        }
        );
    };




    return (
        <Dialog open onClose={onCancel}>

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
                        <Button onClick={onCancel}>Cancel</Button>
                    </DialogActions>
                } 
                id="client_create_form" 
                >
                    {/* <BuyerCard /> */}
                    
                    <BuyerDataFromLayout>
                        <TextInput default  source="company" fullWidth />
                    </BuyerDataFromLayout >
            
                </SimpleForm>
                    </PersonalDataCard>
            
        </Dialog>
    );
};


// const PostCreateToolbar = () => {
//     const redirect = useRedirect();
//     const notify = useNotify();
//     return (
//         <Toolbar>
//             <SaveButton
//                 label="post.action.save_and_show"
//             />
//             <SaveButton
//                 label="post.action.save_and_add"
//                 mutationOptions={{
//                     onSuccess: data => {
//                         notify('ra.notification.created', {
//                             type: 'info',
//                             messageArgs: { smart_count: 1 },
//                         });
//                         redirect(false);
//                     }}
//                 }
//                 type="button"
//                 variant="text"
//             />
//         </Toolbar>
//     );
// };
