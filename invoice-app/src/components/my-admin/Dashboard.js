import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
// import { PostShow } from "../show-test/PostShow";
import { UserProfile } from "../user-profile/ShowDataContextUser";

export const Dashboard =  () => (
    
    <Card>
        <UserProfile userId={'MyProfile'} / > 
        {/* <PostShow /> */}
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
);