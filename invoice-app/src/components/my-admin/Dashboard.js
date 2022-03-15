import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { FixedSellerCard } from "../invoice-form/subcomponents/FixedSellerCard";
// import { PostShow } from "../show-test/PostShow";
import PersonalDataCard from '@app/components';

export const Dashboard =  () => (
    
    <Card>
        <PersonalDataCard />
        {/* <PostShow /> */}
        <FixedSellerCard userResource="profile" userId="MyProfile" />
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
);