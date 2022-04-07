import React, { Fragnent, useState, useEffect, } from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    useQuery, CheckboxInput,
} from 'react-admin';
import { Card, Typography, Box, Toolbar, Paper, makeStyles } from '@mui/material';

import BoxTextInput from './subcomponent/BoxTextInput';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       padding: theme.spacing(0.5),
//       textAlign: 'center',
//     //   color: theme.palette.text.secondary,
//     },
//   }));


const InvoiceBuyerForm = props => {
// console.log(UserProfile("Profile12356x"));

// const [customers, setCustomers] = useState([]);
// const { data: customer } = useQuery({
//   type: 'getList',
//   resource: 'tradePartners_list',
//   payload: {
//     pagination: { page: 1, perPage: 600 },
//     sort: { field: 'company', order: 'ASC' },
//     filter: {},
//   },
// });

// useEffect(() => {
//     if (customer) {
//     setCustomers(customer.map((d) => ({ id: d.company, name: d.company })));};
//   }, [customer]);


//   const [version, setVersion] = React.useState(0);
//   const handleChange = React.useCallback(() => setVersion(version + 1), [version]);

 
// const classes = useStyles();
const dataBuyer = {};
    return (
        // <Card variant="outlined" 
        // className={classes.paper}
    // >
    <Box display='flex'
        component="div"
        sx={{ display: 'flex', m: "-70px", p:0, 
        transform: 'scale(0.8)' }}
    >


            <Box display="flex">
                <Box flex={2} m="1em">
                    {/* <Typography variant="subtitle1" gutterButtom>
                DANE NABYWCY</Typography> */}
                    {/* <Box display="flex" mb="-1.5em">
              
                            <SelectInput  label="Wybierz Kontrahenta" variant ="outlined" source='company' choices={customers} fullWidth />
             
                        </Box> */}
                    <BoxTextInput flex={2} mt="0" mb="-1em" label="Company Name" source="contact.email" resource="buyer" type="email" />
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput label="First Name" source="fullname.forename" resource="buyer" mr="0.5em" />
                        <BoxTextInput label="Last Name" source="fullname.surname" resource="buyer"/>
                    </Box>
                

                    <Typography  variant="body2" align="left">
                ADRES NABYWCY</Typography>
                    <BoxTextInput label="Street Name" mb="-1.5em" mt="-0.5em" source="addres.street" resource="buyer" multiline  />
                    <Box display="flex" mb="-1.75em">
                        <BoxTextInput label="ZIP Code" source="addres.ZIPCode" resource="buyer" mr="0.5em" />
                        <BoxTextInput label="City Name" flex={2} source="addres.city" resource="buyer"/>
                    </Box>
                    {/* <BoxTextInput flex={2} mt="0" mb="-1em" source="contact.email" resource="buyer" type="email" /> */}
                    <Box display="flex" mt="1em" mb="-1.5em">
                        <BoxTextInput label="MVA Code" mt="-0.75em"  mb="-1em"    source="buyerMVA"  initialValue={dataBuyer.noMVA}    mr="0.5em"  />
                        {/* <BooleanInput label="MVA" 
                            // source={dataBuyer.noMVA} 
                            /> */}
                    </Box>    
                    <Box mt="1em" mb="-1.5em">
                        {/* <Typography  variant="body2" align="right">
                    DANE KTONTAKTOWE</Typography> */}
                    </Box>
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput label="Phone number" source="myPhoneNo"  initialValue={dataBuyer.myPhone} variant="standard"   mr="0.5em"  />
                        <BoxTextInput label="e-mail address" source="myEmail"  initialValue={dataBuyer.myEmail}  variant="standard" mr="0.5em" disabled /> 
                    </Box>
                    <Box display="flex" mt="-1.5em" mb="-1.5em">
                        <Box mt="1em" mb="-1.5em">
                            {/* <Typography  variant="body2" align="right">
                        NUMER ORG. </Typography> */}
                        </Box>
                    </Box>
                </Box>

            </Box>
            </Box>
        // </Card>
    )
};

export default InvoiceBuyerForm;