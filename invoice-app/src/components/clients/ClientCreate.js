import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, Edit } from 'react-admin';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { BuyerCard } from '../invoices/invoice-create/subcomponents/personal-cards/buyer/BuyerCard';
export const IconToCreateIcon = PersonAddIcon;


const ClientCreate = (props) => { 
    return(
        <Create component="div" redirect="list" title='Dodaj nowego kontrahenta' {...props}>
            <SimpleForm>
                <BuyerCard />
            </SimpleForm>
        </Create>
    );
};

export default ClientCreate;