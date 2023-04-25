import React from 'react';
import { AutocompleteInput, Title, Record  } from 'react-admin';
import { PersonalDataCard } from '../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import { UserDataFromLayout } from './UserDataFromLayout';
import { CompanyLogoAvatar } from '../subcomponents/CompanyLogoAvatar';

// *see UserCard
export const UserCard = ({headerTitle, children, ...props}) => {

    return(
        <PersonalDataCard  variant="outlined" headerIcon={<CompanyLogoAvatar />} headerTitle={headerTitle? headerTitle : "Company Name"}>
            <UserDataFromLayout  /> 
        </PersonalDataCard>
    );
};


