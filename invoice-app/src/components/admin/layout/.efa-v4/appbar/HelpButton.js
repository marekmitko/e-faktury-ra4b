import { useStore } from 'react-admin';
import { Button, Popover } from '@mui/material';


// *see <HelpButton /> in AppBar - 'show help' 
export const HelpButton = () => {
    const [helpOpen, setHelpOpen] = useStore('help.open', false);
    return (
        <>
            <Button sx={{color: 'primary.900'}}onClick={() => setHelpOpen(v => !v)}>
                {helpOpen ? 'Hide' : 'Show'} help
            </Button>
            <Popover  sx={{ mt: 10, mx: "auto", mb: 'auto',  width: 300   }} open={helpOpen} onClose={() => setHelpOpen(false)}>
                French
            </Popover>
        </>
    );
};