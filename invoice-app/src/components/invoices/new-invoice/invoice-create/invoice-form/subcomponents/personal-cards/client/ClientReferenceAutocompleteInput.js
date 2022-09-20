import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AutocompleteInput, ReferenceInput} from "react-admin";


export default function ClientReferenceAutocompleteInput(props) {
    const {handleBuyerIdChange} = props;
    // const OptionRenderer = choice => (
    //     <span>
    //         <img src={choice.avatar} />
    //         {choice.first_name} {choice.last_name}
    //     </span>
    // );
    return (
        <>
        <ReferenceInput  {...props} >
            <AutocompleteInput 
                onChange={(event) =>  handleBuyerIdChange(event)}
                optionText="company" 
                optionValue='id' 
                enableGetChoices={({ q }) => q.length >= 3}
                sort={{ field: 'company', order: 'ASC' }}
                helperText={false}
                OptionRenderer
            />
        </ReferenceInput>
        </>
    );
}
