import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';
import { PostTitle } from "./PostTitle";

// Odpowiednikiem <List>     jest    <Edit>
// odpowiednikiem   <Datagird> jest    <SimpleForm>

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);