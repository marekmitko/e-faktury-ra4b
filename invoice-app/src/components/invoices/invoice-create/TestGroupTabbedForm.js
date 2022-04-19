import { Stack } from "@mui/material";
import React from "react";
import {
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
    CreateBase
} from 'react-admin';
import { BuyerCard } from "./invoice-form/subcomponents/personal-cards/buyer/BuyerCard";

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
                        <CreateBase resource="dbclientlist/create">
                            {/* <SimpleForm> */}

                                <TextField source="company" />
                                <DateField source="created_at" />
                                <BuyerCard />
                            {/* </SimpleForm> */}
                        </CreateBase>
                    </ReferenceManyField>
                </FormTab>
            </TabbedForm>

            <TabbedForm  syncWithLocation={false} >
                <FormTab label="comments">
                    <ReferenceManyField reference="dbclientlist" target="id" label={false}>
                        <Datagrid>
                            <TextField source="company" />
                            <DateField source="created_at" />
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
            </TabbedForm>
        </Stack>
    </Create>
);