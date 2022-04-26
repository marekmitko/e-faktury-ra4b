import React from 'react';
import { AutocompleteInput, Record, useGetList, ReferenceInput, TextInput, useGetMany } from 'react-admin';







export const SelectSourceInput = ({sourceChoices }) => {
    

    // const { data: dbclientlist, isLoading } = useGetList(
    //     'dbclientlist',
    //     { pagination: { page: 1, perPage: 2000 }, sort: { field: 'name', order: 'ASC' } },
    // );

    // const { data: clients, isLoading: isLoadingCategories } = useGetMany(
    //     'clients',
    //     { nameClients: dbclientlist.map(client => ({ clients: client.company })) },
    //     // run only if the first query returns non-empty result
    //     { enabled: !isLoading && dbclientlist.length > 0 }
    // );
        



    //     console.log("compassadany", {...clients});

    // const companyObj = data => {  
    //     const companyNameObj = [];
    //     // console.log("data", {...data});

    //     // const dsa = [...data];
    //     data.map(record => {
    //         if(!record.company) return companyNameObj;
    //         if(record.company)  return companyNameObj.push({id: record.id, name: record.company});
    //         }
    //     );
    // };



    // console.log(companyObj(data), "name");

    return(
    <ReferenceInput 
        label="Company Name" 
        source="buyerCompany" reference="dbclientlist"
        // sort={{ field: 'company', order: 'ASC' }}
    >
        <AutocompleteInput 
            choices={sourceChoices}
            // optionText={sourceChoices} 
            filterToQuery  
            label="Company Name"
        />
    </ReferenceInput>
    );
};