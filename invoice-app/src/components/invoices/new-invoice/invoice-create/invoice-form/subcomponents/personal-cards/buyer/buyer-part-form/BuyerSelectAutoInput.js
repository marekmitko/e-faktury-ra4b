import React from 'react';
import { useController } from 'react-hook-form'
import { AutocompleteInput, useChoicesContext, 
    useCreate, useShowController, useGetOne, Loading, Error,
    useCreateSuggestionContext, Show, useInput, required,
    Record, ReferenceInput, useRecordContext, useCreateContext, TextInput, useRedirect, RecordContextProvider } from 'react-admin';
import { PersonalDataCard } from '../../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
import BuyerIcon from '@mui/icons-material/Person';
import {FormControlLabel, Checkbox, hslToRgb} from '@mui/material';
import { BuyerDataFromLayout } from '../BuyerDataFormLayout';
import CreateNewBuyer from './CreateNewBuyer';
import { BuyerPartInvoiceFormLayout } from './BuyerPartInvoiceFormLayout';
import { BuyerDetailShowLayout } from './BuyerDetailShowLayout';
import db_buyer from './db_empty_buyer';
import { OnCreateNewBuyer } from './OnCreateNewBuyer';





export const BuyerSelectAutoInput = ({open, setOpen, setBuyerId, ...props}) => {

    const { onChange, onBlur, ...rest } = props;
    // const { onChange, onBlur, ...rest } = props;

    // const {
    //     field,
    //     fieldState: { isTouched, invalid, error },
    //     formState: { isSubmitted },
    //     isRequired
    //     } = useInput({
    //     onChange,
    //     onBlur,
    //     ...props,
    // });
    // const input1 = useController({ name: 'position.lat' });
// XXXX BARDZO WAŻNE WYJAŚNIONE useChoicesContext
//https://marmelab.com/react-admin/Upgrade.html#referencearrayinputcontext-referencearrayinputcontextprovider-and-usereferencearrayinputcontext-have-been-removed

// how controle form data - change 
// https://marmelab.com/react-admin/useChoicesContext.html
    return( 
    // <p>dsadas</p>);
                <AutocompleteInput 
                    size='small'
                    helperText={false}
                    enableGetChoices={({ q }) => q.length >= 3} 
                    // create={<CreateNewBuyer setBuyerId={setBuyerId ? setBuyerId : null} dialogOpen={setOpen} isOpen={open} />} 
                    optionText="company"
                    // onCreate={filter => {
                    onCreate={ () => {
                        if(!open) {
                            setOpen(true)
                        };
                        return OnCreateNewBuyer();
                        }
                    }
                    fullWidth
                    sx={{ 
                            // bgcolor: 'rgba(37, 255, 0, 0.2)' 
                        }}
                    // createLabel="Add"
                    // createItemLabel="+++"
                    // options={{ color: 'secondary', InputLabelProps: { shrink: true } }}
                    // {...field}
                    // label={props.label}
                    // error={(isTouched || isSubmitted) && invalid}
                    // required={isRequired}
                    // {...rest}


                />
                );
            };
            