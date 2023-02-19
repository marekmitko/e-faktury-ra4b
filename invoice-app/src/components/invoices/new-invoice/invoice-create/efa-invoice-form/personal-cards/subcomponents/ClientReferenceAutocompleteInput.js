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

import { SaveButton, TextInput, useRecordContext, AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, choices } from "react-admin";
import { BuyerDataFromLayout } from "./BuyerDataFormLayout";
// import { BuyerCard } from "../buyer/BuyerCard";
import { PersonalDataCard } from "./PersonalDataCard";
// import { BuyerDataFromLayout3 } from "../buyer/BuyerDataFormLayout3";
// import { ClientCreateButton } from "./create-client-subform/ClientCreateButton";


const db_buyer =  {
    id: "",
    // company: "Test",
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



const OptionRenderer = () => {
    const record = useRecordContext();
    // {/* <img src={record.avatar} /> */}
    return record ? (
        <span>
            {record.company} <br />
            <small> {"MVA: "}<strong>{record.MVA}</strong></small> 
            <small>{" | "} {"ADDRES: "} {record.address.street}{", "}{record.address.city}</small>
        </span>
    ) : null;
};



export default function ClientReferenceAutocompleteInput(props) {
    const {handleBuyerIdChange, valueBuyerId, setValueForm, source, reference} = props;
 
    // const record = useRecordContext();
    // const inputText = choices => `${choices.company} ${choices.id}`;
    const inputText = choices => `${choices.company}`;
    const matchSuggestion = (filter, choices) => {
        // console.log("choices", choices);
        return choices ? ( 
            choices.company.toLowerCase().includes(filter.toLowerCase()) 
            || choices.id.toLowerCase().includes(filter.toLowerCase()) 
        ) : null;
    };
console.log("valueBuyerId", valueBuyerId);
    return (
        <>
        <ReferenceInput 
            source={source}
            reference={reference}
            // enableGetChoices={({ q }) =>  q.length >= 3}
            {...props} 
        >
            <AutocompleteInput 
                fullWidth 
                onChange={(event) => {
                    setValueForm('buyer_id', `${event}`);
                    handleBuyerIdChange(event);
                    }
                }  
                optionText={<OptionRenderer   />}
                optionValue='id' 
                shouldRenderSuggestions={(val) => { return val.trim().length > 1 }}
                // enableGetChoices={({ q }) => q.length >= 3}
                sort={{ field: 'company', order: 'ASC' }}
                helperText={false}
                inputText={inputText}
                OptionRenderer
                create={<CreateNewClient  />}
                // createLabel="New"
                // createItemLabel="Add a New Client"
                matchSuggestion={matchSuggestion}
                label="myroot.form.label.input.buyerAutocomplete"
            />
        </ReferenceInput>
        {/* <ClientCreateButton onClick={}/> */}
        </>
    );
}

// https://marmelab.com/react-admin/AutocompleteInput.html#create
export const CreateNewClient = ({handleBuyerIdChange, onClose, selectedValue, open }) => {
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
