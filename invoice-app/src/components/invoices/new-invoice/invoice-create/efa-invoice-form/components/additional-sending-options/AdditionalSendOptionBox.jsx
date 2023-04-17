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
import SendEhfCheckbox  from "./subcomponents/SendEhfCheckbox";
import OptionSendItem from "./subcomponents/OptionSendItem";
import FocusTrap from "@mui/base/FocusTrap";
import { Input, Stack, SvgIcon, Typography} from "@mui/joy";
import EhfDetailsTrapModal from "./subcomponents/EhfDetailsTrapModal";
import SimpleAccordion from "../../../components/EfaOptionAccordion";
import EhfBuyerTextInput from "../../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/component/subcomponent/EhfBuyerTextInput";
import EhfUserTextInput from "../../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/component/subcomponent/EhfUserTextInput";
import IssuedTextInput from "../../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/component/IssuedTextInput";
import { Grid } from "@mui/material";
import IssuerEhfInput from "./subcomponents/IssuerEhfInput";
import BuyerEhfInput from "./subcomponents/BuyerEhfInput";



export default function AdditionalSendOptionBox() {
    const [status, setStatus] = React.useState({
        postmail: false,
        inv_email: false,
        ehf: false
    });
    console.log("status", status);
    return (
        <List sx={{ p: 0, border: 'none' }}  >
            <ListItem   sx={{ my: 0, borderRadius: "sm", alignItems: "flex-end" }} >
                <OptionSendItem  cssIcon={{ ml: "auto", mb: -0.5, pb: 0, alignItems: "flex-end" }}
                    label="Wysłać pocztą" checked={status.postmail}  
                    onChange={(event) => setStatus({ ...status, postmail: event.target.checked })  }
                    defaultIcon={<PictureInPictureAltOutlinedIcon />}  iconChecked={<MarkunreadMailboxOutlinedIcon />} 
                />
            </ListItem>
            <ListItem sx={{ borderRadius: "sm" }}>
                <OptionSendItem  cssIcon={{ ml: "auto", mb: 0, pb: 0, mt: -0.5 }}
                    label="Wysłać na adres email" checked={status.inv_email}
                    onChange={ (event) => setStatus({ ...status, inv_email: event.target.checked }) }
                    defaultIcon={ <MailOutlineIcon /> }  iconChecked={<ForwardToInboxOutlinedIcon />} 
                />
            </ListItem>
            <ListItem sx={{ borderRadius: "sm",  alignItems: "flex-start", display: 'flex', flexDirection: 'column', pb: 0, mb: status.ehf ? -2 : "" }}>
                <OptionSendItem  cssIcon={{    pl: 'auto' ,   mt: -1, pr: 0.5 }}
                    // label={ status.ehf ? <Stack>EHF Faktura <input value="192"/> </Stack> : "EHF Faktura"} 
                    label="EHF Faktura" 
                    checked={status.ehf}
                    onChange={ (event) =>  setStatus({ ...status, ehf: event.target.checked }) }
                    defaultIcon={ <Box   sx={{   transform: "rotate(90deg)",   }}><AnalyticsOutlinedIcon /></Box>}  iconChecked={<Box   sx={{   transform: "rotate(90deg)",   }}><AddchartOutlinedIcon /></Box>} 
                    />
            {/* <FocusTrap open={status.ehf} disableRestoreFocus disableAutoFocus> */}
            </ListItem>   
            <li style={{ width: '100%'}}>
                {(status.ehf) && (
                    <> 
                    <Stack spacing={1} sx={{ p: 1, mt: 1,   }}>
                    <Stack       spacing={0.5} direction="row" sx={{ ml: 'auto'    }}>
                    <Typography level="body2" sx={{ textTransform: 'uppercase', lineHeight: 1.8, mb: -0.5, 
                    letterSpacing: '-0.2px', 
                    fontFamily: 'monospace'
                    }}><label>Numer zamówienia:</label></Typography>
                    <Input size="xs" sx={{ px: 0.5, maxWidth: "150px"}} placeholder="123456789" variant="standard" />
                        </Stack>
                        <IssuerEhfInput />
                        <BuyerEhfInput />
                        {/* <EhfBuyerTextInput />
                        <EhfUserTextInput /> 
                    <IssuedTextInput />  */}
                    </Stack>
                    </>
                )}
            </li>
            {/* </FocusTrap> */}
            {/* <ListItem sx={{ borderRadius: "sm", alignItems: "flex-start" , mt: -1, display: 'flex-inline'   }}    > */}
            {/* <ListItem sx={{ borderRadius: "sm",  alignItems: "flex-start" }}   >
                </ListItem>    */}
         
        </List>
    );
}
