import * as React from 'react';
import { useRecordContext, Edit, SimpleForm, TextInput, NumberInput, TextField } from 'react-admin'
import { Card, Stack, Grid } from '@mui/material';
// import { OptionInputBox } from './OptionInputBox';
// import { LogotypeItem } from './LogotypeItem';
// import { flexbox } from '@mui/system';
// import { PROPERTY_VALUE_CSS_CONFIG } from '../../../../../../../config/GLOBAL_CONFIG_CONST';
import JoyTypography from "@mui/joy/Typography";

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const JoyNotebox = (props) => (

            <Grid item xs={12} sm={4}>
                {/* <Card sx={{ p: 0.5, height:'100%', display: 'flex', alignContent: "flex-start" }} > */}
                <JoyTypography
                        id="member"
                        sx={{
                            textTransform: "uppercase",
                            fontSize: "xs2",
                            letterSpacing: "lg",
                            fontWeight: "lg",
                            color: "text.secondary",
                            mb: 2
                        }}
                    >
                        UWAGI DO FAKTURY
                    </JoyTypography>

                {/* </Card> */}
            </Grid>
);

export default JoyNotebox; 