import * as React from "react";
import { blue, blueGrey } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailOutline';
import DataContatctIcon from '@mui/icons-material/Wysiwyg';
import { Stack, Typography, Box, Divider, TableCell, TableHead } from "@mui/material";
import { TextField,useRecordContext, SimpleShowLayout, useTranslate, WrapperField, useGetOne, useGetMany } from "react-admin";
// import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../../../../../custom/ZipCityDualTextField";
import { CodeAndNameCityDualField } from '../../../../../../../../../custom/invoice/fields/CodeAndNameCityDualField'
import { BuyerDataFromLayout } from "../BuyerDataFormLayout";
import { useFormContext } from "react-hook-form";

// BUG // *see Zapytać 
// BUG // note a. 1 Przenieść do stanu ? 


// BUG // reCSS a. 1 Przenieść do stanu ? 
// https://marmelab.com/react-admin/Translation.html
// dodatek do walidacji ---> https://marmelab.com/react-admin/doc/4.3/TranslationTranslating.html#translating-custom-components
// in validators/required.js
// const greaterThanTen = (value, allValues, props) =>
//     value <= 10
//         ? 'myroot.validation.greaterThanTen'
//         : undefined;


const PurpleTextField = ({ source }) => {
    const record = useRecordContext();
    return (<span style={{ color: 'purple' }}>{record && record[source]}</span>);
};


// const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;

// infO https://marmelab.com/react-admin/Edit.html#queryoptions
// export const BuyerDetailShowLayout = (props, propTypes) => (
// export const BuyerDetailShowLayout = ({record}) => (
    
export const BuyerDetailShowLayout = (props) => {
    const translate = useTranslate();
    const { register } = useFormContext();
    //BUG *edu
    const buyerrecord = useRecordContext();
    const { data: buyer  } = useGetOne('buyersEfaktury', { id: buyerrecord.id });

    // const { data: buyerTest, isLoading, error } = useGetMany('buyersEfaktury', { id: '2145' });
    // console.log("buyerTest:", buyerTest);




    const dbBuyer = register('dbBuyers', { value: buyer})
    // clientValue = buyer;

// console.log("BUYER:", buyer);

    return (
        <>
        <SimpleShowLayout   >
            {/* <BuyerDataFromLayout /> */}
            {/* { {...clientValue}} */}
            <Box direction="row" gap={1} width="100%">
            <TableCell component='td' sx={{ border: 0 }} ><TextField source="company" /></TableCell >
                <TableCell sx={{ border: 0 }} >
                    <small>{ translate('myroot.form.label.title.mva') }: </small> 
                    <TextField  source="org_nr"  label={translate('myroot.myBuyersEfaktury.show.fields.org_nr')} />

                </TableCell>
            </Box>
            <Stack direction="row" gap={1} width="100%">
                <MailIcon />
                <Box direction="row" gap={1} width="100%">
                    <Typography variant="button" display="block" gutterBottom>
                        <strong>{translate('myroot.form.label.header.address')}</strong>
                    </Typography>
                    <Divider   flexItem 
                    sx={{
                        mt: -1, 
                        // bgcolor: blue[300]
                    }} 
                    />
                    </Box>
            </Stack>
            {/* </Box> */}
            <Box direction="row" sx={{ border: 0 }}gap={1} width="100%">
                <TableCell sx={{ border: 0 }} >
                    <small>{ translate('myroot.form.label.title.street') }:</small> <TextField    source="address" /> {", "}&nbsp; <TextField    source="place"     /> <TextField  source="zip_code" />
                </TableCell>  
            </Box>
            <Stack direction="row" gap={1} width="100%">
                <DataContatctIcon />
                <Box direction="row" gap={1} width="100%">
                {/* <Typography variant="overline" display="block" gutterBottom> */}
                    <Typography variant="button" display="block" gutterBottom
                        sx={{
                            color: blueGrey[800]
                        }}     
                        >
                        <strong>{translate('myroot.form.label.header.contact')}</strong>
                    </Typography>
                    <Divider   flexItem 
                    sx={{
                        mt: -1, 
                        // bgcolor: blueGrey[500]
                    }} 
                    />
                    </Box>
            </Stack>
            {/* <Stack direction="row" gap={1} width="100%"> */}
                {/* <div><b>Dodawać?</b></div> */}
                <WrapperField label="myroot.fullname" >
                     <TableCell>
                        <TextField  source="firstname" label="myroot.myBuyersEfaktury.show.fields.firstname" /> {" "} <TextField  source="lastname" />
                    </TableCell>
                    <TableCell >
                        <TextField    source="email"     /> 
                    </TableCell>  
                    <TableCell >
                        <TextField    source="phone"     />
                    </TableCell>  
                </WrapperField>
        </SimpleShowLayout>
                    </>
    );
};

