import * as React from "react";
import { Card, CardContent, CardHeader, Box } from "@mui/material";
import { FixedSellerCard } from "../invoice-form/subcomponents/FixedSellerCard";
// import { PostShow } from "../show-test/PostShow";
import {PersonalDataCard} from '../../custom/PersonalDataCard';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import { ShowSellerCard } from "../invoice-form/subcomponents/ShowSellerCard";
import { Create } from "react-admin";


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
);