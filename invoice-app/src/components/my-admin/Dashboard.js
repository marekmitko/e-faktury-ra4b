import * as React from "react";
import { Card, CardContent, CardHeader, Box } from "@mui/material";
import { FixedSellerCard } from "../invoice-form/bin/FixedSellerCard";
// import { PostShow } from "../show-test/PostShow";
import {PersonalDataCard} from '../../custom/PersonalDataCard';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import { useResourceContext, TextField, ShowBase, SimpleShowLayout } from "react-admin";
import { UserRecordWithGCC } from "../../contexts/UserRecordContext";



const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
};

const MyBox = ({children}) => (
        <Box
            component="span"
            sx={{ display: 'inline-block', m: '15px'  }}
        >
            {children}
        </Box>
    );

// variant version
// outlined
// standard 
export const Dashboard =  () => (
    <>
 
        
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
        <Card>
        <MyBox>
        <Card>
            <PersonalDataCard  variant="standard" headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
                {/* <ShowSellerCard userResource="data_user"  userId="user_123"  /> */}
            </PersonalDataCard>
        </Card>
        </MyBox>
        {/* <PostShow /> */}
        <MyBox>
        <FixedSellerCard userResource="data_user" userId="user_123" />
        </MyBox>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
    </>
);