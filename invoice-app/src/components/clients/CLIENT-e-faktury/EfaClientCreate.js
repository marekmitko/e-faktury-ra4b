import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, Edit } from 'react-admin';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { BuyerCard } from '../../invoices/new-invoice/invoice-create/efa-invoice-form/personal-cards/subcomponents/BuyerCard';
export const IconToCreateIcon = PersonAddIcon;


const EfaClientCreate = (props) => { 
    return(
        <Create component="div" redirect="list"  {...props}>
            <SimpleForm>
                <BuyerCard />
            </SimpleForm>
        </Create>
    );
};

export default EfaClientCreate;