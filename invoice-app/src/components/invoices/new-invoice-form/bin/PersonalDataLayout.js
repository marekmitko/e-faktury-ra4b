import * as React from "react";
import {  Box } from "@mui/material";
import {PersonalDataCard} from '../../../custom/PersonalDataCard';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import {   TextField, SimpleShowLayout   } from "react-admin";
import { UserRecordWithGCC } from "../../../contexts/UserRecordContext";


export const PersonalDataLayout = (props) => (
    
    <SimpleShowLayout>
        <TextField label="company" source="company" />
        <TextField label="name" source="fullName" />
        <TextField label="NIP" source="nip" />
        <Box    sx={{ display: 'inline-block', p: '2px' }}  >
            <TextField  label="ZPI Code" source="address.ZIPCode" />
            <TextField  label="city" source="address.city" />
        </Box>
        <TextField label="Street" source="address.street" />
    </SimpleShowLayout>
);