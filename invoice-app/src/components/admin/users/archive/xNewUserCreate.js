import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, Edit } from 'react-admin';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
export const IconToCreateIcon = PersonAddIcon;


const UserCreate = (props) => { 
    return(
        <Create component="div" redirect="list" title='Dodaj nowego kontrahenta' {...props}
            // redirect="list" 
        >
            <SimpleForm>
            </SimpleForm>
        </Create>
    );
};

export default UserCreate;