import * as React from "react";
import { blue, blueGrey } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailOutline';
import DataContatctIcon from '@mui/icons-material/Wysiwyg';
import { Stack, Typography, Box, Divider, Tooltip, TableCell, TableRow } from "@mui/material";
import { TextField, WrapperField, SimpleShowLayout, useTranslate, useRecordContext } from "react-admin";
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

// BUG // *see ZipCityCode

export const SellerDataShowLayout = (props, propTypes) => {
    const translate = useTranslate();
    return(
    
    <SimpleShowLayout>
        <Box direction="row" gap={1} width="100%">
            <TableCell component='td' sx={{ border: 0 }} ><TextField source="user_company" /></TableCell >
                <TableCell sx={{ border: 0 }} >
                    <small>{ translate('myroot.form.label.title.mva') }: </small> 
                    <TextField  source="user_org_nr"  label={translate('myroot.myBuyersEfaktury.show.fields.org_nr')} />

                </TableCell>
            </Box>
                   
                {/* <Tooltip       placement="top-start"   title="To jest poważny komercyjny projekt 💪🏻🚀❤⭐"        arrow>
                        <SmsFailedOutlinedIcon sx={{color: blue, mt: -4, ml: 20 }}/>
                    </Tooltip> */}
        {/* <Stack direction="row" gap={1} width="100%">
                <MailIcon />
                
                <Box direction="row" gap={1} width="100%">
                    <Typography variant="button" display="block" gutterBottom>
                        <strong>{translate('myroot.form.label.header.address')}</strong>
                    </Typography>
                    <Divider   flexItem 
                    sx={{
                        mt: -1, 
                        // bgcolor: blue[300]
                    }} 
                    />
                    </Box>
            </Stack> */}
            
            <Stack direction="row" gap={1} width="100%">
                <DataContatctIcon />
                <Box direction="row" gap={1} width="100%">
                {/* <Typography variant="overline" display="block" gutterBottom> */}
                    <Typography variant="button" display="block" gutterBottom
                        sx={{
                            color: blueGrey[800]
                        }}     
                        >
                        <strong>{translate('myroot.form.label.header.contact')}</strong>
                    </Typography>
                    <Divider   flexItem 
                    sx={{
                        mt: -1, 
                        // bgcolor: blueGrey[500]
                    }} 
                    />
                    </Box>
            </Stack>
            {/* <Stack direction="row" gap={1} width="100%"> */}
                {/* <div><b>Dodawać?</b></div> */}

                <WrapperField label="myroot.form.label.header.address" >
                    <Box direction="row" sx={{ border: 0, mt: '-15px' }}gap={1} width="100%">
                        <TableRow sx={{ pt: -10 }}>
                            <TableCell sx={{ border: 0, pt: '-10px'}} >
                                <small>{ translate('myroot.form.label.title.street') }:</small>   
                            </TableCell>  
                            <TableCell sx={{pl: '115px', border: 0 }} >
                                <small>{ translate('myroot.form.label.title.place') }: </small>
                            </TableCell>  
                        </TableRow>
                        <div style={{marginTop: '-30px'}}>
                            <TableCell   sx={{ pl: '50px', border: 0 }} >
                                <TextField    source="user_address" />  
                            </TableCell>  
                            <TableCell sx={{ pl: '85px', border: 0 }} >
                                <TextField    source="user_place"     /> <TextField  source="user_zip_code" />
                            </TableCell>  
                        </div>
                    </Box>
                </WrapperField >
                <WrapperField label="myroot.fullname" >
                     <TableCell sx={{ border: 0 }} >
                        <TextField  source="user_firstname" label="myroot.myBuyersEfaktury.show.fields.firstname" /> {" "} <TextField  source="user_lastname" />  {" "} {" "}{"   "}
                   
                    </TableCell>
                    <TableCell sx={{ border: 0 }}  >
                        <TextField    source="user_email"     /> 
                    </TableCell>  
                    <TableCell sx={{ border: 0 }} >
                        <TextField    source="user_phone"     />
                    </TableCell>  
                </WrapperField>



    </SimpleShowLayout>
    );
};













// export const SellerData6666444444444444464644444444444444444444444333343ShowLayout = (props) => (
// <SimpleShowLayout>
//     <TextField label="Company Name" source="company" />
//     <TextField label="Full Name" source="fullName" />
//         <TextField label="Street" source="address.street" />
//         <ZipCityDualTextField label={<ZipCityDualLabel  />} sourceZip="address.ZIPCode" sourceCity="address.city" />
//         <TextField label="MVA Code" source="orgId.orgNumber" />

//         <CodeAndNameCity  sourceCode="address.ZIPCode" sourceName="address.city"   />
//     </SimpleShowLayout>
// );