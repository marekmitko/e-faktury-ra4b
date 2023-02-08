import * as React from 'react';
import { Card, Grid, 
    // Stack, Paper, TableContainer 
} from '@mui/material';
// import { OptionInputBox } from './OptionInputBox';
// import { LogotypeItem } from './LogotypeItem';
// import { flexbox } from '@mui/system';
// import { PROPERTY_VALUE_CSS_CONFIG } from '../../../../../../../config/GLOBAL_CONFIG_CONST';
import { JoyNotebox } from './JoyNotebox';
import Sheet from "@mui/joy/Sheet";
import JoyOptionbox from './JoyOptionbox';
import { useFormContext } from 'react-hook-form';
import InvoiceAdditionalCheckbox from './component/InvoiceAdditionalCheckbox';
import EhfCheckbox from './component/EhfCheckbox';
import SendInvoiceCheckbox from './component/subcomponent/SendInvoiceCheckbox';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

// *see <NewInvoiceHeader />
export const AdditionalBox = (props) => {
    const { register } = useFormContext();
    return(
        <Grid item xs={12} >
            <Grid container spacing={1} rowSpacing={1}>
                <Grid item xs={12}  >
                {/* <Grid item xs={xs? xs : 12} sm={sm? sm : 6}> */}
                {/* <Grid item xs={12} sm={6}> */}
                    <Card    sx={{  mt: 0 }} >
                        <Sheet
                            variant="plain"
                            sx={{
                                p: 2,
                                    //  bgcolor: "background.body",
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
                            {/* <Grid item xs={12} > */}
                                <Grid  xs={12} container spacing={1} rowSpacing={2} >
                                    {/* <Grid item xs={12} sm={4}>
                                        <JoyNotebox register={register} />
                                    </Grid> */}
                                    <Grid item xs={12} sm={4}>
                                        <InvoiceAdditionalCheckbox />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <SendInvoiceCheckbox />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <EhfCheckbox />
                                    </Grid>
                                            {/* 
                                    <Grid item xs={12} sm={8}>
                                        <OptionInputBox >
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
                                    </Grid>
                                    */}
                                </Grid>
                            {/* </Grid> */}
                        </Sheet>
                    </Card>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default AdditionalBox; 