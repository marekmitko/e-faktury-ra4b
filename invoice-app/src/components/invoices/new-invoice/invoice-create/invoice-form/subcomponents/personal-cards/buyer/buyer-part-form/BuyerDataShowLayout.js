import * as React from "react";
import { blue, blueGrey } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailOutline';
import DataContatctIcon from '@mui/icons-material/Wysiwyg';
import { Stack, Typography, Box, Divider } from "@mui/material";
import { TextField, SimpleShowLayout } from "react-admin";
// import { ZipCityDualLabel, ZipCityDualTextField } from "../../../../../../../../custom/ZipCityDualTextField";
import { CodeAndNameCityDualField } from '../../../../../../../../../custom/invoice/fields/CodeAndNameCityDualField'

// BUG // *see ZipCityCode
// const ZipCityCode = ({...props}, {addLabel}) => <ZipCityDualTextField  addLabel='true' label={<ZipCityDualLabel  />} /> ;

// infO https://marmelab.com/react-admin/Edit.html#queryoptions
// export const BuyerDetailShowLayout = (props, propTypes) => (
// export const BuyerDetailShowLayout = ({record}) => (
    
export const BuyerDataShowLayout = (props) => (
    <SimpleShowLayout  
        // record={record} 
    >
        
        <TextField label="Company Name" source="company" />
        
        {/* <Box direction="row" gap={1} width="100%"> */}
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
        {/* </Box> */}
        <TextField label="Street" 
            // source="address.street"
            source="address"
        />
        <CodeAndNameCityDualField
            // sourceCode="address.ZIPCode" 
            sourceCode="place" 
            sourceName="address.city"   
        />
        <TextField label="MVA Code" 
            // source="orgId.orgNumber" 
            source="org_nr" 
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
        {/* <Stack direction="row" gap={1} width="100%"> */}
            <div><b>Dodawać?</b></div>
            <TextField label="Full Name" source="fullName" />
            <TextField label="email" 
                // source="orgId.orgNumber" 
                source="email"  
                />
            <TextField label="test id " source="id" />
        {/* </Stack> */}
    </SimpleShowLayout>
);

