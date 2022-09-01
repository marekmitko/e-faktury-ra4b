import React from 'react';
import { useWatch } from 'react-hook-form';
import { useInput, useRecordContext, RecordContextProvider, useResourceContext,  useGetOne, Error, Show, Loading, useShowController, ReferenceInput, SelectField, useGetManyReference, AutocompleteInput, ResourceContextProvider } from 'react-admin';
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

// https://marmelab.com/react-admin/TabbedForm.html //*edu 

// function ControlBuyerDataShow({children, resource, id}) {
//     const { data, isLoading, error } = useGetOne(resource, { id });
//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//     <RecordContextProvider value={data}>
//         {children}
//     </RecordContextProvider>
// }

function ControlAutocompleteInput({value, setValue, inputValue, setInputValue, renderOptions}) {
    return (
        < >
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                // id="controllable-states-demo"
                options={renderOptions.map((option) => option.id)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Buyer Name" />}
            />
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
        </>
    );
}

const options = [{id: 2203, company: 'Option 1'},{ id: 2213, company: 'Option 2'}];
 
// *see BuyerTabForm
export const BuyerTabForm = ( {selectSourceName, headerTitle, children, ...props}  ) => {
    // const idBuyer = useWatch({ name: 'buyer_id' });
    const [open, setOpen] = React.useState(true);
    const [buyerId, setBuyerId] = React.useState(0);

    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return(
        < >
        <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle="Kupujący">
            {/* <input value={buyerId} />   <input value={idBuyer} /> */}
            <ReferenceInput  source="buyer_id" reference="buyers"  >
                <BuyerSelectAutoInput onBlur={() => console.log("blure")} setBuyerId={setBuyerId} open={open} setOpen={setOpen} />
            </ReferenceInput> 
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
            <ControlAutocompleteInput 
                renderOptions={options}
                value={value} setValue={setValue}
                inputValue={inputValue} setInputValue={setInputValue} 
            />
            <ControlDataInputBuyerShow resourceBuyer="buyers" buyerId={inputValue} />
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

