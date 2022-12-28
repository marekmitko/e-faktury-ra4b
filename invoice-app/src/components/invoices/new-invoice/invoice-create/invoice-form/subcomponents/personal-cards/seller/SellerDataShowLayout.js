import * as React from "react";
import { blue, blueGrey } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailOutline';
import DataContatctIcon from '@mui/icons-material/Wysiwyg';
import { Stack, Typography, Box, Divider, Tooltip } from "@mui/material";
import { TextField, SimpleShowLayout } from "react-admin";
import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../../../../../custom/ZipCityDualTextField";
import { CodeAndNameCityDualField } from '../../../../../../../../custom/invoice/fields/CodeAndNameCityDualField'
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

// BUG // *see ZipCityCode
const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;


export const SellerDataShowLayout = (props, propTypes) => (
    <SimpleShowLayout>
        <TextField source="company" />
        <Stack direction="row" gap={1} width="100%">
            <TextField label="myroot.issuer" source="fullName" /> 
            <Tooltip 
                placement="top-start"
                title="To jest poważny komercyjny projekt 💪🏻🚀❤⭐" 
            arrow>
                <SmsFailedOutlinedIcon sx={{color: blue, mt: -2 }}/>
            </Tooltip>

        </Stack>
        <Stack direction="row" gap={1} width="100%">
            <MailIcon />
            <Box direction="row" gap={1} width="100%">
                <Typography variant="button" display="block" gutterBottom>
                    <strong>ADDRESS</strong>
                </Typography>
                <Divider   flexItem 
                sx={{
                    mt: -1, 
                    // bgcolor: blue[300]
                }} 
                />
                </Box>
        </Stack>
        <TextField source="address.street" />
        <CodeAndNameCityDualField  sourceCode="address.ZIPCode" sourceName="address.city"   />
        <TextField label="MVA Code" source="orgId.orgNumber" />
        <Stack direction="row" gap={1} width="100%">
            <DataContatctIcon />
            <Box direction="row" gap={1} width="100%">
            {/* <Typography variant="overline" display="block" gutterBottom> */}
                <Typography variant="button" display="block" gutterBottom
                    sx={{
                        color: blueGrey[800]
                }}     
                >
                    <strong>CONTACT</strong>
                </Typography>
                <Divider   flexItem 
                sx={{
                    mt: -1, 
                    // bgcolor: blueGrey[500]
                }} 
                />
                </Box>
        </Stack>
        <TextField label="Full Name" source="fullName" />
        <TextField label="email" 
                // source="orgId.orgNumber" 
                source="contact.email"  
        />
    </SimpleShowLayout>
);













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