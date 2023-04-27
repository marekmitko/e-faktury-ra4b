import * as React from 'react';
import { Card, Stack, Grid, useMediaQuery } from '@mui/material';
import HeaderDateGroup from '../../../../components/header-data-group';
import FinalDatePickerSelectinput from '../../../../components/header-data-group/new-date-group-V5/mix/FinalDatePickerSelectinput';
import { Input } from '@mui/joy';
import { MQ_isMedium } from '../../../components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles';
// import { flexbox } from '@mui/system';

// TODO Added props sx + spacing 
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */}

const todayDate = new Date();
const todayDateAdd14 = new Date(todayDate.getTime()+(14*24*60*60*1000));


// *see <NewInvoiceHeader />
export const NewInvoiceHeader = (props) => { 

    const isMedium = useMediaQuery(`${MQ_isMedium}`);

    return(
        <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={12} md={6} >
                <HeaderDateGroup />
                {/* <MyCustomRangeDatePicker /> */}
            </Grid>
            { !isMedium &&
                <Grid item xs={12} sm={6} md={6} >
                
                <br/>
                        <FinalDatePickerSelectinput />
                        <Input disabled value='ddd' /> 
                </Grid>
            }
        </Grid>
        
);
    };

export default NewInvoiceHeader; 