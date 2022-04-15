import { 
    CreateButton,
    Datagrid,
    FilterButton,
    FilterForm,
    SelectInput,
    ReferenceInput,

    TextInput,
} from 'react-admin';
import { Stack } from '@mui/material';

// const postFilters = [
//     <TextInput label="Search" source="q" alwaysOn />,
//     <TextInput label="company" resource="issuedInvoices_list" source="company" defaultValue="Wpisz nazwę" />,
// ];

export const postFilters = [ 
    <ReferenceInput source="id" label="company" reference="issuedInvoices_list">
        <SelectInput optionText="company" alwaysOn />
    </ReferenceInput>
];

const ListToolbarTest = (props) => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} />
            <CreateButton />
        </div>
    </Stack>
)
export default ListToolbarTest;