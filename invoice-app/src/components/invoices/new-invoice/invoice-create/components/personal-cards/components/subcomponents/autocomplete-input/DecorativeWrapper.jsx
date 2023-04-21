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
    FormControlLabel, Stack
} from '@mui/material';
// import BuyerIcon from '@mui/icons-material/Person';
import BuyerAddIcon from '@mui/icons-material/PersonAddAlt1'; 
import JoyIconButton from "@mui/joy/IconButton";
import { SaveButton, useGetList, RaRecord, RecordContextProvider, TextInput, ReferenceArrayInput, WithRecord, useRecordContext, AutocompleteInput, ReferenceInput, useCreateSuggestionContext, useCreate, SimpleForm, Create, useNotify, useRedirect, choices, Datagrid, useTranslate, useChoicesContext } from "react-admin";
import { BuyerDataFromLayout } from "../buyer-preview/BuyerDataFormLayout";
// import { BuyerCard } from "../buyer/BuyerCard";
// import { PersonalDataCard } from "./subcomponents/presonal-card-container/PersonalDataCard";
import { useFormContext } from "react-hook-form";


export default function DecorativeWrapper(props) {
    const translate = useTranslate();
    const { setValue } = useFormContext();

    const {icon, children,  source, reference} = props;



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
                { icon ?  icon : ""}
            </JoyIconButton>
            { children ? children : null }
                <Stack direction="row" ml={7} mb='-10px' mr={2} spacing={2} >
                </Stack>
                <Stack alignItems="center" justifyContent="center" sx={{maxWidth: '50px', mx: 2, p: .1}} mr={2}>

                </Stack>
            </Box>
        </>
    );
}

