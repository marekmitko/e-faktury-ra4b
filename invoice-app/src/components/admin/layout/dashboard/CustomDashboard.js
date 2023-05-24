import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import JoyHeaderApp from "../.efa-v4/appbar/JoyHeaderApp";
// import BoxTextInput from "../../../invoices/new-invoice/invoice-create/invoice-form/subcomponents/personal-cards/buyer/subcomponent/BoxTextInput";
// import InputBox from "../../../invoices/new-invoice/invoice-create/invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/InputBox";


export const CustomDashboard = (props) => (
    <Card>
        <Title title="e-faktury.no" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        {/* <JoyHeaderApp /> */}
        {/* <InputBox /> */}
    </Card>
);


// import * as React from "react";
// import { Card, CardContent, CardHeader, Box, Stack } from "@mui/material";
// import { FixedSellerCard } from "../../new-invoice-form/bin/FixedSellerCard";
// import { PersonalDataCard } from '../../../custom/PersonalDataCard';
// import SellerIcon from '@mui/icons-material/ManageAccounts';
// import { useResourceContext, TextField, SimpleShowLayout, useRecordContext  } from "react-admin";
// import { UserRecordWithGCC } from "../../../contexts/UserRecordContext";
// import { ZipCityDualLabel, ZipCityDualTextField } from "../../../custom/ZipCityDualTextField";
// import { SellerCard } from "../../new-invoice-form/personal-cards/seller/SellerCard";

// const ResourceName = () => {
//     const resource = useResourceContext();
//     return <>{resource}</>;
// };

// const MyBox = ({children}) => (
//         <Box
//             component="span"
//             sx={{ display: 'inline-block', m: '15px'  }}
//         >
//             {children}
//         </Box>
//     );


// //##########################################
// const PersonFullNameTextField = (props) => {
//     const record = useRecordContext(props);
    
//     return (
//         <>
//         { <div><strong>do sprawdzenia </strong> </div>}
//         <span>
//             {`${record.fullname.forename} ${record.fullname.surname}`}
//         </span>
//         </>
//     );
// }

// PersonFullNameTextField.defaultProps = {
//     label: 'Name',
//     addLabel: true,
// };



// //##########################################

// const TestCityZipCodeField = (defaultProps, props) => {
//     const {labelZipCode, labelCityName } = props;
//     // const record = useRecordContext(props);
//     defaultProps = {addLabel: true};

//     return (
//         <span>
//             <Stack direction="row" spacing={3}> 
//                 <TextField sx={{display: "inline-block"} } source="address.ZIPCode" label={labelZipCode} />
//                 <TextField addLabel source="address.city" label={labelCityName} />
//             </Stack>
//         </span>
//     );
// }



// // *see TestCityZipCodeField   
// const ZipCityCode = ({...props}, {addLabel}) => <TestCityZipCodeField  addLabel='true' label={<ZipCityDualLabel  />} /> ;

// // *see CustomDashboard
// export const CustomDashboard =  () => (
//     <>
//         <SellerCard />
//         <Card>
//             <CardHeader title="Welcome to the administration" />
//             <CardContent>Lorem ipsum sic dolor amet...</CardContent>
//         </Card>
//     </>
// );