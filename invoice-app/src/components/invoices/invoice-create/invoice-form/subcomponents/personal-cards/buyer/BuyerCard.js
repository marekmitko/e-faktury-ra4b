import React from 'react';
import { AutocompleteInput, Record, ReferenceInput, TextInput } from 'react-admin';
import { PersonalDataCard } from '../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import BuyerIcon from '@mui/icons-material/Person';
import { BuyerDataFromLayout } from './BuyerDataFormLayout';



{/* <AutocompleteInput source="company"
    optionText={choice => choice?.fullName}
    // choices={choices}
    fullWidth
/> */}

// *see onCreate new tradePartner Select Input 
// https://marmelab.com/react-admin/AutocompleteInput.html
const matchSuggestion = (filter, choice) => {
    return (
        choice.first_name.toLowerCase().includes(filter.toLowerCase())
        || choice.last_name.toLowerCase().includes(filter.toLowerCase())
    );
};

const TradePartnerSelectInput = ({company}) => (
    <ReferenceInput 
        // label="Company Name" 
        source="buyerCompany" reference="dbclientlist"
        sort={{ field: 'company', order: 'ASC' }}
    >
        <AutocompleteInput 
            optionText={company} 
            filterToQuery  
        />
    </ReferenceInput>
);



// *see BuyerCard
export const BuyerCard = ({selectSourceName, headerTitle, children, ...props}) => {

    const BuyerLayout = ({ children }) => (
        <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle={headerTitle? headerTitle : "Nabywca"}>
            {children}
            <BuyerDataFromLayout  />
        </PersonalDataCard>
    );

    if(selectSourceName) return(
        <BuyerLayout>
            <TradePartnerSelectInput company={selectSourceName} />
        </BuyerLayout>
    );

    return(
        <BuyerLayout> 
            <TextInput label="Company Name" source="buyerCompany" fullWidth />
        </BuyerLayout>
    );
};


