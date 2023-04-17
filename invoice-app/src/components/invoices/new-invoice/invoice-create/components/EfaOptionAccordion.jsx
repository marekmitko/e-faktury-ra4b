import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, Input, Stack } from '@mui/joy';
// expandIcon={<ExpandMoreIcon />}
export default function SimpleAccordion({children}) {
    return (
        <div>
            <Accordion >
                <AccordionSummary
                    sx={{ my: -0.5}}
                    // expandIcon={<ExpandMoreIcon />}
                    expandIcon={<Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />}

                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography sx={{ py: 0, width: '25%', flexShrink: 0 }}>Faktura EHF</Typography>
                {/* <Typography sx={{ py: 0, my: 0 }}>Wystaw fakturę EHF User</Typography> */}
                    <Typography sx={{ color: 'text.secondary', mr: 2, ml: 'auto' }}  >
                        <Stack direction="row" 
                            spacing={1} 
                        >
                                <span>{`${'numer:'}`}</span><Input size='xs'   /></Stack>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails  sx={{ pt: 0}}
                >
                {children? children : ""}
                <Typography> 
                    ...
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}