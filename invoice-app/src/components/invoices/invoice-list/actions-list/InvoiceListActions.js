import { 
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
} from 'react-admin';
import IconEvent from '@mui/icons-material/Event';

export const InvoiceListActions = () => (
    <TopToolbar>
        {/* <FilterButton/> */}
        <CreateButton/>
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button>
    </TopToolbar>
);