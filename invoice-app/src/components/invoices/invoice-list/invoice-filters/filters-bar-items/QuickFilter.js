import { SearchInput, useTranslate } from 'react-admin';
import { Chip } from '@mui/material';


// <...> <QuickFilter />
// doc https://marmelab.com/react-admin/FilteringTutorial.html#quick-filters
// filtr opłacony / nie opłacony / MVA / po terminie płatności itp 
export const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

// <...> <SearchInput /> 
// https://marmelab.com/react-admin/FilteringTutorial.html#searchinput
// note sprawdź dokładniej{/* <SearchInput source="q" alwaysOn />, */}