import * as React from "react";
import JoyCard from "@mui/joy/Card";
import { HeaderPersonalShow } from "./show/subcomponents/HeaderPersonalShow";
import { AddressContent } from "./show/subcomponents/AddressContent";
import { ContactContent } from "./show/subcomponents/ContactContent";
// import { ModalTitle } from "../../../invoice-confirm-modal/components/subcomponents/ModalTitle";
import { TitleCardShow } from "./show/subcomponents/TitleCardShow";
import { Divider } from "@mui/joy";
import { blue, blueGrey } from '@mui/material/colors';
import { useTranslate } from "react-admin";
import { useMediaQuery } from "@mui/material";
import { MQ_isMedium } from "../components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";






// <PersonalCardShow bgcolor="inherit" title={translate('myroot.form.label.header.seller')} icon={<SellerIcon />} 
// dataPersonal={db_seller}
// />

export default function SellerCardShow({dataPersonal, bgcolor, icon, title}) {
    const translate = useTranslate();
    
    const isMedium = useMediaQuery(`${MQ_isMedium}`);
  return (
    <>
        <JoyCard
            variant="outlined"
            sx={{ 
                display: 'flex',
                // alignSelf: 'stretch',
                // justifySelf: "stretch",
                bgcolor: bgcolor ? bgcolor : '#fff',
                boxShadow: 'none', // color: 'text.level2',
                // border: 0.5, 
                // borderColor: blueGrey[300],
                flex: '1 1 auto',
                pt: 0, pb: 0, px: 0,   borderTopLeftRadius: '40px' }}
        >
            <TitleCardShow title={translate('myroot.form.label.header.seller')} icon={icon} />
            <Divider   sx={{ p: 0.12, mt: 0, mx: 0, bgcolor: blueGrey[300]}} />
            <HeaderPersonalShow 
                cssIcon={{      //'--mui-palette-primary-solidDisabledColor': 'neutral.200',
                                //'--mui-palette-primary-solidDisabledBg': 'red',
                                borderColor: 'neutral.500', bgcolor: 'neutral.50', color: 'neutral.600'
                }}
                icon={icon}
                title={title}
                mvaNo={dataPersonal.mva}
                companyName={dataPersonal.companyName}
                />
            { !isMedium && <>
            <AddressContent capitionLabel={translate('myroot.form.label.header.address')}
            prefixFirstRow="ul. "
            firstRow={dataPersonal.street} secondRow={`${dataPersonal.city}, ${dataPersonal.zipCode}`} />
            <AddressContent capitionLabel={translate('myroot.form.label.header.contact')} 
                            firstRow={"Aleksander Mariański"} 
                            thirdRow={`${dataPersonal.email}`} 
                            secondRow={`${dataPersonal.phoneNumber}`} />
                            </>
                        }
            {/* <AddressContent capitionLabel="Kontakt" streetAddress={dataPersonal.email} addressCity={dataPersonal.phoneNumber}   /> */}
                <Divider   sx={{ p: 0.1, mt: 1, mx: 0 }} />
            <ContactContent contactNumber={"NUMER RACHUNKU:"} emailAdress={" 123"} />
        </JoyCard>
    </>
    );
    }

