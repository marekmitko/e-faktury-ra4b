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


    export default function PaymentChannelSwitcherV2({register}) {
    const [form, setForm] = React.useState({payment_form: 'transfer'});
    const translate = useTranslate();
    const { onChange, onBlur, name, ref } = register('payment_form'); 
    return (
        <Box sx={{ minWidth: 150, pb: 1 }}>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >

        </Box>
        <RadioGroup
            aria-labelledby="example-payment-channel-label"
            overlay
            name="example-payment-channel"
            defaultValue="Paypal"
        >
        <List
            component="div"
            variant="solid"
            //orientation="horizontal"
            row={form}
            sx={{
            borderColor: "red",
            borderRadius: 'sm',
            boxShadow: 'sm',
            bgcolor: 'background.body', border: 'none'
            }}
        >
            {[
                {id: 'transfer', value: 'transfer', label: translate('myroot.form.label.checkbox.transfer') }, 
                {id: 'cash', value: 'cash', label: translate('myroot.form.label.checkbox.cash') }
            ].map((item, index) => (
            <ListItem>
            <ListItemDecorator 
                sx={{
                    // p: 1
                }}
            >
                {[<PaymentIcon />, <AccountBalanceWallet />][index]}
            </ListItemDecorator>
                <React.Fragment key={item.id}>
                {index !== 0 && <ListDivider />}
                    <Radio 
                        
                        // size="sm" 
                        variant="outlined" 
                        id={item.id} 
                        value={item.value} 
                        color="primary" 
                        label={item.label } 
 
                        {...register('payment_form')}
                    />
                </React.Fragment>
                </ListItem>
            ))}
            </List>
        </RadioGroup>
        </Box>
    );
}
