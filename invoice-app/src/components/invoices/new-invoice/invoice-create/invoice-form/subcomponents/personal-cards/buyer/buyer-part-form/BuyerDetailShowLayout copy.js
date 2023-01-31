import * as React from "react";
import { blue, blueGrey } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailOutline';
import DataContatctIcon from '@mui/icons-material/Wysiwyg';
import { Stack, Typography, Box, Divider } from "@mui/material";
import { TextField, SimpleShowLayout, useTranslate   } from "react-admin";
// import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../../../../../custom/ZipCityDualTextField";
import { CodeAndNameCityDualField } from '../../../../../../../../../custom/invoice/fields/CodeAndNameCityDualField'
import { BuyerDataFromLayout } from "../BuyerDataFormLayout";

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





// const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;

// infO https://marmelab.com/react-admin/Edit.html#queryoptions
// export const BuyerDetailShowLayout = (props, propTypes) => (
// export const BuyerDetailShowLayout = ({record}) => (
    
export const BuyerDetailShowLayout = (props) => {
    const translate = useTranslate();
    return (
        <>
        <SimpleShowLayout   >
        <BuyerDataFromLayout {...props} />

            {/* <BuyerDataFromLayout /> */}
            <TextField source="company" />
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
            <TextField
                source="address"
                // source="address"
            />
            <CodeAndNameCityDualField
                sourceCode="address.codeCity"
                sourceName="address.city"   
            />
            <TextField 
                // source="orgId.orgNumber" 
                source="orgId.orgNumber" 
            />
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
                <TextField  source="contact.companyRepresentative" />
                <TextField    source="email"     />
        </SimpleShowLayout>
                    </>
    );
};

