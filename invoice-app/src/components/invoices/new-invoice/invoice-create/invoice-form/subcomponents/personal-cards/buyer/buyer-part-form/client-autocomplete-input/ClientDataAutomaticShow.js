import * as React from "react";
import {useChoicesContext} from "react-admin";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ClientReferenceAutocompleteInput from "./ClientReferenceAutocompleteInput";
import { ControlDataInputBuyerShow } from "../ControlDataInputBuyerShow";
export default function ClientDataAutomaticShow() {
    const { allChoices, availableChoices, selectedChoices } = useChoicesContext();
    const options = ["Option 1", "Option 2"];
    const [valueSelectedClientId, setValueSelectedClientId] = React.useState("");
    const [valueSelectedClientName, setValueSelectedClientName] = React.useState("");

    const [valueBuyerId, setValueBuyerId] = React.useState("");

    const onChangeBuyerIdChange = (newValueBuyerIdChange) => {
        setValueBuyerId(newValueBuyerIdChange);
    };
    const onChangeClientId = (newSelectedClientId) => {
        setValueSelectedClientId(newSelectedClientId);
    };
    const onInputChangeClientName = (newSelectedClientName) => {
        setValueSelectedClientName(newSelectedClientName);
    };
    console.log("allChoices", allChoices);
    console.log("availableChoices", availableChoices);
    return (
        <div>
        
        <ClientReferenceAutocompleteInput 
            choiceOptions={options}
            handleChange={onChangeClientId}
            valueClientId={valueSelectedClientId}
            handleInputChange={onInputChangeClientName}
            valueClientDisplayName={valueSelectedClientName}
            handleBuyerIdChange={onChangeBuyerIdChange}
        />
        <ControlDataInputBuyerShow 
        resourceBuyer="buyers" 
        buyerId={valueBuyerId} 
        />
        </div>
  );
}

