import React from 'react';
import { SimpleForm, AutocompleteInput, Record, ReferenceInput, TextInput, RichTextInput, NumberInput, Grid } from 'react-admin';
import { PersonalDataCard } from './presonal-card-container/PersonalDataCard';
// import { SellerDataShowLayout } from './SellerDataShowLayout'
import BuyerIcon from '@mui/icons-material/Person';

import SellerIcon from '@mui/icons-material/ManageAccounts';
import { BuyerDataFromLayout } from './BuyerDataFormLayout';


const TradePartnerSelectInput = ({company}) => (
    <ReferenceInput 
        label="Company Name" 
        source="id" reference="dbclientlist"
        perPage='50000'
        // sort={{ field: 'company', order: 'ASC' }}
    >
        <AutocompleteInput 
            optionText={company} 
            filterToQuery  
            label="Company Name" 
            helperText={false}
        />
    </ReferenceInput>
);





// *see SellerCard
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
            <TextInput source="company" fullWidth />
        </BuyerLayout>
    );
};