import React from 'react';
import { AutocompleteInput, Record  } from 'react-admin';
import { PersonalDataCard } from '../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import BuyerIcon from '@mui/icons-material/Person';
import { BuyerDataFromLayout } from './BuyerDataFormLayout';






// *see BuyerCard
export const BuyerCard = ({headerTitle, ...props}) => {

    return(
    <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle={headerTitle? headerTitle : "Nabywca"}>
        {/* <AutocompleteInput source="company"
            optionText={choice => choice?.fullName}
            // choices={choices}
            fullWidth
        /> */}
        <BuyerDataFromLayout  />
    </PersonalDataCard>
    );
};


