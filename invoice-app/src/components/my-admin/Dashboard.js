import * as React from "react";
import { Card, CardContent, CardHeader, Box, Stack } from "@mui/material";
import { FixedSellerCard } from "../invoice-form/bin/FixedSellerCard";
// import { PostShow } from "../show-test/PostShow";
import {PersonalDataCard} from '../../custom/PersonalDataCard';
import SellerIcon from '@mui/icons-material/ManageAccounts';
import { useResourceContext, TextField, ShowBase, SimpleShowLayout, useRecordContext  } from "react-admin";
import { UserRecordWithGCC } from "../../contexts/UserRecordContext";
import { ShowSellerCard } from "../invoice-form/personal-cards/ShowSellerCard";
import { ZipCityDualLabel, ZipCityDualTextField } from "../../custom/ZipCityDualTextField";



const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
};

const MyBox = ({children}) => (
        <Box
            component="span"
            sx={{ display: 'inline-block', m: '15px'  }}
        >
            {children}
        </Box>
    );


//##########################################
const PersonFullNameTextField = (props) => {
    const record = useRecordContext(props);
    
    return (
        <>
        { <div><strong>do sprawdzenia </strong> </div>}
        <span>
            {`${record.fullname.forename} ${record.fullname.surname}`}
        </span>
        </>
    );
}

PersonFullNameTextField.defaultProps = {
    label: 'Name',
    addLabel: true,
};



//##########################################

const TestCityZipCodeField = (defaultProps, props) => {
    const {labelZipCode, labelCityName } = props;
    // const record = useRecordContext(props);
    defaultProps = {addLabel: true};

    return (
        <span>
            <Stack direction="row" spacing={3}> 
                <TextField sx={{display: "inline-block"} } source="address.ZIPCode" label={labelZipCode} />
                <TextField addLabel source="address.city" label={labelCityName} />
            </Stack>
        </span>
    );
}

// variant version
// outlined
// standard 



// *see TestCityZipCodeField   
const ZipCityCode = ({...props}, {addLabel}) => <TestCityZipCodeField  addLabel='true' label={<ZipCityDualLabel  />} /> ;

// *see Dashboard
export const Dashboard =  () => (
    <>
 {/* <ShowSellerCard /> */}
        
        <PersonalDataCard  variant="outlined" headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
            <UserRecordWithGCC >
                <SimpleShowLayout>
                    <TextField label="Company Name" source="company" />
                    <TextField label="Full Name" source="fullName" />
                    <ZipCityDualTextField label={ <ZipCityDualLabel />} sourceZip="address.ZIPCode" sourceCity="address.city" />
                    <TextField label="Street" source="address.street" />
                    <TextField label="MVA Code" source="orgId.orgNumber" />
                    <hr/>
                    <ZipCityCode />
                    <PersonFullNameTextField  />
                </SimpleShowLayout>
            </UserRecordWithGCC>
        </PersonalDataCard>
        <Card>
        <MyBox>
        <Card>
            <PersonalDataCard  variant="standard" headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
                {/* <ShowSellerCard userResource="data_user"  userId="user_123"  /> */}
            </PersonalDataCard>
        </Card>
        </MyBox>
        {/* <PostShow /> */}
        <MyBox>
        <FixedSellerCard userResource="data_user" userId="user_123" />
        </MyBox>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
    </>
);