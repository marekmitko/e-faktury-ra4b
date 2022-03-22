Guessed List:

export const DbclientlistList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="company" />
            <TextField source="fullname" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="MVA" />
            <TextField source="telephoneNumber" />
        </Datagrid>
    </List>
);

<!-- +++++++++++++++++++++++++++++++++++++++++++++ -->