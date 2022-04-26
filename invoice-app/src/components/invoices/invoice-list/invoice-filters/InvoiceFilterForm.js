import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, InputAdornment , Card, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TextInput, TextField, SelectInput, ReferenceInput, AutocompleteInput,  DateInput, FilterLiveSearch, NullableBooleanInput, useListContext, sanitizeInputRestProp, InputProps, Form  } from 'react-admin';


const MyCard = ({children}) => (<Card>{children}</Card>);


// <...> <FilterLiveSearch />
// https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/list/filter/FilterLiveSearch.tsx

export const InvoiceFilterForm = () => {
    const {
        displayedFilters,
        filterValues,
        setFilters,
        hideFilter
    } = useListContext();

    const form = useForm({
        defaultValues: filterValues,
    });

    if (!displayedFilters.main) return null;

    const onSubmit = (values) => {
        if (Object.keys(values).length > 0) {
            setFilters(values);
        } else {
            hideFilter("main");
        }
    };

    const resetFilter = () => {
        setFilters({}, []);
    };

    return (
        <Form defaultValues={filterValues} onSubmit={onSubmit}>
        {/* <form onSubmit={form.handleSubmit(onSubmit)}> */}
                <Card sx={{p: 1}}>
            <Box display="flex" flexDirection="row" width={'100%'} alignItems="flex-end" mb={1}>
                <Box component="span"  mr={2}>
                    {/* Full-text search filter. We don't use <SearchFilter> to force a large form input */}
                    {/* <TextInput label="Search" source="q" size="small" alwaysOn resettable /> */}
                    <TextInput
                        resettable
                        helperText={false}
                        source="q"
                        label="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon color="disabled" />
                                </InputAdornment>
                            ),
                        }}
                        size="small" 
                    />
                {/* <FilterLiveSearch source="title" /> */}
                </Box>
                <Box component="div" mr={2}>
                    {/* Commentable filter 
                    
                    // note https://marmelab.com/react-admin/Upgrade.html#referencearrayinput-no-longer-provides-a-listcontext
                    // tip bardzo wazne 
                    */}

                    <ReferenceInput
                        source="q"
                        reference="issuedInvoices_list"
                        perPage='50000'
                        
                        >
                        <AutocompleteInput 
                            label="Company Name" 
                            // validate={[required()]}
                            fullWidth
                            optionText="company"
                            
                            // filterToQuery={search => ({ company: search })} 
                            // className="myCustomClass"
                            // formClassName="myCustomFormClass"
                            helperText={false}
                            />
                    </ReferenceInput> 
                </Box>

    <Divider orientation="vertical" flexItem sx={{m: 1, bgcolor: 'blue'   }} />
                
                <Box component="span" mr={2}>
                    <ReferenceInput 
                        perPage='50000'
                        source="q" label="User" reference="issuedInvoices_list">
                        <SelectInput optionText="company" helperText={false} />
                    </ReferenceInput>
                </Box>

    <Divider orientation="vertical" flexItem sx={{m: 1, bgcolor: 'blue'   }} />
        
                <Box component="span" mr={2} gap={2} >
                        <Box component="span" mr={1}>
                            <DateInput  source="published_at_gte" label="Released after " size="small"  helperText={false}  />
                        </Box>
                        <Box component="span" mr={1}>
                            <DateInput source="published_at_lte" label="Released before" size="small"  helperText={false}    />
                        </Box>
                </Box>

    <Divider orientation="vertical" flexItem sx={{m: 1, bgcolor: 'blue'   }} />

                <Box component="span"  mb={1.5} sx={{transform: 'scale(0.8)'}} >
                    <Button variant="outlined" color="primary" type="submit">
                        Filter
                    </Button>
                </Box>
                <Box component="span" mb={1.5} sx={{transform: 'scale(0.8)'}}>
                    <Button variant="outlined" onClick={resetFilter}>
                        Close
                    </Button>
                </Box>
            </Box>
            </Card>
        </Form>
    );
};