import * as React from "react";
import { CssBaseline, Container, GlobalStyles, TableContainer, TableFooter, TablePagination, TableCell } from "@mui/material";
import {
    List,
    Datagrid,
    TextField,
    EditButton, 
    DeleteButton,
    ArrayInput,
    SimpleFormIterator,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    Form, Title, SelectField, SelectInput, useSimpleFormIteratorItem
} from 'react-admin';
import { MobileFormIterator } from "../MobileFormIterator";


const validateAge = (value) => {

        const itemIterContext = useSimpleFormIteratorItem();
        console.log("itemIterContext:", itemIterContext);
    if (value < 18) {
        return <span>'Must be over 18' {value} </span>;
    }
    return undefined;
}

const required = () => (value) =>
    value
        ? undefined
        : 'myroot.validation.required';


const onSubmit = data => console.log(data);

export const FormsCreate = props => (
    <Create component='div' {...props}>
        {/* <SimpleForm> */}
        <Form onSubmit={onSubmit}  >
        <div>
            {/* <DatagridContextProvider value={contextValue}> */}
            {/* <DatagridRoot sx={sx} className={DatagridClasses.root}> */}
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <CssBaseline />
            <Container
                maxWidth="xl"
                component="main"
            >
                <Title title="Book list" />

            <TableContainer>
                        <tr style={{marginTop: 'auto'}}>
                <ArrayInput source="questions">
                    <MobileFormIterator> 
                            <NumberInput source="age" validate={[required(), validateAge]} />
                        <TextInput label="Question Text" source="text"  />
                        <SelectInput sx={{ mt: 0 }} source="category" choices={[
                            { id: 'tech', name: 'Tech' },
                            { id: 'lifestyle', name: 'Lifestyle' },
                            { id: 'people', name: 'People' },
                        ]} />
                        <tr>
                        <SelectInput sx={{ mt: 0 }} source="vat" choices={[
                            { id: 'tech', name: 'Tech' },
                            { id: 'lifestyle', name: 'Lifestyle' },
                            { id: 'people', name: 'People' },
                        ]} />
                        <NumberInput label="Ilość" source="qty" />
                        <TextInput label="Question Text" source="text" />
                        </tr>
                        <span> 
                        <TableCell>
                            <TextField label="Question Text" record={{text1: "123"}} source="text1" />
                        </TableCell>
                        <TableCell>
                            <TextField label="Question Text" record={{text2: "123"}} source="text2" />
                        </TableCell>
                        <TableCell>
                            <TextField label="Cena" record={{text3: "123"}} source="text3" />
                        </TableCell>
                            </span>
                    </MobileFormIterator>
                </ArrayInput>
                </tr>
            </TableContainer>
            </Container>
        </div>
        <input type='submit' />
        </Form>
        {/* </SimpleForm> */}
    </Create>
);