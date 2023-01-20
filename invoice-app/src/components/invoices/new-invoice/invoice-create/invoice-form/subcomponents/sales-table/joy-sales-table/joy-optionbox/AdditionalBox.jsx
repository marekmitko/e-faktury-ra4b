import * as React from 'react';
import { useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import { Card, Stack, Grid } from '@mui/material';
// import { OptionInputBox } from './OptionInputBox';
// import { LogotypeItem } from './LogotypeItem';
// import { flexbox } from '@mui/system';
// import { PROPERTY_VALUE_CSS_CONFIG } from '../../../../../../../config/GLOBAL_CONFIG_CONST';
import { JoyNotebox } from './JoyNotebox';
import Sheet from "@mui/joy/Sheet";
import JoyOptionbox from './JoyOptionbox';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const AdditionalBox = (props) => (

<Sheet
                    variant="outlined"
                    sx={{
                         p: 2,
                         bgcolor: "background.body",
                         borderRadius: "sm",
                         // width: 360,

                         maxWidth: "100%",
                         display: "flex"
                         // justifyContent: ""
                         // flexDirection: "column",
                         // justifyContent: "flex-start",
                         // alignContent: "flex-start"
                    }}
               >




    <Grid item xs={12} >
        <Grid container spacing={1} rowSpacing={2} >
            <JoyNotebox />
            <JoyOptionbox />
            <Grid item xs={12} sm={6}>
                    {/* <OptionInputBox >
                    {props.children ? (props.children) : null}
                    </OptionInputBox>
                    <div>
                    {props.moreDetailEHF && ( 
                // <div>
                //     <label> Wystawca: </label>
                //     <input type="text" 
                //     // {...register("Interests")}
                //      />
                //      <label> Odbiorca: </label>
                //     <input type="text" 
                //     // {...register("Interests")}
                //      />
                //      <label> Nr: </label>
                //     <input type="text" 
                //     // {...register("Interests")}
                //     />
                //     </div>
                //     )}
                //     </div>
            */}
            </Grid>
        </Grid>
    </Grid>
        
                </Sheet>
);

export default AdditionalBox; 