import { Card, Grid, Checkbox, FormControlLabel} from '@mui/material';
import {useRef, useState } from 'react';
import { useController, useWatch, Controller } from 'react-hook-form';
import { Datagrid, DateField, TextField, Create, SimpleForm, List, Edit, useResourceContext, ResourceContextProvider, ReferenceInput, TabbedForm } from 'react-admin';
import Header from './subcomponents/invoice-headers';
import { SellerCard } from './subcomponents/personal-cards/seller/SellerCard';
import ClientCard from './subcomponents/personal-cards/client/ClientCard';
import RHFEasyItemRow from './xold-component/RHFEasyItemRow';
import MYEasyItemRow from './xold-component/MYEasyItemRow';
import { RaMuiRHFEasyItemRow } from './xold-component/RaMuiRHFEasyItemRow';

import SalesTable from './xold-component/SalesTable';
import EnhancedSalesTable from './xold-component/EnhancedSalesTable';
import SpanningSalesTable from './subcomponents/sales-table/SpanningSalesTable';
import AdditionalOptions from './subcomponents/invoice-additional-options';
import OptionLine from './subcomponents/option-line/OptionLine';
import CheckboxText from './checkbox-group-options/CheckboxTest';
// import AdditionalOptions from './subcomponents/invoice-additional-options';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-detail-simpleshowlayout--several-columns
// https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-forms-simpleform--basic

// Grid Layout Invoice Form -> przeniesiono  <Grid item xs={12} sm={6}> in PersonalDataCard.js -> wrapper SellerCard ClientCard 


export const InvoiceFormLayout = (props) => {
    const EHFCheckbox  = useController({ name: 'invoiceEHF', defaultValue: false, });
    // const [isEHFEnabled, setIsEHFEnabled] = useState(false);
    // const moreDetailEHF = watch("moreDetailEHF");

    const moreDetailEHF = useWatch({ name: "invoiceEHF" });
    console.log("EHFCheckbox", moreDetailEHF);

    return( 
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}>
            <Header />
            <SellerCard />
            <ClientCard />  
            {/* <Grid item xs={12} >
                <OptionLine />
            </Grid> */}
            <Grid item xs={12}  > 
            {props.children? (props.children) : null }
                {/* <SpanningSalesTable /> */}
            </Grid>
            <AdditionalOptions moreDetailEHF={moreDetailEHF} >
            <FormControlLabel
                label="Invoice EHF"
                control={
                    <Checkbox {...EHFCheckbox.field}
                    onChange={(e) => {
                        // console.log(field);
                        EHFCheckbox.field.onChange(e.target.checked)
                    }}
                    checked={EHFCheckbox.field.value}
                    />}
                    />
            </AdditionalOptions> 
                    <CheckboxText />
        </Grid>
    ) ; 
};