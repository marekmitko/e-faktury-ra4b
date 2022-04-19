import { Edit, SimpleForm, TextInput, FormGroupContextProvider, useFormGroup, minLength, Create } from 'react-admin';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Stack  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const collapseDisable = { 
    "& .MuiAccordionSummary-root":  {
        pointerEvents: 'none',
    },
};

const AccordionExpanded = ({children}) => ( 
    <Accordion defaultExpanded sx={collapseDisable} >
        {children}
    </Accordion>
);


export const TestGroupFormContext = () => ( 
    <Create>
   {/* <TextInput source="title" /> */}
        <SimpleForm>
            <Stack direction="row" spacing={2} width="100%" alignItems="center" justifyContent="space-around" >
                <center><strong>Walidacja przed wysłaniem </strong></center>
                <FormGroupContextProvider name="options">
                    <Accordion defaultExpanded sx={collapseDisable} >
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="options-content"
                            id="options-header"
                        >
                            <AccordionSectionTitle name="options">
                            <ExpandMoreIcon />
                                Options
                            </AccordionSectionTitle>
                        </AccordionSummary>
                        <AccordionDetails 
                            id="options-content"
                            aria-labelledby="options-header"
                        >
                            <TextInput source="teaser" 
                            validate={minLength(20)} 
                            />
                        </AccordionDetails>
                    </Accordion>
                </FormGroupContextProvider>
                <FormGroupContextProvider name="testoption2">
                    <Accordion defaultExpanded  sx={collapseDisable} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="testoption2-content"
                            id="options-header"
                        >
                            <AccordionSectionTitle name="testoption2">
                                Options
                            </AccordionSectionTitle>
                        </AccordionSummary>
                        <AccordionDetails
                            id="testoption2-content"
                            aria-labelledby="testoption2-header"
                        >
                            <TextInput source="teaser2" 
                            validate={minLength(5)} 
                            />
                        </AccordionDetails>
                    </Accordion>
                </FormGroupContextProvider>
                <FormGroupContextProvider name="expandtestoption2">
                    <AccordionExpanded >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="expandtestoption2-content"
                            id="options-header"
                        >
                            <AccordionSectionTitle name="expandtestoption2">
                                Options
                            </AccordionSectionTitle>
                        </AccordionSummary>
                        <AccordionDetails
                            id="testoption2-content"
                            aria-labelledby="expandtestoption2-header"
                            >
                            <TextInput source="teadsser2" 
                            validate={minLength(5)} 
                            />
                        </AccordionDetails>
                    </AccordionExpanded>
                </FormGroupContextProvider>
            </Stack>
        </SimpleForm>
    </Create>
);

const AccordionSectionTitle = ({ children, name }) => {
    const formGroupState = useFormGroup(name);

    return (
        <Typography color={
              !formGroupState.isValid && formGroupState.isDirty
                ? 'error'
                : 'inherit'
          }
        >
            {children}
        </Typography>
    );
};