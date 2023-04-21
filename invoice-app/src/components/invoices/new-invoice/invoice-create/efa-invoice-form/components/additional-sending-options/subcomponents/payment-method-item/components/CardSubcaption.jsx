import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { useTranslate } from 'react-admin';
import Apartment from "@mui/icons-material/Apartment";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payments";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import OrientationSwitch from './components/OrientationSwitch';
import { CardOverflow, Chip, Grid, Input } from '@mui/joy';
import { Controller } from 'react-hook-form';
import PaymentDueDateField from './PaymentDueDateField';
 


export default function CardSubcaption( ) {



    return(
        <>
        <Box sx={{  pb: 1, mt: -0.25
            //  mt: 1, 
        }} >
            <Box sx={{ p: 1,
                //  mt: 1, 
            }} >
                {/* <Grid container spacing={1}> */}
                <ListDivider sx={{ py: .1   }} />



                <CardOverflow
                        variant="soft"
                        sx={{
                            display: 'flex',
                        p: 'var(--Card-padding)',
                        // gap: 1.5,
                        // pb: 1,
                        mb: -1,
                        // --mui-palette-neutral-plainHoverBg:
                        bgcolor: 'neutral.50',
                        // bgcolor: 'transparent',
                      
                        // borderBottomLeftRadius: 'calc(15px - var(--variant-borderWidth, 0px))',
                        borderBottomLeftRadius: 'calc(8px - var(--variant-borderWidth, 0px))',
                        borderBottomRightRadius: 'calc(8px - var(--variant-borderWidth, 0px))',
                        }}
                        >
                        <Grid container spacing={0.5}  alignItems="flex-end" >

            
                    <Grid item xs={12}  sx={{ m: .75,   }}   alignItems="flex-end"  justifyContent="flex-end" >
                        <Box sx={{ display: 'flex', flexFlow: 'row nowrap', mr: 0.5,  //alignItems: "flex-end", justifyContent: "flex-end" 
                    }} >
                            <Box sx={{ flex: '1 1 20em '}}>
                                <Chip size="sm" variant="solid"   sx={{  textTransform: 'uppercase', px: 0.5, borderRadius: 1, color: 'text.secondary', bgcolor: 'transparent', mb: -0.1,   }}   >
                                    {/* {startLabel ? startLabel : '' } */} 
                                    TERMIN:
                                </Chip>
                            </Box>
                            <Box sx={{ flex: '2 2 20em', }}>
                                    <Input type="date" size="xs" sx={{ maxWidth: '115px', '& input': {pl: '5px'} }} />
                            </Box>      
                        </Box>
                    </Grid>
                    </Grid>
                    </CardOverflow>

         
                        {/* <Typography textColor='neutral.700' level="body2" fontWeight='400' sx={{     px: 1,  }}>
                            {translate('myroot.form.label.header.additional_note')}
                        </Typography> */}
            </Box>
        </Box>
                    </>
        )
}