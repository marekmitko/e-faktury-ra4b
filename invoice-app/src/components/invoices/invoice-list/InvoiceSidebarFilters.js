import {
    SavedQueriesList,
    FilterList,
    FilterListItem,
    List,
    Datagrid,
} from 'react-admin';
import { Card, CardContent } from '@mui/material';
import BusinessIcon from '@mui/icons-material/BusinessIcon'
import DateRangeeIcon from '@mui/icons-material/BusinessIcon'

export const InvoiceSidebarFilters = () => (
    <Card>
        <CardContent>
            <SavedQueriesList />
            <FilterList label="Record Company" icon={<BusinessIcon />}>
                ...
            </FilterList>
            <FilterList label="Released" icon={<DateRangeeIcon />}>
                ...
            </FilterList>
        </CardContent>
    </Card>
);

// const SongList = props => (
//     <List {...props} aside={<SongFilterSidebar />}>
//         <Datagrid>...</Datagrid>
//     </List>
// );