import React from 'react';
import {
    AutocompleteInput,
    Create,
    ReferenceInput,
    SimpleForm,
    TextInput,
    useRedirect,
    useCreate,
    Form,
    useCreateSuggestionContext
} from 'react-admin';

import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@mui/material';



//##############

const new_buyer_data = {
    company: "", 
    invoice_ids: "",
    user_id:        "",
    kunde_nr:       "",
    address:        "",
    place:          "",
    org_nr:         "",
    mva:            "",
    email:          "",
    phone:          "",
    fax:            "",
    main_kunde_nr:  "",
    lang:           "",
    debt:           "",
    remainder:      "",
    inkasso:        "",
    is_company:     "",
}





//############################

// <...> <CreateNewBuyer  input /> 
// *edu https://marmelab.com/react-admin/useCreate.html
// const CreateNewBuyer = () => {
//     const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//     const [value, setValue] = React.useState(filter || '');
//     const [create] = 

// *edu https://marmelab.com/react-admin/useCreate.html
// https://marmelab.com/react-admin/useCreate.html

// https://codesandbox.io/s/kmuoo2?file=/demo.js



// tip //TODO https://marmelab.com/react-admin/Upgrade.html#the-save-function-signature-changed
// tip //TODO https://marmelab.com/react-admin/SaveButton.html#type



// <...> <CreateNewBuyer  input /> 
// *edu https://marmelab.com/react-admin/useCreate.html

const CreateNewBuyer = ({dialogOpen, isOpen}) => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();
    const redirect = useRedirect();

    const buyerSave = (data) => {
        data.company = value;
        create(
            'buyers', { data },
            {
                onSuccess: (data) => {
                    console.log("data create", {...data});
                    redirect(false);
                    setValue('');
                    // BUG trochę nie wiem po co tu to onCreate - nie jestem tego pewien 
                    onCreate(data);
                    dialogOpen(true);
                    // *edu tutaj chyba teraz pobrać i przekazać cały record tzn. nie tu a w on click sugestion 
                },
            }
        );
    };

    return (
        <Dialog open={isOpen} onClose={onCancel}>
            <Form onSubmit={()=> { 
                dialogOpen(false);
                buyerSave(new_buyer_data);
                    } 
                }
            >
                <DialogContent>
                    <TextField
                        label="New Buyer name"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </DialogActions>
            </Form>
        </Dialog>
    );
};

export default CreateNewBuyer; 