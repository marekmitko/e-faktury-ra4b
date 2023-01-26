import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useGetOne, useUpdate, Title, ArrayInput, Edit, SimpleForm, SimpleFormIterator, TextInput, NumberInput } from "react-admin";
import { Card, TextField, Button, Stack, MenuItem } from "@mui/material";




const SaleItemEdit = () => (
    <Edit>
        <SimpleForm>

            {/* <TextInput source="id" /> */}
        <Stack direction="row" spacing={2} >
            <TextInput source="sales_category_name" />
            <NumberInput source="category_tax" />
        </Stack>
            <ArrayInput source="category_item_list">
                <SimpleFormIterator inline>
                    {/* <TextInput source="id" /> */}
                    <TextInput source="name" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);












const PreSaleItemEdit = () => {
const { id } = useParams();
    const { handleSubmit, reset, control } = useForm();
    const { isLoading } = useGetOne(
        "books",
        { id },
        { onSuccess: (data) => reset(data) }
    );
    const [update, { isLoading: isSubmitting }] = useUpdate();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        update(
            "books",
            { id, data },
            { onSuccess: () => { navigate('/books'); } }
        );
};

if (isLoading) return null;
return (
    <div>
    <Title title="Book Edition" />
    <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
            <Controller
            name="title"
            render={({ field }) => <TextField label="Title" {...field} />}
            control={control}
            />
            <Controller
            name="author"
            render={({ field }) => <TextField label="Author" {...field} />}
            control={control}
            />
            <Controller
            name="availability"
            render={({ field }) => (
                <TextField select label="Availability" {...field}>
                <MenuItem value="in_stock">In stock</MenuItem>
                <MenuItem value="out_of_stock">Out of stock</MenuItem>
                <MenuItem value="out_of_print">Out of print</MenuItem>
                </TextField>
            )}
            control={control}
            />
            <Button type="submit" disabled={isSubmitting}>
            Save
            </Button>
        </Stack>
        </form>
    </Card>
    </div>
);
};

export default SaleItemEdit;