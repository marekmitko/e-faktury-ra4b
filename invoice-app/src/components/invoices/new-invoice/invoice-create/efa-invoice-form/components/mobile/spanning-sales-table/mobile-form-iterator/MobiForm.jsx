import {useRef} from "react";
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
    Form, Title, SelectField, SelectInput, useRecordContext
} from 'react-admin';
import { NetAndGrossPrice } from "../../../product-sales-item/subcomponents/PriceInput";
import { NetAndGrossPrice2 } from "../../../product-sales-item/subcomponents/PriceInput2";
import {MyPriceFormatInput} from "../../../product-sales-item/subcomponents/PriceFormatInput";
import { SalesTableFormIterator } from "../../../new-sales-table/components/SalesTableFormIterator";


const validateAge = (value) => {
    if (+value < 18) {
        return <span>'Must be over 18' {value} </span>;
    }
    return undefined;
}

const required = () => (value) => (
    value
        ? undefined
        : 'myroot.validation.required'
);
 


const onSubmit = data => console.log('DATA', data);

const TertComp = () => {
    const myRecord = useRecordContext();
    console.log("myRecord", myRecord);
    return( <p>Sum: </p>);
};



export const FormsCreate = props => { 

    return(
    <Create component='div' {...props}>
        {/* <SimpleForm> */}
        <Form onSubmit={onSubmit}  >
        <div>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <CssBaseline />
            <Container
                maxWidth="xl"
                component="main"
            >
                <Title title=" - Book list" />

            <TableContainer sx={{ border: "3px greenyellow inset"}}>
            <small> main container - component: TableContainer </small>
                        <tr style={{marginTop: 'auto'}}>
                <ArrayInput source="sales_table-test">
                    <SalesTableFormIterator
                        // ref={memberRef}
                    > 
                    <MyPriceFormatInput label="price net" source="myPriceFormat"   />
                    <NumberInput source="age" validate={[required(), validateAge]}   />
                    <TextInput label="Question Text" source="text"  />
                    <TextField source="text" />
                    <SelectInput sx={{ mt: 0 }} source="category" choices={[
                        { id: 'tech', name: 'Tech' },
                        { id: 'lifestyle', name: 'Lifestyle' },
                        { id: 'people', name: 'People' },
                    ]} />
                    {/* <TertComp />
                        <NumberInput label="Ilość" source="qty" />
                        <TextInput label="Question Text" source="text" />
                        <TableCell>
                            <TextField label="Question Text" record={{text1: "123"}} source="text1" />
                        </TableCell>
                        <TableCell>
                            <TextField label="Question Text" record={{text2: "123"}} source="text2" />
                        </TableCell>
                        <TableCell>
                            <TextField label="Cena" record={{text3: "123"}} source="text3" />
                        </TableCell> */}
                    </SalesTableFormIterator>
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
                    };