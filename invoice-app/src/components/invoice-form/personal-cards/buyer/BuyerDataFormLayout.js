import { Card  } from '@mui/material';
import React from 'react';
import { SimpleForm, SimpleShowLayout, 
    TextInput, 
    RichTextInput, NumberInput, useRecordContext, RecordContextProvider } from 'react-admin';

// import { Form, Field } from 'react-final-form';
// import { useWarnWhenUnsavedChanges } from 'react-admin';

const BuyerRecordContext = ({children}) => {
    const record = useRecordContext();
    return(
        <RecordContextProvider value={record}>
                { children}
        </RecordContextProvider>

    );
};



export const BuyerDataFromLayout = ( ) =>  (
            <BuyerRecordContext>
         
                <TextInput source="title" variant="outlined" />
                <TextInput label="Company Name" source="company" variant="outlined" />
                <TextInput label="Full Name" source="fullName" variant="outlined" />
                <TextInput label="Street" source="address.street" variant="outlined" />
                <TextInput label="MVA Code" source="orgId.orgNumber" variant="outlined" />
                {/* <NumberInput source="nb_views" /> */}
  
            </BuyerRecordContext>
    );



