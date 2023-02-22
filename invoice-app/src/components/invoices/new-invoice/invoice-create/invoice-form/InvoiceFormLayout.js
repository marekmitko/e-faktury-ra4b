import {   Grid, } from '@mui/material';
import { useResourceContext   } from 'react-admin';
import ClientCard from '../efa-invoice-form/personal-cards/bin/ClientCard';
import { SellerCard } from '../efa-invoice-form/personal-cards/bin/SellerCard';
// import Header from './subcomponents/invoice-headers';
import AdditionalBox from './subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox';

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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

            <Grid item xs={12}  >
                  
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

                    <Grid item xs={12}  > 
            <AdditionalBox />
        </Grid>
        </Grid>
    ) ; 
};