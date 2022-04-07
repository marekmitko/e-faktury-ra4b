import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'
import { BuyerCard3 } from '../invoices/new-invoice-form/personal-cards/buyer/BuyerCard3';

// const ClientEdit = (props) => { 
//     return(
//         <Edit title='Dodaj nowego kontrahenta' {...props}>
//             <BuyerCard3 />
//         </Edit>
//     );
// };

const ClientEdit = (props) => {
    return (
        <Edit title='Edytowanie danych Kontrahenta' {...props}>
            <SimpleForm>
                {/* <TextInput disabled source='id' /> */}
                <TextInput label="NAZWA FIRMY" source="company" />
                <TextInput label="IMIĘ I NAZWISKO"source="fullname" />
                <TextInput label="ADRES EMAIL" type="email" source="email" />
                <TextInput label="ADRES"source="address.street" />
                <NumberInput label="MVA" source="MVA" />
                <NumberInput label="NUMER TELEFONU"source="telephoneNumber" />
            </SimpleForm>
        </Edit>
    );
};
export default ClientEdit;
