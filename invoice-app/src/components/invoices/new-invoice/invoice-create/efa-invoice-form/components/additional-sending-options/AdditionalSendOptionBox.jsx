import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import PictureInPictureAltOutlinedIcon from "@mui/icons-material/PictureInPictureAltOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SendEhfCheckbox from "./subcomponents/invoice-ehf-item/components/olx-files-example/SendEhfCheckbox";
import OptionSendItem from "./subcomponents/OptionSendItem";
import { Input, Stack, SvgIcon, Typography } from "@mui/joy";
// import EhfDetailsTrapModal from "./subcomponents/invoice-ehf-item/components/olx-files-example/EhfDetailsTrapModal";
// import SimpleAccordion from "../../../components/EfaOptionAccordion";
// import EhfBuyerTextInput from "../../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/component/subcomponent/EhfBuyerTextInput";
// import EhfUserTextInput from "../../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/component/subcomponent/EhfUserTextInput";
// import IssuedTextInput from "../../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/component/IssuedTextInput";
import { Grid } from "@mui/material";
import IssuerEhfInput from "./subcomponents/invoice-ehf-item/components/IssuerEhfInput";
import BuyerEhfInput from "./subcomponents/invoice-ehf-item/components/BuyerEhfInput";
import EhfInvoiceInputGroup from "./subcomponents/invoice-ehf-item/EhfInvoiceInputGroup";
import { useFormContext, useWatch } from "react-hook-form";

export default function AdditionalSendOptionBox({
    control,
    register,
    setValue,
}) {
    const [status, setStatus] = React.useState({
        postmail: false,
        inv_email: false,
        ehf: false,
    });

    return (
        <List sx={{ p: 0, border: "none" }}>
            <ListItem
                sx={{ my: 0, borderRadius: "sm", alignItems: "flex-end" }}
            >
                <OptionSendItem
                    name="postmail" // BUG -> //toDo sprawdzić jak to poprawnie zapisać
                    cssIcon={{
                        ml: "auto",
                        mb: -0.5,
                        pb: 0,
                        alignItems: "flex-end",
                    }}
                    label="resources.e_faktury.create.label.checkbox_postmail"
                    checked={status.postmail}
                    onChange={(event) => {
                        setStatus((prevStatus) => ({
                            ...prevStatus,
                            postmail: event.target.checked,
                        }));
                        if (event.target.checked) {
                            setValue("postmail", 1);
                        } else {
                            setValue("postmail", 0);
                        }
                    }}
                    defaultIcon={<PictureInPictureAltOutlinedIcon />}
                    iconChecked={<MarkunreadMailboxOutlinedIcon />}
                />
            </ListItem>
            <ListItem sx={{ borderRadius: "sm" }}>
                <OptionSendItem
                    cssIcon={{ ml: "auto", mb: 0, pb: 0, mt: -0.5 }}
                    name="inv_email" // BUG -> //toDo sprawdzić jak to poprawnie zapisać
                    label="resources.e_faktury.create.label.checkbox_inv_email"
                    checked={status.inv_email}
                    onChange={(event) => {
                        setStatus((prevStatus) => ({
                            ...prevStatus,
                            inv_email: event.target.checked,
                        }));
                        if (event.target.checked) {
                            setValue("inv_email", 1);
                        } else {
                            setValue("inv_email", 0);
                        }
                    }}
                    defaultIcon={<MailOutlineIcon />}
                    iconChecked={<ForwardToInboxOutlinedIcon />}
                />
            </ListItem>
            <ListItem
                sx={{
                    borderRadius: "sm",
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    pb: 0,
                    mb: status.ehf ? -2 : "",
                }}
            >
                <OptionSendItem
                    cssIcon={{ pl: "auto", mt: -1, pr: 0.5 }}
                    name="ehf" // BUG -> //toDo sprawdzić jak to poprawnie zapisać
                    label="resources.e_faktury.create.label.checkbox_ehf"
                    // label={ status.ehf ? <Stack>EHF Faktura <input value="192"/> </Stack> : "EHF Faktura"}
                    checked={status.ehf}
                    onChange={(event) => {
                        setStatus((prevStatus) => ({
                            ...prevStatus,
                            ehf: event.target.checked,
                        }));
                        if (event.target.checked) {
                            setValue("ehf", 1);
                        } else {
                            setValue("ehf", 0);
                        }
                    }}
                    defaultIcon={
                        <Box sx={{ transform: "rotate(90deg)" }}>
                            <AnalyticsOutlinedIcon />
                        </Box>
                    }
                    iconChecked={
                        <Box sx={{ transform: "rotate(90deg)" }}>
                            <AddchartOutlinedIcon />
                        </Box>
                    }
                />
                {/* <FocusTrap open={status.ehf} disableRestoreFocus disableAutoFocus> */}
            </ListItem>
            {/* <li style={{ width: '100%'}}> */}
            <li>
                {status.ehf && (
                    <>
                        <EhfInvoiceInputGroup />
                        {/* <Stack spacing={1} sx={{ p: 1, mt: 1,   }}>
                    {/* </Stack> */}
                    </>
                )}
            </li>
        </List>
    );
}
