import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AutocompleteInput } from "react-admin";

const options = ["Option 1", "Option 2"];
const optionsTwo = ["2opt - 1", "2opt - 2"];

export default function ClientReferenceAutocompleteInput({handleBuyerIdChange, choiceOptions, valueClientId, handleChange, valueClientDisplayName, handleInputChange  }) {
    const [valueRAinput, setvalueRAinput] = React.useState("");
    
    console.log(typeof(valueRAinput), valueRAinput, "valueRAinput");
    return (
        < >
        <div>{`valueClientId: ${valueClientId !== null ? `'${valueClientId}'` : "null"}`}</div>
        <div>{`valueClientDisplayName: '${valueClientDisplayName}'`}</div>
        <br />
        <Autocomplete
            value={valueClientId}
            onChange={(event, newSelectedClientId) => handleChange(newSelectedClientId)}
            inputValue={valueClientDisplayName}
            onInputChange={(event, newSelectedClientName) => handleInputChange(newSelectedClientName)}
            id="controllable-states-demo"
            options={choiceOptions}
            sx={{ width: 300, 
                bgcolor: 'rgba(24, 951, 900, 0.2)'
            }}
            renderInput={(params) => <TextField {...params} label="Client search" variant="standard"/>}
        />
        <AutocompleteInput 
            // onChange={(event, hmm) =>  console.log(typeof(event), event, "event", hmm)}
            onChange={(event) =>  handleBuyerIdChange(event)}
            optionText="company" 
            optionValue='id' 
            enableGetChoices={({ q }) => q.length >= 3}
            sort={{ field: 'company', order: 'ASC' }}
        />
        </ >
    );
}
