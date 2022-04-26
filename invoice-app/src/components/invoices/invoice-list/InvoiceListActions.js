import { TopToolbar, ExportButton, CreateButton  } from 'react-admin';
import { Box } from '@mui/material';
import { CustomFilterButton } from './invoice-filters/filters-bar-items/CustomFilterButton';
import { InvoiceFilterForm } from './invoice-filters/InvoiceFilterForm';


// tip Koniecznie obczaj https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/list/ListActions.tsx


export const InvoiceListActions = () => (
    <Box width="100%">
        <TopToolbar>
            <CustomFilterButton />
            <CreateButton />
            <ExportButton />
        </TopToolbar>
        <InvoiceFilterForm />
    </Box>
);
