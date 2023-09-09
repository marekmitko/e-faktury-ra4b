import React from 'react';
import { Card,  Box,  } from '@mui/material';
import {  useTranslate, TextInput , NumberInput,   SimpleForm, Create, } from 'react-admin';
import form from '../db/default-values/form';
import { IconBuyer } from '.';
import ContentForm from './components/ContentForm';
import HeaderSimpleForm from './components/subcomponent/HeaderSimpleForm';
import { validateClientCreateForm } from './validateClientCreateForm';
 


const Separator = () => <Box sx={{ pt: '1em'}} />;

export const ClientCreate = (props) =>  { 
    const translate = useTranslate();
    // const clientSave = (data) => {
    //     console.log('data✅🆕', {...data} );
    // };

    return (
    <Create redirect="list" 
        sx={{   '&  .RaCreate-card': { borderRadius: '15px',  pt: 0, mt: 0,  maxWidth: 500 },
                '& .RaToolbar-defaultToolbar': {
                    
                    '& button': { 
                        borderRadius: '50px',
                    },
                    '& button:enabled': { 
                        bgcolor: 'primary.900',
                    }
                } 
        }}  
    >
        <SimpleForm className="ClientCardForm"   sx={{ pt: 0, mt: 0, }} // onSubmit={clientSave}
            defaultValues={form.client}  // validate={validateForm}
            validate={validateClientCreateForm}
        > 
            <HeaderSimpleForm title='create'  />
            <ContentForm />
        </SimpleForm>
    </Create>
);
}

