import React from 'react';
import {
    AutocompleteInput,
    Create,
    ReferenceInput,
    SimpleForm,
    TextInput,
    useCreate,
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

const CreateNewBuyer = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate('buyers', { data: company });


    const handleClick = (event) => {
        create()
    }
    if (error) { return <p>ERROR</p>; }
        return  (<TextField
                label="New Buyer name"
                value={value}
                onChange={event => setValue(event.target.value)}
                autoFocus
                />);
        // return null;
};
export default CreateNewBuyer; 

 
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





// <...> <CreateNewBuyer  input /> 
// *edu https://marmelab.com/react-admin/useCreate.html
// const CreateNewBuyer = () => {
//     const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//     const [value, setValue] = React.useState(filter || '');
//     const [create] = useCreate();

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