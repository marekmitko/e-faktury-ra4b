import * as React from "react";
import { PersonalDataCard } from './subcomponents/presonal-card-container/PersonalDataCard'
import BuyerIcon from '@mui/icons-material/Person';
import ClientReferenceAutocompleteInput from "./subcomponents/ClientReferenceAutocompleteInput";
import ClientDataAutomaticDisplay from "./subcomponents/ClientDataAutomaticDisplay";
// import CustomerSubForm from "./CustomerSubForm";
import { ClientCreateButton } from "./subcomponents/create-client-subform/ClientCreateButton";
// import OldClientReferenceAutocompleteInput from "../buyer/buyer-part-form/client-autocomplete-input/ClientReferenceAutocompleteInput";
// import { ReferenceInput } from "react-admin";
import { Stack } from "@mui/material";
// import SimpleDialogDemo from "./new-simple-modal-new-client/SimpleDialogCreateClient";
import { useFormContext } from "react-hook-form";




export default function ClientCard(){
    const { setValue } = useFormContext();
    const [valueBuyerId, setValueBuyerId] = React.useState("");

    return(
        <PersonalDataCard  headerIcon={<BuyerIcon />} headerTitle="Kupujący">
            <Stack direction="row"  spacing={2} width="100%" >
                <ClientReferenceAutocompleteInput 
                    source="buyer_id" reference="buyersEfaktury" 
                    handleBuyerIdChange={setValueBuyerId}
                    valueBuyerId={valueBuyerId}
                    setValueForm={setValue}
                    // enableGetChoices={({ q }) =>  q.length ? (q.length >= 3) : null}
                    />
                <Stack alignItems="center" justifyContent="center" >
                    <ClientCreateButton   /> 
                </Stack>
            </Stack>
            <ClientDataAutomaticDisplay resourceBuyer="buyersEfaktury" buyerId={valueBuyerId} />
        </PersonalDataCard>
    );
};