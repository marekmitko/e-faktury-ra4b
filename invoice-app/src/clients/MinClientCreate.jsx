import React from 'react';
import { Card,  Box, Stack, CardContent, CardHeader,  } from '@mui/material';
import {  useTranslate, TextInput , NumberInput,   SimpleForm, Create, } from 'react-admin';
import form from '../db/default-values/form';
import { IconBuyer } from '.';
import ContentForm from './components/ContentForm';


// "id": "2125",
// "buyer_id": "2125",
// ?? "user_id": "319",
// ?? "kunde_nr": "1",
                            // "company": "firma 1",
// "address": "Kolorowa",  | address.street
// "place": "34-567",      | place.zip_code   place.name


 // note Omówić różnice  "orgId.orgNumber" "orgId.MVA"
// "org_nr": "12345698",
// "mva": "1",

// Oki  "email": "",
// Oki "phone": "",
// BUG "fax": "",
//Issues? Omwić te brakujące wartości.
// ?? "main_kunde_nr": "0",
// ?? "lang": "",
// ?? "debt": "126188.10",
// ??"remainder": "0",
// ??"inkasso": "0",
// ?? // note "is_company": "1

const MyCard = ({children}) => (<Card sx={{bgcolor: 'blue'}}>{children}</Card>) ;


const Separator = () => <Box sx={{ pt: '1em'}} />;

export const MinClientCreate = (props) =>  { 
    const translate = useTranslate();
    // const record = useRecordContext();


    const clientSave = (data) => {
        console.log('data✅🆕', {...data} );
    };

    return (

    <>
    <Create redirect="list"  // {...props}
            sx={{ '&  .RaCreate-card': { borderRadius: '15px',  pt: 0, mt: 0,  maxWidth: 500 }  }}
            // sx={{ p: 0, m: 0,  maxWidth: 500 }}  component='div'
    >
        <SimpleForm className="ClientCardForm" 
            onSubmit={clientSave}
            // Here for the GQL provider
            defaultValues={form.client}
            // validate={validateForm}
            
            
            // sx={{ '&  .RaCreate-card': { borderRadius: '15px',  pt: 0, mt: 0 }  }}   component={Card} 
            sx={{ pt: 0, mt: 0,  }}
            > 
                {/* <MidV2CardHeader /> */}
            {/* <CardHeader /> */}


            {/* <FormCardHeader  title='create_menuItemLabel' icon={<IconBuyer />} iconSx={{ mt: .45 }} /> */}
            {/* <FormCardContent /> */}
            <ContentForm />
            </SimpleForm>
        </Create>
    </ >
);
}

