import React from 'react';
import { Card  } from '@mui/material';
import { SimpleForm, TextInput, RichTextInput, NumberInput, } from 'react-admin';
import { PersonalDataCard } from '../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import BuyerIcon from '@mui/icons-material/Person';
import { BuyerDataFromLayout3 } from './BuyerDataFormLayout3';
import InvoiceBuyerForm from './TestBuyerCard';
import BoxTextInput from './subcomponent/BoxTextInput';
import { SmallTextInput } from '../../../../../../../../custom/SmallTextInput';


// *see SellerCard
export const BuyerCard3 = (props) => (
    <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle="Nabywca">
        <BuyerDataFromLayout3 />
    </PersonalDataCard>
);


