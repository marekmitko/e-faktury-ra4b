import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Checkbox  from '@mui/joy/Checkbox';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { useTranslate } from 'react-admin';
import Apartment from "@mui/icons-material/Apartment";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payments";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';


    export default function SendInvoiceCheckbox() {
    const [row, setRow] = React.useState(true);
    const translate = useTranslate();

    return (
        <Box sx={{ minWidth: 240 }}>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >
            <Typography
                id="example-payment-channel-label"
                // level="body5"
                textTransform="uppercase"
                // fontWeight="xl"
                sx={{ 
                    fontSize: "xs1",
                    letterSpacing: "xs",
                    fontWeight: "lg",
                    color: "text.secondary",
                    pb: 1,
                }}
            >
            {translate('myroot.form.label.header.send_invoice')}
            </Typography>
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
            row={row}
            sx={{
            borderRadius: 'sm',
            boxShadow: 'sm',
            bgcolor: 'background.body',
            
            }}
        >
                    {/* <Typography
                id="example-payment-channel-label"
                // level="body5"
                textTransform="uppercase"
                // fontWeight="xl"
                sx={{ 
                    fontSize: "xs1",
                    letterSpacing: "xs",
                    fontWeight: "lg",
                    color: "text.secondary",
                    pb: 1,
                }}
            >
            {"NA ADRES: "}
            </Typography> */}

        {['Pocztą tradycyjną', 'Email'].map((value, index) => (
            <ListItem>
            <ListItemDecorator 
                sx={{
                    // p: 1
                }}
            >
                {[<Apartment />, <ForwardToInboxIcon />][index]}
            </ListItemDecorator>
                <React.Fragment key={value}>
                {index !== 0 && <ListDivider />}
                    <Checkbox  
                        variant="outlined"
                        id={value} 
                        value={value} 
                        label={value} />
                </React.Fragment>
                </ListItem>
            ))}
            </List>
        </RadioGroup>
        </Box>
    );
}
