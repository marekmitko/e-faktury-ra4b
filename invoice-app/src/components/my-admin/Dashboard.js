import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { PostShow } from "../show-test/PostShow";

export const Dashboard =  () => (
    
    <Card>
        <PostShow />
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
);