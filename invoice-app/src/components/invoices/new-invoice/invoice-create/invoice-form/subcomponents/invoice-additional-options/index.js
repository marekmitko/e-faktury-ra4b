import * as React from 'react';
import { useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import { Card, Stack, Grid } from '@mui/material';
import { OptionInputBox } from './OptionInputBox';
import { LogotypeItem } from './LogotypeItem';
import { flexbox } from '@mui/system';
import { PROPERTY_VALUE_CSS_CONFIG } from '../../../../../../../config/GLOBAL_CONFIG_CONST';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const AdditionalOptions = (props) => (
    <Grid item xs={12} >
        <Grid container spacing={1} rowSpacing={2} >
            <Grid item xs={12} sm={6}>
                <Card sx={{ p: 0.5, height:'100%', display: 'flex', alignContent: "flex-start" }} >
                    <div>{"note invoice test"}</div>

                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card sx={{  p: 0.5, pb: 0,height:'100%', alignContent: "flex-start" }} >
                    <OptionInputBox >
                    {props.children ? (props.children) : null}
                    </OptionInputBox>
                    <div>
                    {props.moreDetailEHF && (
               
                <div>
                    <label> Wystawca: </label>
                    <input type="text" 
                    // {...register("Interests")}
                     />
                     <label> Odbiorca: </label>
                    <input type="text" 
                    // {...register("Interests")}
                     />
                     <label> Nr: </label>
                    <input type="text" 
                    // {...register("Interests")}
                    />
                    </div>
                    )}
               
                    </div>
                </Card>
            </Grid>
        </Grid>
    </Grid>
        
);

export default AdditionalOptions; 