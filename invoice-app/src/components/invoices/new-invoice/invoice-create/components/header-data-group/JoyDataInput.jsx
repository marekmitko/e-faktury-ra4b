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
 


export default function DataInput( ) {



    return(
        <>
        <Box sx={{  pb: 1,
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

                            alignItems: "flex-end", justifyContent: "flex-end" ,
                            display: 'flex',
                        p: 'var(--Card-padding)',
                        // gap: 1.5,
                        // pb: 1,
                        mb: -1,
                        // --mui-palette-neutral-plainHoverBg:
                        bgcolor: 'neutral.50',
                        opacity: 0.98,
                        filter: 'alpha(opacity=98)', // IE 5-7
                        // bgcolor: 'transparent',
                      
                        // borderBottomLeftRadius: 'calc(15px - var(--variant-borderWidth, 0px))',
                        borderBottomLeftRadius: 'calc(8px - var(--variant-borderWidth, 0px))',
                        borderBottomRightRadius: 'calc(8px - var(--variant-borderWidth, 0px))',
                        }}
                        >
                        {/* <Grid container spacing={0.5}  alignItems="flex-end" > */}

            
                    {/* <Grid item xs={12}  sx={{ m: .75,   }}   alignItems="flex-end"  justifyContent="flex-end" > */}
                        <Box sx={{  display: 'flex',  p: 0.75,
                                    alignItems: "center", justifyContent: "center",  flexFlow: 'row nowrap', mr: 0.5,  
                    }} >
                            <Box sx={{ flex: '1 1 20em ', display: 'flex', flexDirection: 'column'}}>
                                <Chip size="sm" variant="solid"   sx={{  textTransform: 'uppercase', px: 1, borderRadius: 1, color: 'text.secondary', bgcolor: 'transparent', mb: -0.1,   }}   >
                                    {/* {startLabel ? startLabel : '' } */} 
                                    TERMIN: 
                                </Chip> 
                            </Box>
                            <Box sx={{ flex: '2 2 20em', mr: -0.25 }}>
                                    <Input type="date" size="xs"  
                                        slotProps={{
                                            input: { 
                                                autocomplete: "off",
                                                // id: 'unique-id',
                                            },
                                            root: ({  focusVisible, primary, success, info}) => ({
                                            sx:    {  
                                                '--Input-focusedThickness': '1.5px',
                                                '--Input-radius': '5px',
                                                '& input': { pl: '2px',
                                                    '--Input-placeholderOpacity': .5,  //toDo Trzeba to poprawić jakoś 
                                                    fontSize: 'medium', color: 'neutral.700',
                                                    maxWidth: '115px',
                                                    textAlign: 'center'
                                                    // width: 'max-content',
                                                    // textTransform: 'uppercase'
                                                //     "& svg": {  color: 'success'
                                                // },
                                                // "&:hover svg": {
                                                //     color: 'var(--mui-palette-primary-800)',
                                                // },
                                                // color: 'var(--mui-palette-primary-800)',
                                            }, 




                                            }
                                        })
                                    }}
                                    
                                    
                                    />
                            </Box>      
                        </Box>
                    {/* </Grid> */}
                    {/* </Grid> */}
                    </CardOverflow>

         
                        {/* <Typography textColor='neutral.700' level="body2" fontWeight='400' sx={{     px: 1,  }}>
                            {translate('myroot.form.label.header.additional_note')}
                        </Typography> */}
            </Box>
        </Box>
                    </>
        )
}