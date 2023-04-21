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
import { CardOverflow, Chip, Grid } from '@mui/joy';
import { Controller } from 'react-hook-form';
import PaymentDueDateField from './PaymentDueDateField';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';


export default function CardSubcaptionV2( ) {



        
            
            const [data, setData] = React.useState({
                email: '',
                status: 'initial',
            });
            
            const handleSubmit = (event ) => {
                event.preventDefault();
                setData((current) => ({ ...current, status: 'loading' }));
                try {
                // Replace timeout with real backend operation
                setTimeout(() => {
                    setData({ email: '', status: 'sent' });
                }, 1500);
                } catch (error) {
                setData((current) => ({ ...current, status: 'failure' }));
                }
            };
            
            const today = new Date();
            const dateTest  = today.toLocaleDateString();

            return (
                <form onSubmit={handleSubmit} id="demo">
                <FormControl>
                    {/* <FormLabel
                    sx={(theme) => ({
                        '--FormLabel-color': theme.vars.palette.primary.plainColor,
                    })}
                    >
                    MUI Newsletter
                    </FormLabel> */}
                    <Input size="xs"
                    // type="date"
                    sx={{ '--Input-decoratorChildHeight': '145px', pl: 0 }}
                    placeholder={dateTest}
                    // type="email"
                    required
                    value={data.email}
                    onChange={(event) =>
                        setData({ email: event.target.value, status: 'initial' })
                    }
                    error={data.status === 'failure'}
                    startDecorator={
                        // <Button
                        //     size='xs'
                        //     // defaultChecked
                        //     variant="solid"
                        //     color="neutral.200"
                        //     loading={data.status === 'loading'}
                        //     type="submit"
                        //     sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0,
                        //         ml: -0.5, py:  .7, transform: 'scale(0.8)',
                        //     }}
                        // >
                            <Typography size="sm" level="body4" sx={{ p: 0, m: 0,
                                            fontWeight: 'bold', fontSize: '0.5rem'
                            }} >
                                TERMIN PŁATNOŚCI
                            </Typography>
                        // </Button>
                    }
                    />
                    {data.status === 'failure' && (
                    <FormHelperText
                        sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                    >
                        Oops! something went wrong, please try again later.
                    </FormHelperText>
                    )}
                    {data.status === 'sent' && (
                    <FormHelperText
                        sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                    >
                        You are all set!
                    </FormHelperText>
                    )}
                </FormControl>
                </form>
            );
        }

