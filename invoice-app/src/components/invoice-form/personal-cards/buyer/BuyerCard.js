import React from 'react';
import { Card  } from '@mui/material';
import { SimpleForm, TextInput, RichTextInput, NumberInput, } from 'react-admin';
import { PersonalDataCard } from '../../../../custom/PersonalDataCard';
import BuyerIcon from '@mui/icons-material/Person';
import { BuyerDataFromLayout } from './BuyerDataFormLayout';
import InvoiceBuyerForm from './TestBuyerCard';
import BoxTextInput from './subcomponent/BoxTextInput';
import { SmallTextInput } from '../../../../custom/SmallTextInput';


// *see SellerCard
export const BuyerCard = (props) => (
    <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle="Nabywca">
        {/* <SimpleForm toolbar=""> */}
        <BuyerDataFromLayout />

        {/* <InvoiceBuyerForm /> */}
        {/* </SimpleForm> */}
    </PersonalDataCard>
);


