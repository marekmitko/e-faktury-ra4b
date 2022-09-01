import React from 'react';
import { useCreate, useCreateSuggestionContext, useRedirect } from 'react-admin';
import db_buyer from './db_empty_buyer';





export const OnCreateNewBuyer = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate();
    const redirect = useRedirect();
    
    
    const newAuthorName = window.prompt(
        'Enter a new author',
        filter
    );
    
    db_buyer.company = value;

    create(
        'buyers', { data: db_buyer },
            {
                onSuccess: ({ data }) => {
                    setValue('');
                    redirect('');
                    onCreate(data);
            },
        }
        );

        return {}
};