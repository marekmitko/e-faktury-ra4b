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


// <...> <CreateNewBuyer  input /> 
// *edu https://marmelab.com/react-admin/useCreate.html
// const CreateNewBuyer = () => {
//     const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//     const [value, setValue] = React.useState(filter || '');
//     const [create] = 

// <...> <CreateNewBuyer  input /> 
// *edu https://marmelab.com/react-admin/useCreate.html
// https://marmelab.com/react-admin/useCreate.html

// https://codesandbox.io/s/kmuoo2?file=/demo.js

// const CreateNewBuyer = () => {
//     const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//     const [value, setValue] = React.useState(filter || '');
//     const [create] = useCreate('buyers', { data: company });


//     const handleClick = (event) => {
//         create()
//     }
//     if (error) { return <p>ERROR</p>; }
//         return  (<TextField
//                 label="New Buyer name"
//                 value={value}
//                 onChange={event => setValue(event.target.value)}
//                 autoFocus
//                 />);
//         // return null;
// };
// export default CreateNewBuyer; 

 
//     return (
//         <Dialog open onClose={onCancel}>
//             <form onSubmit={handleSubmit}>
//                 <DialogContent>
//                     <TextField
//                         label="New Buyer name"
//                         value={value}
//                         onChange={event => setValue(event.target.value)}
//                         autoFocus
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button type="submit">Save</Button>
//                     <Button onClick={onCancel}>Cancel</Button>
//                 </DialogActions>
//             </form>
//         </Dialog>
//     );
// };

// export default CreateNewBuyer; ;

//     const handleSubmit = event => {
//         event.preventDefault();
//         create(
//             'buyers',
//             {
//                 data: {
//                     company: value,
//                 },
//             },
//             {
//                 onSuccess: ({ data }) => {
//                     setValue('');
//                     onCreate(data);
//                 },
//             }
//         );
//     };

//     return (
//         <Dialog open onClose={onCancel}>
//             <form onSubmit={handleSubmit}>
//                 <DialogContent>
//                     <TextField
//                         label="New Buyer name"
//                         value={value}
//                         onChange={event => setValue(event.target.value)}
//                         autoFocus
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button type="submit">Save</Button>
//                     <Button onClick={onCancel}>Cancel</Button>
//                 </DialogActions>
//             </form>
//         </Dialog>
//     );
// };

// export default CreateNewBuyer; 



// tip //TODO https://marmelab.com/react-admin/Upgrade.html#the-save-function-signature-changed
// tip //TODO https://marmelab.com/react-admin/SaveButton.html#type


// <...> <CreateNewBuyer  input /> 
// *edu https://marmelab.com/react-admin/useCreate.html
const CreateNewBuyer = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();
    const redirect = useRedirect();

    const handleSubmit = event => {
        event.preventDefault();
        create(
            'buyers',
            {
                data: {
                    company: value,
                    // buyer_id:       "",
                    user_id:        "",
                    kunde_nr:       "Test",
                    address:        "TEs 3",
                    place:          "5347 Ågotnes",
                    org_nr:         "997727541",
                    mva:            "0",
                    email:          "frode@brias.no",
                    phone:          "47454595",
                    fax:            "",
                    main_kunde_nr:  "0",
                    lang:           "",
                    debt:           "0.00",
                    remainder:      "0",
                    inkasso:        "0",
                    is_company:     "1",
                    invoice_id:     ""
                },
            },
            // BUG trochę nie wiem po co tu to onCreate 
            {
                onSuccess: (data) => {
                    redirect(false);
                    setValue('');
                    // onCreate(data);
                },
            }
        );
    };

    return (
        <Dialog open onClose={onCancel}>
            {/* <form onSubmit={handleSubmit}> */}
            <Form onSubmit={postSave}>
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
            {/* </form> */}
        </Dialog>
    );
};

export default CreateNewBuyer; 