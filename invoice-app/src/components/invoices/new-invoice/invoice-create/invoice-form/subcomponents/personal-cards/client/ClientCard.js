import * as React from "react";
import { PersonalDataCard } from "../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard";
import BuyerIcon from '@mui/icons-material/Person';
import ClientReferenceAutocompleteInput from "./ClientReferenceAutocompleteInput";
import ClientDataAutomaticDisplay from "./ClientDataAutomaticDisplay";




export default function ClientCard(){
    const [valueBuyerId, setValueBuyerId] = React.useState("");
    return(
        <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle="Kupujący">
            <ClientReferenceAutocompleteInput 
                source="buyer_id" reference="buyers" 
                handleBuyerIdChange={setValueBuyerId}
            />
            <ClientDataAutomaticDisplay resourceBuyer="buyers" buyerId={valueBuyerId} />
        </PersonalDataCard>
    );
};