import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

export const MyProfileCardWrapper = (props) => (
    <Card>
        <Title id="react-admin-title"/>
        <CardContent> 
            {props.children}
        </CardContent>
    </Card>
);