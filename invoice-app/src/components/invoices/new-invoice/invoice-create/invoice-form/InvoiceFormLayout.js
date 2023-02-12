import { Card, Grid, Checkbox, FormControlLabel} from '@mui/material';
import {useRef, useState } from 'react';
import { useController, useWatch, Controller } from 'react-hook-form';
import { useResourceContext, ResourceContextProvider, ReferenceInput, TabbedForm, SimpleShowLayout, useRecordContext } from 'react-admin';
import Header from './subcomponents/invoice-headers';
import { SellerCard } from './subcomponents/personal-cards/seller/SellerCard';
import ClientCard from './subcomponents/personal-cards/client/ClientCard';
import JoyNotebox2 from './subcomponents/sales-table/joy-sales-table/joy-optionbox/JoyNotebox2';
import AdditionalBox from './subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox';
import { EhfOptionbox } from '../efa-invoice-form/invoice-ehf-box/EhfOptionbox';

// import AdditionalOptions from './subcomponents/invoice-additional-options';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-detail-simpleshowlayout--several-columns
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-forms-simpleform--basic

// Grid Layout Invoice Form -> przeniesiono  <Grid item xs={12} sm={6}> in PersonalDataCard.js -> wrapper SellerCard ClientCard 


export const InvoiceFormLayout = (props) => {
    // const EHFCheckbox  = useController({ name: 'TESTinvoiceEHF', defaultValue: false, });
    // const [isEHFEnabled, setIsEHFEnabled] = useState(false);
    // const moreDetailEHF = watch("moreDetailEHF");

    // const moreDetailEHF = useWatch({ name: "invoiceEHF" });
    // console.log("EHFCheckbox", moreDetailEHF);


    // console.log("myRecord", myRecord);
    return( 
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} sx={{   border: '1px dashed grey' }}>

            <Grid item xs={12}  >
                <Header titleForm={props.titleForm }/>     
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <SellerCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <ClientCard />  
            </Grid>
            <Grid item xs={12}  > 
                {props.children? (props.children) : null }
            </Grid>
                                    {/* <AdditionalOptions moreDetailEHF={moreDetailEHF} > */}
                                    {/* <FormControlLabel
                                        label="Invoice EHF"
                                        control={
                                            <Checkbox {...EHFCheckbox.field}
                                            onChange={(e) => {
                                                console.log(EHFCheckbox.field);
                                                EHFCheckbox.field.onChange(e.target.checked)
                                            }}
                                            checked={EHFCheckbox.field.value}
                                            />}
                                    /> */}

                    <Grid item xs={12}  > 
            <AdditionalBox />
        </Grid>
            {/* <JoyNotebox2 register={()=>{}}/> */}
                    {/* <CheckboxText /> */}
        </Grid>
    ) ; 
};