import React from 'react';
import { ReferenceInput, SimpleShowLayout, useChoicesContext,  useInput, required  } from 'react-admin';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BuyerDetailShowLayout } from '../BuyerDetailShowLayout';
import { ControlDataInputBuyerShow } from '../ControlDataInputBuyerShow';

function MyBuyerAutocompleteInput(props) {
    const {value, setValue, inputValue, setInputValue, renderOptions, options} = props;
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useInput(props);

    const { allChoices, availableChoices, selectedChoices } = useChoicesContext();
    console.log("allChoices", allChoices);
    const [eventValue, setEventValue] = React.useState();
    function handleChange(event) {
        console.log(event.target.value);
    }
    console.log("selectedChoices", selectedChoices);
    console.log("availableChoices", availableChoices);
    
    
    // const [value, setValue] = React.useState(options[0]);
    // const [inputValue, setInputValue] = React.useState('');
  
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

const MyBuyerReferenceInput = (props) => {
    const  {options} = {...props} ;
    // const [textValue, setTextValue] = React.useState(options[0]);
    const [textValue, setTextValue] = React.useState(options);
    const [inputValueId, setInputValueId] = React.useState('');
    return(
        <>
            <hr/>
            <ReferenceInput {...props}>
                {props.children}
            </ReferenceInput>
            <ControlDataInputBuyerShow resourceBuyer="buyers" buyerId={2203} />
            <SimpleShowLayout>
                <BuyerDetailShowLayout />
            </SimpleShowLayout>
                <div><p>Majonez</p></div>
            <hr/>
        </>
    );
}

export default MyBuyerReferenceInput;