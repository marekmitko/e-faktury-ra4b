import * as React from 'react';
import { Card, Stack, Grid } from '@mui/material';
import { DateInputPart } from './DateInputPart';
import { LogotypeItem } from './LogotypeItem';
// import { flexbox } from '@mui/system';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const NewInvoiceHeader = (props) => (
        <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={2} md={3}>
                <Card sx={{ height:'100%', display: 'flex', alignContent: "center"}} >
                    <LogotypeItem titleForm={props.titleForm} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
                <Card sx={{ pt: 1}} >
                    <DateInputPart {...props} />
                </Card>
            </Grid>
        </Grid>
        
);

export default NewInvoiceHeader; 