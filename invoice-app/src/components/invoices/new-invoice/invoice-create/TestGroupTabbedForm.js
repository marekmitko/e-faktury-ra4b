import { Stack, Button } from "@mui/material";
import React from "react";
import {
    ListBase,
    SaveButton,
    TabbedForm,
    FormTab,
    Edit,
    Datagrid,
    TextField,
    DateField,
    TextInput,
    ReferenceManyField,
    NumberInput,    
    DateInput,
    BooleanInput,
    EditButton,
    RichTextInput,
    Create,
    TabbedFormTabs,
    SimpleForm,
    CreateBase,
    useRecordContext
} from 'react-admin';
import { Link } from 'react-router-dom';


import { BuyerCard } from "./invoice-form/subcomponents/personal-cards/buyer/BuyerCard";



const CreateRelatedCommentButton = ({id, ...record} ) => {
   
    // const {record} = useRecordContext();
    return (
    <Button
        component={Link}
        to={{
            pathname: '/dbclientlist/create',
            state: { record: { post_id: record.id } },
        }}
    >
        Write a comment for that post
    </Button>
);
};



export const TestGroupTabbedForm = () => (
    <Create>
        <Stack direction="row" spacing={2} width="100%" 
            alignItems="flex-start" justifyContent="space-around">
            <TabbedForm    >
            {/* <TabbedForm  tabs={<TabbedFormTabs variant="scrollable" scrollButtons="auto" />} > */}
                <FormTab label="Miscellaneous">
                    <TextInput label="Password (if protected post)" source="password" type="password" />
                    <DateInput label="Publication date" source="published_at" />
                    <NumberInput source="average_note" 
                    // validate={[ number(), minValue(0) ]} 
                    />
                    {/* <BooleanInput label="Allow comments?" source="commentable" defaultValue /> */}
                    <TextInput disabled label="Nb views" source="views" />
                </FormTab>
                <FormTab label="dbclientlist">
                    <ReferenceManyField reference="dbclientlist" 
                    // target="id" 
                    label={false}>
                        <CreateBase 
                            redirect={false}
                            resource="dbclientlist">
                            <SimpleForm id="client_create_form" >

                                <TextField source="company" />
                                <DateField source="created_at" />
                                <BuyerCard />
                            </SimpleForm>
                            <hr />
                            <SaveButton formId="client_create_form" />
                            <hr />
                        </CreateBase>
                    </ReferenceManyField>
                </FormTab>
            </TabbedForm>
            <TabbedForm  syncWithLocation={false} >
                <FormTab label="comments">
                    <ReferenceManyField reference="dbclientlist" target="id" label={false}>
                        <ListBase>
                        <Datagrid>
                            <TextField source="company" />
                            <DateField source="created_at" />
                            <EditButton />
                            <CreateRelatedCommentButton />
                        </Datagrid>
                        </ListBase>
                    </ReferenceManyField>
                </FormTab>
            </TabbedForm>
            <TabbedForm  syncWithLocation={false} >
                <FormTab label="sadasd">
                    <div>

        <Create 
                
                redirect={false}
                resource="dbclientlist">
                            <SimpleForm 
                            resource="dbclientlist/create" 
                            toolbar={false} id="client_create_form" 
                            >

                                <BuyerCard />
                            </SimpleForm>
                            <hr />
                            <hr />
                            <SaveButton formId="client_create_form" />
                        </Create>
                </div>
                </FormTab >
            </TabbedForm>
        </Stack>
    </Create>
);