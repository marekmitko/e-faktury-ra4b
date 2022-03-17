import * as React from "react";
import {  Box } from "@mui/material";
import {PersonalDataCard} from '../invoice-form/';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import { ShowSellerCard } from "../invoice-form/subcomponents/ShowSellerCard";
import {   TextField   } from "react-admin";
import { UserRecordWithGCC } from "../../../invoice-app/src/contexts/UserRecordContext";

export const SPRShowSellerCard = (props) => (
<PersonalDataCard  variant="outlined" headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
            <UserRecordWithGCC >
                <TextField label="company" source="company" />
                <TextField label="name" source="fullName" />
                <TextField label="NIP" source="nip" />
                <Box    sx={{ display: 'inline-block', p: '2px' }}  >
                    <TextField  label="ZPI Code" source="address.ZIPCode" />
                    <TextField  label="city" source="address.city" />
                </Box>
                <TextField label="Street" source="address.street" />
            </UserRecordWithGCC>
        </PersonalDataCard>
);