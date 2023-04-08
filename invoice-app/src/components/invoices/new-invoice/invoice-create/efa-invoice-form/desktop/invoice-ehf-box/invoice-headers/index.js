import * as React from 'react';
import { Card, Stack, Grid } from '@mui/material';
import { DateInputPart } from './DateInputPart';
import { LogotypeItem } from './LogotypeItem';
import { DateInput, NumberInput } from 'react-admin';
// import { flexbox } from '@mui/system';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

const todayDate = new Date();
const todayDateAdd14 = new Date(todayDate.getTime()+(14*24*60*60*1000));


// *see <NewInvoiceHeader />
export const NewInvoiceHeader = (props) => { 
    return(
        <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={2} md={3}>
                <Card sx={{ height:'100%', display: 'flex', alignContent: "center"}} >
                    <LogotypeItem titleForm={props.titleForm} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={7} >
                <Card sx={{ pt: 1, display: 'flex', flexFlow: 'row wrap', gap: 1 }} >
                {/* <NumberInput  
                //  sx={{ marginRight: 'auto', marginLeft: '20px'}}
                    defaultValue="00000"
                    source="invoice_no" 
                    variant="standard" label="myroot.form.label.input.invoice_no" disabled /> */}
            <DateInput source="date_submit" variant="standard" defaultValue={todayDate}   label="myroot.form.label.input.created_at"  />
            <DateInput source="date_payment" variant="standard" defaultValue={todayDateAdd14}  label="myroot.form.label.input.payment_due" />
                    {/* <DateInputPart {...props} /> */}
                </Card>
            </Grid>
        </Grid>
        
);
    };

export default NewInvoiceHeader; 