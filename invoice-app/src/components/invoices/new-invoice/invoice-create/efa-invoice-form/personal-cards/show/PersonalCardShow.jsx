import * as React from "react";
import JoyCard from "@mui/joy/Card";
import { HeaderPersonalShow } from "./subcomponents/HeaderPersonalShow";
import { AddressContent } from "./subcomponents/AddressContent";
import { ContactContent } from "./subcomponents/ContactContent";
// import { ModalTitle } from "../../../invoice-confirm-modal/components/subcomponents/ModalTitle";
import { TitleCardShow } from "./subcomponents/TitleCardShow";
import { Divider } from "@mui/joy";
import { blue, blueGrey } from '@mui/material/colors';
import { useTranslate } from "react-admin";

export default function PersonalCardShow({dataPersonal, bgcolor, icon, title}) {
    const translate = useTranslate();
  return (
    <>
        <JoyCard
            variant="outlined"
            sx={{ 
                bgcolor: bgcolor ? bgcolor : '#fff',
                // width: 320,
                pt: 0, pb: 0, px: 0,   border: 0, borderTopLeftRadius: '40px' }}
        >
            <TitleCardShow title={title} icon={icon} />
            <Divider   sx={{ p: 0.12, mt: 0, mx: 0, bgcolor: blueGrey[300]}} />
            <HeaderPersonalShow 
                icon={icon}
                title={title}
                mvaNo={dataPersonal.mva}
                companyName={dataPersonal.companyName}
                />
            <AddressContent capitionLabel={translate('myroot.form.label.header.address')}
                            prefixFirstRow="ul. "
                            firstRow={dataPersonal.street} secondRow={`${dataPersonal.city}, ${dataPersonal.zipCode}`} />
            <AddressContent capitionLabel={translate('myroot.form.label.header.contact')} 
                            firstRow={"Aleksander Mariański"} 
                            thirdRow={`${dataPersonal.email}`} 
                            secondRow={`${dataPersonal.phoneNumber}`} />
            {/* <AddressContent capitionLabel="Kontakt" streetAddress={dataPersonal.email} addressCity={dataPersonal.phoneNumber}   /> */}
                <Divider   sx={{ p: 0.1, mt: 1, mx: 0 }} />
            <ContactContent contactNumber={"NUMER RACHUNKU"} emailAdress={"56056566046508635088"} />
        </JoyCard>
    </>
    );
    }
