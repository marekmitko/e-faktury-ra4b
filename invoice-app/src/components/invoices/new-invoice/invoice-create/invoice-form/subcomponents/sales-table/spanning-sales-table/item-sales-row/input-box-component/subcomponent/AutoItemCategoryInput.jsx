import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import JoyAutocomplete from '@mui/joy/Autocomplete';

export default function AutoItemCategoryInput() {
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

return (
    <FormControl id="grouped-demo">
    {/* <FormLabel>With categories</FormLabel> */}
    <JoyAutocomplete
        variant='solid'
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 150 }}
    />
    </FormControl>
);
}

const top100Films = [
{ title: 'The Shawshank Redemption', year: 1994 },
{ title: 'The Godfather', year: 1972 },
{ title: 'The Godfather: Part II', year: 1974 },
{ title: 'The Dark Knight', year: 2008 },
{ title: '12 Angry Men', year: 1957 },
{ title: "Schindler's List", year: 1993 },
{ title: 'Pulp Fiction', year: 1994 },

];
