import * as React from 'react';
import { useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import { Card, Stack, Grid } from '@mui/material';
import { DateInputPart } from './DateInputPart';
import { LogotypeItem } from './LogotypeItem';
import { flexbox } from '@mui/system';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const NewInvoiceHeader = (props) => (
    <Grid container spacing={1} rowSpacing={2}>
        <Grid item xs={12} sm={4}>
            <Card sx={{ height:'100%', display: 'flex', alignContent: "center"}} >
                <LogotypeItem />
            </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
            <Card sx={{ pt: 3}} >
                <DateInputPart />
            </Card>
        </Grid>
    </Grid>
        
);

export default NewInvoiceHeader; 