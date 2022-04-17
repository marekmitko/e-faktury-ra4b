import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

export const MyProfileCardWrapper = ({component, children, ...props}) => {
    if(component === "div") {
        return(
        <div>
                <Title id="react-admin-title"/>
                <CardContent> 
                    {children}
                </CardContent>
        </div>
        );
    };
    
    return(
        <Card> 
            <Title id="react-admin-title"/>
            <CardContent> 
                {children}
            </CardContent>
        </Card>
    );
};