import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { AutocompleteInput, useChoicesContext } from 'react-admin';


// <...> <BuyerInputSelector />
export const BuyerInputSelector = (props) => {
    const { setFilters, displayedFilters } = useChoicesContext();

    const handleCheckboxChange = (event, checked) => {
        setFilters({ published: checked }, displayedFilters);
    };

    return (
        <>
            <AutocompleteInput {...props} />
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Only added buyers"
                onChange={handleCheckboxChange}
            />
        </>
    );
};