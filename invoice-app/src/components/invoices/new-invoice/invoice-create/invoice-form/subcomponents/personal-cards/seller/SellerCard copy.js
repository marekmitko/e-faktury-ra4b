import React from 'react';
import { SimpleShowLayout } from 'react-admin';
import { PersonalDataCard } from  '../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import { UserRecordWithGCC } from '../../../../../../../../contexts/UserRecordContext';
import { SellerDataShowLayout } from './SellerDataShowLayout';
import {   Box   } from '@mui/material';


import SellerIcon from '@mui/icons-material/ManageAccounts';


// *see SellerCard
export const SellerCard = (props) => (
    <UserRecordWithGCC>
        <PersonalDataCard headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
            <SellerDataShowLayout />
        </PersonalDataCard>
    </UserRecordWithGCC>
);
