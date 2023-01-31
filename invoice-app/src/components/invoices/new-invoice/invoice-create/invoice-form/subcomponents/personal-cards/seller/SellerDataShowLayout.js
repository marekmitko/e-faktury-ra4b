import * as React from "react";
import { blue, blueGrey } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailOutline';
import DataContatctIcon from '@mui/icons-material/Wysiwyg';
import { Stack, Typography, Box, Divider, Tooltip, TableCell } from "@mui/material";
import { TextField, WrapperField, SimpleShowLayout, useTranslate } from "react-admin";
import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../../../../../custom/ZipCityDualTextField";
import { CodeAndNameCityDualField } from '../../../../../../../../custom/invoice/fields/CodeAndNameCityDualField'
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

// BUG // *see ZipCityCode
const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;


export const SellerDataShowLayout = (props, propTypes) => {
    const translate = useTranslate();
    return(
    <SimpleShowLayout>
        <Stack>

        <TextField source="user_company" />
        <Tooltip       placement="top-start"   title="To jest poważny komercyjny projekt 💪🏻🚀❤⭐"        arrow>
                        <SmsFailedOutlinedIcon sx={{color: blue, mt: -4, ml: 20 }}/>
                    </Tooltip>
        </Stack>
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

            <TextField
                source="user_address"
                // source="address"
            />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                width="100%"
            >
            <TextField sx={{minWidth:'25%'}} source="user_zip_code"  variant="standard" />
        </Stack>
            <TextField    source="user_place"  fullWidth  variant="standard" />
            <TextField  source="user_org_nr"  label={translate('myroot.myBuyersEfaktury.show.fields.org_nr')} />
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
                        <TextField  source="user_firstname" label="myroot.myBuyersEfaktury.show.fields.firstname" /> {" "} <TextField  source="user_lastname" />  {" "} {" "}{"   "}
                   
                    </TableCell>
                    <TableCell >
                        <TextField    source="user_email"     /> 
                    </TableCell>  
                    <TableCell >
                        <TextField    source="user_phone"     />
                    </TableCell>  
                </WrapperField>



    </SimpleShowLayout>
    );
};













// export const SellerData6666444444444444464644444444444444444444444333343ShowLayout = (props) => (
// <SimpleShowLayout>
//     <TextField label="Company Name" source="company" />
//     <TextField label="Full Name" source="fullName" />
//         <TextField label="Street" source="address.street" />
//         <ZipCityDualTextField label={<ZipCityDualLabel  />} sourceZip="address.ZIPCode" sourceCity="address.city" />
//         <TextField label="MVA Code" source="orgId.orgNumber" />

//         <CodeAndNameCity  sourceCode="address.ZIPCode" sourceName="address.city"   />
//     </SimpleShowLayout>
// );