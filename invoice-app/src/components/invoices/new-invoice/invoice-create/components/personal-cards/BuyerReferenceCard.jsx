import * as React from "react";
import JoyCard from "@mui/joy/Card";
import { SubHeaderBuyer } from "./components/subcomponents copy/SubHeaderBuyer";
import { AddressDetailsBuyer } from "./components/subcomponents copy/AddressDetailsBuyer";
import { ContactDetailsBuyer  } from "./components/subcomponents copy/ContactDetailsBuyer";
// import { ModalTitle } from "../../../invoice-confirm-modal/components/subcomponents/ModalTitle";
import { TitleCardShow } from "./components/subcomponents copy/TitleCardShow";
import { Box, Divider } from "@mui/joy";
import { blue, blueGrey } from '@mui/material/colors';
import { useRecordContext, useTranslate, } from "react-admin";
// import ClientReferenceAutocompleteInput from "../../subcomponents/ClientReferenceAutocompleteInput";
import { useFormContext } from "react-hook-form";
import EfaBuyerAutoInput from "../../EfaBuyerAutoInput";
import BuyerIcon from '@mui/icons-material/ShoppingCart';
import { ContactShow } from "./ShowContentBuyer";
import { autocompleteClasses } from "@mui/material";





// <PersonalCardShow bgcolor="inherit" title={translate('myroot.form.label.header.seller')} icon={<SellerIcon />} 
// dataPersonal={db_seller}
// />

export default function BuyerReferenceCard({children, dataPersonal, bgcolor, icon, title}) {
    const translate = useTranslate();
    const [valueBuyerId, setValueBuyerId] = React.useState("");
    return (
        <> 
            <JoyCard
                variant="outlined"
                sx={{ 
                    minHeight: '300px',
                    bgcolor: bgcolor ? bgcolor : '#fff',
                    // boxShadow: 'none',
                    border: 0,
                    borderColor: blueGrey[300],
                    flex: '1 1 auto',
                    pt: 0, pb: 0, px: 0,   borderTopLeftRadius: '40px' }}
            >
                <TitleCardShow title={translate('myroot.form.label.header.buyer')} />
                <Divider   sx={{ p: 0.12, mt: 0, mx: 0, bgcolor: blueGrey[300]}} />
                <EfaBuyerAutoInput icon={<BuyerIcon/>} valueBuyerId={valueBuyerId} setValueBuyerId={setValueBuyerId} />
                <ContactShow resource="buyersEfaktury" id={valueBuyerId} >
                    <SubHeaderBuyer />
                    <AddressDetailsBuyer prefixFirstRow="ul. " capitionLabel={translate('myroot.form.label.header.address')}   />
                    <ContactDetailsBuyer  capitionLabel={translate('myroot.form.label.header.contact')} />
                </ContactShow>
                {/* <AddressContent capitionLabel="Kontakt" streetAddress={dataPersonal.email} addressCity={dataPersonal.phoneNumber}   /> */}
                {/* <ContactContent contactNumber={"NUMER RACHUNKU"} emailAdress={"56056566046508635088"} /> */}
            </JoyCard>
        </>
    );
    }

