import { 
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
} from 'react-admin';
import IconEvent from '@mui/icons-material/Event';
import { useMediaQuery } from '@mui/material';

const ListActionToolbar = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('md'));
    return(
    <TopToolbar sx={{ mb: isSmall ? -7 : 'auto' }}
    >
        <CreateButton/>
        {/* Add your custom actions */}
        { !isSmall && (
            <>
            <FilterButton/>
        <ExportButton/>
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
            >
            <IconEvent/>
        </Button>
            </>
        )}
    </TopToolbar>
)
};

export default ListActionToolbar;