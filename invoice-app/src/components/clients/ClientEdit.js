import React from 'react'
import { Title, useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import { BuyerCard } from '../invoices/new-invoice/personal-cards/buyer/BuyerCard';
import Typography from '@mui/material/Typography';
// const ClientEdit = (props) => { 
//     return(
//         <Edit title='Dodaj nowego kontrahenta' {...props}>
//             <BuyerCard3 />
//         </Edit>
//     );
// };

const ClientEdit = (props) => {
    return (
        <Edit component="div" title='Edytowanie danych Kontrahenta' { ...props}>
            <SimpleForm>
                {/* <TextInput disabled source='id' /> */}
                <BuyerCard headerTitle={<TextField  source='company' />} / >
            </SimpleForm>
        </Edit>
    );
};
export default ClientEdit;
