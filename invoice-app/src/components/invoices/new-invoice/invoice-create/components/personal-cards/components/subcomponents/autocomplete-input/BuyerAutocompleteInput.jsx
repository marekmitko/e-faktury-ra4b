import * as React from "react";
import {
    Box,
    BoxProps,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    FormControlLabel
} from '@mui/material';
// import BuyerIcon from '@mui/icons-material/Person';
import BuyerAddIcon from '@mui/icons-material/PersonAddAlt1'; 
import JoyIconButton from "@mui/joy/IconButton";
import { SaveButton, useGetList, RaRecord, RecordContextProvider, TextInput, ReferenceArrayInput, WithRecord, useRecordContext, AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, choices, Datagrid, useTranslate, useChoicesContext } from "react-admin";
import { BuyerDataFromLayout } from "./subcomponents/BuyerDataFormLayout";
// import { BuyerCard } from "../buyer/BuyerCard";
import { PersonalDataCard } from "./subcomponents/presonal-card-container/PersonalDataCard";
import ClientReferenceAutocompleteInput from "./subcomponents/ClientReferenceAutocompleteInput";
import { useFormContext } from "react-hook-form";
import { ContactShow } from "./show/buyer-invoice-form/ShowContentBuyer";
import { Stack } from "@mui/joy";
import { ClientCreateButton } from "./create-client-subform/ClientCreateButton";


const db_buyer =  {
    id:         "",
    firstname:  "",
    lastname:   "",
    buyer_id:   "",
    user_id:    "",
    kunde_nr:   "",
    company:    "",
    address:    "",
    zip_code:   "",
    org_nr:     "",
    mva:        "",
    email:      "",
    phone:      "",
    is_company: ""
};

const OptionRenderer = () => {
    const record = useRecordContext();
    // {/* <img src={record.avatar} /> */}
    return record ? (
        <span>
            {record.company} <br />
            <small> {"MVA: "}<strong>{record.MVA}</strong></small> 
            <small>{" | "} {"ADDRES: "} {record.address.street}{", "}{record.address.city}</small>
        </span>
    ) : null;
};

export default function BuyerAutocompleteInput(props) {
    const translate = useTranslate();
    const { setValue } = useFormContext();

    const {handleBuyerIdChange,  source, reference} = props;

    // const inputText = choices => `${choices.company} ${choices.id}`;
    const inputText = choices => `${choices.company}`;
    const matchSuggestion = (filter, choices) => {
        // console.log("choices", choices);
        return choices ? ( 
            choices.company.toLowerCase().includes(filter.toLowerCase()) 
            || choices.id.toLowerCase().includes(filter.toLowerCase()) 
            ) : null;
        };

    return (
        <>
        
            {/* <Box sx={{ mt: '30px'}}> */}
            <Box  >
        
        
                <JoyIconButton 
                    onMouseDown={(event) => {
                        // don't open the popup when clicking on this button
                        event.stopPropagation();
                        }}
                        onClick={() => {
                        // click handler goes here
                        }}
                    size="md"
                    variant="solid"
                    color="primary"
                    aria-label="Like minimal photography"
                    sx={{
                        position: "absolute",
                        zIndex: 1,
                        borderRadius: "50%",
                        left: 11,
                        top: 0,
                        transform: "translateY(135%)",
                        borderBottomRightRadius: "15%",
                    }} 
                >
                {props.icon? props.icon : ""}
            </JoyIconButton>
            <Stack direction="row" ml={7} mb='-10px' mr={2} spacing={2} >
                <ClientReferenceAutocompleteInput
                    variant="filled"
                    source="buyer_id" reference="buyersEfaktury" 
                    handleBuyerIdChange={props.setValueBuyerId}
                    valueBuyerId={props.valueBuyerId}
                    setValueForm={setValue}
                    // enableGetChoices={({ q }) =>  q.length ? (q.length >= 3) : null}
                />   
            <Stack alignItems="center" justifyContent="center" sx={{maxWidth: '50px', mx: 2, p: .1}} mr={2}>
                    <ClientCreateButton />
                </Stack> 
            </Stack>
            </Box>
        </>
    );
}

// https://marmelab.com/react-admin/AutocompleteInput.html#create
export const CreateNewClient = ({handleBuyerIdChange, onClose, selectedValue, open }) => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();

    const postSave = (data) => {
        // event.preventDefault();
        // data.company = value;
        create('buyersEfaktury', {  data    },
        {
            onSuccess: (data) => {
                setValue('');
                onCreate(data);
                // redirect(false);
            },
        }
        );
    };




    return (
        <Dialog open onClose={onCancel}>

            <PersonalDataCard  sx={12} sm={12} variant="outlined" headerIcon={<BuyerAddIcon />} headerTitle={"Nowy Nabywca"}>
                <SimpleForm 
                    defaultValues={db_buyer}
                    sx={{ display: "flex", alignContent: "stretch"}}
                    onSubmit={postSave}
                    toolbar={
                        <DialogActions>

                        <SaveButton 
                            form="client_create_form" 
                            // type="button"
                            variant="text"
                            />
                        <Button onClick={onCancel}>Cancel</Button>
                    </DialogActions>
                } 
                id="client_create_form" 
                >
                    {/* <BuyerCard /> */}
            
                    <BuyerDataFromLayout>
                        <TextInput default  source="company" fullWidth />
                    </BuyerDataFromLayout >
    
                </SimpleForm>
                    </PersonalDataCard>
    
        </Dialog>
    );
};



// NEW ############
const PostInput = (props) => {
    const { setFilters, displayedFilters } = useChoicesContext();

    const handleCheckboxChange = (event, checked) => {
        setFilters({ published: checked }, displayedFilters);
    };

    return (
        <>
            <AutocompleteInput optionText='company' {...props} />
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Only published posts"
                onChange={handleCheckboxChange}
            />
        </>
    );
};

// NEW ############
// NEW ############
const BuyerListContainer = () => {
    const { data, isLoading } = useGetList(
            'buyersEfaktury',
            {
                pagination: { page: 1, perPage: 10 },
                sort: { field: 'company', order: 'DESC' },
            }
        );
        console.log("DATA", {...data});
    return isLoading ? null: <PostListDetail data={data} />
};


const PostListDetail = ({ data } ) => {
        return <>{data.map(record => <span key={record.id}>{record.title}</span>)}</>;
};

// NEW ############

// const PostCreateToolbar = () => {
//     const redirect = useRedirect();
//     const notify = useNotify();
//     return (
//         <Toolbar>
//             <SaveButton
//                 label="post.action.save_and_show"
//             />
//             <SaveButton
//                 label="post.action.save_and_add"
//                 mutationOptions={{
//                     onSuccess: data => {
//                         notify('ra.notification.created', {
//                             type: 'info',
//                             messageArgs: { smart_count: 1 },
//                         });
//                         redirect(false);
//                     }}
//                 }
//                 type="button"
//                 variant="text"
//             />
//         </Toolbar>
//     );
// };



