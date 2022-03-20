import React from 'react';
import { SimpleForm, TextInput, RichTextInput, NumberInput, Grid } from 'react-admin';
import { PersonalDataCard } from '../../../../custom/PersonalDataCard';
// import { SellerDataShowLayout } from './SellerDataShowLayout'


import SellerIcon from '@mui/icons-material/ManageAccounts';


// *see SellerCard
export const BuyerCard = (props) => (
    <PersonalDataCard  variant="outlined" headerIcon={<SellerIcon />} headerTitle="Nabywca">
        <SimpleForm component='div'>
            <TextInput source="title" />
            <TextInput label="Company Name" source="company" />
            <TextInput label="Full Name" source="fullName" />
            <TextInput label="Street" source="address.street" />
            <TextInput label="MVA Code" source="orgId.orgNumber" />
            <NumberInput source="nb_views" />
        </SimpleForm>
    </PersonalDataCard>
);