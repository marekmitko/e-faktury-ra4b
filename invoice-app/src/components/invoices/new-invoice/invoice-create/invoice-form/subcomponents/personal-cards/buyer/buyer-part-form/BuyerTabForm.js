import React from 'react';
import { useWatch } from 'react-hook-form';
import { required, useChoicesContext, SelectInput, useInput, useRecordContext, RecordContextProvider, useResourceContext,  useGetOne, Error, Show, Loading, useShowController, ReferenceInput, SelectField, useGetManyReference, AutocompleteInput, ResourceContextProvider } from 'react-admin';
import { PersonalDataCard } from  '../../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
// import { UserRecordWithGCC } from '../../../../../../../../contexts/UserRecordContext';
import {   Box   } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import BuyerIcon from '@mui/icons-material/Person';
import { BuyerDataShow } from './BuyerDataShow';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import { BuyerSelectAutoInput } from './BuyerSelectAutoInput';
import { BuyerDataShowLayout } from './BuyerDataShowLayout';
import { BuyerPartInputControl } from './BuyerPartInvoiceForm';
import { BuyerDetailShowLayout } from './BuyerDetailShowLayout';
import { ControlDataInputBuyerShow } from './ControlDataInputBuyerShow';
import MyBuyerReferenceInput from './buyer-reference-autocomplete-input/MyBuyerReferenceInput';
// import BuyerReferenceInput from './BuyerReferenceInput';

// https://marmelab.com/react-admin/TabbedForm.html //*edu 

// function ControlBuyerDataShow({children, resource, id}) {
//     const { data, isLoading, error } = useGetOne(resource, { id });
//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//     <RecordContextProvider value={data}>
//         {children}
//     </RecordContextProvider>
// }

function ControlAutocompleteInput(
    // {value, setValue, inputValue, setInputValue, renderOptions}
    ) {



    const { allChoices, availableChoices, selectedChoices } = useChoicesContext();
    console.log("allChoices", allChoices);
    const [eventValue, setEventValue] = React.useState();
    function handleChange(event) {
        console.log(event.target.value);
    }
    console.log("selectedChoices", selectedChoices);
    console.log("availableChoices", availableChoices);
    
    
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
  
    const optionsBuyer = allChoices.map((option) => {
        const buyerObj = {};
        buyerObj.id = option.id;
        buyerObj.phone = option.phone;
        buyerObj.company = option.company;
        return {
            ...buyerObj,
        };
    });
    console.log(optionsBuyer, "optionsBuyer");
    return (
        < >
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                        setValue(newValue);
                    }
                }
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }
                }
                // id="controllable-states-demo"
                options={allChoices? allChoices.map((option) => option.id) :  ("renderOptions.map((option) => option.id") }
                // renderOption={
                //     // optionsBuyer ? 
                //     () => optionsBuyer.map((option) => ( 
                //         <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                //     <span> { option.company}  </span>
                //     </Box>
                //     ))
                    // <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                    //     { option.company} + () {option.phone}
                    // </Box>)
                    // ) 
                    // :
                    // (
                    // props, optionsBuyer) => (
                    // <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    //   {/* <img
                    //     loading="lazy"
                    //     width="20"
                    //     src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    //     srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    //     alt=""
                    //   /> */}
                    //   {optionsBuyer.company} (+48) +{optionsBuyer.phone}
                    // </Box>
                    // )
                // }

                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Buyer Name" variant="standard" label="inputBuyerId" />}
            />
            {/* <FormControlLabel
                // control={<Checkbox defaultChecked />}
                label="Only published posts"
                onChange={handleCheckboxChange}
            /> */}
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
        </>
    );
}

const options = [{id: 2203, company: 'Option 1'},{ id: 2213, company: 'Option 2'}];
const defaultSort = { field: 'title', order: 'ASC' };

// *see BuyerTabForm
export const BuyerTabForm = ( {selectSourceName, headerTitle, children, ...props}  ) => {
    // const idBuyer = useWatch({ name: 'buyer_id' });
    const [open, setOpen] = React.useState(true);
    const [buyerId, setBuyerId] = React.useState(0);

    // const [value, setValue] = React.useState("");
    // const [inputValue, setInputValue] = React.useState('');

    return(
        < >
        <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle="Kupujący">
        {/* <BuyerReferenceInput
                source="buyer_id"
                reference="buyers"
                validate={required()}
                // perPage={10000}
                // sort={defaultSort}
            /> */}
            {/* <input value={buyerId} />   <input value={idBuyer} /> */}
            <ReferenceInput  perPage={100} source="buyer_id" reference="dbclientlist" {...props} >
                <BuyerSelectAutoInput onBlur={() => console.log("blure")} setBuyerId={setBuyerId} open={open} setOpen={setOpen} />
            </ReferenceInput> 


            <MyBuyerReferenceInput  label="Buyer" source="id" reference="buyers" >
                <ControlAutocompleteInput 
                    // renderOptions="company"
                    // value={value} setValue={setValue}
                    // inputValue={inputValue} setInputValue={setInputValue} 
                />
                
            </MyBuyerReferenceInput>



            <ReferenceInput label="Buyer" source="id" reference="dbclientlist">
            {/* <ReferenceInput label="Buyer" source="buyer_id" reference="buyers"> */}
                <AutocompleteInput 
                    size='small'
                    optionText="company" 
                    optionValue='id' 
                    enableGetChoices={({ q }) => q.length >= 3} 
                />
            </ReferenceInput>
            {/* OD TEGO MIEJSCA W DÓŁ  */}
            <hr />
            <ReferenceInput source="buyer_id" reference="dbclientlist" {...props} defaultValue="">
            {/* <SelectInput
                    fullWidth
                    optionText="company"
                /> */}
                <ControlAutocompleteInput 
                    // renderOptions="company"
                    // value={value} setValue={setValue}
                    // inputValue={inputValue} setInputValue={setInputValue} 
                />
            </ReferenceInput>
            <ControlDataInputBuyerShow resourceBuyer="buyers" 
            // buyerId={inputValue} 
            />
        </PersonalDataCard>
        </>
    );
};





// note  const BookDetail = ({ id }) => {
// https://marmelab.com/react-admin/Upgrade.html#all-crud-views


//https://marmelab.com/react-admin/useGetIdentity.html

// https://marmelab.com/react-admin/Edit.html#queryoptions


const BuyerIdShow = ({BuyerId}) => {
    const controllerProps = useShowController({ resource: 'posts', id: BuyerId });
    return <Show {...controllerProps} />;
};

const BuyerId = ({ id }) => {
    const { data, error, isLoading } = useGetOne('books', { id });
    
        if (isLoading) {
            return <Loading />;
        }
        if (error) {
            return <Error error={error} />;
        }
        if (!data) {
            return null;
        }
        return (
            <div>
                <h1>{data.book.title}</h1>
                <p>{data.book.author.name}</p>
            </div>
        );
    };

