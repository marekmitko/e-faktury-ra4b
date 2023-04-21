import * as React from "react";
import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    InputAdornment,
} from '@mui/material';
import BuyerIcon from '@mui/icons-material/Person';
// import BuyerAddIcon from '@mui/icons-material/PersonAddAlt1'; 

import { SaveButton, TextInput, ReferenceArrayInput, WithRecord, useRecordContext, AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, choices, Datagrid } from "react-admin";
import { BuyerDataFromLayout } from "../buyer-preview/BuyerDataFormLayout";
import { useFormContext } from "react-hook-form";

// import { BuyerCard } from "../buyer/BuyerCard";
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



export default function OldCustomAutocompleteInput(props) {

    const [choiceName, setChoiceName] = React.useState("");
    // const [inputValue, setInputValue] = React.useState("");

    const { //handleBuyerIdChange, valueBuyerId,
       size,  variant,  } = props;

    const { setValue } = useFormContext();
    // const inputText = choices => `${choices.company} ${choices.id}`;
    const inputText = choices => {
        let  buyerName = `${choices.company}`;
        setChoiceName(buyerName);
        return(`${choices.company}`);
    };
    const matchSuggestion = (filter, choices) => {
        // console.log("choices", choices);
        return choices ? ( 
            choices.company.toLowerCase().includes(filter.toLowerCase()) 
            || choices.id.toLowerCase().includes(filter.toLowerCase()) 
            ) : null;
        };

// console.log('inputValue', inputValue);

    return (
        // <ReferenceInput  
        //     source={source}
        //     reference={reference}
        //     // enableGetChoices={({ q }) =>  q.length >= 3}
        //     // {...props} 
        // >
            <AutocompleteInput 
            // placeholder="ffds"
            // size="small"
            fullWidth 
            onChange={(event) => {
                    setValue('buyer_id', `${event}`);
                    setValue('buyer_ref', `${choiceName}`);
                    // setInputValue(() => event.target.value);
                    // handleBuyerIdChange(event);
                }
                }  
                optionText={<OptionRenderer   />}
                optionValue='id' 
                shouldRenderSuggestions={(val) => { return val.trim().length > 1 }}
                // enableGetChoices={({ q }) => q.length >= 3}
                sort={{ field: 'company', order: 'ASC' }}
                // helperText={ <BuyerIcon />   }
                inputText={inputText}
                OptionRenderer
                create={<CreateNewClient   buyerName={ "inputValue"} 
                />}
                // createLabel="New"
                // createItemLabel="Add a New Client"
                matchSuggestion={matchSuggestion}
                // label="myroot.form.label.input.buyerAutocomplete"
                label={false}
                
                // endAdornment={    <BuyerIcon /> }
                
                // & .RaSelectInput-textField83 × 7

                variant={variant ? variant : "standard" }
                // endDecoration={<p>dsa</p>}
                sx={{ mb: -1.8, mt: .5,  // backgroundColor: 'blue', 
                // "& fieldset": {  //p: 0,
                //     backgroundColor: 'blue', border: '2px solid black',
                    //     }, 
                    // pr: .5,
                    pb: 0,

                    "& .MuiAutocomplete-inputRoot":  {  
                            backgroundColor: 'neutral.100', 
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            mt: 0,   
                            mb: 0,
                            pl: 1
                        },


                    "& input": { p: 0  , m: 0,  
                            // 'focusedHighlight': "none", 
                         
                        },
                    '& .MuiInput-input': { // backgroundColor: 'blue', 
                    color: 'text.primary.500',   fontSize: '1.5rem' },

                    "& .RaAutocompleteInput-textField": {
                            // fontSize: '2.2rem',  backgroundColor: 'blue', 
                            // borderRadius: '25%',
                    
                    },

                    "& .MuiAutocomplete-endAdornment": { mt: 0, px: 1 },
                    // "& svg": {  color: 'neutral.600', mt: -1 }
                }}
                {...props}
                />
        // </ReferenceInput >
    );
}

// https://marmelab.com/react-admin/AutocompleteInput.html#create
export const CreateNewClient = ({ buyerName, handleBuyerIdChange, onClose, selectedValue, open }) => {
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

            {/* <PersonalDataCard  sx={12} sm={12} variant="outlined" headerIcon={<BuyerAddIcon />} headerTitle={"Nowy Nabywca"}> */}
                <SimpleForm 
                    defaultValues={{ company: buyerName }}
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
                    
                    <BuyerDataFromLayout > 
                        <TextInput default  source="company" fullWidth />
                    </BuyerDataFromLayout >
            
                </SimpleForm>
                    {/*  </PersonalDataCard> */}
            
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
