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
import { CreateNewBuyer } from "./CreateNewBuyer";
// import { BuyerDataFromLayout } from "./BuyerDataFormLayout";
// import { BuyerCard } from "../buyer/BuyerCard";
// import { PersonalDataCard } from "./presonal-card-container/PersonalDataCard";
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



export default function CustomAutocompleteInput(props) {
    const {handleBuyerIdChange, valueBuyerId, variant, setValueForm, source, reference} = props;
 
    // const inputText = choices => `${choices.company} ${choices.id}`;
    const inputText = choices => `${choices.company}`;
    const matchSuggestion = (filter, choices) => {
        // console.log("choices3️!!!!!", choices);
        return choices ? ( 
            choices.company.toLowerCase().includes(filter.toLowerCase()) 
            || choices.id.toLowerCase().includes(filter.toLowerCase()) 
            ) : null;
        };
// console.log("record", record);
    return ( 
        <AutocompleteInput 
            variant={variant ? variant : "filled" }
            // size="small"
            fullWidth 
            onChange={(event) => {
                setValueForm('buyer_id', `${event}`);
                handleBuyerIdChange(event);
            }
            }  
            optionText={<OptionRenderer   />}
            // optionValue='id' 
            optionValue='company' 
            shouldRenderSuggestions={(val) => { return val.trim().length > 1 }}
            // enableGetChoices={({ q }) => q.length >= 3}
            sort={{ field: 'company', order: 'ASC' }}
            helperText={false}
            inputText={inputText}
            OptionRenderer
            // create={<CreateNewBuyer  />}
            create={'cread'}
            // createLabel="New"
            // createItemLabel="Add a New Client"
            matchSuggestion={matchSuggestion}
            label="myroot.form.label.input.buyerAutocomplete"
            // label={false}
        />
        );
}

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
