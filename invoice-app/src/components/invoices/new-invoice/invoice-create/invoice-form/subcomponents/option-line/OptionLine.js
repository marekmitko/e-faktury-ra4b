import * as React from 'react';
import { useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import { Card, Stack, Grid } from '@mui/material';
import { DateInputPart } from '../invoice-headers/DateInputPart';
import { LogotypeItem } from '../invoice-headers/LogotypeItem';
import { flexbox } from '@mui/system';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
const OptionLine = ({children}) => (
    <Grid item xs={12} >
        <Grid container spacing={1} rowSpacing={2}>
            <Grid item xs={12} sm={4}>
                <Card 
                    // sx={{ height:'100%', display: 'flex', alignContent: "center"}} 
                >
                   {children}
                </Card>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Card sx={{  textAlign: 'center', height: '100%'}} >
                    <DateInputPart />
                </Card>
            </Grid>
        </Grid>
    </Grid>
        
);

export default OptionLine; 