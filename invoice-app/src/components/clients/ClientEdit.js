import React from 'react'
import { Title, useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import Typography from '@mui/material/Typography';
import { BuyerCard } from '../invoices/new-invoice/invoice-create/invoice-form/subcomponents/personal-cards/buyer/BuyerCard';

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
