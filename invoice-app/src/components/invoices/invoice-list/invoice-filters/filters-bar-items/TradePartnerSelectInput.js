import React from 'react';
import { AutocompleteInput, Record, ReferenceInput, TextInput } from 'react-admin';




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