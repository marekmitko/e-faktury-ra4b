import React from 'react';
import { AutocompleteInput, Record, ReferenceInput, TextInput } from 'react-admin';
import { PersonalDataCard } from '../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import BuyerIcon from '@mui/icons-material/Person';
import { BuyerDataFromLayout } from './BuyerDataFormLayout';



{/* <AutocompleteInput source="company"
    optionText={choice => choice?.fullName}
    // choices={choices}
    fullWidth
/> */}

// *see onCreate new tradePartner Select Input 
// https://marmelab.com/react-admin/AutocompleteInput.html
//  ra-3.19
// https://marmelab.com/react-admin/doc/3.19/CreateEdit.html#customizing-the-form-layout
const matchSuggestion = (filter, choice) => {
    return (
        choice.first_name.toLowerCase().includes(filter.toLowerCase())
        || choice.last_name.toLowerCase().includes(filter.toLowerCase())
    );
};

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


// tip https://marmelab.com/react-admin/ListTutorial.html#uselistcontroller-handles-controller-logic
// note Zauważ, że useListControllernie jest potrzebna nazwa zasobu 'books'
//  — odgadnięcie jej opiera się na wartości ResourceContextustawionej przez <Resource> komponent.

// tip // note https://marmelab.com/react-admin/List.html#disablesyncwithlocation
// note https://marmelab.com/react-admin/List.html#debounce
// UWAGA WAŻNE !!! // log https://marmelab.com/react-admin/ListTutorial.html#uselistcontext-accesses-the-list-context
{/*
Używanie <ListBase>komponentu ma jedną wadę: nie masz już dostępu do kontekstu listy ( data, totalitd.) w komponencie. 
Zamiast tego musisz uzyskać do niego dostęp ListContextz poziomu useListContexthaka .
Poniższy przykład ilustruje użycie useListContextz niestandardowym komponentem stronicowania:
//https://marmelab.com/react-admin/ListTutorial.html#uselistcontext-accesses-the-list-context

// note Budowanie niestandardowego iteratora // https://marmelab.com/react-admin/ListTutorial.html#building-a-custom-iterator
*/}

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


