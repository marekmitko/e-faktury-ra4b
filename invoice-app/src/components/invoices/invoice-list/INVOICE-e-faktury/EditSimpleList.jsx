
import { DateInput, Edit, SaveButton, EditButton, ReferenceInput, SimpleForm, TextInput } from 'react-admin';


export const EditSimpleList = () => (
    <Edit>
    <SimpleForm>
        <TextInput source="id" />
        <TextInput source="payment_amount" />
                <br />
        <DateInput  source="date_payment" />
  {/* <EditButton /> */}
        <SaveButton />
        </SimpleForm>
    </Edit>
);
