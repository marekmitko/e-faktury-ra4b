import React from 'react';
import { SimpleShowLayout } from 'react-admin';
import { PersonalDataCard } from  '../subcomponents/presonal-card-container/PersonalDataCard'
// import { UserRecordWithGCC } from '../../../../../../contexts/UserRecordContext';
import {   Box   } from '@mui/material';


import SellerIcon from '@mui/icons-material/ManageAccounts';
import { SellerDataShowLayout } from '../subcomponents/SellerDataShowLayout';


// *see SellerCard
export const SellerCard = (props) => (
    // <UserRecordWithGCC>
        <PersonalDataCard headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
            <SellerDataShowLayout />
        </PersonalDataCard>
    // </UserRecordWithGCC>
);
