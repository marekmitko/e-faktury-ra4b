import * as React from "react";
import {  Box, Grid, Typography, Stack } from "@mui/material";
import {PersonalDataCard} from '../../../custom/PersonalDataCard';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import {   TextField, SimpleShowLayout, DateField, Labeled, SimpleForm, Create   } from "react-admin";
import { UserRecordWithGCC } from "../../../contexts/UserRecordContext";
import { CityZipCodeField } from "./CityZipCodeField";
import { CityZipCodeLabels } from "./CityZipCodeField";
 



const IdentifierField = ({ record }) => (
    <Typography>{record.id}</Typography>
);

const Identifier = ({ record }) => (
    <Identifier label="body">
        <Typography>
            {record.body}
        </Typography>
    </Identifier>
);

const TagsField = ({ record }) => (
    <ul>
        {record.tags.map(item => (
            <li key={item.name}>{item.name}</li>
        ))}
    </ul>
)
TagsField.defaultProps = {
    addLabel: true
};


// *see ShowSellerCard

export const ShowSellerCard = (props) => (
    <PersonalDataCard  variant="outlined" headerIcon={<SellerIcon />} headerTitle="Sprzedawca">

        <Create >
            <SimpleForm> 
                <IdentifierField addLabel label="Identifier" /> {/* // SimpleForm doda etykietę SimpleForm will add a label */}
                <TextField source="title" /> {/* // SimpleForm również doda etykietę (TextField ma addLabel:true w defaultProps // SimpleForm will add a label, too (TextField has addLabel:true in defaultProps) */}
           
            </SimpleForm>
        </Create>
        <UserRecordWithGCC >
        <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid item xs={12} sm={8}>
      
            <SimpleShowLayout>
                    {/* <CityZipCodeField   /> */}
                    <TextField sx={{display: "inline-flex"}} label="company" source="company" />
                    <TextField label="name" source="fullName" sx={{display: "inline-flex"}} />
                <hr/>
                    <TextField label="company" source="company" />
                    <TextField label="name" source="fullName" />
                    <TextField label="NIP" source="nip" />
                    {/* <Box    sx={{ display: 'inline-block', p: '2px' }}  > */}
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
    >

                        <TextField  label="ZPI Code" source="address" />
                        <TextField  label="city" source="address" />
    </Box>
                    <Stack direction="row" spacing={2}>

                        <TextField  label="ZPI Code" source="address" />
                        <TextField  label="city" source="address" />
                    </Stack>
                    {/* </Box> */}
                        <TextField  label="ZPI Code" source="address.ZPICode" />
                        <TextField  label="city" source="address.city" />
            <TextField label="Street" source="address.street" />
            </SimpleShowLayout>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Details</Typography>
                <Stack spacing={1}>
                    <Labeled label="ISBN"><TextField source="nip" /></Labeled>
                    <Labeled label="Last rating"><DateField source="name" /></Labeled>
                </Stack>
            </Grid>
            </Grid>
        </UserRecordWithGCC>
    </PersonalDataCard>
);