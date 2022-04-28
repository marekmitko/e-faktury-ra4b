{/* <ReferenceInput
source="company"
reference="buyers"
// perPage='50000'
alwaysOn
>
<AutocompleteInput 
    label="Nazwa kontrahenta" 
    // validate={[required()]}
    fullWidth
    optionValue="id"
    optionText="company"
    alwaysOn
    size="large" 
    filterToQuery={search => ({ company: search })} 
    // className="myCustomClass"
    // formClassName="myCustomFormClass"
    // helperText="Custom helper text"
/>
</ReferenceInput>
<hr />
{/* <ReferenceInput source="tags" reference="tags"> */}
    {/* <SelectInput create={<CreateNewBuyer/>} /> */}
</ReferenceInput> */}
