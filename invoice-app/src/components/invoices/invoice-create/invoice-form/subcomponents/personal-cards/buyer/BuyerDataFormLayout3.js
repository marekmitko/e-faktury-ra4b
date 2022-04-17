import { Card,  Box } from '@mui/material';
import React from 'react';
import { SimpleForm,    TextInput,   BooleanInput, NumberInput, useRecordContext, RecordContextProvider } from 'react-admin';
import { SmallTextInput } from '../../../../../../../custom/SmallTextInput';

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



export const BuyerDataFromLayout3 = ( ) =>  (
            // <BuyerRecordContext>
                <SimpleForm toolbar="">
                    <SmallTextInput  label="Company Name" source="title"  />
                    <div>
                        <SmallTextInput  label="First Name" source="fullname.forename" />
                        <SmallTextInput    label="Last Name" source="fullname.surname"   />
                    </div>
                    <div>
                        <SmallTextInput   label="Street Name" source="address.street"  />
                        <SmallTextInput   label="Number" source="address.streetNumber"  />
                    </div>
                    <div>
                        <SmallTextInput   label="ZIP Code" source="addres.ZIPCode"  />
                        <SmallTextInput  label="City Name" flex={2} source="addres.city"   />
                    </div>
                    <div> 
                        <SmallTextInput  label="MVA Code" mt="-0.75em"  mb="-1em"    source="buyerMVA"     mr="0.5em"  />
                    <Box display="inline-block" >
                        {/* <BooleanInput  label="MVA"   /> */}
                    </Box>    
                    </div> 
                </SimpleForm>
            // </BuyerRecordContext>
    );



